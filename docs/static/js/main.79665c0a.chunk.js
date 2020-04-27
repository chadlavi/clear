(this["webpackJsonpclear-playground"]=this["webpackJsonpclear-playground"]||[]).push([[0],{24:function(e,n,t){e.exports=t(35)},35:function(e,n,t){"use strict";t.r(n);var l=t(0),a=t.n(l),r=t(18),c=t.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(3),i=t(8),u=t(2),s=function(){return(s=Object.assign||function(e){for(var n,t=1,l=arguments.length;t<l;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};function m(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)n.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(t[l[a]]=e[l[a]])}return t}function d(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}var p,b,E,h,g,f,v,y,x,k,w,z,T,O,S,C,j,L=Object(u.b)("code")(p||(p=d(["\n  border: 1px solid var(--clear-border);\n  font-size: 0.9em;\n  display: inline;\n  margin: 0;\n  background: var(--clear-zebra);\n  padding: calc(var(--clear-unit) / 2 - 2px) calc(var(--clear-unit) / 2 - 1px);\n  border-radius: calc(var(--clear-unit) / 2);\n"],["\n  border: 1px solid var(--clear-border);\n  font-size: 0.9em;\n  display: inline;\n  margin: 0;\n  background: var(--clear-zebra);\n  padding: calc(var(--clear-unit) / 2 - 2px) calc(var(--clear-unit) / 2 - 1px);\n  border-radius: calc(var(--clear-unit) / 2);\n"]))),H=Object(u.b)((function(e){e.spacing;var n=m(e,["spacing"]);return Object(l.createElement)("div",s({},n))}))(b||(b=d(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: ","px;\n  & > div {\n    padding: ","px;\n  }\n"],["\n  display: flex;\n  flex-wrap: wrap;\n  padding: ","px;\n  & > div {\n    padding: ","px;\n  }\n"])),(function(e){return e.spacing?e.spacing/2:0}),(function(e){return e.spacing?e.spacing/2:0})),I={background:"white",border:"#ddd",error:"#cf0303",link:"#55e",textColor:"#111",zebra:"#f8f8f8"},M={background:"#111",border:"#555",error:"#ff5656",link:"#6c6cf0",textColor:"white",zebra:"#242424"},B="\n:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px var(--clear-background), 0 0 0 4px var(--clear-link);\n}\n",P={breakpoint:{xs:600,sm:960,md:1280,lg:1920},fontSize:{default:16,label:14.4},width:{main:720},unit:8},F=Object(u.a)(E||(E=d(["\n  :root {\n    --clear-background: ",";\n    --clear-border: ",";\n    --clear-error: ",";\n    --clear-link: ",";\n    --clear-text-color: ",";\n    --clear-zebra: ",";\n    --clear-unit: ","px;\n    --clear-font-size-default: ","px;\n    --clear-font-size-label: ","px;\n  }\n\n  @media (prefers-color-scheme: dark) {\n    :root {\n      --clear-background: ",";\n      --clear-border: ",";\n      --clear-error: ",";\n      --clear-link: ",";\n      --clear-text-color: ",";\n      --clear-zebra: ",";\n    }\n  }\n  "],["\n  :root {\n    --clear-background: ",";\n    --clear-border: ",";\n    --clear-error: ",";\n    --clear-link: ",";\n    --clear-text-color: ",";\n    --clear-zebra: ",";\n    --clear-unit: ","px;\n    --clear-font-size-default: ","px;\n    --clear-font-size-label: ","px;\n  }\n\n  @media (prefers-color-scheme: dark) {\n    :root {\n      --clear-background: ",";\n      --clear-border: ",";\n      --clear-error: ",";\n      --clear-link: ",";\n      --clear-text-color: ",";\n      --clear-zebra: ",";\n    }\n  }\n  "])),I.background,I.border,I.error,I.link,I.textColor,I.zebra,P.unit,P.fontSize.default,P.fontSize.label,M.background,M.border,M.error,M.link,M.textColor,M.zebra),G=Object(u.a)(h||(h=d(["\n  body {\n    margin: 0;\n    background-color: var(--clear-background);\n    color: var(--clear-text-color);\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    font-size: var(--clear-font-size-default);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"],["\n  body {\n    margin: 0;\n    background-color: var(--clear-background);\n    color: var(--clear-text-color);\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    font-size: var(--clear-font-size-default);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"]))),U=Object(u.b)((function(e){e.size;var n=m(e,["size"]);return Object(l.createElement)("div",s({},n))}))(g||(g=d(["\n  flex-basis: calc(100% * "," / 12);\n  width: calc(100% * "," / 12);\n  @media only screen and (max-width: ","px) {\n    flex-basis: 100%;\n    width: 100%;\n  }\n"],["\n  flex-basis: calc(100% * "," / 12);\n  width: calc(100% * "," / 12);\n  @media only screen and (max-width: ","px) {\n    flex-basis: 100%;\n    width: 100%;\n  }\n"])),(function(e){return e.size||12}),(function(e){return e.size||12}),P.breakpoint.xs),R=Object(u.b)("h1")(f||(f=d([""],[""]))),D=Object(u.b)((function(e){e.disabled,e.error;var n=m(e,["disabled","error"]);return Object(l.createElement)("label",s({},n))}))(v||(v=d(["\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  width: 100%;\n  & > span {\n    font-size: var(--clear-font-size-label);\n  }\n"],["\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  width: 100%;\n  & > span {\n    font-size: var(--clear-font-size-label);\n  }\n"])),(function(e){return e.error?"var(--clear-error)":"inherit"}),(function(e){return e.disabled?.5:1})),N=Object(u.b)((function(e){e.error,e.label;var n=m(e,["error","label"]);return Object(l.createElement)("input",s({},n))}))(y||(y=d(["\n  background-color: var(--clear-background);\n  color: var(--clear-",");\n  border: 1px solid var(--clear-",");\n  border-radius: var(--clear-unit);\n  padding: calc(var(--clear-unit) * 1.5);\n  font-size: inherit;\n  margin: calc(var(--clear-unit) / 2) 0;\n  width: 100%;\n  -webkit-appearance: none;\n  ","\n  ","\n"],["\n  background-color: var(--clear-background);\n  color: var(--clear-",");\n  border: 1px solid var(--clear-",");\n  border-radius: var(--clear-unit);\n  padding: calc(var(--clear-unit) * 1.5);\n  font-size: inherit;\n  margin: calc(var(--clear-unit) / 2) 0;\n  width: 100%;\n  -webkit-appearance: none;\n  ","\n  ","\n"])),(function(e){return e.error?"error":"textColor"}),(function(e){return e.error?"error":"border"}),B,(function(e){return e.error&&"\n    :focus {\n      box-shadow: 0 0 0 2px var(--clear-background), 0 0 0 4px var(--clear-error);\n    }\n  "})),q=function(e){var n=e.label,t=e.value,a=m(e,["label","value"]);return Object(l.createElement)(D,{disabled:a.disabled,error:a.error},Object(l.createElement)("span",null,n,a.required?" (Required)":""),Object(l.createElement)(N,s({},a,{value:t||" "})))},Y=Object(u.b)((function(e){var n,t=Boolean(null===(n=e.href)||void 0===n?void 0:n.match(/^http/));return Object(l.createElement)("a",s({},e,{target:t?"_blank":e.target,rel:t?"noopener noreferrer":e.rel}))}))(x||(x=d(["\n  color: var(--clear-link);\n  ","\n  &[target='_blank']::after {\n    content: ' [\\2197]';\n  }\n"],["\n  color: var(--clear-link);\n  ","\n  &[target='_blank']::after {\n    content: ' [\\\\2197]';\n  }\n"])),B),J=Object(u.b)("main")(k||(k=d(["\nmargin: 0 auto;\nmargin-bottom: calc(var(--clear-unit) * 15);\npadding: var(--clear-unit);\nwidth: ","px;\nbackground-color: var(--clear-background);\ncolor: var(--clear-text-color);\nfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\nfont-size: var(--clear-font-size-default);\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\nmax-width: 100%;\n&, & * {\n  box-sizing: border-box;\n}\n"],["\nmargin: 0 auto;\nmargin-bottom: calc(var(--clear-unit) * 15);\npadding: var(--clear-unit);\nwidth: ","px;\nbackground-color: var(--clear-background);\ncolor: var(--clear-text-color);\nfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\nfont-size: var(--clear-font-size-default);\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\nmax-width: 100%;\n&, & * {\n  box-sizing: border-box;\n}\n"])),P.width.main),V=u.b.p(w||(w=d(["\n  line-height: 1.5;\n"],["\n  line-height: 1.5;\n"]))),W=Object(u.b)("table")(z||(z=d(["\n  border-collapse: collapse;\n  flex-basis: 100%;\n  width: 100%;\n"],["\n  border-collapse: collapse;\n  flex-basis: 100%;\n  width: 100%;\n"]))),_=Object(u.b)("thead")(T||(T=d(["\n  th {\n    font-size: var(--clear-font-size-label);\n    text-align: left;\n    padding: var(--clear-unit);\n    padding-bottom: calc(var(--clear-unit) / 2);\n  }\n"],["\n  th {\n    font-size: var(--clear-font-size-label);\n    text-align: left;\n    padding: var(--clear-unit);\n    padding-bottom: calc(var(--clear-unit) / 2);\n  }\n"]))),A=Object(u.b)("tbody")(O||(O=d([""],[""]))),$=Object(u.b)("td")(S||(S=d(["\n  text-align: left;\n  padding: var(--clear-unit);\n"],["\n  text-align: left;\n  padding: var(--clear-unit);\n"]))),K=Object(u.b)("tr")(C||(C=d(["\n  &:nth-child(even) {\n    td {\n      background-color: var(--clear-zebra);\n    }\n    td:first-child {\n      border-radius: var(--clear-unit) 0 0 var(--clear-unit);\n    }\n    td:last-child {\n      border-radius: 0 var(--clear-unit) var(--clear-unit) 0;\n    }\n  }\n"],["\n  &:nth-child(even) {\n    td {\n      background-color: var(--clear-zebra);\n    }\n    td:first-child {\n      border-radius: var(--clear-unit) 0 0 var(--clear-unit);\n    }\n    td:last-child {\n      border-radius: 0 var(--clear-unit) var(--clear-unit) 0;\n    }\n  }\n"]))),Q=Object(u.b)((function(e){e.primary;var n=m(e,["primary"]);return Object(l.createElement)("button",s({},n))}))(j||(j=d(["\n  background: var(--clear-border);\n  border-radius: var(--clear-unit);\n  border: none;\n  color: inherit;\n  ",";\n  cursor: pointer;\n  ",";\n  font-size: var(--clear-font-size-label);\n  margin: 0;\n  padding: var(--clear-unit) calc(var(--clear-unit) * 2);\n  ","\n"],["\n  background: var(--clear-border);\n  border-radius: var(--clear-unit);\n  border: none;\n  color: inherit;\n  ",";\n  cursor: pointer;\n  ",";\n  font-size: var(--clear-font-size-label);\n  margin: 0;\n  padding: var(--clear-unit) calc(var(--clear-unit) * 2);\n  ","\n"])),(function(e){return e.primary&&"\n    background: var(--clear-link);\n    color: var(--clear-background);\n  "}),(function(e){return e.disabled&&"\n    cursor: not-allowed;\n    opacity: 0.5;\n  "}),B),X=t(7),Z=function(){var e=l.useState(),n=Object(X.a)(e,2),t=n[0],a=n[1],r=l.useState(),c=Object(X.a)(r,2),o=c[0],i=c[1],u=l.useState(),s=Object(X.a)(u,2),m=s[0],d=s[1],p=l.useState(),b=Object(X.a)(p,2),E=b[0],h=b[1];return l.createElement(l.Fragment,null,l.createElement(R,null,l.createElement(L,null,"Input")),l.createElement(V,null,"The ",l.createElement(L,null,"Input")," component is a styled wrapper around an HTML ",l.createElement(L,null,"<input>")," element."),l.createElement(V,null,"Under the hood, the ",l.createElement(L,null,"Input")," component actually returns a ",l.createElement(L,null,"<label>")," with a nested ",l.createElement(L,null,"<input>")," inside it."),l.createElement(R,{as:"h2",id:"props"},"Props"),l.createElement(V,null,l.createElement(L,null,"Input")," accepts all the props you'd expect for an HTML ",l.createElement(L,null,"<input>"),", plus the props ",l.createElement(L,null,"label?: string")," to add a label and ",l.createElement(L,null,"error?: boolean")," to toggle an error state."),l.createElement(R,{as:"h2",id:"examples"},"Examples"),l.createElement(H,{spacing:8},l.createElement(U,{size:6},l.createElement(q,{value:t,label:"Numeric input",type:"number",inputMode:"numeric",onChange:function(e){return a(parseInt(e.currentTarget.value||"0"))}})),l.createElement(U,{size:6},l.createElement(q,{value:o,label:"Text input",onChange:function(e){return i(e.currentTarget.value)}})),l.createElement(U,{size:6},l.createElement(q,{value:m,error:!0,label:"Input with error",onChange:function(e){return d(e.currentTarget.value)}})),l.createElement(U,{size:6},l.createElement(q,{value:E,required:!0,label:"Input",onChange:function(e){return h(e.currentTarget.value)}}))))},ee=function(){var e=l.useState(8),n=Object(X.a)(e,2),t=n[0],a=n[1],r=l.useState(6),c=Object(X.a)(r,2),o=c[0],i=c[1],u=l.useState(6),s=Object(X.a)(u,2),m=s[0],d=s[1],p=l.useState(12),b=Object(X.a)(p,2),E=b[0],h=b[1],g=function(e){return function(n){var t=parseInt(n.currentTarget.value,10);t>0&&t<=12&&e(t)}};return l.createElement(l.Fragment,null,l.createElement(R,null,"Layout"),l.createElement(R,{as:"h2",id:"page"},l.createElement(L,null,"Page")),l.createElement(V,null,"The ",l.createElement(L,null,"Page")," component renders a horizontally centered ",l.createElement(L,null,"<main>")," HTML element (though you can use the ",l.createElement(Y,{href:"https://styled-components.com/docs/api#as-polymorphic-prop"},l.createElement(L,null,"as")," prop")," to render a div or other block-level lement as necessary)."),l.createElement(V,null,"Pages have a width of ",P.width.main,"px or the full screen width, whichever is lower."),l.createElement(V,null,"All content in this documentation site is contained within a ",l.createElement(L,null,"Page"),"."),l.createElement(R,{as:"h2",id:"grid"},l.createElement(L,null,"Grid")),l.createElement(V,null,"Use the ",l.createElement(L,null,"Grid")," component to create a 12-column layout, with ",l.createElement(L,null,"GridItem")," children that occupy a specified number of columns."),l.createElement(V,null,"Besides children, ",l.createElement(L,null,"Grid")," accepts the prop ",l.createElement(L,null,"spacing?: number"),". If spacing is supplied, that number of pixels of space will be shown around all ",l.createElement(L,null,"GridItem"),"s."),l.createElement(R,{as:"h2",id:"griditem"},l.createElement(L,null,"GridItem")),l.createElement(V,null,"Besides children, ",l.createElement(L,null,"GridItem"),"s accept the prop ",l.createElement(L,null,"size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12"),". The ",l.createElement(L,null,"size")," prop defines how many columns the ",l.createElement(L,null,"GridItem")," occupies. This prop defaults to ",l.createElement(L,null,"12"),"."),l.createElement(R,{as:"h2",id:"responsive-sizing"},"Responsive sizing"),l.createElement(V,null,"Below the ",l.createElement(L,null,"xs")," breakpoint (",P.breakpoint.xs,"px), all ",l.createElement(L,null,"GridItem"),"s are full-width."),l.createElement(R,{as:"h2",id:"examples"},"Examples"),l.createElement(V,null,"The following interactive example grid has added color-coded borders."),l.createElement("div",{style:{width:"100%",border:"1px solid var(--clear-border)",padding:0,background:"var(--clear-zebra)"}},l.createElement(H,{spacing:t},l.createElement(U,null,l.createElement("div",{style:{width:"100%",border:"1px solid blue",padding:8,background:"var(--clear-background)"}},l.createElement(q,{value:t,label:"Grid spacing",type:"number",inputMode:"numeric",onChange:function(e){return a(parseInt(e.currentTarget.value||"0"))}}))),l.createElement(U,{size:o},l.createElement("div",{style:{width:"100%",border:"1px solid forestgreen",padding:8,background:"var(--clear-background)"}},l.createElement(q,{value:o,type:"number",inputMode:"numeric",label:"This GridItem's size",onChange:g(i)}))),l.createElement(U,{size:m},l.createElement("div",{style:{width:"100%",border:"1px solid red",padding:8,background:"var(--clear-background)"}},l.createElement(q,{value:m,type:"number",inputMode:"numeric",label:"This GridItem's size",onChange:g(d)}))),l.createElement(U,{size:E},l.createElement("div",{style:{width:"100%",border:"1px solid violet",padding:8,background:"var(--clear-background)"}},l.createElement(q,{value:E,type:"number",inputMode:"numeric",label:"This GridItem's size",onChange:g(h)}))))))},ne=function(){return l.createElement(l.Fragment,null,l.createElement(R,null,"Table"),l.createElement(V,null,"Clear provides styled versions of the table primitives ",l.createElement(L,null,"<table>"),", ",l.createElement(L,null,"<thead>"),",",l.createElement(L,null,"<tbody>"),", ",l.createElement(L,null,"<tr>"),", and ",l.createElement(L,null,"<td>")," (which can be extended to cover ",l.createElement(L,null,"<th>"),")."),l.createElement(R,{as:"h2",id:"table"},l.createElement(L,null,"Table")),l.createElement(V,null,"Use the ",l.createElement(L,null,"Table")," component where you would use an HTML ",l.createElement(L,null,"<table>"),"."),l.createElement(R,{as:"h2",id:"tablehead"},l.createElement(L,null,"TableHead")),l.createElement(V,null,"Use the ",l.createElement(L,null,"TableHead")," component where you would use an HTML ",l.createElement(L,null,"<thead>"),"."),l.createElement(R,{as:"h2",id:"tablebody"},l.createElement(L,null,"TableBody")),l.createElement(V,null,"Use the ",l.createElement(L,null,"TableBody")," component where you would use an HTML ",l.createElement(L,null,"<tbody>"),"."),l.createElement(R,{as:"h2",id:"tablerow"},l.createElement(L,null,"TableRow")),l.createElement(V,null,"Use the ",l.createElement(L,null,"TableRow")," component where you would use an HTML ",l.createElement(L,null,"<tr>"),"."),l.createElement(R,{as:"h2",id:"tablecell"},l.createElement(L,null,"TableCell")),l.createElement(V,null,"Use the ",l.createElement(L,null,"TableCell")," component where you would use an HTML ",l.createElement(L,null,"<td>"),"."),l.createElement(V,null,l.createElement(L,null,"TableCell")," can also be used for ",l.createElement(L,null,"<th>")," (table header cell) by extending it with the ",l.createElement(Y,{href:"https://styled-components.com/docs/api#as-polymorphic-prop"},l.createElement(L,null,"as")," prop")," like so: ",l.createElement(L,null,"<TableCell as='th'>Table header text</TableCell>"),"."),l.createElement(V,null),l.createElement(R,{as:"h2",id:"examples"},"Example"),l.createElement(W,null,l.createElement(_,null,l.createElement(K,null,l.createElement($,{as:"th"},"Name"),l.createElement($,{as:"th"},"email"),l.createElement($,{as:"th"},"Occupation"))),l.createElement(A,null,l.createElement(K,null,l.createElement($,null,"Phillip J Fry"),l.createElement($,null,l.createElement(L,null,"cosmicphil@panuccispizza.net")),l.createElement($,null,"Delivery boy")),l.createElement(K,null,l.createElement($,null,"Turanga Leela"),l.createElement($,null,l.createElement(L,null,"1bdi@planetexpress.biz")),l.createElement($,null,"Captain")),l.createElement(K,null,l.createElement($,null,"Hubert T Pharnsworth"),l.createElement($,null,l.createElement(L,null,"hubie@planetexpress.biz")),l.createElement($,null,"Professor")),l.createElement(K,null,l.createElement($,null,'Bender "Bending" Rodriguez'),l.createElement($,null,l.createElement(L,null,"bender@benderisgreat.com")),l.createElement($,null,"Bending unit")))))},te=function(){return l.createElement(l.Fragment,null,l.createElement(R,null,l.createElement(L,null,"Link")),l.createElement(V,null,"The ",l.createElement(L,null,"Link")," component is a simple styled wrapper around an HTML ",l.createElement(L,null,"<a>")," element."),l.createElement(R,{as:"h2",id:"external"},"External vs internal links"),l.createElement(V,null,"Links with an ",l.createElement(L,null,"href")," that matches ",l.createElement(L,null,"/^http/"),' are marked as external, and will automatically open in a new tab. External links are decorated with a "',"\u2197",'" icon.'),l.createElement(R,{as:"h2",id:"router"},"Router links"),l.createElement(V,null,"Use the ",l.createElement(Y,{href:"https://styled-components.com/docs/api#as-polymorphic-prop"},l.createElement(L,null,"as")," prop")," to substitute the Link component of your choice. The links at the top of this page are ",l.createElement(L,null,"Link")," elements with ",l.createElement(L,null," react-router-dom")," link substitutions."),l.createElement(R,{as:"h2",id:"examples"},"Examples"),l.createElement(V,null,l.createElement(Y,{href:"/clear/"},"Internal HTML link")," (causes page load)"),l.createElement(V,null,l.createElement(Y,{as:o.Link,to:"/"},"Router link")," (does not cause page load)"),l.createElement(V,null,l.createElement(Y,{href:"https://github.com/chadlavi/clear"},"External link")))},le=function(){return l.createElement(l.Fragment,null,l.createElement(R,null,"Clear"),l.createElement(V,null,"Clear is a simple personal Design System for TypeScript React apps created by ",l.createElement(Y,{href:"https://github.com/chadlavi"},"Chad Lavimoniere"),"."),l.createElement(V,null,"Clear features automatic darkmode support and minimalist styling via ",l.createElement(L,null,"styled-components"),"."))},ae=t(23),re=function(){return l.createElement(l.Fragment,null,l.createElement(R,null,"Global styles"),l.createElement(R,{as:"h2",id:"cssvariables"},l.createElement(L,null,"CSSVariables")),l.createElement(V,null,"Clear uses CSS variables extensively, so an instance of the ",l.createElement(L,null,"CSSVariables")," component is required at the top level in your application for Clear to work correctly. The component declares a set of CSS variables with names that start with ",l.createElement(L,null,"--clear-*")," that define the colors and measurements used in Clear components."),l.createElement(R,{as:"h2",id:"dark-mode"},"Dark mode"),l.createElement(V,null,"The ",l.createElement(L,null,"CSSVariables")," component uses ",l.createElement(L,null,"@media (prefers-color-scheme: dark)")," to define a set of colors for use when the user's device is in dark mode. Switching between light and dark mode is handled automatically."),l.createElement(R,{as:"h2",id:"globalstyles"},l.createElement(L,null,"GlobalStyles")),l.createElement(V,null,"The ",l.createElement(L,null,"GlobalStyles")," component applies styles to the ",l.createElement(L,null,"<body>")," tag. As such, ",l.createElement("strong",null,"this component has side effects"),", because it creates CSS rules that affect elements outside the Clear design system."),l.createElement(V,null,"Omitting the ",l.createElement(L,null,"GlobalStyles")," component in your application will mean that any content not contained in a ",l.createElement(Y,{as:ae.HashLink,to:"/layout#page"},l.createElement(L,null,"Page"))," component may have unpredictable colors, background colors, font sizes, and margins. It is not recommended."))},ce=function(e){return function(n){n.preventDefault(),alert(e)}},oe=function(){return l.createElement(l.Fragment,null,l.createElement(R,null,l.createElement(L,null,"Button")),l.createElement(V,null,"The ",l.createElement(L,null,"Button")," component is a simple styled wrapper around an HTML ",l.createElement(L,null,"<button>"),"."),l.createElement(R,{as:"h2",id:"props"},"Props"),l.createElement(V,null,"Besides the standard props an HTML ",l.createElement(L,null,"<button>")," accepts, ",l.createElement(L,null,"Button")," also accepts the prop ",l.createElement(L,null,"primary?: boolean")," to mark a button as a primary call to action button."),l.createElement(R,{as:"h2",id:"examples"},"Examples"),l.createElement(R,{as:"h3",id:"standard-button"},"Standard button"),l.createElement(V,null,l.createElement(Q,{onClick:ce("You clicked the standard button")},"This is a standard button")),l.createElement(R,{as:"h3",id:"primary-button"},"Primary button"),l.createElement(V,null,l.createElement(Q,{primary:!0,onClick:ce("You clicked the primary button")},"This is a primary button")),l.createElement(R,{as:"h3",id:"disabled-button"},"Disabled button"),l.createElement(V,null,l.createElement(Q,{disabled:!0,onClick:ce("You'll never see this alert because this button is disabled")},"This is a disabled standard button")),l.createElement(V,null,l.createElement(Q,{disabled:!0,primary:!0,onClick:ce("You'll never see this alert because this button is disabled")},"This is a disabled primary button")))},ie=function(){return l.createElement(l.Fragment,null,l.createElement(R,null,"Text formatting"),l.createElement(V,null,"Clear offers various components for formatting text."),l.createElement(R,{as:"h2",id:"header"},l.createElement(L,null,"Header")),l.createElement(V,null,l.createElement(L,null,"Header")," can be used to create HTML header elements like ",l.createElement(L,null,"<h1>"),", ",l.createElement(L,null,"<h2>"),", etc. With no props passed, the ",l.createElement(L,null,"Header")," defaults to rendering an ",l.createElement(L,null,"<h1>"),"."),l.createElement(R,{as:"h3",id:"header-props"},l.createElement(L,null,"Header")," props"),l.createElement(V,null,"Use the ",l.createElement(Y,{href:"https://styled-components.com/docs/api#as-polymorphic-prop"},l.createElement(L,null,"as")," prop")," to substitute a different header element like so:"),l.createElement(V,null,l.createElement(L,null,"<Header as='h2'>This is an H2</Header>"),"."),l.createElement(R,{as:"h2",id:"paragraph"},l.createElement(L,null,"Paragraph")),l.createElement(V,null,l.createElement(L,null,"Paragraph")," is a simple styled wrapper around ",l.createElement(L,null,"<p>"),"."),l.createElement(R,{as:"h2",id:"code"},l.createElement(L,null,"Code")),l.createElement(V,null,l.createElement(L,null,"Code")," is a simple styled wrapper around ",l.createElement(L,null,"<code>"),", used for formatting inline code snippets."))},ue=function(){return l.createElement(l.Fragment,null,l.createElement(F,null),l.createElement(G,null),l.createElement(J,null,l.createElement(o.HashRouter,{basename:"/"},l.createElement(H,{spacing:16},l.createElement(U,null,l.createElement(Y,{as:o.Link,to:"/"},"Clear")," \xb7\xa0",l.createElement(Y,{as:o.Link,to:"/global-styles"},"Global styles")," \xb7\xa0",l.createElement(Y,{as:o.Link,to:"/layout"},"Layout")," \xb7\xa0",l.createElement(Y,{as:o.Link,to:"/input"},"Input")," \xb7\xa0",l.createElement(Y,{as:o.Link,to:"/button"},"Button")," \xb7\xa0",l.createElement(Y,{as:o.Link,to:"/link"},"Link")," \xb7\xa0",l.createElement(Y,{as:o.Link,to:"/text"},"Text formatting")," \xb7\xa0",l.createElement(Y,{as:o.Link,to:"/table"},"Table")),l.createElement(U,null,l.createElement(i.g,null,l.createElement(i.d,{exact:!0,path:"/"},l.createElement(le,null)),l.createElement(i.d,{exact:!0,path:"/global-styles"},l.createElement(re,null)),l.createElement(i.d,{exact:!0,path:"/layout"},l.createElement(ee,null)),l.createElement(i.d,{exact:!0,path:"/input"},l.createElement(Z,null)),l.createElement(i.d,{exact:!0,path:"/button"},l.createElement(oe,null)),l.createElement(i.d,{exact:!0,path:"/link"},l.createElement(te,null)),l.createElement(i.d,{exact:!0,path:"/text"},l.createElement(ie,null)),l.createElement(i.d,{exact:!0,path:"/table"},l.createElement(ne,null))))))))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.79665c0a.chunk.js.map