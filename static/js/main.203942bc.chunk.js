(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{20:function(e,t,a){e.exports=a(50)},25:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),i=a.n(s),o=(a(25),a(1)),c=a(2),l=a(4),u=a(3),m=a(5),d={address:"Address","address-help":"IP address of the interface",copyright:"\xa9 2020 Canonical Ltd. Ubuntu and Canonical are registered trademarks of Canonical Ltd.",dhcp:"DHCP",dns:"Name servers (DNS)","dns-help":"Comma-separated list of IP addresses",ftp:"FTP",gateway:"Gateway","get-started":"Get Started",http:"HTTP",https:"HTTPS",interface:"Interface","interface-updated":"The interface was updated successfully",legal:"Legal information",login:"Login","login-description":"Login to configure the device.",logout:"Logout",manual:"Manual",mask:"Subnet mask",method:"Method",network:"Network","network-config":"Network Configuration",privacy:"Data privacy",proxy:"Proxy","proxy-config":"Proxy Configuration","proxy-help":"IP address and port","proxy-updated":"Submitted request to update proxy settings","report-a-bug":"Report a bug on this site",save:"Save","select-interface":"Select an interface","site-description1":"Configure the network interfaces","site-description2":"Configure the network proxy settings","site-description3":"Set the device time zone","site-description4":"Configure network time server",subtitle:"Configuration service for Ubuntu Core devices.",time:"Time",title:"Ubuntu Core Configuration",use:"Use the interface"},p=a(8),h=a.n(p);function f(e){return d[e]||e}function g(){var e=window.location.pathname.split("/");switch(e.length){case 2:return{section:e[1]};case 3:return{section:e[1],sectionId:e[2]};case 4:return{section:e[1],sectionId:e[2],subsection:e[3]};default:return{}}}function v(){var e=h.a.get("username"),t=h.a.get("sessionID");return console.log("Username/Session:",e,t),!(!e||!t)}function E(e){var t=f(e.code);return e.message&&(t+=": "+e.message),t}var b=["network","proxy","time"],y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"link",value:function(e){return this.props.sectionId?"/"+this.props.section+"/"+this.props.sectionId+"/"+e:"/"+e}},{key:"renderLoginOut",value:function(){return v()?r.a.createElement("li",{key:"logout",className:"p-navigation__link",role:"menuitem"},r.a.createElement("a",{href:"/logout"},f("logout"))):r.a.createElement("li",{key:"login",className:"p-navigation__link",role:"menuitem"},r.a.createElement("a",{href:"/login"},f("login")))}},{key:"render",value:function(){var e=this;return r.a.createElement("header",{id:"navigation",class:"p-navigation header-slim"},r.a.createElement("div",{className:"p-navigation__banner row"},r.a.createElement("div",{className:"p-navigation__logo"},r.a.createElement("div",{className:"u-vertically-center"},r.a.createElement("a",{href:"/",className:"p-navigation__link"},r.a.createElement("img",{src:"/static/images/logo.png",width:"150px"})))),r.a.createElement("nav",{className:"p-navigation__nav"},r.a.createElement("span",{className:"u-off-screen"},r.a.createElement("a",{href:"#navigation"},"Jump to site")),r.a.createElement("ul",{className:"p-navigation__links",role:"menu"},b.map((function(t){var a="";return e.props.section!==t&&e.props.subsection!==t||(a=" active"),r.a.createElement("li",{key:t,className:"p-navigation__link"+a,role:"menuitem"},r.a.createElement("a",{href:e.link(t)},f(t)))})),this.renderLoginOut()))))}}]),t}(n.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,{section:this.props.section,subsection:this.props.subsection,sectionId:this.props.sectionId}),r.a.createElement("section",{className:"p-strip--image is-dark header"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5 title"},r.a.createElement("h1",null,f("title")),r.a.createElement("p",null,f("subtitle"))))))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={token:e.token||{}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderLogin",value:function(){if(!v())return r.a.createElement("a",{className:"p-button--brand",href:"/login",alt:""},f("login"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("section",{className:"row"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"first"},r.a.createElement("h2",null,f("get-started")),r.a.createElement("ul",{className:"p-list"},r.a.createElement("li",{className:"p-list__item is-ticked"},f("site-description1")),r.a.createElement("li",{className:"p-list__item is-ticked"},f("site-description2")),r.a.createElement("li",{className:"p-list__item is-ticked"},f("site-description3")),r.a.createElement("li",{className:"p-list__item is-ticked"},f("site-description4"))),this.renderLogin()))))}}]),t}(n.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"footer"},r.a.createElement("div",{className:"row footer"},r.a.createElement("p",null,f("copyright")),r.a.createElement("nav",{className:"p-footer__nav",role:"navigation"},r.a.createElement("ul",{className:"p-footer__links"},r.a.createElement("li",{className:"p-footer__item"},r.a.createElement("a",{className:"p-footer__link",href:"https://ubuntu.com/legal"},f("legal"))),r.a.createElement("li",{className:"p-footer__item"},r.a.createElement("a",{className:"p-footer__link",href:"https://ubuntu.com/legal/data-privacy"},f("privacy"))),r.a.createElement("li",{className:"p-footer__item"},r.a.createElement("a",{className:"p-footer__link",href:"https://github.com/CanonicalLtd/imagebuild/issues/new"},f("report-a-bug")))))))}}]),t}(n.Component),N=a(7),x=a.n(N);var _={baseUrl:window.location.protocol+"//"+window.location.hostname+":"+window.location.port+"/v1/",LoadingImage:"/static/images/ajax-loader.gif"},S={loginRequest:function(e,t){return x.a.post(_.baseUrl+"login",e)},networkGet:function(){return x.a.get(_.baseUrl+"network")},networkUpdate:function(e){return x.a.post(_.baseUrl+"network",e)},proxyGet:function(){return x.a.get(_.baseUrl+"proxy")},proxyUpdate:function(e){return x.a.post(_.baseUrl+"proxy",e)}},O=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){if(this.props.message){var e="p-notification--";return this.props.type?e+=this.props.type:e+="negative",r.a.createElement("div",{className:e},r.a.createElement("p",{className:"p-notification__response"},this.props.message))}return r.a.createElement("span",null)}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleMacAddressChange=function(e){e.preventDefault(),a.setState({macAddress:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.login()},a.state={macAddress:"",error:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"login",value:function(){var e=this;S.loginRequest({macAddress:this.state.macAddress}).then((function(t){if(!t.data.code)return a=t.data.username,n=t.data.sessionId,h.a.set("username",a),h.a.set("sessionID",n),void(window.location.href="/");var a,n;e.setState({error:f(t.data.code)+": "+t.data.message})})).catch((function(t){console.log(t.response),e.setState({error:f(t.response.data.code)+": "+t.response.data.message})}))}},{key:"renderError",value:function(){if(this.state.error)return r.a.createElement(O,{message:this.state.error})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,f("login")),r.a.createElement("p",null,f("login-description"))),this.renderError(),r.a.createElement("form",null,r.a.createElement("label",{for:"macaddress"},"MAC Address:"),r.a.createElement("input",{name:"macaddress",type:"text",value:this.state.macAddress,onChange:this.handleMacAddressChange}),r.a.createElement("button",{className:"p-button--positive",onClick:this.handleSubmit},f("submit"))))}}]),t}(n.Component),D=a(19),I=a.n(D),T=["dhcp","manual"],U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).getNetworkConfig=function(){S.networkGet().then((function(e){a.setState({interfaces:e.data.interfaces,error:""}),!a.state.selected&&e.data.interfaces.length>0&&(a.getInterface(e.data.interfaces[0].interface),a.setState({selected:e.data.interfaces[0].interface}))})).catch((function(e){a.setState({message:E(e.response)})}))},a.handleSelectTab=function(e){e.preventDefault();var t=e.target.getAttribute("data-key");a.getInterface(t),a.setState({selected:t,error:"",message:""})},a.handleUseChange=function(e){e.preventDefault();var t=a.state.interface;t.use=!t.use,a.setState({interface:t})},a.handleMethodChange=function(e){e.preventDefault();var t=a.state.interface;t.method=e.target.value,a.setState({interface:t})},a.handleGatewayChange=function(e){e.preventDefault();var t=a.state.interface;t.gateway=e.target.value,a.setState({interface:t})},a.handleAddressChange=function(e){e.preventDefault();var t=a.state.interface;t.address=e.target.value,a.setState({interface:t})},a.handleMaskChange=function(e){e.preventDefault();var t=a.state.interface;t.mask=e.target.value,a.setState({interface:t})},a.handleDNSChange=function(e){e.preventDefault();var t=a.state.interface;t.nameServers=e.target.value.split(","),a.setState({interface:t})},a.handleSave=function(e){e.preventDefault(),S.networkUpdate(a.state.interface).then((function(e){a.getNetworkConfig(),a.setState({message:f("interface-updated"),error:""})})).catch((function(e){a.setState({error:E(e.response),message:""})}))},a.state={selected:null,interfaces:[],interface:{},error:"",message:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getNetworkConfig()}},{key:"getInterface",value:function(e){var t=this.state.interfaces.filter((function(t){return t.interface===e}));t.length>0&&this.setState({interface:t[0]})}},{key:"renderUse",value:function(){return this.state.interface.use?r.a.createElement("div",null,r.a.createElement("a",{href:"#",className:"p-button--base has-icon",onClick:this.handleUseChange},r.a.createElement("img",{src:"/static/images/checkbox_checked_16.png"})),r.a.createElement("span",null,f("use"))):r.a.createElement("div",null,r.a.createElement("a",{href:"#",className:"p-button--base has-icon",onClick:this.handleUseChange},r.a.createElement("img",{src:"/static/images/checkbox_unchecked_16.png"})),r.a.createElement("span",null,f("use")))}},{key:"renderMessage",value:function(){if(this.state.message)return r.a.createElement(O,{type:"positive",message:this.state.message})}},{key:"renderError",value:function(){if(this.state.error)return r.a.createElement(O,{message:this.state.error})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,f("network-config")),r.a.createElement("section",{className:"row"},r.a.createElement("div",null,r.a.createElement("nav",{className:"p-tabs"},r.a.createElement("ul",{className:"p-tabs__list",role:"tablist"},this.state.interfaces.map((function(t){var a="false";return e.state.selected===t.interface&&(a="true"),r.a.createElement("li",{className:"p-tabs__item",role:"presentation"},r.a.createElement("a",{href:"#"+t.interface,"data-key":t.interface,onClick:e.handleSelectTab,class:"p-tabs__link",tabindex:"0",role:"tab","aria-controls":"section1","aria-selected":a},t.interface))}))))),r.a.createElement("div",null,this.renderMessage(),this.renderError(),this.state.interface.interface?r.a.createElement("form",null,this.renderUse(),r.a.createElement("fieldset",{disabled:!this.state.interface.use},r.a.createElement("h3",null,f("interface")," ",this.state.interface.interface),r.a.createElement("label",{htmlFor:"method"},f("method"),":"),r.a.createElement("select",{value:this.state.interface.method,onChange:this.handleMethodChange},r.a.createElement("option",null),T.map((function(e){return r.a.createElement("option",{value:e},f(e))}))),r.a.createElement("label",{htmlFor:"nameServers"},f("dns"),":"),r.a.createElement("input",{name:"nameServers",type:"text",onChange:this.handleDNSChange,value:this.state.interface.nameServers?this.state.interface.nameServers.toString():"",placeholder:f("dns-help")}),r.a.createElement("label",{htmlFor:"address"},f("address"),":"),r.a.createElement("input",{name:"address",type:"text",value:this.state.interface.address,placeholder:f("address-help"),onChange:this.handleAddressChange}),r.a.createElement("label",{htmlFor:"mask"},f("mask"),":"),r.a.createElement("input",{name:"mask",type:"text",value:this.state.interface.mask,onChange:this.handleMaskChange}),r.a.createElement("label",{for:"gateway"},f("gateway"),":"),r.a.createElement("input",{name:"gateway",type:"text",value:this.state.interface.gateway,onChange:this.handleGatewayChange}),r.a.createElement("button",{onClick:this.handleSave,className:"p-button--positive"},f("save")))):r.a.createElement("h4",null,f("select-interface")))))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).getProxyConfig=function(){S.proxyGet().then((function(e){a.setState({proxy:e.data.proxy,message:""})})).catch((function(e){a.setState({message:E(e.response)})}))},a.handleHTTPChange=function(e){e.preventDefault();var t=a.state.proxy;t.http=e.target.value,a.setState({proxy:t})},a.handleHTTPSChange=function(e){e.preventDefault();var t=a.state.proxy;t.https=e.target.value,a.setState({proxy:t})},a.handleFTPChange=function(e){e.preventDefault();var t=a.state.proxy;t.ftp=e.target.value,a.setState({proxy:t})},a.handleSave=function(e){e.preventDefault(),S.proxyUpdate(a.state.proxy).then((function(e){a.setState({message:f("proxy-updated"),error:""})})).catch((function(e){a.setState({error:E(e.response),message:""})}))},a.state={proxy:{},error:"",message:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getProxyConfig()}},{key:"renderMessage",value:function(){if(this.state.message)return r.a.createElement(O,{type:"positive",message:this.state.message})}},{key:"renderError",value:function(){if(this.state.error)return r.a.createElement(O,{message:this.state.error})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,f("proxy-config")),r.a.createElement("section",{className:"row"},this.renderMessage(),this.renderError(),r.a.createElement("form",null,r.a.createElement("fieldset",null,r.a.createElement("label",{htmlFor:"http"},f("http"),":"),r.a.createElement("input",{name:"http",type:"text",value:this.state.proxy.http,onChange:this.handleHTTPChange,placeholder:f("proxy-help")}),r.a.createElement("label",{htmlFor:"https"},f("https"),":"),r.a.createElement("input",{name:"https",type:"text",value:this.state.proxy.https,onChange:this.handleHTTPSChange,placeholder:f("proxy-help")}),r.a.createElement("label",{htmlFor:"ftp"},f("ftp"),":"),r.a.createElement("input",{name:"ftp",type:"text",value:this.state.proxy.ftp,onChange:this.handleFTPChange,placeholder:f("proxy-help")}),r.a.createElement("button",{onClick:this.handleSave,className:"p-button--positive"},f("save"))))))}}]),t}(n.Component),M=I()(),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={location:M.location,token:e.token||{},proxy:{}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleNavigation",value:function(e){this.setState({location:e}),window.scrollTo(0,0)}},{key:"updateDataForRoute",value:function(){"network"===g().section&&this.getNetworkConfig()}},{key:"renderLogin",value:function(){return r.a.createElement(j,null)}},{key:"renderNetwork",value:function(e,t){if(!e)return r.a.createElement(U,null)}},{key:"renderProxy",value:function(e,t){if(!e)return r.a.createElement(P,null)}},{key:"render",value:function(){var e=g();return console.log(e),r.a.createElement("div",{className:"App"},""===e.section?r.a.createElement(k,{section:e.section,subsection:e.subsection,sectionId:e.sectionId}):"",""!==e.section?r.a.createElement(y,{section:e.section,subsection:e.subsection,sectionId:e.sectionId}):"",r.a.createElement("div",{className:"content row"},""===e.section?r.a.createElement(C,null):"","login"===e.section?this.renderLogin():"","network"===e.section?this.renderNetwork(e.sectionId,e.subsection):"","proxy"===e.section?this.renderProxy(e.sectionId,e.subsection):""),r.a.createElement(w,null))}}]),t}(n.Component);i.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.203942bc.chunk.js.map