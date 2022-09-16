"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[60452],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,N=s["".concat(o,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(N,l(l({ref:t},k),{},{components:n})):r.createElement(N,l({ref:t},k))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},26771:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return k},default:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],p={title:"\u603b\u89c8",sidebar_position:0},o=void 0,c={unversionedId:"architecture/overview",id:"version-0.11.0/architecture/overview",isDocsHomePage:!1,title:"\u603b\u89c8",description:"1 Linkis\u7684\u8bbe\u8ba1\u521d\u8877",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/architecture/overview.md",sourceDirName:"architecture",slug:"/architecture/overview",permalink:"/zh-CN/docs/0.11.0/architecture/overview",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/architecture/overview.md",tags:[],version:"0.11.0",sidebarPosition:0,frontMatter:{title:"\u603b\u89c8",sidebar_position:0},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"WebSocket",permalink:"/zh-CN/docs/0.11.0/api/web-socket"},next:{title:"RM \u8bbe\u8ba1",permalink:"/zh-CN/docs/0.11.0/architecture/rm"}},k=[{value:"1 Linkis\u7684\u8bbe\u8ba1\u521d\u8877",id:"1-linkis\u7684\u8bbe\u8ba1\u521d\u8877",children:[]},{value:"2 Linkis\u7684\u6280\u672f\u67b6\u6784",id:"2-linkis\u7684\u6280\u672f\u67b6\u6784",children:[]},{value:"3 Linkis\u4e1a\u52a1\u67b6\u6784",id:"3-linkis\u4e1a\u52a1\u67b6\u6784",children:[]},{value:"4 Linkis\u5904\u7406\u6d41\u7a0b",id:"4-linkis\u5904\u7406\u6d41\u7a0b",children:[]}],u={toc:k};function s(e){var t=e.components,p=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-linkis\u7684\u8bbe\u8ba1\u521d\u8877"},"1 Linkis\u7684\u8bbe\u8ba1\u521d\u8877"),(0,i.kt)("p",null," \u5927\u6570\u636e\u5f00\u6e90\u751f\u6001\u5708\u51e0\u4e4e\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u6709\u81ea\u5df1\u7684\u4e00\u5957\u7528\u6237\u6743\u9650\u7ba1\u7406\u3001\u8d44\u6e90\u7ba1\u7406\u3001\u5143\u6570\u636e\u7ba1\u7406\u3001\u72ec\u7acb\u7684API\u63a5\u5165\u65b9\u5f0f\u548c\u4f7f\u7528\u65b9\u5f0f\u3002"),(0,i.kt)("p",null," \u800c\u4e14\u5404\u79cd\u65b0\u7684\u7ec4\u4ef6\u8fd8\u5728\u4e0d\u65ad\u51fa\u73b0\u3002"),(0,i.kt)("p",null," \u4f46\u662f\uff0c\u7528\u6237\u7684\u4e1a\u52a1\u9700\u6c42\u901a\u5e38\u9700\u8981\u591a\u4e2a\u5f00\u6e90\u7ec4\u4ef6\u534f\u540c\u5904\u7406\u624d\u80fd\u5b9e\u73b0\u3002"),(0,i.kt)("p",null," \u4e3a\u4e86\u4e00\u4e2a\u4e1a\u52a1\u9700\u6c42\uff0c\u7528\u6237\u9700\u8981\u5b66\u4e60\u591a\u4e2a\u4ea7\u54c1\u7684\u4f7f\u7528\u624b\u518c\uff0c\u9700\u8981\u5728\u591a\u4e2a\u4ea7\u54c1\u4e0a\u505a\u91cd\u590d\u7684\u5b9a\u5236\u5316\u5f00\u53d1\uff0c\u624d\u80fd\u771f\u6b63\u5c06\u5f00\u6e90\u7ec4\u4ef6\u5f15\u5165\u5230\u5b9e\u9645\u7684\u751f\u4ea7\u73af\u5883\u4e2d\u3002"),(0,i.kt)("p",null," \u8fd9\u7ed9\u7528\u6237\u5e26\u6765\u4e86\u6781\u5176\u9ad8\u6602\u7684\u5b66\u4e60\u6210\u672c\u548c\u989d\u5916\u5de5\u4f5c\u91cf\uff0c\u8fd0\u7ef4\u65b9\u9762\u4e5f\u9700\u8981\u5927\u91cf\u91cd\u590d\u7684\u7ef4\u62a4\u7ba1\u7406\u5de5\u4f5c\u3002"),(0,i.kt)("p",null," \u540c\u65f6\uff0c\u4e0a\u5c42\u7684\u529f\u80fd\u5de5\u5177\u4ea7\u54c1\u548c\u5e95\u5c42\u7684\u8ba1\u7b97\u5b58\u50a8\u7cfb\u7edf\u8026\u5408\u5ea6\u8fc7\u9ad8\uff0c\u5c42\u6b21\u7ed3\u6784\u3001\u8c03\u7528\u5173\u7cfb\u4e0d\u591f\u6e05\u6670\u548c\u89e3\u8026\uff0c\u5bfc\u81f4\u5e95\u5c42\u73af\u5883\u4e00\u65e6\u53d1\u751f\u4efb\u4f55\u6539\u53d8\uff0c\u90fd\u4f1a\u76f4\u63a5\u5f71\u54cd\u4e1a\u52a1\u4ea7\u54c1\u7684\u6b63\u5e38\u4f7f\u7528\u3002"),(0,i.kt)("p",null," \u5982\u4f55\u63d0\u4f9b\u4e00\u5957\u7edf\u4e00\u7684\u6570\u636e\u4e2d\u95f4\u4ef6\uff0c\u5bf9\u63a5\u4e0a\u5c42\u5e94\u7528\u5de5\u5177\uff0c\u5c4f\u853d\u6389\u5e95\u5c42\u7684\u5404\u79cd\u8c03\u7528\u548c\u4f7f\u7528\u7ec6\u8282\uff0c\u771f\u6b63\u505a\u5230\u8ba9\u4e1a\u52a1\u7528\u6237\u53ea\u9700\u5173\u6ce8\u4e1a\u52a1\u5b9e\u73b0\u7ec6\u8282\uff0c\u5c31\u7b97\u5e95\u5c42\u5927\u6570\u636e\u5e73\u53f0\u673a\u623f\u6269\u5efa\u3001\u6574\u4f53\u642c\u8fc1\u90fd\u4e0d\u53d7\u5f71\u54cd\uff0c\u662fLinkis\u7684\u8bbe\u8ba1\u521d\u8877\uff01"),(0,i.kt)("h2",{id:"2-linkis\u7684\u6280\u672f\u67b6\u6784"},"2 Linkis\u7684\u6280\u672f\u67b6\u6784"),(0,i.kt)("p",null," ",(0,i.kt)("img",{alt:"\u6280\u672f\u67b6\u6784",src:n(20776).Z})),(0,i.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u6211\u4eec\u57fa\u4e8e\u76ee\u524d\u6d41\u884c\u7684SpringCloud\u5fae\u670d\u52a1\u6280\u672f\uff0c\u65b0\u5efa\u4e86\u591a\u4e2a\u5fae\u670d\u52a1\u96c6\u7fa4\uff0c\u6765\u63d0\u4f9b\u9ad8\u53ef\u7528\u80fd\u529b\u3002"),(0,i.kt)("p",null,"\u6bcf\u4e2a\u5fae\u670d\u52a1\u96c6\u7fa4\u5404\u81ea\u627f\u62c5\u7cfb\u7edf\u7684\u4e00\u90e8\u5206\u529f\u80fd\u804c\u8d23\uff0c\u6211\u4eec\u5bf9\u5176\u8fdb\u884c\u4e86\u5982\u4e0b\u660e\u786e\u7684\u5212\u5206\u3002\u5982\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u7edf\u4e00\u4f5c\u4e1a\u6267\u884c\u670d\u52a1"),"\uff1a\u4e00\u4e2a\u5206\u5e03\u5f0f\u7684REST/WebSocket\u670d\u52a1\uff0c\u7528\u4e8e\u63a5\u6536\u7528\u6237\u63d0\u4ea4\u7684\u5404\u79cd\u811a\u672c\u8bf7\u6c42\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u76ee\u524d\u652f\u6301\u7684\u8ba1\u7b97\u5f15\u64ce\u6709"),"\uff1aSpark\u3001Python\u3001TiSpark\u3001Hive\u548cShell\u7b49\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u652f\u6301\u7684\u811a\u672c\u8bed\u8a00\u6709"),"\uff1aSparkSQL\u3001Spark Scala\u3001Pyspark\u3001R\u3001Python\u3001HQL\u548cShell\u7b49\uff1b"),(0,i.kt)("p",{parentName:"li"},"\u66f4\u591a\u5173\u4e8e\u7edf\u4e00\u4f5c\u4e1a\u6267\u884c\u670d\u52a1\u7684\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/0.11.0/architecture/ujes/ujes-design"},"UJES\u67b6\u6784\u8bbe\u8ba1\u6587\u6863"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u8d44\u6e90\u7ba1\u7406\u670d\u52a1"),"\uff1a \u652f\u6301\u5b9e\u65f6\u7ba1\u63a7\u6bcf\u4e2a\u7cfb\u7edf\u548c\u7528\u6237\u7684\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\uff0c\u9650\u5236\u7cfb\u7edf\u548c\u7528\u6237\u7684\u8d44\u6e90\u4f7f\u7528\u91cf\u548c\u5e76\u53d1\u6570\uff0c\u5e76\u63d0\u4f9b\u5b9e\u65f6\u7684\u8d44\u6e90\u52a8\u6001\u56fe\u8868\uff0c\u65b9\u4fbf\u67e5\u770b\u548c\u7ba1\u7406\u7cfb\u7edf\u548c\u7528\u6237\u7684\u8d44\u6e90\uff1b"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u76ee\u524d\u5df2\u652f\u6301\u7684\u8d44\u6e90\u7c7b\u578b"),"\uff1aYarn\u961f\u5217\u8d44\u6e90\u3001\u670d\u52a1\u5668\uff08CPU\u548c\u5185\u5b58\uff09\u3001\u7528\u6237\u5e76\u53d1\u4e2a\u6570\u7b49\u3002"),(0,i.kt)("p",{parentName:"li"},"\u66f4\u591a\u5173\u4e8e\u8d44\u6e90\u7ba1\u7406\u670d\u52a1\u7684\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/0.11.0/architecture/rm"},"RM\u67b6\u6784\u8bbe\u8ba1\u6587\u6863"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("del",{parentName:"p"},(0,i.kt)("strong",{parentName:"del"},"\u5e94\u7528\u7ba1\u7406\u670d\u52a1(\u5f00\u6e90\u7248\u672c\u6682\u65e0)"),"\uff1a\u7ba1\u7406\u6240\u6709\u7cfb\u7edf\u7684\u6240\u6709\u7528\u6237\u5e94\u7528\uff0c\u5305\u62ec\u79bb\u7ebf\u6279\u91cf\u5e94\u7528\u3001\u4ea4\u4e92\u5f0f\u67e5\u8be2\u5e94\u7528\u548c\u5b9e\u65f6\u6d41\u5f0f\u5e94\u7528\uff0c\u4e3a\u79bb\u7ebf\u548c\u4ea4\u4e92\u5f0f\u5e94\u7528\u63d0\u4f9b\u5f3a\u5927\u7684\u590d\u7528\u80fd\u529b\uff0c\u5e76\u63d0\u4f9b\u5e94\u7528\u5168\u751f\u547d\u5468\u671f\u7ba1\u7406\uff0c\u81ea\u52a8\u91ca\u653e\u7528\u6237\u591a\u4f59\u7684\u7a7a\u95f2\u5e94\u7528\uff1b"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u7edf\u4e00\u5b58\u50a8\u670d\u52a1"),"\uff1a\u901a\u7528\u7684IO\u67b6\u6784\uff0c\u80fd\u5feb\u901f\u5bf9\u63a5\u5404\u79cd\u5b58\u50a8\u7cfb\u7edf\uff0c\u63d0\u4f9b\u7edf\u4e00\u8c03\u7528\u5165\u53e3\uff0c\u652f\u6301\u6240\u6709\u5e38\u7528\u683c\u5f0f\u6570\u636e\uff0c\u96c6\u6210\u5ea6\u9ad8\uff0c\u7b80\u5355\u6613\u7528\uff1b"),(0,i.kt)("p",{parentName:"li"},"\u66f4\u591a\u7edf\u4e00\u5b58\u50a8\u670d\u52a1\u7684\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b","[Storage\u67b6\u6784\u8bbe\u8ba1\u6587\u6863]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u7edf\u4e00\u4e0a\u4e0b\u6587\u670d\u52a1"),"\uff1a\u7edf\u4e00\u7528\u6237\u548c\u7cfb\u7edf\u8d44\u6e90\u6587\u4ef6\uff08JAR\u3001ZIP\u3001Properties\u7b49\uff09\uff0c\u7528\u6237\u3001\u7cfb\u7edf\u3001\u8ba1\u7b97\u5f15\u64ce\u7684\u53c2\u6570\u548c\u53d8\u91cf\u7edf\u4e00\u7ba1\u7406\uff0c\u4e00\u5904\u8bbe\u7f6e\uff0c\u5904\u5904\u81ea\u52a8\u5f15\u7528\uff1b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u7269\u6599\u5e93"),"\uff1a\u7cfb\u7edf\u548c\u7528\u6237\u7ea7\u7269\u6599\u7ba1\u7406\uff0c\u53ef\u5206\u4eab\u548c\u6d41\u8f6c\uff0c\u652f\u6301\u5168\u751f\u547d\u5468\u671f\u81ea\u52a8\u7ba1\u7406\uff1b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u5143\u6570\u636e\u670d\u52a1"),"\uff1a\u5b9e\u65f6\u7684\u5e93\u8868\u7ed3\u6784\u548c\u5206\u533a\u60c5\u51b5\u5c55\u793a\u3002"))),(0,i.kt)("p",null,"\u4f9d\u8d56\u4e8e\u8fd9\u4e9b\u5fae\u670d\u52a1\u7684\u76f8\u4e92\u534f\u4f5c\uff0c\u5bf9\u5916\u6784\u5efa\u4e00\u4e2a\u96c6\u4e2d\u7684\u3001\u7edf\u4e00\u7684\u5927\u6570\u636e\u5e73\u53f0\u670d\u52a1\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e9b\u670d\u52a1\u7684\u6784\u5efa\uff0c\u6211\u4eec\u6539\u5584\u4e86\u6574\u4e2a\u5927\u6570\u636e\u5e73\u53f0\u5bf9\u5916\u670d\u52a1\u7684\u65b9\u5f0f\u548c\u6d41\u7a0b\u3002"),(0,i.kt)("h2",{id:"3-linkis\u4e1a\u52a1\u67b6\u6784"},"3 Linkis\u4e1a\u52a1\u67b6\u6784"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u4e1a\u52a1\u67b6\u6784",src:n(93859).Z})),(0,i.kt)("p",null,"\u540d\u8bcd\u89e3\u91ca\uff1a"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1) Gateway\u7f51\u5173:")),(0,i.kt)("p",null," \u57fa\u4e8eSpring Cloud Gateway\u8fdb\u884c\u4e86\u63d2\u4ef6\u5316\u529f\u80fd\u589e\u5f3a\uff0c\u65b0\u589e\u4e86WebSocket\u4e00\u5bf9\u591a\u80fd\u529b\u7684\u7f51\u5173\u670d\u52a1\uff0c\u4e3b\u8981\u7528\u4e8e\u89e3\u6790\u548c\u8def\u7531\u8f6c\u53d1\u7528\u6237\u7684\u8bf7\u6c42\u5230\u6307\u5b9a\u5fae\u670d\u52a1\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2) \u7edf\u4e00\u5165\u53e3:")),(0,i.kt)("p",null," \u7edf\u4e00\u5165\u53e3\u662f\u7528\u6237\u67d0\u4e00\u7c7b\u5f15\u64ce\u4f5c\u4e1a\u7684Job\u751f\u547d\u5468\u671f\u7ba1\u7406\u8005\u3002"),(0,i.kt)("p",null," \u4ece\u4f5c\u4e1a\u751f\u6210\u5230\u63d0\u4ea4\u5230\u6267\u884c\u5f15\u64ce\uff0c\u518d\u5230\u4f5c\u4e1a\u4fe1\u606f\u53cd\u9988\u7ed9\u7528\u6237\u548c\u4f5c\u4e1a\u5173\u95ed\uff0cEntrance\u7ba1\u7406\u4e86\u4e00\u4e2a\u4f5c\u4e1a\u7684\u5168\u751f\u547d\u5468\u671f\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3) \u5f15\u64ce\u7ba1\u7406\u5668:")),(0,i.kt)("p",null," \u5f15\u64ce\u7ba1\u7406\u5668\u8d1f\u8d23\u7ba1\u7406\u5f15\u64ce\u7684\u5168\u751f\u547d\u5468\u671f\u3002"),(0,i.kt)("p",null," \u8d1f\u8d23\u5411\u8d44\u6e90\u7ba1\u7406\u670d\u52a1\u7533\u8bf7\u548c\u9501\u5b9a\u8d44\u6e90\uff0c\u5e76\u5b9e\u4f8b\u5316\u65b0\u7684\u5f15\u64ce\uff0c\u4e5f\u8d1f\u8d23\u76d1\u63a7\u5f15\u64ce\u7684\u751f\u547d\u72b6\u6001\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4) \u6267\u884c\u5f15\u64ce:")),(0,i.kt)("p",null," \u6267\u884c\u5f15\u64ce\u662f\u771f\u6b63\u6267\u884c\u7528\u6237\u4f5c\u4e1a\u7684\u5fae\u670d\u52a1\uff0c\u5b83\u7531\u5f15\u64ce\u7ba1\u7406\u5668\u542f\u52a8\u3002"),(0,i.kt)("p",null," \u4e3a\u4e86\u63d0\u5347\u4ea4\u4e92\u6027\u80fd\uff0c\u5f15\u64ce\u670d\u52a1\u662f\u76f4\u63a5\u8ddf\u63d0\u4ea4\u7ed9\u5b83\u4f5c\u4e1a\u7684\u7edf\u4e00\u5165\u53e3\u8fdb\u884c\u4ea4\u4e92\uff0c\u5c06\u4f5c\u4e1a\u6b63\u786e\u6267\u884c\uff0c\u5e76\u53cd\u9988\u7528\u6237\u9700\u8981\u7684\u5404\u79cd\u4fe1\u606f\uff0c\u5982\u65e5\u5fd7\u3001\u8fdb\u5ea6\u3001\u72b6\u6001\u548c\u7ed3\u679c\u96c6\u7b49\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"5) \u8d44\u6e90\u7ba1\u7406\u670d\u52a1")),(0,i.kt)("p",null," \u5b9e\u65f6\u7ba1\u63a7\u6bcf\u4e2a\u7cfb\u7edf\u548c\u6bcf\u4e2a\u7528\u6237\u7684\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\uff0c\u7ba1\u7406\u5fae\u670d\u52a1\u96c6\u7fa4\u7684\u8d44\u6e90\u4f7f\u7528\u548c\u5b9e\u9645\u8d1f\u8f7d\uff0c\u9650\u5236\u7cfb\u7edf\u548c\u7528\u6237\u7684\u8d44\u6e90\u4f7f\u7528\u91cf\u548c\u5e76\u53d1\u6570\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"6) Eureka")),(0,i.kt)("p",null," Eureka\u662fNetflix\u5f00\u53d1\u7684\u670d\u52a1\u53d1\u73b0\u6846\u67b6\uff0cSpringCloud\u5c06\u5b83\u96c6\u6210\u5728\u5176\u5b50\u9879\u76eespring-cloud-netflix\u4e2d\uff0c\u4ee5\u5b9e\u73b0SpringCloud\u7684\u670d\u52a1\u53d1\u73b0\u529f\u80fd\u3002"),(0,i.kt)("p",null," \u6bcf\u4e2a\u5fae\u670d\u52a1\u90fd\u5185\u7f6e\u4e86Eureka Client\uff0c\u53ef\u4ee5\u8bbf\u95eeEureka Server\uff0c\u5b9e\u65f6\u83b7\u5f97\u670d\u52a1\u53d1\u73b0\u7684\u80fd\u529b\u3002"),(0,i.kt)("h2",{id:"4-linkis\u5904\u7406\u6d41\u7a0b"},"4 Linkis\u5904\u7406\u6d41\u7a0b"),(0,i.kt)("p",null,"\u4e0b\u9762\u5f00\u59cb\u4ecb\u7ecd\u7528\u6237\u5728\u4e0a\u5c42\u7cfb\u7edf\u63d0\u4ea4\u4e86\u4e00\u4e2aSQL\uff0cLinkis\u662f\u5982\u4f55\u6267\u884c\u5e76\u8fd4\u56de\u7ed3\u679c\u7684\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u6d41\u7a0b\u65f6\u5e8f\u56fe",src:n(42937).Z})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4e0a\u5c42\u7cfb\u7edf\u7684\u7528\u6237\u63d0\u4ea4\u4e00\u4e2aSQL\uff0c\u5148\u7ecf\u8fc7Gateway\uff0cGateway\u8d1f\u8d23\u89e3\u6790\u7528\u6237\u8bf7\u6c42\uff0c\u5e76\u8def\u7531\u8f6c\u53d1\u7ed9\u5408\u9002\u7684\u7edf\u4e00\u5165\u53e3Entrance")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"entrance\u4f1a\u5148\u5bfb\u627e\u8be5\u7cfb\u7edf\u7684\u8be5\u7528\u6237\u662f\u5426\u5b58\u5728\u53ef\u7528\u7684Spark\u5f15\u64ce\u670d\u52a1\uff0c\u5982\u679c\u5b58\u5728\uff0c\u5219\u76f4\u63a5\u5c06\u8bf7\u6c42\u63d0\u4ea4\u7ed9Spark\u5f15\u64ce\u670d\u52a1")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4e0d\u5b58\u5728\u53ef\u7528Spark\u5f15\u64ce\u670d\u52a1\uff0c\u5f00\u59cb\u901a\u8fc7Eureka\u7684\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u529f\u80fd\uff0c\u62ff\u5230\u6240\u6709\u7684\u5f15\u64ce\u7ba1\u7406\u5668\u5217\u8868\uff0c\u901a\u8fc7\u8bf7\u6c42RM\u5b9e\u65f6\u83b7\u53d6\u5f15\u64ce\u7ba1\u7406\u5668\u7684\u5b9e\u9645\u8d1f\u8f7d")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Entrance\u62ff\u5230\u8d1f\u8f7d\u6700\u4f4e\u7684\u5f15\u64ce\u7ba1\u7406\u5668\uff0c\u5f00\u59cb\u8981\u6c42\u5f15\u64ce\u7ba1\u7406\u5668\u542f\u52a8\u4e00\u4e2aSpark\u5f15\u64ce\u670d\u52a1")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5f15\u64ce\u7ba1\u7406\u5668\u63a5\u6536\u5230\u8bf7\u6c42\uff0c\u5f00\u59cb\u8be2\u95eeRM\u8be5\u7cfb\u7edf\u4e0b\u7684\u8be5\u7528\u6237\uff0c\u662f\u5426\u53ef\u4ee5\u542f\u52a8\u65b0\u5f15\u64ce")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u53ef\u4ee5\u542f\u52a8\uff0c\u5219\u5f00\u59cb\u8bf7\u6c42\u8d44\u6e90\u5e76\u9501\u5b9a\uff1b\u5426\u5219\u8fd4\u56de\u542f\u52a8\u5931\u8d25\u7684\u5f02\u5e38\u7ed9\u5230Entrance")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9501\u5b9a\u8d44\u6e90\u6210\u529f\uff0c\u5f00\u59cb\u542f\u52a8\u65b0\u7684spark\u5f15\u64ce\u670d\u52a1\uff1b\u542f\u52a8\u6210\u529f\u540e\uff0c\u5c06\u65b0Spark\u65b0\u5f15\u64ce\u8fd4\u56de\u7ed9Entrance")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Entrance\u62ff\u5230\u65b0\u5f15\u64ce\u540e\uff0c\u5f00\u59cb\u5411\u65b0\u5f15\u64ce\u8bf7\u6c42\u6267\u884cSQL")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Spark\u65b0\u5f15\u64ce\u63a5\u6536SQL\u8bf7\u6c42\uff0c\u5f00\u59cb\u5411Yarn\u63d0\u4ea4\u6267\u884cSQL\uff0c\u5e76\u5b9e\u65f6\u63a8\u9001\u65e5\u5fd7\u3001\u8fdb\u5ea6\u548c\u72b6\u6001\u7ed9Entrance")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Entrance\u5c06\u83b7\u53d6\u7684\u65e5\u5fd7\u3001\u8fdb\u5ea6\u548c\u72b6\u6001\u5b9e\u65f6\u63a8\u9001\u7ed9Gateway")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Gateway\u56de\u63a8\u65e5\u5fd7\u3001\u8fdb\u5ea6\u548c\u72b6\u6001\u7ed9\u524d\u7aef")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4e00\u65e6SQL\u6267\u884c\u6210\u529f\uff0cEngine\u4e3b\u52a8\u5c06\u7ed3\u679c\u96c6\u63a8\u7ed9Entrance\uff0cEntrance\u901a\u77e5\u524d\u7aef\u62ff\u53d6\u7ed3\u679c\u3002"))),(0,i.kt)("p",null,"\u5173\u4e8eEntrance/EngineManager/Engine\u5f02\u5e38\u60c5\u51b5\u4e0b\u7684\u8bbe\u8ba1\u65b9\u6848\uff0c\u8bf7\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/0.11.0/architecture/ujes/ujes-design"},"UJES\u67b6\u6784\u8bbe\u8ba1\u6587\u6863")))}s.isMDXComponent=!0},93859:function(e,t,n){t.Z=n.p+"assets/images/business_architecture_diagram-a5f5a91e4aec0ecfc0e85350c233d4bb.png"},42937:function(e,t,n){t.Z=n.p+"assets/images/process_sequence_diagram-1d6905a4e4e8b936d5d98c5f8ba8aaee.png"},20776:function(e,t,n){t.Z=n.p+"assets/images/technical_architecture_diagram-30c66a1c785438ea4f384db06af653b8.png"}}]);