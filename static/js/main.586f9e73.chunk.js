(this.webpackJsonpproject1=this.webpackJsonpproject1||[]).push([[0],{29:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(20),r=n.n(a),b=(n(29),n(8)),j=n.n(b),s=n(21),i=n(4),o=n(22),l=n.n(o),u=n(1),h=function(){var e=Object(c.useState)("#8e44ad"),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("hello"),b=Object(i.a)(r,2),o=b[0],h=b[1],m=Object(c.useState)(""),O=Object(i.a)(m,2),d=O[0],x=O[1],p=Object(c.useState)(0),f=Object(i.a)(p,2),g=f[0],v=f[1],k=Object(c.useState)({fname:" ",branch:"",email:"",number:""}),y=Object(i.a)(k,2),C=y[0],w=y[1],S=function(e){console.log(e.target.value),console.log(e.target.name);var t=e.target.name,n=e.target.value;w((function(e){return"fname"===t?{fname:n,branch:e.branch,email:e.email,number:e.number}:"branch"===t?{fname:e.fname,branch:n,email:e.email,number:e.number}:"number"===t?{fname:e.fname,branch:e.branch,email:e.email,number:n}:"email"===t?{fname:e.fname,branch:e.branch,email:n,number:e.number}:void 0}))},E=Object(c.useState)(),B=Object(i.a)(E,2),M=B[0],D=B[1],J=Object(c.useState)(),N=Object(i.a)(J,2),T=N[0],q=N[1],F=Object(c.useState)(),I=Object(i.a)(F,2),R=I[0],Y=I[1];return Object(c.useEffect)((function(){function e(){return(e=Object(s.a)(j.a.mark((function e(){var t,n,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("http://api.openweathermap.org/data/2.5/weather?q=".concat(T,"&appid=f0d9bab52c7aa5c2189aea477a0a52d8"));case 2:t=e.sent,console.log(t.data),273,n=t.data.main.temp,c=n-273,a=Math.round(10*c)/10,q(a),Y(t.data.weather[0].main),D(T);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{style:{backgroundColor:n},children:[Object(u.jsxs)("h1",{children:[o," ",d]}),Object(u.jsx)("h2",{children:g}),Object(u.jsx)("button",{onClick:function(){a("#34495e");h("praveen gupta")},onDoubleClick:function(){x("Btech CSE")},children:"click me"}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:function(){v(g+1)},children:"+"}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{children:"-"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("h1",{children:["Name: ",C.fname]}),Object(u.jsxs)("h2",{children:["Branch:",C.branch]}),Object(u.jsxs)("p",{children:["E-mail:",C.email]}),Object(u.jsxs)("p",{children:["Mobile-Number:",C.number]}),Object(u.jsx)("input",{type:"text",name:"fname",placeholder:"enter your name",onChange:S}),Object(u.jsx)("input",{type:"text",name:"branch",placeholder:"enter your branch",onChange:S}),Object(u.jsx)("input",{type:"email",name:"email",placeholder:"enter your email",onChange:S}),Object(u.jsx)("input",{type:"number",name:"number",placeholder:"enter your Mobile number",onChange:S}),Object(u.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),alert("form submitted")},children:"click"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("h1",{children:"fetch data from api"}),Object(u.jsxs)("h2",{children:["Temperature:",T]}),Object(u.jsxs)("select",{onChange:function(e){q(e.target.value)},children:[Object(u.jsx)("option",{value:"kanpur",children:"kanpur"}),Object(u.jsx)("option",{value:"lucknow",children:"lucknow"}),Object(u.jsx)("option",{value:"delhi",children:"delhi"})]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("h1",{children:["You choose ",M]}),Object(u.jsxs)("h2",{children:["Condition : ",R]}),Object(u.jsxs)("h2",{children:["Temperature : ",T]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("h1",{children:"React router"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]})})},m=n(24);r.a.render(Object(u.jsx)(m.a,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.586f9e73.chunk.js.map