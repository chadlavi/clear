(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[0],{11:function(n,e,t){n.exports=t(18)},18:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(6),l=t.n(o),i=t(10),c=t(1),d=function(){return(d=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var a in e=arguments[t])Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}).apply(this,arguments)};function u(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]])}return t}function b(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var s,p,f,m,g,x,h,k,v,w,E,y,z,O={background:"white",border:"#ddd",error:"#cf0303",link:"#55e",textColor:"#111",zebra:"#f8f8f8"},j={background:"#111",border:"#555",error:"#ff5656",link:"#6c6cf0",textColor:"white",zebra:"#242424"},S={breakpoint:{xs:600,sm:960,md:1280,lg:1920},fontSize:{default:16,label:14.4},width:{main:720},unit:8},C=Object(c.a)(s||(s=b(["\n  :root {\n    --background: ",";\n    --border: ",";\n    --error: ",";\n    --link: ",";\n    --text-color: ",";\n    --zebra: ",";\n  }\n\n  @media (prefers-color-scheme: dark) {\n    :root {\n      --background: ",";\n      --border: ",";\n      --error: ",";\n      --link: ",";\n      --text-color: ",";\n      --zebra: ",";\n    }\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  *:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px var(--background), 0 0 0 4px var(--link);\n  }\n\n  body {\n    margin: 0;\n    background-color: var(--background);\n    color: var(--text-color);\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    font-size: ","px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"],["\n  :root {\n    --background: ",";\n    --border: ",";\n    --error: ",";\n    --link: ",";\n    --text-color: ",";\n    --zebra: ",";\n  }\n\n  @media (prefers-color-scheme: dark) {\n    :root {\n      --background: ",";\n      --border: ",";\n      --error: ",";\n      --link: ",";\n      --text-color: ",";\n      --zebra: ",";\n    }\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  *:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px var(--background), 0 0 0 4px var(--link);\n  }\n\n  body {\n    margin: 0;\n    background-color: var(--background);\n    color: var(--text-color);\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    font-size: ","px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"])),O.background,O.background,O.error,O.link,O.textColor,O.zebra,j.background,j.border,j.error,j.link,j.textColor,j.zebra,S.fontSize.default),F=c.b.div(p||(p=b(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: ","px;\n  & > div {\n    padding: ","px;\n  }\n"],["\n  display: flex;\n  flex-wrap: wrap;\n  padding: ","px;\n  & > div {\n    padding: ","px;\n  }\n"])),(function(n){return n.spacing?n.spacing/2:0}),(function(n){return n.spacing?n.spacing/2:0})),P=function(n){return Object(r.createElement)(F,d({},n))},B=c.b.div(f||(f=b(["\n  flex-basis: calc(100% * "," / 12);\n  width: calc(100% * "," / 12);\n  @media only screen and (max-width: ","px) {\n    flex-basis: 100%;\n    width: 100%;\n  }\n"],["\n  flex-basis: calc(100% * "," / 12);\n  width: calc(100% * "," / 12);\n  @media only screen and (max-width: ","px) {\n    flex-basis: 100%;\n    width: 100%;\n  }\n"])),(function(n){return n.size}),(function(n){return n.size}),S.breakpoint.xs),M=function(n){var e=n.children,t=n.size;return Object(r.createElement)(B,{size:t||12},e)},I=c.b.label(m||(m=b(["\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  width: 100%;\n  & > span {\n    font-size: ","px;\n  }\n"],["\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  width: 100%;\n  & > span {\n    font-size: ","px;\n  }\n"])),(function(n){return n.error?"var(--error)":"inherit"}),(function(n){return n.disabled?.5:1}),S.fontSize.label),U=c.b.input(g||(g=b(["\n  background-color: var(--background);\n  color: var(--",");\n  border: 1px solid var(--",");\n  border-radius: ","px;\n  padding: ","px;\n  font-size: inherit;\n  margin: ","px 0;\n  width: 100%;\n  -webkit-appearance: none;\n"],["\n  background-color: var(--background);\n  color: var(--",");\n  border: 1px solid var(--",");\n  border-radius: ","px;\n  padding: ","px;\n  font-size: inherit;\n  margin: ","px 0;\n  width: 100%;\n  -webkit-appearance: none;\n"])),(function(n){return n.error?"error":"textColor"}),(function(n){return n.error?"error":"border"}),S.unit,1.5*S.unit,S.unit/2),_=function(n){var e=n.label,t=n.value,a=u(n,["label","value"]);return Object(r.createElement)(I,{disabled:a.disabled,error:a.error},Object(r.createElement)("span",null,e),Object(r.createElement)(U,d({},a,{value:t||" "})))},D=c.b.a(x||(x=b(["\n  color: var(--link);\n  &[target='_blank']::after {\n    content: ' [\\2197]';\n  }\n"],["\n  color: var(--link);\n  &[target='_blank']::after {\n    content: ' [\\\\2197]';\n  }\n"]))),H=function(n){var e=n.external,t=u(n,["external"]);return Object(r.createElement)(D,d({},t,{target:e?"_blank":t.target,title:t.title||t.href}))},J=c.b.main(h||(h=b(["\nmargin: 0 auto;\npadding: ","px;\nwidth: ","px;\nmax-width: 100%;\n"],["\nmargin: 0 auto;\npadding: ","px;\nwidth: ","px;\nmax-width: 100%;\n"])),S.unit,S.width.main),N=function(n){return Object(r.createElement)(J,d({},n))},R=c.b.table(k||(k=b(["\n  border-collapse: collapse;\n  flex-basis: 100%;\n  width: 100%;\n"],["\n  border-collapse: collapse;\n  flex-basis: 100%;\n  width: 100%;\n"]))),W=function(n){return Object(r.createElement)(R,d({},n))},T=c.b.thead(v||(v=b([""],[""]))),$=function(n){return Object(r.createElement)(T,d({},n))},q=c.b.tbody(w||(w=b([""],[""]))),A=function(n){return Object(r.createElement)(q,d({},n))},G=c.b.td(E||(E=b(["\n  text-align: left;\n  padding: ","px;\n"],["\n  text-align: left;\n  padding: ","px;\n"])),S.unit),K=function(n){return Object(r.createElement)(G,d({},n))},L=c.b.th(y||(y=b(["\n  font-weight: normal;\n  font-size: 0.8rem;\n  padding-bottom: 0;\n  text-align: left;\n  padding: 8px;\n"],["\n  font-weight: normal;\n  font-size: 0.8rem;\n  padding-bottom: 0;\n  text-align: left;\n  padding: 8px;\n"]))),Q=function(n){return Object(r.createElement)(L,d({},n))},V=c.b.tr(z||(z=b(["\n  &:nth-child(even) td {\n    background-color: var(--zebra);\n  }\n  &:nth-child(even) td:first-child {\n    border-radius: ","px 0 0 ","px;\n  }\n  &:nth-child(even) td:last-child {\n    border-radius: 0 ","px ","px 0;\n  }\n"],["\n  &:nth-child(even) td {\n    background-color: var(--zebra);\n  }\n  &:nth-child(even) td:first-child {\n    border-radius: ","px 0 0 ","px;\n  }\n  &:nth-child(even) td:last-child {\n    border-radius: 0 ","px ","px 0;\n  }\n"])),S.unit,S.unit,S.unit,S.unit),X=function(n){return Object(r.createElement)(V,d({},n))};var Y=function(){var n=a.a.useState(),e=Object(i.a)(n,2),t=e[0],r=e[1],o=function(n){var e=parseFloat(n.currentTarget.value||"0");console.log(e),r(e)};return a.a.createElement(a.a.Fragment,null,a.a.createElement(C,null),a.a.createElement(N,null,a.a.createElement(H,{href:"https://example.com",external:!0},"example link"),a.a.createElement(W,null,a.a.createElement($,null,a.a.createElement(X,null,a.a.createElement(Q,null,"Foo"),a.a.createElement(Q,null,"Bar"))),a.a.createElement(A,null,a.a.createElement(X,null,a.a.createElement(K,null,"gork"),a.a.createElement(K,null,"blork")),a.a.createElement(X,null,a.a.createElement(K,null,"foog"),a.a.createElement(K,null,"frob")),a.a.createElement(X,null,a.a.createElement(K,null,"gork"),a.a.createElement(K,null,"blork")),a.a.createElement(X,null,a.a.createElement(K,null,"foog"),a.a.createElement(K,null,"frob")))),a.a.createElement(P,{spacing:8},a.a.createElement(M,{size:6},a.a.createElement(_,{value:t,onChange:o,type:"number",inputMode:"decimal",pattern:"[0-9]*",label:"foobar"})),a.a.createElement(M,{size:6},a.a.createElement(_,{value:t,onChange:o,type:"number",inputMode:"decimal",pattern:"[0-9]*",label:"foobar"})),a.a.createElement(M,{size:3},a.a.createElement("div",{style:{height:"20px",width:"100%",background:"green"}})),a.a.createElement(M,{size:9},a.a.createElement("div",{style:{height:"20px",width:"100%",background:"orange"}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.e23f9e0f.chunk.js.map