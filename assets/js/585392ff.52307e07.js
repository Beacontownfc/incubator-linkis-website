"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[62074],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(t),g=a,d=h["".concat(l,".").concat(g)]||h[g]||p[g]||r;return t?i.createElement(d,o(o({ref:n},u),{},{components:t})):i.createElement(d,o({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},83571:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var i=t(87462),a=t(63366),r=(t(67294),t(3905)),o=["components"],s={title:"Add an EngineConn",sidebar_position:3},l="How to add an EngineConn",c={unversionedId:"architecture/add-an-engine-conn",id:"version-1.0.2/architecture/add-an-engine-conn",isDocsHomePage:!1,title:"Add an EngineConn",description:"Adding EngineConn is one of the core processes of the computing task preparation phase of Linkis computing governance. It mainly includes the following steps. First, client side (Entrance or user client) initiates a request for a new EngineConn to LinkisManager . Then LinkisManager initiates a request to EngineConnManager to start EngineConn based on demands and label rules. Finally,  LinkisManager returns the usable EngineConn to the client side.",source:"@site/versioned_docs/version-1.0.2/architecture/add-an-engine-conn.md",sourceDirName:"architecture",slug:"/architecture/add-an-engine-conn",permalink:"/docs/1.0.2/architecture/add-an-engine-conn",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.2/architecture/add-an-engine-conn.md",tags:[],version:"1.0.2",sidebarPosition:3,frontMatter:{title:"Add an EngineConn",sidebar_position:3},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Job Submission",permalink:"/docs/1.0.2/architecture/job-submission-preparation-and-execution-process"},next:{title:"Message Scheduler Module",permalink:"/docs/1.0.2/architecture/commons/message-scheduler"}},u=[{value:"1. LinkisManger receives the requests from client side",id:"1-linkismanger-receives-the-requests-from-client-side",children:[{value:"1. Request parameter verification",id:"1-request-parameter-verification",children:[]},{value:"2. Select  a EngineConnManager(ECM)",id:"2-select--a-engineconnmanagerecm",children:[]},{value:"3. Apply resources required for EngineConn",id:"3-apply-resources-required-for-engineconn",children:[]},{value:"4. Request ECM for engine creation",id:"4-request-ecm-for-engine-creation",children:[]}]},{value:"2. ECM initiates EngineConn",id:"2-ecm-initiates-engineconn",children:[{value:"2.1 EngineConnPluginServer encapsulates EngineConnLaunchRequest",id:"21-engineconnpluginserver-encapsulates-engineconnlaunchrequest",children:[]},{value:"2.2 Encapsulate EngineConn startup script",id:"22-encapsulate-engineconn-startup-script",children:[]},{value:"2.3 Execute startup script",id:"23-execute-startup-script",children:[]}]},{value:"3. EngineConn initialization",id:"3-engineconn-initialization",children:[]}],p={toc:u};function h(e){var n=e.components,s=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-add-an-engineconn"},"How to add an EngineConn"),(0,r.kt)("p",null,"Adding EngineConn is one of the core processes of the computing task preparation phase of Linkis computing governance. It mainly includes the following steps. First, client side (Entrance or user client) initiates a request for a new EngineConn to LinkisManager . Then LinkisManager initiates a request to EngineConnManager to start EngineConn based on demands and label rules. Finally,  LinkisManager returns the usable EngineConn to the client side."),(0,r.kt)("p",null,"Based on the figure below, let's explain the whole process in detail:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Process of adding a EngineConn",src:t(20737).Z})),(0,r.kt)("h2",{id:"1-linkismanger-receives-the-requests-from-client-side"},"1. LinkisManger receives the requests from client side"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Glossary:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"LinkisManager: The management center of Linkis computing governance capabilities. Its main responsibilities are:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Based on multi-level combined tags, provide users with available EngineConn after complex routing, resource management and load balancing.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Provide EC and ECM full life cycle management capabilities.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Provide users with multi-Yarn cluster resource management functions based on multi-level combined tags. It is mainly divided into three modules: AppManager, ResourceManager and LabelManager , which can support multi-active deployment and have the characteristics of high availability and easy expansion."))))),(0,r.kt)("p",null,"After the AM module receives the Client\u2019s new EngineConn request, it first checks the parameters of the request to determine the validity of the request parameters. Secondly, selects the most suitable EngineConnManager (ECM) through complex rules for use in the subsequent EngineConn startup. Next, it will apply to RM for the resources needed to start the EngineConn, Finally, it will request the ECM to create an EngineConn."),(0,r.kt)("p",null,"The four steps will be described in detail below."),(0,r.kt)("h3",{id:"1-request-parameter-verification"},"1. Request parameter verification"),(0,r.kt)("p",null,"After the AM module receives the engine creation request, it will check the parameters. First, it will check the permissions of the requesting user and the creating user, and then check the Label attached to the request. Since in the subsequent creation process of AM, Label will be used to find ECM and perform resource information recording, etc, you need to ensure that you have the necessary Label. At this stage, you must bring the Label with UserCreatorLabel (For example: hadoop-IDE) and EngineTypeLabel ( For example: spark-2.4.3)."),(0,r.kt)("h3",{id:"2-select--a-engineconnmanagerecm"},"2. Select  a EngineConnManager(ECM)"),(0,r.kt)("p",null,"ECM selection is mainly to complete the Label passed through the client to select a suitable ECM service to start EngineConn. In this step, first, the LabelManager will be used to search in the registered ECM through the Label passed by the client, and return in the order according to the label matching degree. After obtaining the registered ECM list, rules will be selected for these ECMs. At this stage, rules such as availability check, resource surplus, and machine load have been implemented. After the rule is selected, the ECM with the most matching label, the most idle resource, and the low load will be returned."),(0,r.kt)("h3",{id:"3-apply-resources-required-for-engineconn"},"3. Apply resources required for EngineConn"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After obtaining the assigned ECM, AM will then request how many resources will be used by the client's engine creation request by calling the EngineConnPluginServer service. Here, the resource request will be encapsulated, mainly including Label, the EngineConn startup parameters passed by the Client, and the user configuration parameters obtained from the Configuration module. The resource information is obtained by calling the ECP service through RPC.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the EngineConnPluginServer service receives the resource request, it will first find the corresponding engine tag through the passed tag, and select the EngineConnPlugin of the corresponding engine through the engine tag. Then use EngineConnPlugin's resource generator to calculate the engine startup parameters passed in by the client, calculate the resources required to apply for a new EngineConn this time, and then return it to LinkisManager. "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Glossary:")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EgineConnPlugin: It is the interface that Linkis must implement when connecting a new computing storage engine. This interface mainly includes several capabilities that this EngineConn must provide during the startup process, including EngineConn resource generator, EngineConn startup command generator, EngineConn engine connection Device. Please refer to the Spark engine implementation class for the specific implementation: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/blob/master/linkis-engineconn-plugins/engineconn-plugins/spark/src/main/scala/com/webank/wedatasphere/linkis/engineplugin/spark/SparkEngineConnPlugin.scala"},"SparkEngineConnPlugin"),"."),(0,r.kt)("li",{parentName:"ul"},"EngineConnPluginServer: It is a microservice that loads all the EngineConnPlugins and provides externally the required resource generation capabilities of EngineConn and EngineConn's startup command generation capabilities."),(0,r.kt)("li",{parentName:"ul"},"EngineConnResourceFactory: Calculate the total resources needed when EngineConn starts this time through the parameters passed in."),(0,r.kt)("li",{parentName:"ul"},"EngineConnLaunchBuilder: Through the incoming parameters, a startup command of the EngineConn is generated to provide the ECM to start the engine.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"After AM obtains the engine resources, it will then call the RM service to apply for resources. The RM service will use the incoming Label, ECM, and the resources applied for this time to make resource judgments. First, it will judge whether the resources of the client corresponding to the Label are sufficient, and then judge whether the resources of the ECM service are sufficient, if the resources are sufficient, the resource application is approved this time, and the resources of the corresponding Label are added or subtracted.")),(0,r.kt)("h3",{id:"4-request-ecm-for-engine-creation"},"4. Request ECM for engine creation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"After completing the resource application for the engine, AM will encapsulate the engine startup request, send it to the corresponding ECM via RPC for service startup, and obtain the instance object of EngineConn."),(0,r.kt)("li",{parentName:"ol"},"AM will then determine whether EngineConn is successfully started and become available through the reported information of EngineConn. If it is, the result will be returned, and the process of adding an engine this time will end.")),(0,r.kt)("h2",{id:"2-ecm-initiates-engineconn"},"2. ECM initiates EngineConn"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Glossary:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EngineConnManager: EngineConn's manager. Provides engine life-cycle management, and at the same time reports load information and its own health status to RM."),(0,r.kt)("li",{parentName:"ul"},"EngineConnBuildRequest: The start engine command passed by LinkisManager to ECM, which encapsulates all tag information, required resources and some parameter configuration information of the engine."),(0,r.kt)("li",{parentName:"ul"},"EngineConnLaunchRequest: Contains the BML materials, environment variables, ECM required local environment variables, startup commands and other information required to start an EngineConn, so that ECM can build a complete EngineConn startup script based on this.")),(0,r.kt)("p",null,"After ECM receives the EngineConnBuildRequest command passed by LinkisManager, it is mainly divided into three steps to start EngineConn: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Request EngineConnPluginServer to obtain EngineConnLaunchRequest encapsulated by EngineConnPluginServer. "),(0,r.kt)("li",{parentName:"ol"},"Parse EngineConnLaunchRequest and encapsulate it into EngineConn startup script."),(0,r.kt)("li",{parentName:"ol"},"Execute startup script to start EngineConn.")),(0,r.kt)("h3",{id:"21-engineconnpluginserver-encapsulates-engineconnlaunchrequest"},"2.1 EngineConnPluginServer encapsulates EngineConnLaunchRequest"),(0,r.kt)("p",null,"Get the EngineConn type and corresponding version that actually needs to be started through the label information of EngineConnBuildRequest, get the EngineConnPlugin of the EngineConn type from the memory of EngineConnPluginServer, and convert the EngineConnBuildRequest into EngineConnLaunchRequest through the EngineConnLaunchBuilder of the EngineConnPlugin."),(0,r.kt)("h3",{id:"22-encapsulate-engineconn-startup-script"},"2.2 Encapsulate EngineConn startup script"),(0,r.kt)("p",null,"After the ECM obtains the EngineConnLaunchRequest, it downloads the BML materials in the EngineConnLaunchRequest to the local, and checks whether the local necessary environment variables required by the EngineConnLaunchRequest exist. After the verification is passed, the EngineConnLaunchRequest is encapsulated into an EngineConn startup script."),(0,r.kt)("h3",{id:"23-execute-startup-script"},"2.3 Execute startup script"),(0,r.kt)("p",null,"Currently, ECM only supports Bash commands for Unix systems, that is, only supports Linux systems to execute the startup script."),(0,r.kt)("p",null,"Before startup, the sudo command is used to switch to the corresponding requesting user to execute the script to ensure that the startup user (ie, JVM user) is the requesting user on the Client side."),(0,r.kt)("p",null,"After the startup script is executed, ECM will monitor the execution status and execution log of the script in real time. Once the execution status returns to non-zero, it will immediately report EngineConn startup failure to LinkisManager and the entire process is complete; otherwise, it will keep monitoring the log and status of the startup script until The script execution is complete."),(0,r.kt)("h2",{id:"3-engineconn-initialization"},"3. EngineConn initialization"),(0,r.kt)("p",null,"After ECM executed EngineConn's startup script, EngineConn microservice was officially launched."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Glossary:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EngineConn microservice: Refers to the actual microservices that include an EngineConn and one or more Executors to provide computing power for computing tasks. When we talk about adding an EngineConn, we actually mean adding an EngineConn microservice."),(0,r.kt)("li",{parentName:"ul"},"EngineConn: The engine connector is the actual connection unit with the underlying computing storage engine, and contains the session information with the actual engine. The difference between it and Executor is that EngineConn only acts as a connection and a client, and does not actually perform calculations. For example, SparkEngineConn, its session information is SparkSession."),(0,r.kt)("li",{parentName:"ul"},"Executor: As a real computing storage scenario executor, it is the actual computing storage logic execution unit. It abstracts the various capabilities of EngineConn and provides multiple different architectural capabilities such as interactive execution, subscription execution, and responsive execution.")),(0,r.kt)("p",null,"The initialization of EngineConn microservices is generally divided into three stages:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Initialize the EngineConn of the specific engine. First use the command line parameters of the Java main method to encapsulate an EngineCreationContext that contains relevant label information, startup information, and parameter information, and initialize EngineConn through EngineCreationContext to complete the establishment of the connection between EngineConn and the underlying Engine, such as: SparkEngineConn will initialize one at this stage SparkSession is used to establish a connection relationship with a Spark application."),(0,r.kt)("li",{parentName:"ol"},"Initialize the Executor. After the EngineConn is initialized, the corresponding Executor will be initialized according to the actual usage scenario to provide service capabilities for subsequent users. For example, the SparkEngineConn in the interactive computing scenario will initialize a series of Executors that can be used to submit and execute SQL, PySpark, and Scala code capabilities, and support the Client to submit and execute SQL, PySpark, Scala and other codes to the SparkEngineConn."),(0,r.kt)("li",{parentName:"ol"},"Report the heartbeat to LinkisManager regularly, and wait for EngineConn to exit. When the underlying engine corresponding to EngineConn is abnormal, or exceeds the maximum idle time, or Executor is executed, or the user manually kills, the EngineConn automatically ends and exits.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"At this point, The process of how to add a new EngineConn is basically over. Finally, let's make a summary:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The client initiates a request for adding EngineConn to LinkisManager."),(0,r.kt)("li",{parentName:"ul"},"LinkisManager checks the legitimacy of the parameters, first selects the appropriate ECM according to the label, then confirms the resources required for this new EngineConn according to the user's request, applies for resources from the RM module of LinkisManager, and requires ECM to start a new EngineConn as required after the application is passed."),(0,r.kt)("li",{parentName:"ul"},"ECM first requests EngineConnPluginServer to obtain an EngineConnLaunchRequest containing BML materials, environment variables, ECM required local environment variables, startup commands and other information needed to start an EngineConn, and then encapsulates the startup script of EngineConn, and finally executes the startup script to start the EngineConn."),(0,r.kt)("li",{parentName:"ul"},"EngineConn initializes the EngineConn of a specific engine, and then initializes the corresponding Executor according to the actual usage scenario, and provides service capabilities for subsequent users. Finally, report the heartbeat to LinkisManager regularly, and wait for the normal end or termination by the user.")))}h.isMDXComponent=!0},20737:function(e,n,t){n.Z=t.p+"assets/images/add_an_EngineConn_flow_chart-9a35b37d0a904fd177d753639fbc807b.png"}}]);