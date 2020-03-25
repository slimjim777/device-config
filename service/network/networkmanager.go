/*
 * Copyright (C) 2020 Canonical Ltd
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

package network

import (
	"fmt"
	"github.com/CanonicalLtd/device-config/service/dbus"
	"strings"
)

// NMService is the interface for the netplan service
type NMService interface {
	Apply() error
	Current() *NetplanYAML
	Store(ethernet Ethernet) error
}

// NetManager implements actions for managing network manager
type NetManager struct {
	deviceNetplan *NetplanYAML
	interfaces    map[string]string
	dBus          dbus.Service
}

// NewNetworkManager creates a network manager service
func NewNetworkManager(dBus dbus.Service) *NetManager {
	deviceNetplan := &NetplanYAML{Network: Network{Version: 2, Renderer: "networkmanagerd", Ethernets: map[string]Ethernet{}}}
	devices, err := dBus.NMDevices()
	if err != nil {
		devices = map[string]string{}
	}
	return &NetManager{dBus: dBus, interfaces: devices, deviceNetplan: deviceNetplan}
}

// Current returns the current network manager settings
func (np *NetManager) Current() *NetplanYAML {
	// Get the config details for the active connections
	interfaces, err := Interfaces()
	if err != nil {
		fmt.Println("Error fetching current settings:", err)
		return np.deviceNetplan
	}

	// Map the NM details to our internal format
	for _, iface := range interfaces {
		p := np.interfaces[iface.Name]
		ifaceConfig := np.dBus.NMInterfaceConfig(p)

		eth := Ethernet{
			Use:         ifaceConfig["use"] == "true",
			Name:        iface.Name,
			DHCP4:       ifaceConfig["dhcp4"],
			Addresses:   strings.Split(ifaceConfig["addresses"], ","),
			NameServers: map[string][]string{"addresses": strings.Split(ifaceConfig["nameservers"], ",")},
			Gateway4:    ifaceConfig["gateway"],
		}
		np.deviceNetplan.Network.Ethernets[iface.Name] = eth
	}
	return np.deviceNetplan
}

// Apply applies the network manager configuration using dbus
func (np *NetManager) Apply() error {
	return fmt.Errorf("NM Apply: not implemented yet")
}

// Store stores the updated network settings
func (np *NetManager) Store(ethernet Ethernet) error {
	return fmt.Errorf("NM Store: not implemented yet")
}
