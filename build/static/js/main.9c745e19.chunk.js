(this.webpackJsonpbackend=this.webpackJsonpbackend||[]).push([[0],{19:function(e,t,n){e.exports=n(42)},24:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(18),c=n.n(r),u=(n(24),n(8)),i=n(7),l=n(4),m=n(2),d=n(5),s=n.n(d),f="/api/persons",b=function(){return s.a.get(f)},h=function(e){return s.a.post(f,e)},p=function(e,t){return s.a.put("".concat(f,"/").concat(e),t)},g=function(e){return s.a.delete("".concat(f,"/").concat(e))},E=function(e){return o.a.createElement("p",null,e.title,":"," ",o.a.createElement("input",{name:e.inputName,value:e.inputValue,onChange:e.handleChange}))},w=function(e){var t=e.messageType,n="";return"added"===t?(n=o.a.createElement("div",{className:"success fade-out"},e.name," was added to the Phonebook."),setTimeout((function(){return e.setMessageType("")}),5e3)):"edited"===t?(n=o.a.createElement("div",{className:"notice fade-out"},e.name," was edited in the Phonebook."),setTimeout((function(){return e.setMessageType("")}),5e3)):"deleted"===t?(n=o.a.createElement("div",{className:"warning fade-out"},e.name," was deleted from the Phonebook"),setTimeout((function(){return e.setMessageType("")}),5e3)):"editError"===t&&(n=o.a.createElement("div",{className:"warning fade-out"},e.name," is no longer in the Phonebook"),setTimeout((function(){return e.setMessageType("")}),5e3)),o.a.createElement(a.Fragment,null,n)},O=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({name:"",number:""}),d=Object(m.a)(c,2),s=d[0],f=d[1],O=Object(a.useState)(""),j=Object(m.a)(O,2),v=j[0],y=j[1],k=Object(a.useState)(""),N=Object(m.a)(k,2),C=N[0],T=N[1],P=Object(a.useState)(""),S=Object(m.a)(P,2),M=S[0],A=S[1];Object(a.useEffect)((function(){b().then((function(e){return r(e.data)}))}),[]);var D=function(e){f(Object(l.a)(Object(l.a)({},s),{},Object(i.a)({},e.target.name,e.target.value)))},L=function(e){var t=e.target.getAttribute("data-id"),a=n.filter((function(e){return e.id!==t}));window.confirm("Are you sure you want to delete ".concat(e.target.getAttribute("data-name"),"?"))&&(A(n.find((function(e){return e.id===t})).name),T("deleted"),g(t).then((function(e){console.log("Confirm deleted ===>",e)})).catch((function(e){console.log("Deletion Error ===> ",e)})),r(a))},V=n.filter((function(e){return e.name.toLowerCase().includes(v.toLowerCase())})).sort((function(e,t){return e.id-t.id})).map((function(e){return o.a.createElement("li",{key:e.id},e.name,": ",e.number," ",o.a.createElement("button",{"data-id":e.id,"data-name":e.name,onClick:L},"Delete"))}));return o.a.createElement("div",null,o.a.createElement("h1",null,"PhoneBook"),o.a.createElement(w,{name:M,setMessageType:T,messageType:C}),o.a.createElement(E,{title:"filter shown with",inputName:"filterName",inputValue:v,handleChange:function(e){y(e.target.value)}}),o.a.createElement("h2",null,"Add New"),o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=n.find((function(e){return e.name.toLowerCase()===s.name.toLowerCase()}));t?window.confirm("".concat(t.name," is already in the Phonebook. Do you want to replace their number?"))&&p(t.id,s).then((function(e){var a=n.filter((function(e){return e.id!==t.id}));A(e.data.name),T("edited"),r([].concat(Object(u.a)(a),[e.data])),f({name:"",number:""})})).catch((function(e){T("editError"),A(s.name),console.log("ERROR ====> ".concat(e))})):h(Object(l.a)(Object(l.a)({},s),{},{id:n[n.length-1].id+1})).then((function(e){A(e.data.name),T("added"),r([].concat(Object(u.a)(n),[e.data])),f({name:"",number:""})})).catch((function(e){console.log("Error at ",e)}))}},o.a.createElement("div",null,o.a.createElement(E,{title:"name",inputName:"name",inputValue:s.name,handleChange:D}),o.a.createElement(E,{title:"number",inputName:"number",inputValue:s.number,handleChange:D})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add"))),o.a.createElement("h2",null,"Numbers"),o.a.createElement("ul",null,n.length>0?V:"No entries in the phonebook!"))};c.a.render(o.a.createElement(O,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.9c745e19.chunk.js.map