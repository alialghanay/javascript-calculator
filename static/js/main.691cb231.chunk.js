(this["webpackJsonpjavascript-calculator"]=this["webpackJsonpjavascript-calculator"]||[]).push([[0],{21:function(e,n,t){},23:function(e,n,t){},24:function(e,n,t){},25:function(e,n,t){},26:function(e,n,t){},27:function(e,n){String.prototype.replaceAt=function(e,n,t){var i=this.split("");return i.splice(e,n,t),i.join("")}},28:function(e,n,t){"use strict";t.r(n);var i=t(0),r=t.n(i),a=t(8),c=t.n(a),l=t(4),s=t(5),u=t(7),o=t(6),d=t(3),b=(t(21),t(1)),O=function(e){Object(u.a)(t,e);var n=Object(o.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return Object(b.jsxs)("div",{id:"display-screen",children:[Object(b.jsx)("div",{className:"operation-screen",children:Object(b.jsx)("p",{children:this.props.currentValue})}),Object(b.jsx)("div",{id:"display",children:Object(b.jsx)("h3",{children:this.props.result})})]})}}]),t}(i.Component),p=Object(d.b)((function(e){return{currentValue:e.display.currentValue,result:e.display.Ans}}))(O),j=(t(23),function(e){Object(u.a)(t,e);var n=Object(o.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"handleClick",value:function(e){this.props.enterNum(e.value,e.label)}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"num-continer",children:this.props.numbers.map((function(n){return Object(b.jsx)("button",{className:"num-button",id:n.id,onClick:function(){return e.handleClick(n)},children:"".concat(n.value)},n.label)}))})}}]),t}(i.Component)),f=Object(d.b)((function(e){return{numbers:e.numbers}}),(function(e){return{enterNum:function(n,t){return e({type:"enterNum",value:n,label:t})}}}))(j),h=(t(24),function(e){Object(u.a)(t,e);var n=Object(o.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"handleClick",value:function(e){this.props.enterPrim(e.sign,e.mathO)}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"prim-continer",children:this.props.primary.map((function(n){return Object(b.jsx)("button",{className:"button",id:n.id,onClick:function(){return e.handleClick(n)},children:"".concat(n.sign)},n.id)}))})}}]),t}(i.Component)),m=Object(d.b)((function(e){return{primary:e.primary}}),(function(e){return{enterPrim:function(n,t){return e({type:"enterPrim",sign:n,mathO:t})}}}))(h),v=(t(25),function(e){Object(u.a)(t,e);var n=Object(o.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"handleClick",value:function(e){this.props.enterSec(e.label)}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"sec-continer",children:this.props.secondary.map((function(n){return Object(b.jsx)("button",{className:"button",id:n.id,onClick:function(){return e.handleClick(n)},children:"".concat(n.label)},n.label)}))})}}]),t}(i.Component)),y=Object(d.b)((function(e){return{secondary:e.secondary}}),(function(e){return{enterSec:function(n){return e({type:"enterSec",label:n})}}}))(v),x=(t(26),function(e){Object(u.a)(t,e);var n=Object(o.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"calculator-continer",children:[Object(b.jsx)(p,{}),Object(b.jsxs)("div",{className:"button-continer",children:[Object(b.jsx)(f,{}),Object(b.jsxs)("div",{className:"operations-continer",children:[Object(b.jsx)(m,{}),Object(b.jsx)(y,{})]})]})]}),Object(b.jsxs)("div",{className:"linked",children:[Object(b.jsx)("p",{children:"Designed and Coded By"}),Object(b.jsx)("a",{href:"https://twitter.com/alialghanay",children:"Ali M. Al-Ghanay"})]})]})}}]),t}(i.Component)),g=Object(d.b)(null)(x),A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,29)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),i(e),r(e),a(e),c(e)}))},N=t(12),k=t(2),C={display:{currentValue:"",Ans:"0"},isOperation:!1,isEquls:!1,isDecimalPoint:!1,numbers:[{value:0,label:"0",id:"zero"},{value:1,label:"1",id:"one"},{value:2,label:"2",id:"two"},{value:3,label:"3",id:"three"},{value:4,label:"4",id:"four"},{value:5,label:"5",id:"five"},{value:6,label:"6",id:"six"},{value:7,label:"7",id:"seven"},{value:8,label:"8",id:"eight"},{value:9,label:"9",id:"nine"}],primary:[{sign:"+",id:"add"},{sign:"-",id:"subtract"},{sign:"*",id:"multiply"},{sign:"/",id:"divide"}],secondary:[{label:".",id:"decimal"},{label:"=",id:"equals"},{label:"AC",id:"clear"}]},V=function(e){return function(n){return e*n}},P=function(e){return function(n){return 0===n?"error":e/n}},q=function(e){return function(n){return e+n}},E=function(e){return function(n){return e-n}};var D=function(e){var n=/[+,\-,*,/]/gi,t=e.split(n),i=e.match(n);if(null===i)return t[0];for(var r=i.length;r>0;){if(i.indexOf("*")>-1&&(i.indexOf("*")<i.indexOf("/")||i.indexOf("/")<=-1)&&""!==t[i.indexOf("*")+1]){var a=i.indexOf("*"),c=Number(t[a]),l=""===t[a+1]?1:Number(t[a+1]);t.splice(a,2,V(c)(l)),i.splice(a,1)}else if(i.indexOf("/")>-1&&(i.indexOf("/")<i.indexOf("*")||i.indexOf("*")<=-1)&&""!==t[i.indexOf("/")+1]){var s=i.indexOf("/"),u=Number(t[s]),o=""===t[s+1]?1:Number(t[s+1]);if("error"===P(u)(o))return"error";t.splice(s,2,P(u)(o)),i.splice(s,1)}else if(i.indexOf("+")>-1&&(i.indexOf("+")<i.indexOf("-")||i.indexOf("-")<=-1)){var d=i.indexOf("+"),b=Number(t[d]),O=Number(t[d+1]);t.splice(d,2,q(b)(O)),i.splice(d,1)}else if(i.indexOf("-")>-1&&(i.indexOf("-")<i.indexOf("+")||i.indexOf("+")<=-1)){var p=i.indexOf("-"),j=Number(t[p]),f=Number(t[p+1]);t.splice(p,2,E(j)(f)),i.splice(p,1)}r--}return t[0]};t(27);var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1?arguments[1]:void 0,t=e.display.currentValue,i=e.display.Ans;switch(n.type){case"enterNum":return"0"===e.display.Ans||e.isEquls?"0"===n.label?Object(k.a)(Object(k.a)({},e),{},{display:{currentValue:"0"===t[t.length-1]?e.display.currentValue:e.display.currentValue+"0",Ans:"0"},isOperation:!1,isEquls:!1}):Object(k.a)(Object(k.a)({},e),{},{display:{currentValue:n.label,Ans:n.label},isOperation:!1,isEquls:!1}):e.isOperation?Object(k.a)(Object(k.a)({},e),{},{display:{currentValue:t+n.label,Ans:n.label},isOperation:!1,isEquls:!1}):Object(k.a)(Object(k.a)({},e),{},{display:{currentValue:t+n.label,Ans:i+n.label},isOperation:!1,isEquls:!1});case"enterPrim":return e.isEquls?Object(k.a)(Object(k.a)({},e),{},{display:{currentValue:e.display.Ans+n.sign,Ans:n.sign},isOperation:!0,isEquls:!1,isDecimalPoint:!1}):e.isOperation&&"-"!==n.sign?"-"===t[t.length-1]?Object(k.a)(Object(k.a)({},e),{},{display:{currentValue:t.replaceAt(t.length-2,2,n.sign),Ans:n.sign}}):Object(k.a)(Object(k.a)({},e),{},{display:{currentValue:t.replaceAt(t.length-1,1,n.sign),Ans:n.sign}}):Object(k.a)(Object(k.a)({},e),{},{display:{currentValue:t+n.sign,Ans:n.sign},isOperation:!0,isEquls:!1,isDecimalPoint:!1});case"enterSec":switch(n.label){case"=":var r="".concat(D(e.display.currentValue));return Object(k.a)(Object(k.a)({},e),{},{display:{currentValue:t+"="+r,Ans:r},isOperation:!1,isEquls:!0,isDecimalPoint:!1});case".":return e.isDecimalPoint?Object(k.a)({},e):e.isOperation?Object(k.a)(Object(k.a)({},e),{},{display:{currentValue:t+"0.",Ans:"0."},isOperation:!1,isDecimalPoint:!0}):Object(k.a)(Object(k.a)({},e),{},{display:{currentValue:""===t?"0.":t+".",Ans:i+"."},isDecimalPoint:!0});case"AC":return Object(k.a)({},C);default:return e}default:return e}},w=Object(N.a)(S);c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(d.a,{store:w,children:Object(b.jsx)(g,{})})}),document.getElementById("root")),A()}},[[28,1,2]]]);
//# sourceMappingURL=main.691cb231.chunk.js.map