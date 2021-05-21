(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var s=c(1),l=c.n(s),n=c(19),a=c.n(n),o=(c(25),c(26),c(2)),i=c(4),r=c(5),j=c.n(r),b=c(0),m=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],l=t[1];return Object(s.useEffect)((function(){j.a.get("http://localhost:8000/api/petShelter").then((function(e){console.log(e),l(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"d-flex justify-content-end",children:Object(b.jsx)(o.a,{to:"/petShelter/new",className:"btn btn-info",children:"Add a pet to the shelter"})}),Object(b.jsxs)("div",{className:"mt-5",children:[Object(b.jsx)("h3",{className:"mt-3",children:"These pets are looking for a good home"}),Object(b.jsxs)("table",{className:"table table-striped",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"Name"}),Object(b.jsx)("th",{scope:"col",children:"Type"}),Object(b.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(b.jsx)("tbody",{children:c.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)(o.a,{to:"/petShelter/".concat(e._id),children:e.name})}),Object(b.jsx)("td",{children:e.type}),Object(b.jsxs)("td",{children:[Object(b.jsx)(o.a,{to:"/petShelter/".concat(e._id),className:"btn btn-outline-primary ml-2 mr-2",children:"Details"}),"|",Object(b.jsx)(o.a,{to:"/petShelter/edit/".concat(e._id),className:"btn btn-outline-secondary ml-2",children:"Edit"})]})]},t)}))})]})]})]})},d=c(6),h=c(8),p=function(){var e=Object(s.useState)({name:"",type:"",description:"",skill1:"",skill2:"",skill3:""}),t=Object(i.a)(e,2),c=t[0],l=t[1],n=Object(s.useState)({}),a=Object(i.a)(n,2),r=a[0],m=a[1],p=function(e){l(Object(h.a)(Object(h.a)({},c),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"d-flex justify-content-end",children:Object(b.jsx)(o.a,{to:"/",className:"btn btn-outline-info float-right mr-5",children:"Back to Home"})}),Object(b.jsx)("h3",{className:"mt-5",children:"Know a pet needing a home?"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j.a.post("http://localhost:8000/api/petShelter",c).then((function(e){console.log(e),e.data.results?Object(o.c)("/"):m(e.data)})).catch((function(e){return console.log(e)}))},style:{border:"1px solid black",padding:"10px"},children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"form-label",htmlFor:"name",children:"Pet Name:"}),Object(b.jsx)("input",{type:"text",name:"name",onChange:p,className:"form-control"}),Object(b.jsx)("p",{className:"text-danger",children:r.name?r.name.message:""})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"form-label",htmlFor:"type",children:"Pet Type:"}),Object(b.jsx)("input",{type:"text",name:"type",onChange:p,className:"form-control"}),Object(b.jsx)("p",{className:"text-danger",children:r.type?r.type.message:""})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"form-label",htmlFor:"description",children:"Pet Description:"}),Object(b.jsx)("input",{type:"text",name:"description",onChange:p,className:"form-control"}),Object(b.jsx)("p",{className:"text-danger",children:r.description?r.description.message:""})]})]}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"form-label",htmlFor:"skill1",children:"Skill 1:"}),Object(b.jsx)("input",{type:"text",name:"skill1",onChange:p,className:"form-control"})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"form-label",htmlFor:"skill2",children:"Skill 2:"}),Object(b.jsx)("input",{type:"text",name:"skill2",onChange:p,className:"form-control"})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"form-label",htmlFor:"skill3",children:"Skill 3:"}),Object(b.jsx)("input",{type:"text",name:"skill3",onChange:p,className:"form-control"})]})]})]}),Object(b.jsx)("input",{type:"submit",className:"btn btn-success",value:"Add Pet"})]})]})},O=function(e){var t=Object(s.useState)({}),c=Object(i.a)(t,2),l=c[0],n=c[1],a=Object(s.useState)(!1),r=Object(i.a)(a,2),m=r[0],d=r[1],h=Object(s.useState)(!1),p=Object(i.a)(h,2),O=p[0],x=p[1];Object(s.useEffect)((function(){j.a.get("http://localhost:8000/api/petShelter/".concat(e.id)).then((function(e){console.log("***********",e),n(e.data)})).catch((function(e){return console.log(e)}))}),[m,O]);return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"d-flex justify-content-end",children:Object(b.jsx)(o.a,{to:"/",className:"btn btn-outline-info float-right mr-5",children:"Back to Home"})}),Object(b.jsxs)("h1",{className:"mt-5",children:["Details about: ",l.name]}),Object(b.jsxs)(o.a,{onClick:function(e){return t=l._id,void j.a.delete("http://localhost:8000/api/petShelter/".concat(t)).then((function(e){console.log(e),x(!O),Object(o.c)("/")})).catch((function(e){return console.log(e)}));var t},to:"#",className:"btn btn-danger float-right",children:["Adopt ",l.name]}),Object(b.jsxs)("h4",{children:["Pet Type: ",l.type]}),Object(b.jsxs)("h4",{children:["Description: ",l.description]}),Object(b.jsxs)("h4",{children:["Skills: ",Object(b.jsx)("br",{}),l.skill1," ",Object(b.jsx)("br",{}),l.skill2," ",Object(b.jsx)("br",{}),l.skill3]}),Object(b.jsxs)("p",{children:[l.likes," Like(s)"]}),Object(b.jsxs)("button",{className:"btn btn-success",onClick:function(e){return t=l,console.log("Trying to give a like to pet:",t),t.likes+=1,void j.a.put("http://localhost:8000/api/petShelter/".concat(t._id),t).then((function(e){e.data&&(console.log(e),d(!m))})).catch((function(e){return console.log(e)}));var t},children:["Like ",l.name]})]})},x=function(e){var t=Object(s.useState)({name:"",type:"",description:"",skill1:"",skill2:"",skill3:""}),c=Object(i.a)(t,2),l=c[0],n=c[1],a=Object(s.useState)({}),r=Object(i.a)(a,2),m=r[0],p=r[1];Object(s.useEffect)((function(){j.a.get("http://localhost:8000/api/petShelter/".concat(e.id)).then((function(e){console.log("***********",e),n(e.data)})).catch((function(e){return console.log(e)}))}),[]);var O=function(e){n(Object(h.a)(Object(h.a)({},l),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"d-flex justify-content-end",children:Object(b.jsx)(o.a,{to:"/",className:"btn btn-outline-info float-right mr-5",children:"Back to Home"})}),Object(b.jsxs)("h3",{className:"mt-5",children:["Edit ",l.name]}),Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),j.a.put("http://localhost:8000/api/petShelter/".concat(e.id),l).then((function(e){console.log(e),e.data.results?Object(o.c)("/"):p(e.data)})).catch((function(e){return console.log(e)}))},style:{border:"1px solid black",padding:"10px"},children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"form-label",htmlFor:"name",children:"Pet Name:"}),Object(b.jsx)("input",{type:"text",name:"name",onChange:O,className:"form-control",value:l.name}),Object(b.jsx)("p",{className:"text-danger",children:m.name?m.name.message:""})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"form-label",htmlFor:"type",children:"Pet Type:"}),Object(b.jsx)("input",{type:"text",name:"type",onChange:O,className:"form-control",value:l.type}),Object(b.jsx)("p",{className:"text-danger",children:m.type?m.type.message:""})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"form-label",htmlFor:"description",children:"Pet Description:"}),Object(b.jsx)("input",{type:"text",name:"description",onChange:O,className:"form-control",value:l.description}),Object(b.jsx)("p",{className:"text-danger",children:m.description?m.description.message:""})]})]}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"form-label",htmlFor:"skill1",children:"Skill 1:"}),Object(b.jsx)("input",{type:"text",name:"skill1",onChange:O,className:"form-control",value:l.skill1})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"form-label",htmlFor:"skill2",children:"Skill 2:"}),Object(b.jsx)("input",{type:"text",name:"skill2",onChange:O,className:"form-control",value:l.skill2})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"form-label",htmlFor:"skill3",children:"Skill 3:"}),Object(b.jsx)("input",{type:"text",name:"skill3",onChange:O,className:"form-control",value:l.skill3})]})]})]}),Object(b.jsx)("input",{type:"submit",className:"btn btn-success",value:"Edit Pet"})]})]})};var u=function(){return Object(b.jsxs)("div",{className:"App container",children:[Object(b.jsx)("h1",{className:"mt-4",children:"Pet Shelter"}),Object(b.jsxs)(o.b,{children:[Object(b.jsx)(m,{path:"/"}),Object(b.jsx)(p,{path:"/petShelter/new"}),Object(b.jsx)(O,{path:"/petShelter/:id"}),Object(b.jsx)(x,{path:"/petShelter/edit/:id"})]})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,s=t.getFID,l=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),l(e),n(e),a(e)}))};a.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root")),f()}},[[52,1,2]]]);
//# sourceMappingURL=main.f8d2a988.chunk.js.map