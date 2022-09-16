"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[49495],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(t),p=i,g=h["".concat(c,".").concat(p)]||h[p]||d[p]||a;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},89205:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],s={title:"EngineConn History Features",sidebar_position:5,tags:["Feature"]},c=void 0,l={unversionedId:"architecture/computation-governance-services/engine/engine-conn-history",id:"version-1.2.0/architecture/computation-governance-services/engine/engine-conn-history",isDocsHomePage:!1,title:"EngineConn History Features",description:"1. Functional requirements",source:"@site/versioned_docs/version-1.2.0/architecture/computation-governance-services/engine/engine-conn-history.md",sourceDirName:"architecture/computation-governance-services/engine",slug:"/architecture/computation-governance-services/engine/engine-conn-history",permalink:"/docs/latest/architecture/computation-governance-services/engine/engine-conn-history",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.2.0/architecture/computation-governance-services/engine/engine-conn-history.md",tags:[{label:"Feature",permalink:"/docs/latest/tags/feature"}],version:"1.2.0",sidebarPosition:5,frontMatter:{title:"EngineConn History Features",sidebar_position:5,tags:["Feature"]},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"Start  engineConn",permalink:"/docs/latest/architecture/computation-governance-services/engine/add-an-engine-conn"},next:{title:"EngineConn Metrics reporting feature",permalink:"/docs/latest/architecture/computation-governance-services/engine/engine-conn-metrics"}},u=[{value:"1. Functional requirements",id:"1-functional-requirements",children:[{value:"1.1 Requirement Background",id:"11-requirement-background",children:[]},{value:"1.2 Goals",id:"12-goals",children:[]}]},{value:"2. Overall Design",id:"2-overall-design",children:[{value:"2.1 Technical Architecture",id:"21-technical-architecture",children:[]},{value:"2.2 Business Architecture",id:"22-business-architecture",children:[]}]},{value:"3. Module Design",id:"3-module-design",children:[{value:"Core execution flow",id:"core-execution-flow",children:[]}]},{value:"4. Data structure:",id:"4-data-structure",children:[]},{value:"5. Interface Design",id:"5-interface-design",children:[]},{value:"6. Non-functional design",id:"6-non-functional-design",children:[{value:"6.1 Security",id:"61-security",children:[]},{value:"6.2 Performance",id:"62-performance",children:[]},{value:"6.3 Capacity",id:"63-capacity",children:[]},{value:"6.4 High Availability",id:"64-high-availability",children:[]}]}],d={toc:u};function h(e){var n=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-functional-requirements"},"1. Functional requirements"),(0,a.kt)("h3",{id:"11-requirement-background"},"1.1 Requirement Background"),(0,a.kt)("p",null,"Before version 1.1.3, LinkisManager only recorded the information and resource usage of the running EngineConn, but the information was lost after the task was completed. If you need to do some statistics and view of historical ECs, or to view the logs of ECs that have ended, it is too cumbersome, so it is more important to record historical ECs."),(0,a.kt)("h3",{id:"12-goals"},"1.2 Goals"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Complete the storage of EC information and resource information persistent to DB"),(0,a.kt)("li",{parentName:"ul"},"Supports viewing and searching of historical EC information through the restful interface"),(0,a.kt)("li",{parentName:"ul"},"Support to view logs of EC that has ended")),(0,a.kt)("h2",{id:"2-overall-design"},"2. Overall Design"),(0,a.kt)("p",null,"The main changes in this feature are the RM and AM modules under LinkisManager, and an information record table has been added."),(0,a.kt)("h3",{id:"21-technical-architecture"},"2.1 Technical Architecture"),(0,a.kt)("p",null,"Because this implementation needs to record EC information and resource information, and resource information is divided into three concepts, such as requesting resources, actually using resources, and releasing resources, and all of them need to be recorded. Therefore, the general plan for this implementation is: based on the EC in the life cycle of the ResourceManager to implement, and when the EC completes the above three stages, the update operation of the EC information is added. The overall picture is shown below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"engineconn-history-01.png",src:t(39207).Z})),(0,a.kt)("h3",{id:"22-business-architecture"},"2.2 Business Architecture"),(0,a.kt)("p",null,"This feature is mainly to complete the information recording of historical ECs and support the log viewing of historical technical ECs. The modules designed by the function point are as follows:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"First-level module"),(0,a.kt)("th",{parentName:"tr",align:null},"Second-level module"),(0,a.kt)("th",{parentName:"tr",align:null},"Function point"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LinkisManager"),(0,a.kt)("td",{parentName:"tr",align:null},"ResourceManager"),(0,a.kt)("td",{parentName:"tr",align:null},"Complete the EC information record when the EC requests resources, reports the use of resources, and releases resources")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LinkisManager"),(0,a.kt)("td",{parentName:"tr",align:null},"AppManager"),(0,a.kt)("td",{parentName:"tr",align:null},"Provides an interface to list and search all historical EC information")))),(0,a.kt)("h2",{id:"3-module-design"},"3. Module Design"),(0,a.kt)("h3",{id:"core-execution-flow"},"Core execution flow"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[","Input] The input is mainly for the requested resource when the engine is created, the real used resource reported after the engine is started, and the information input when the resource is released when the engine exits, mainly including the requested label, resource, EC's unique ticketid, resource type etc."),(0,a.kt)("li",{parentName:"ul"},"[","Processing process] Information recording service, which processes the input data, and parses the corresponding engine information, user, creator, and log path through tags. Confirm the resource request, use, and release by the resource type. Then talk about the information stored in the DB.")),(0,a.kt)("p",null,"The call sequence diagram is as follows:\n",(0,a.kt)("img",{alt:"engineconn-history-02.png",src:t(45047).Z})),(0,a.kt)("h2",{id:"4-data-structure"},"4. Data structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"# EC information resource record table\nDROP TABLE IF EXISTS `linkis_cg_ec_resource_info_record`;\nCREATE TABLE `linkis_cg_ec_resource_info_record` (\n    `id` INT(20) NOT NULL AUTO_INCREMENT,\n    `label_value` VARCHAR(255) NOT NULL COMMENT 'ec labels stringValue',\n    `create_user` VARCHAR(128) NOT NULL COMMENT 'ec create user',\n    `service_instance` varchar(128) COLLATE utf8_bin DEFAULT NULL COMMENT 'ec instance info',\n    `ecm_instance` varchar(128) COLLATE utf8_bin DEFAULT NULL COMMENT 'ecm instance info ',\n    `ticket_id` VARCHAR(100) NOT NULL COMMENT 'ec ticket id',\n    `log_dir_suffix` varchar(128) COLLATE utf8_bin DEFAULT NULL COMMENT 'log path',\n    `request_times` INT(8) COMMENT 'resource request times',\n    `request_resource` VARCHAR(255) COMMENT 'request resource',\n    `used_times` INT(8) COMMENT 'resource used times',\n    `used_resource` VARCHAR(255) COMMENT 'used resource',\n    `release_times` INT(8) COMMENT 'resource released times',\n    `released_resource` VARCHAR(255) COMMENT 'released resource',\n    `release_time` datetime DEFAULT NULL COMMENT 'released time',\n    `used_time` datetime DEFAULT NULL COMMENT 'used time',\n    `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'create time',\n    PRIMARY KEY (`id`),\n    KEY (`ticket_id`),\n    UNIQUE KEY `label_value_ticket_id` (`ticket_id`, `label_value`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n")),(0,a.kt)("h2",{id:"5-interface-design"},"5. Interface Design"),(0,a.kt)("p",null,"Engine history management page API interface, refer to the document Add history engine page to the management console"),(0,a.kt)("h2",{id:"6-non-functional-design"},"6. Non-functional design"),(0,a.kt)("h3",{id:"61-security"},"6.1 Security"),(0,a.kt)("p",null,"No security issues are involved, the restful interface requires login authentication"),(0,a.kt)("h3",{id:"62-performance"},"6.2 Performance"),(0,a.kt)("p",null,"Less impact on engine life cycle performance"),(0,a.kt)("h3",{id:"63-capacity"},"6.3 Capacity"),(0,a.kt)("p",null,"Requires regular cleaning"),(0,a.kt)("h3",{id:"64-high-availability"},"6.4 High Availability"),(0,a.kt)("p",null,"not involving"))}h.isMDXComponent=!0},39207:function(e,n,t){n.Z=t.p+"assets/images/engineconn-history-01-1119992944d440f3f2ceb54928f70512.png"},45047:function(e,n,t){n.Z=t.p+"assets/images/engineconn-history-02-77087d017474194bfd1832adbf8490b3.png"}}]);