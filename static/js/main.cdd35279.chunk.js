(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(5),r=a.n(l),o=(a(17),a(6)),i=a(1),d=a(2),s=a(3),u=function(e){var t=e.id,a=e.text,n=e.date,l=e.handleDeleteNote;return c.a.createElement("div",{className:"note"},c.a.createElement("span",null,a),c.a.createElement("div",{className:"note-footer"},c.a.createElement("small",null,n),c.a.createElement(s.a,{className:"delete-icon",size:"1.3em",onClick:function(){return l(t)}})))},m=function(e){var t=e.handleAddNote,a=Object(n.useState)(""),l=Object(i.a)(a,2),r=l[0],o=l[1];return c.a.createElement("div",{className:"note new"},c.a.createElement("textarea",{placeholder:"type to add a note",cols:"10",rows:"8",value:r,onChange:function(e){200-e.target.value.length>=0&&o(e.target.value)}}),c.a.createElement("div",{className:"note-footer"},c.a.createElement("small",null,200-r.length," remaining"),c.a.createElement("button",{className:"save",onClick:function(){r.trim().length>0&&(t(r),o(""))}},"Save")))},h=function(e){var t=e.notes,a=e.handleAddNote,n=e.handleDeleteNote;return c.a.createElement("div",{className:"notes-list"},t.map(function(e){return c.a.createElement(u,{key:e.id,id:e.id,text:e.text,date:e.date,handleDeleteNote:n})}),c.a.createElement(m,{handleAddNote:a}))},E=function(e){var t=e.handleSearchNote;return c.a.createElement("div",{className:"search"},c.a.createElement(s.b,{className:"search-icons",size:"1.3em"}),c.a.createElement("input",{onChange:function(e){return t(e.target.value)},type:"text",placeholder:"search here..."}))},f=function(){var e=Object(n.useState)([{id:Object(d.a)(),text:"this is a note",date:"01/01/2021"},{id:Object(d.a)(),text:"this is a note",date:"01/01/2021"},{id:Object(d.a)(),text:"this is anotha one",date:"01/01/2021"}]),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),u=s[0],m=s[1];return c.a.createElement("div",{className:"container"},c.a.createElement(E,{handleSearchNote:m}),c.a.createElement(h,{notes:a.filter(function(e){return e.text.toLowerCase().includes(u)}),handleAddNote:function(e){var t=new Date,n={id:Object(d.a)(),text:e,date:t.toLocaleDateString()},c=[].concat(Object(o.a)(a),[n]);l(c)},handleDeleteNote:function(e){var t=a.filter(function(t){return t.id!==e});l(t)}}))};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)))},8:function(e,t,a){e.exports=a(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.cdd35279.chunk.js.map