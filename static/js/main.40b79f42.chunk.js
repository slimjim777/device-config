(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{133:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(33),i=a.n(r),l=(a(41),a(2)),c=a(3),o=a(5),u=a(4),m=a(6),d={de:{address:"Adresse","address-help":"IP adresse des Ger\xe4tes",apply:"Anwenden","apply-desc":"Die definierte Netzwerkkonfiguration im System anwenden. Dies kann dazu f\xfchren da\xdf dieses Konfigurationsinterface nicht mehr erreichbar ist.",copyright:"\xa9 2020 Canonical Ltd. Ubuntu und Canonical sind registrierte Handelsmarken von Canonical Ltd.",dhcp:"DHCP",dns:"Name servers (DNS)","dns-help":"Kommaseparierte Liste von IP Adressen",en:"Englisch",de:"Deutsch",ftp:"FTP",gateway:"Gateway","get-started":"Beginnen",http:"HTTP",https:"HTTPS",interface:"Netzwerkkarte","interface-updated":"Die Netzwerkkarte wurde erfolgreich aktualisiert.",legal:"Rechtliche Informationen",login:"Anmelden","login-description":"Anmelden um das Ger\xe4t zu konfigurieren.",logout:"Abmelden",macaddress:"MAC Adresse",manual:"Manuell",mask:"Subnetz Maske",method:"Methode",network:"Netzwerk","network-config":"Netzwerk Konfiguration",ntp:"Systemuhr synchronisieren ",privacy:"Datenschutz",proxy:"Proxy","proxy-config":"Proxy Konfiguration","proxy-help":"IP Adresse und Port","proxy-updated":"Anfrage zur Aktualisierung der Proxy Einstellungen gesendet","report-a-bug":"Fehler auf der Seite melden",save:"Speichern","select-interface":"Ger\xe4t ausw\xe4hlen","service-status":"Dienst Status",services:"Dienste","site-description1":"Netzwekkarte konfigurieren","site-description2":"Netzwerk Proxy Einstellungen konfigurieren","site-description3":"Zeitzone des Ger\xe4tes einstellen","site-description4":"Zeitserver konfigurieren",submit:"Absenden",subtitle:"Konfiguration f\xfcr Ubuntu Core Ger\xe4te.",sv:"Schwedisch",time:"Zeit",timezone:"Zeitzone","time-config":"Zeiteinstellungen konfigurieren","time-updated":"Systemzeit Konfiguration wurde erfolgreich aktualisiert",title:"Ubuntu Core Konfiguration",use:"Ger\xe4t benutzen"},en:{address:"Address","address-help":"IP address of the interface",apply:"Apply","apply-desc":"Apply the current network configuration to the system. This may cause you to lose the connection to this configuration interface",copyright:"\xa9 2020 Canonical Ltd. Ubuntu and Canonical are registered trademarks of Canonical Ltd.",dhcp:"DHCP",disk:"Disk",dns:"Name servers (DNS)","dns-help":"Comma-separated list of IP addresses",de:"German",en:"English",ftp:"FTP",gateway:"Gateway","get-started":"Get Started",http:"HTTP",https:"HTTPS",interface:"Interface","interface-updated":"The interface was updated successfully",legal:"Legal information",login:"Login","login-description":"Login to configure the device.",logout:"Logout",macaddress:"MAC Address",manual:"Manual",mask:"Subnet mask","mask-help":"The network prefix for address e.g. 24 (leave blank for default mask)",memory:"Memory",method:"Method",network:"Network","network-config":"Network Configuration",ntp:"Synchronize system clock ",password:"Password","password-help":"Password to join the WiFi network",privacy:"Privacy",processor:"Processor",proxy:"Proxy","proxy-config":"Proxy Configuration","proxy-help":"IP address and port","proxy-updated":"Submitted request to update proxy settings","report-a-bug":"Report a bug on this site",save:"Save","select-interface":"Select an interface","service-status":"Service Status",services:"Services","show-wifi":"Is a WiFi interface","site-description1":"Configure the network interfaces","site-description2":"Configure the network proxy settings","site-description3":"Set the device time zone","site-description4":"Configure network time server",snaps:"Snaps","snaps-config":"Snap Configuration","snap-settings":"Snap Settings",ssid:"Network name (SSID)","ssid-help":"The name (SSID) of the wireless network to join",submit:"Submit",subtitle:"Configuration service for Ubuntu Core devices.",sv:"Swedish",time:"Time",timezone:"Time zone","time-config":"Time Configuration","time-updated":"Time configuration was updated successfully",title:"Ubuntu Core Configuration",update:"Update",use:"Use the interface","view-settings":"View settings"}},h=a(12),p=a.n(h),f=a(8),g=a.n(f);var v={baseUrl:window.location.protocol+"//"+window.location.hostname+":"+window.location.port+"/v1/",LoadingImage:"/static/images/ajax-loader.gif",languages:["de","en"]},E={configGet:function(e,t){return g.a.get(v.baseUrl+"config")},loginRequest:function(e,t){return g.a.post(v.baseUrl+"login",e)},networkGet:function(){return g.a.get(v.baseUrl+"network")},networkUpdate:function(e){return g.a.post(v.baseUrl+"network",e)},networkApply:function(){return g.a.post(v.baseUrl+"network/apply")},proxyGet:function(){return g.a.get(v.baseUrl+"proxy")},proxyUpdate:function(e){return g.a.post(v.baseUrl+"proxy",e)},timeGet:function(){return g.a.get(v.baseUrl+"time")},timeUpdate:function(e){return g.a.post(v.baseUrl+"time",{ntp:e.ntp,time:e.time,timezone:e.timezone})},servicesGet:function(){return g.a.get(v.baseUrl+"services")},systemResourcesGet:function(){return g.a.get(v.baseUrl+"system")},snapsGet:function(){return g.a.get(v.baseUrl+"snaps")},snapsSettingsUpdate:function(e,t){return g.a.put(v.baseUrl+"snaps/"+e,t)}};function b(e){var t=S();return d[t][e]||e}function k(){var e=p.a.get("username"),t=p.a.get("sessionID");return!(!e||!t)}function y(e){var t=b(e.code);return e.message&&(t+=": "+e.message),t}function S(){return sessionStorage.getItem("language")||"en"}var w=["network","time"],C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleLanguageChange=function(e){a.props.changeLanguage(e.target.value)},a.state={},a.props.config.snapControl&&w.unshift("services","snaps","proxy"),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"link",value:function(e){return this.props.sectionId?"/"+this.props.section+"/"+this.props.sectionId+"/"+e:"/"+e}},{key:"renderLoginOut",value:function(){return k()?s.a.createElement("li",{key:"logout",className:"p-navigation__link",role:"menuitem"},s.a.createElement("a",{href:"/logout"},b("logout"))):s.a.createElement("li",{key:"login",className:"p-navigation__link",role:"menuitem"},s.a.createElement("a",{href:"/login"},b("login")))}},{key:"renderLanguage",value:function(){var e=S(),t=v.languages;return s.a.createElement("li",{className:"p-navigation__link"},s.a.createElement("form",{id:"lang-form"},s.a.createElement("select",{onChange:this.handleLanguageChange},t.map((function(t){var a=t===e?"selected":"";return s.a.createElement("option",{key:t,value:t,selected:a},b(t))})))))}},{key:"render",value:function(){var e=this;return s.a.createElement("header",{id:"navigation",class:"p-navigation header-slim"},s.a.createElement("div",{className:"p-navigation__banner row"},s.a.createElement("div",{className:"p-navigation__logo"},s.a.createElement("div",{className:"u-vertically-center"},s.a.createElement("a",{href:"/",className:"p-navigation__link"},s.a.createElement("img",{src:"/static/images/logo.png",alt:"ubuntu"})))),s.a.createElement("nav",{className:"p-navigation__nav"},s.a.createElement("span",{className:"u-off-screen"},s.a.createElement("a",{href:"#navigation"},"Jump to site")),s.a.createElement("ul",{className:"p-navigation__links",role:"menu"},w.map((function(t){var a="";return e.props.section!==t&&e.props.subsection!==t||(a=" active"),s.a.createElement("li",{key:t,className:"p-navigation__link"+a,role:"menuitem"},s.a.createElement("a",{href:e.link(t)},b(t)))})),this.renderLoginOut(),this.renderLanguage()))))}}]),t}(n.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(C,{section:this.props.section,subsection:this.props.subsection,sectionId:this.props.sectionId,config:this.props.config,changeLanguage:this.props.changeLanguage}),s.a.createElement("section",{className:"p-strip--image is-dark header"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-5 title"},s.a.createElement("h1",null,b("title")),s.a.createElement("p",null,b("subtitle"))))))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={token:e.token||{}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderLogin",value:function(){if(!k())return s.a.createElement("a",{className:"p-button--brand",href:"/login",alt:""},b("login"))}},{key:"render",value:function(){return s.a.createElement("div",{className:"row"},s.a.createElement("section",{className:"row"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"first"},s.a.createElement("h2",null,b("get-started")),s.a.createElement("ul",{className:"p-list"},s.a.createElement("li",{className:"p-list__item is-ticked"},b("site-description1")),s.a.createElement("li",{className:"p-list__item is-ticked"},b("site-description2")),s.a.createElement("li",{className:"p-list__item is-ticked"},b("site-description3")),s.a.createElement("li",{className:"p-list__item is-ticked"},b("site-description4"))),this.renderLogin()))))}}]),t}(n.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"footer"},s.a.createElement("div",{className:"row footer"},s.a.createElement("p",null,b("copyright")),s.a.createElement("nav",{className:"p-footer__nav",role:"navigation"},s.a.createElement("ul",{className:"p-footer__links"},s.a.createElement("li",{className:"p-footer__item"},s.a.createElement("a",{className:"p-footer__link",href:"https://ubuntu.com/legal"},b("legal"))),s.a.createElement("li",{className:"p-footer__item"},s.a.createElement("a",{className:"p-footer__link",href:"https://ubuntu.com/legal/data-privacy"},b("privacy"))),s.a.createElement("li",{className:"p-footer__item"},s.a.createElement("a",{className:"p-footer__link",href:"https://github.com/CanonicalLtd/device-config/issues/new"},b("report-a-bug")))))))}}]),t}(n.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){if(this.props.message){var e="p-notification--";return this.props.type?e+=this.props.type:e+="negative",s.a.createElement("div",{className:e},s.a.createElement("p",{className:"p-notification__response"},this.props.message))}return s.a.createElement("span",null)}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleMacAddressChange=function(e){e.preventDefault(),a.setState({macAddress:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.login()},a.state={macAddress:"",error:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"login",value:function(){var e=this;E.loginRequest({macAddress:this.state.macAddress}).then((function(t){if(!t.data.code)return a=t.data.username,n=t.data.sessionId,p.a.set("username",a),p.a.set("sessionID",n),void(window.location.href="/");var a,n;e.setState({error:b(t.data.code)+": "+t.data.message})})).catch((function(t){console.log(t.response),e.setState({error:b(t.response.data.code)+": "+t.response.data.message})}))}},{key:"renderError",value:function(){if(this.state.error)return s.a.createElement(j,{message:this.state.error})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"row"},s.a.createElement("h2",null,b("login")),s.a.createElement("p",null,b("login-description"))),this.renderError(),s.a.createElement("form",null,s.a.createElement("label",{for:"macaddress"},b("macaddress"),":"),s.a.createElement("input",{name:"macaddress",type:"text",value:this.state.macAddress,onChange:this.handleMacAddressChange}),s.a.createElement("button",{className:"p-button--positive",onClick:this.handleSubmit},b("submit"))))}}]),t}(n.Component),D=a(35),T=a.n(D),I=["dhcp","manual"],U=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getNetworkConfig=function(){E.networkGet().then((function(e){var t=e.data.interfaces.filter((function(e){return!a.props.config.hideInterfaces.includes(e.interface)}));a.setState({interfaces:t,error:""}),!a.state.selected&&e.data.interfaces.length>0&&(a.getInterface(t[0].interface),a.setState({selected:t[0].interface}))})).catch((function(e){a.setState({error:y(e.response.data)})}))},a.handleSelectTab=function(e){e.preventDefault();var t=e.target.getAttribute("data-key");a.getInterface(t),a.setState({selected:t,error:"",message:""})},a.handleUseChange=function(e){e.preventDefault();var t=a.state.interface;t.use=!t.use,a.setState({interface:t})},a.handleWifiUseChange=function(e){e.preventDefault();var t=a.state.interface;t.isWifi=!t.isWifi,a.setState({interface:t})},a.handleWifiSSIDChange=function(e){e.preventDefault();var t=a.state.interface;t.ssid=e.target.value,a.setState({interface:t})},a.handleWifiPasswordChange=function(e){e.preventDefault();var t=a.state.interface;t.password=e.target.value,a.setState({interface:t})},a.handleMethodChange=function(e){e.preventDefault();var t=a.state.interface;t.method=e.target.value,a.setState({interface:t})},a.handleGatewayChange=function(e){e.preventDefault();var t=a.state.interface;t.gateway=e.target.value,a.setState({interface:t})},a.handleAddressChange=function(e){e.preventDefault();var t=a.state.interface;t.address=e.target.value,a.setState({interface:t})},a.handleMaskChange=function(e){e.preventDefault();var t=a.state.interface;t.mask=e.target.value,a.setState({interface:t})},a.handleDNSChange=function(e){e.preventDefault();var t=a.state.interface;t.nameServers=e.target.value.split(","),a.setState({interface:t})},a.handleSave=function(e){e.preventDefault(),E.networkUpdate(a.state.interface).then((function(e){a.getNetworkConfig(),a.setState({message:b("interface-updated"),error:""})})).catch((function(e){a.setState({error:y(e.response.data),message:""})}))},a.handleApply=function(e){e.preventDefault(),E.networkApply().then((function(e){a.getNetworkConfig(),a.setState({message:b("interface-updated"),error:""})})).catch((function(e){a.setState({error:y(e.response.data),message:""})}))},a.state={selected:null,interfaces:[],interface:{},error:"",message:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getNetworkConfig()}},{key:"getInterface",value:function(e){var t=this.state.interfaces.filter((function(t){return t.interface===e}));t.length>0&&this.setState({interface:t[0]})}},{key:"renderUse",value:function(){return this.state.interface.use?s.a.createElement("div",null,s.a.createElement("a",{href:"#use",className:"p-button--base has-icon",onClick:this.handleUseChange},s.a.createElement("img",{src:"/static/images/checkbox_checked_16.png",alt:"checked"})),s.a.createElement("span",null,b("use"))):s.a.createElement("div",null,s.a.createElement("a",{href:"#use",className:"p-button--base has-icon",onClick:this.handleUseChange},s.a.createElement("img",{src:"/static/images/checkbox_unchecked_16.png",alt:"unchecked"})),s.a.createElement("span",null,b("use")))}},{key:"renderWifi",value:function(){return this.state.interface.isWifi?s.a.createElement("div",null,s.a.createElement("a",{href:"#wifi",className:"p-button--base has-icon",onClick:this.handleWifiUseChange},s.a.createElement("img",{src:"/static/images/checkbox_checked_16.png",alt:"unchecked"})),s.a.createElement("span",null,b("show-wifi")),s.a.createElement("label",{htmlFor:"ssid"},b("ssid"),":"),s.a.createElement("input",{name:"ssid",type:"text",value:this.state.interface.ssid,placeholder:b("ssid-help"),onChange:this.handleWifiSSIDChange}),s.a.createElement("label",{htmlFor:"password"},b("password"),":"),s.a.createElement("input",{name:"password",type:"password",value:this.state.interface.password,placeholder:b("password-help"),onChange:this.handleWifiPasswordChange})):s.a.createElement("div",null,s.a.createElement("a",{href:"#wifi",className:"p-button--base has-icon",onClick:this.handleWifiUseChange},s.a.createElement("img",{src:"/static/images/checkbox_unchecked_16.png",alt:"checked"})),s.a.createElement("span",null,b("show-wifi")))}},{key:"renderMessage",value:function(){if(this.state.message)return s.a.createElement(j,{type:"positive",message:this.state.message})}},{key:"renderError",value:function(){if(this.state.error)return s.a.createElement(j,{message:this.state.error})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h2",null,b("network-config")),s.a.createElement("section",{className:"row"},s.a.createElement("div",null,s.a.createElement("nav",{className:"p-tabs"},s.a.createElement("ul",{className:"p-tabs__list",role:"tablist"},this.state.interfaces.map((function(t){var a="false";return e.state.selected===t.interface&&(a="true"),s.a.createElement("li",{className:"p-tabs__item",role:"presentation"},s.a.createElement("a",{href:"#"+t.interface,"data-key":t.interface,onClick:e.handleSelectTab,class:"p-tabs__link",tabindex:"0",role:"tab","aria-controls":"section1","aria-selected":a},t.interface))}))))),s.a.createElement("div",null,this.renderMessage(),this.renderError(),this.state.interface.interface?s.a.createElement("form",null,this.renderUse(),s.a.createElement("fieldset",{disabled:!this.state.interface.use},s.a.createElement("h3",null,b("interface")," ",this.state.interface.interface),this.renderWifi(),s.a.createElement("label",{htmlFor:"method"},b("method"),":"),s.a.createElement("select",{value:this.state.interface.method,onChange:this.handleMethodChange},s.a.createElement("option",null),I.map((function(e){return s.a.createElement("option",{value:e},b(e))}))),s.a.createElement("label",{htmlFor:"nameServers"},b("dns"),":"),s.a.createElement("input",{name:"nameServers",type:"text",onChange:this.handleDNSChange,value:this.state.interface.nameServers?this.state.interface.nameServers.toString():"",placeholder:b("dns-help")}),s.a.createElement("label",{htmlFor:"address"},b("address"),":"),s.a.createElement("input",{name:"address",type:"text",value:this.state.interface.address,placeholder:b("address-help"),onChange:this.handleAddressChange}),s.a.createElement("label",{htmlFor:"mask"},b("mask"),":"),s.a.createElement("input",{name:"mask",type:"text",value:this.state.interface.mask,onChange:this.handleMaskChange,placeholder:b("mask-help")}),s.a.createElement("label",{for:"gateway"},b("gateway"),":"),s.a.createElement("input",{name:"gateway",type:"text",value:this.state.interface.gateway,onChange:this.handleGatewayChange})),s.a.createElement("button",{onClick:this.handleSave,className:"p-button--positive"},b("save"))):s.a.createElement("h4",null,b("select-interface"))),s.a.createElement("div",{className:"row"},s.a.createElement("p",{className:"col-10"},b("apply-desc")),s.a.createElement("button",{onClick:this.handleApply,className:"p-button--brand col-2"},b("apply")))))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getProxyConfig=function(){E.proxyGet().then((function(e){var t=e.data.proxy;t||(t={}),a.setState({proxy:t,message:""})})).catch((function(e){a.setState({message:y(e.response.data)})}))},a.handleHTTPChange=function(e){e.preventDefault();var t=a.state.proxy;t.http=e.target.value,a.setState({proxy:t})},a.handleHTTPSChange=function(e){e.preventDefault();var t=a.state.proxy;t.https=e.target.value,a.setState({proxy:t})},a.handleFTPChange=function(e){e.preventDefault();var t=a.state.proxy;t.ftp=e.target.value,a.setState({proxy:t})},a.handleSave=function(e){e.preventDefault(),E.proxyUpdate(a.state.proxy).then((function(e){a.setState({message:b("proxy-updated"),error:""})})).catch((function(e){a.setState({error:y(e.response.data),message:""})}))},a.state={proxy:{},error:"",message:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getProxyConfig()}},{key:"renderMessage",value:function(){if(this.state.message)return s.a.createElement(j,{type:"positive",message:this.state.message})}},{key:"renderError",value:function(){if(this.state.error)return s.a.createElement(j,{message:this.state.error})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h2",null,b("proxy-config")),s.a.createElement("section",{className:"row"},this.renderMessage(),this.renderError(),s.a.createElement("form",null,s.a.createElement("fieldset",null,s.a.createElement("label",{htmlFor:"http"},b("http"),":"),s.a.createElement("input",{name:"http",type:"text",value:this.state.proxy.http,onChange:this.handleHTTPChange,placeholder:b("proxy-help")}),s.a.createElement("label",{htmlFor:"https"},b("https"),":"),s.a.createElement("input",{name:"https",type:"text",value:this.state.proxy.https,onChange:this.handleHTTPSChange,placeholder:b("proxy-help")}),s.a.createElement("label",{htmlFor:"ftp"},b("ftp"),":"),s.a.createElement("input",{name:"ftp",type:"text",value:this.state.proxy.ftp,onChange:this.handleFTPChange,placeholder:b("proxy-help")}),s.a.createElement("button",{onClick:this.handleSave,className:"p-button--positive"},b("save"))))))}}]),t}(n.Component),A=a(10),z=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).handleUnchecked=function(e){e.preventDefault(),a.props.onChange(!1)},a.handleChecked=function(e){e.preventDefault(),a.props.onChange(!0)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.checked?s.a.createElement("div",null,s.a.createElement("a",{href:"#select",className:"p-button--base has-icon",onClick:this.handleUnchecked},s.a.createElement("img",{src:"/static/images/checkbox_checked_16.png",alt:"checked"})),s.a.createElement("span",null,b(this.props.label))):s.a.createElement("div",null,s.a.createElement("a",{href:"#select",className:"p-button--base has-icon",onClick:this.handleChecked},s.a.createElement("img",{src:"/static/images/checkbox_unchecked_16.png",alt:"unchecked"})),s.a.createElement("span",null,b(this.props.label)))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getTimeConfig=function(){E.timeGet().then((function(e){a.setState({time:e.data.time,error:""})})).catch((function(e){a.setState({message:y(e.response.data)})}))},a.poll=function(){setTimeout(a.getTimeConfig.bind(Object(A.a)(a)),1e3)},a.handleTimezoneChange=function(e){e.preventDefault(),a.setField("timezone",e.target.value)},a.handleNTPChange=function(e){a.setField("ntp",e)},a.handleTimeChange=function(e){e.preventDefault(),a.setField("time",e.target.value)},a.handleSave=function(e){e.preventDefault(),E.timeUpdate(a.state.time).then((function(e){a.getTimeConfig(),a.setState({message:b("time-updated"),error:""})})).catch((function(e){a.setState({error:y(e.response.data),message:""})}))},a.state={time:{timezones:[]},error:"",message:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getTimeConfig()}},{key:"setField",value:function(e,t){var a=this.state.time;a[e]=t,this.setState({time:a})}},{key:"renderMessage",value:function(){if(this.state.message)return s.a.createElement(j,{type:"positive",message:this.state.message})}},{key:"renderError",value:function(){if(this.state.error)return s.a.createElement(j,{message:this.state.error})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h2",null,b("time-config")),s.a.createElement("section",{className:"row"},this.renderMessage(),this.renderError(),s.a.createElement("form",null,s.a.createElement("fieldset",null,s.a.createElement("label",{htmlFor:"timezone"},b("timezone"),":"),s.a.createElement("select",{value:this.state.time.timezone,onChange:this.handleTimezoneChange,placeholder:b("timezone-help")},s.a.createElement("option",null),this.state.time.timezones.map((function(e){return s.a.createElement("option",{value:e},b(e))}))),s.a.createElement(z,{label:b("ntp"),checked:this.state.time.ntp,onChange:this.handleNTPChange}),s.a.createElement("label",{htmlFor:"time"},b("time"),":"),s.a.createElement("input",{name:"time",type:"text",value:this.state.time.time,onChange:this.handleTimeChange,placeholder:b("time-help"),disabled:this.state.time.ntp}),s.a.createElement("button",{onClick:this.handleSave,className:"p-button--positive"},b("save"))))))}}]),t}(n.Component),M=a(11),G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getSnaps=function(){E.snapsGet().then((function(e){a.setState({snaps:e.data.records,error:"",message:""})})).catch((function(e){a.setState({error:y(e.response.data),message:""})}))},a.handleShowSettings=function(e){e.preventDefault();var t=e.target.getAttribute("data-key");if(a.state.snapSettings===t)a.setState({snapSettings:null,settings:{},show:""});else{var n=a.findSnap(t);0===n.config.length&&(n.config="{}");var s=JSON.stringify(JSON.parse(n.config),null,2);a.setState({snapSettings:t,settings:s,show:"settings"})}},a.handleShowInfo=function(e){e.preventDefault();var t=e.target.getAttribute("data-key");if(a.state.snapSettings===t)a.setState({snapSettings:null,settings:{},show:""});else{var n=a.findSnap(t);0===n.config.length&&(n.config="{}"),a.setState({snapSettings:t,settings:{},show:"info"})}},a.handleSettingsChange=function(e){e.preventDefault(),a.setState({settings:e.target.value})},a.handleSettingsUpdate=function(e){e.preventDefault();var t=e.target.getAttribute("data-key");E.snapsSettingsUpdate(t,a.state.settings).then((function(e){a.setState({snapSettings:null,message:"Sent request to update snap: "+t,error:""})})).catch((function(e){a.setState({error:y(e.response.data),message:""})}))},a.state={snaps:[{name:"pc-kernel",description:"desc 1",installedSize:220545024,installedDate:"2020-06-10T07:03:52.564637288Z",status:"active",channel:"18/stable",confinement:"strict",version:"4.15.0-106.107",revision:529,devmode:!1,config:"{}"},{name:"snapd",installedSize:31272960,installedDate:"2020-06-16T23:20:18.759193735Z",status:"active",channel:"latest/stable",confinement:"strict",version:"2.45.1",revision:8140,devmode:!1,config:"{}"}],settings:{},show:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getSnaps()}},{key:"findSnap",value:function(e){return this.state.snaps.filter((function(t){return t.name===e}))[0]}},{key:"renderSettings",value:function(e){if("settings"===this.state.show&&e.name===this.state.snapSettings)return s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"5"},s.a.createElement("form",null,s.a.createElement("fieldset",null,s.a.createElement("label",{htmlFor:this.state.snapSettings},b("snap-settings"),":",s.a.createElement("textarea",{className:"col-12",rows:"4",value:this.state.settings,"data-key":this.state.snapSettings,onChange:this.handleSettingsChange}))),s.a.createElement("button",{className:"p-button--brand",onClick:this.handleSettingsUpdate,"data-key":e.name},b("update")))))}},{key:"renderInfo",value:function(e){if("info"===this.state.show&&e.name===this.state.snapSettings)return s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"5"},s.a.createElement(M.Card,{title:e.title||e.name},e.description)))}},{key:"renderMessage",value:function(){if(this.state.message)return s.a.createElement(j,{type:"positive",message:this.state.message})}},{key:"renderError",value:function(){if(this.state.error)return s.a.createElement(j,{message:this.state.error})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h2",null,b("snaps-config")),s.a.createElement("section",{className:"row"},this.renderMessage(),this.renderError(),s.a.createElement("table",{className:"p-card__content"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{className:"small"},b("snap")),s.a.createElement("th",{className:"small"},b("channel")),s.a.createElement("th",null,b("version")),s.a.createElement("th",{className:"xsmall"},b("status")),s.a.createElement("th",{className:"small"},b("settings")))),this.state.snaps.map((function(t){var a="";return t.name===e.state.snapSettings&&(a="borderless"),s.a.createElement("tbody",{key:t.name},s.a.createElement("tr",{className:a},s.a.createElement("td",{title:t.description},t.name),s.a.createElement("td",null,t.channel),s.a.createElement("td",null,t.version),s.a.createElement("td",null,t.status),s.a.createElement("td",null,s.a.createElement(M.Button,{"data-key":t.name,onClick:e.handleShowInfo},s.a.createElement("i",{className:"p-icon--information","aria-hidden":"true","data-key":t.name})),s.a.createElement("button",{className:"p-button--neutral small",title:b("view-settings"),"data-key":t.name,onClick:e.handleShowSettings},s.a.createElement("i",{className:"p-icon--menu","aria-hidden":"true","data-key":t.name})))),e.renderSettings(t),e.renderInfo(t))})))))}}]),t}(n.Component),F=a(34),W=a.n(F);function H(e,t){return s.a.createElement("div",{className:"col-2"},s.a.createElement("h5",null,b(e)),s.a.createElement(W.a,{id:e,nrOfLevels:420,arcsLength:[.3,.5,.2],colors:["#1c6a08","#d8d404","#af1904"],percent:t/100,arcPadding:0,textColor:"#2d2d2d",cornerRadius:0}))}var R,K=function(e){return s.a.createElement(M.Row,{className:"u-align--center"},s.a.createElement("div",{className:"col-3"}),H("processor",e.system.cpu),H("memory",e.system.memory),H("disk",e.system.disk))},Z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).poll=function(){setTimeout(a.getSystemResources.bind(Object(A.a)(a)),2e3)},a.getServices=function(){E.servicesGet().then((function(e){a.setState({services:e.data.services,error:""})})).catch((function(e){a.setState({error:y(e.response.data)})}))},a.state={system:{cpu:0,memory:0,disk:0},services:[],error:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getServices(),this.getSystemResources()}},{key:"getSystemResources",value:function(){var e=this;E.systemResourcesGet().then((function(t){e.setState({system:t.data.record})})).catch((function(t){console.log(y(t.response.data)),e.setState({error:y(t.response.data),message:""})})).finally((function(){e.poll()}))}},{key:"renderError",value:function(){if(this.state.error)return s.a.createElement(j,{message:this.state.error})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h2",null,b("service-status")),s.a.createElement("section",null,s.a.createElement(K,{system:this.state.system})),s.a.createElement("section",{className:"row"},this.renderError(),s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,b("name")),s.a.createElement("th",null,b("service")),s.a.createElement("th",{className:"xsmall u-align-text--center"},b("enabled")),s.a.createElement("th",{className:"xsmall u-align-text--center"},b("active")))),s.a.createElement("tbody",null,this.state.services.map((function(e){return s.a.createElement("tr",null,s.a.createElement("td",null,e.snap),s.a.createElement("td",null,e.name),s.a.createElement("td",null,e.enabled?s.a.createElement("div",{className:"led-green"}):s.a.createElement("div",{className:"led-yellow"})),s.a.createElement("td",null,e.active?s.a.createElement("div",{className:"led-green"}):s.a.createElement("div",{className:"led-red"})))}))))))}}]),t}(n.Component),J=T()(),q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).changeLanguage=function(e){!function(e){sessionStorage.setItem("language",e)}(e),a.setState({language:e})},a.state={language:S(),location:J.location,token:e.token||{},proxy:{}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleNavigation",value:function(e){this.setState({location:e}),window.scrollTo(0,0)}},{key:"renderLogin",value:function(){return s.a.createElement(_,null)}},{key:"renderNetwork",value:function(e,t){if(!e)return s.a.createElement(U,{config:this.props.config})}},{key:"renderProxy",value:function(e,t){if(!e)return s.a.createElement(P,null)}},{key:"renderTime",value:function(e,t){if(!e)return s.a.createElement(L,null)}},{key:"renderSnaps",value:function(e,t){if(!e)return s.a.createElement(G,null)}},{key:"renderServices",value:function(e,t){if(!e)return s.a.createElement(Z,null)}},{key:"render",value:function(){var e=function(){var e=window.location.pathname.split("/");switch(e.length){case 2:return{section:e[1]};case 3:return{section:e[1],sectionId:e[2]};case 4:return{section:e[1],sectionId:e[2],subsection:e[3]};default:return{}}}();return console.log(e),s.a.createElement("div",{className:"App"},""===e.section?s.a.createElement(N,{section:e.section,subsection:e.subsection,sectionId:e.sectionId,config:this.props.config,changeLanguage:this.changeLanguage}):"",""!==e.section?s.a.createElement(C,{section:e.section,subsection:e.subsection,sectionId:e.sectionId,config:this.props.config,changeLanguage:this.changeLanguage}):"",s.a.createElement("div",{className:"content row"},""===e.section?s.a.createElement(x,null):"","login"===e.section?this.renderLogin():"","network"===e.section?this.renderNetwork(e.sectionId,e.subsection):"","proxy"===e.section?this.renderProxy(e.sectionId,e.subsection):"","time"===e.section?this.renderTime(e.sectionId,e.subsection):"","services"===e.section?this.renderServices(e.sectionId,e.subsection):"","snaps"===e.section?this.renderSnaps(e.sectionId,e.subsection):""),s.a.createElement(O,null))}}]),t}(n.Component);R=function(e){i.a.render(s.a.createElement(q,{config:e}),document.getElementById("root"))},E.configGet().then((function(e){var t=e.data.config;R(t)})).catch((function(e){R({})}))},36:function(e,t,a){e.exports=a(133)},41:function(e,t,a){}},[[36,1,2]]]);
//# sourceMappingURL=main.40b79f42.chunk.js.map