(this["webpackJsonpv2-frontend-task"]=this["webpackJsonpv2-frontend-task"]||[]).push([[0],{19:function(e,a,t){e.exports=t(35)},24:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(16),r=t.n(l),s=(t(24),t(6)),i=t(7),m=t(8),o=t(9),u=(t(25),t(26),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-dark header_bar"},"first"==this.props.part?c.a.createElement("div",null,c.a.createElement("a",{className:"navbar-brand part_1"},"Sudipta"),c.a.createElement("p",{className:"status"},"Status Will be Here")):"second"==this.props.part?c.a.createElement("div",null,c.a.createElement("a",{className:"navbar-brand part_2"},this.props.title),c.a.createElement("p",{className:"ap"},"to Assigned Person Name ",c.a.createElement("span",null,c.a.createElement("i",{className:"fa fa-ellipsis-v detail_icon","aria-hidden":"true"})))):c.a.createElement("a",{className:"navbar-brand"},this.props.title)))}}]),t}(n.Component)),d=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null)}}]),t}(n.Component),E=t(17),p=t(11),v=(t(27),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).state={personList:[{name:"A",id:1},{name:"B",id:2}]},e}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"person_list"},c.a.createElement(u,{part:"first"}),c.a.createElement("div",{className:""},c.a.createElement("div",{className:"search"},c.a.createElement(E.a,{inline:!0},c.a.createElement(p.a,{type:"text",placeholder:"Search..",className:"mr-sm-2"})))),c.a.createElement("div",{className:"list"},this.state.personList.map((function(e){return c.a.createElement(d,{person:e,key:e.id})}))))}}]),t}(n.Component)),f=t(18),N=(t(31),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"upload"},c.a.createElement("h6",null,"Upload Attachment"),c.a.createElement("div",{className:"up_box"},c.a.createElement("div",{className:"text-center"},"Drop your Ataachment here or Click to Upload"),c.a.createElement("i",{className:"fa fa-cloud-upload up_icon","aria-hidden":"true"})))}}]),t}(n.Component)),h=(t(32),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.call(this)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(u,{title:"Add New Task",part:"second"}),c.a.createElement("div",{className:"task_details"},c.a.createElement("h6",null,"Task Name"),c.a.createElement("div",{className:"task_name"},c.a.createElement("i",{className:"fa fa-pencil-square-o task_icon"}),c.a.createElement("span",{className:"task_des"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.")),c.a.createElement("div",{className:"row time_details"},c.a.createElement("div",{className:"col-4 date"},c.a.createElement("h6",null,"Date"),c.a.createElement("div",{className:"detail_col"},c.a.createElement("i",{className:"fa fa-calendar-o task_icon"}),c.a.createElement("span",{className:"value"},"Sun, Sep 26, 2019"))),c.a.createElement("div",{className:"col-4 time"},c.a.createElement("h6",null,"Time"),c.a.createElement("div",{className:"detail_col"},c.a.createElement("i",{className:"fa fa-clock-o task_icon"}),c.a.createElement("span",{className:"value"},"8:10 AM"))),c.a.createElement("div",{className:"col-4 reminder"},c.a.createElement("h6",null,"Reminder"),c.a.createElement("div",{className:"detail_col"},c.a.createElement("i",{className:"fa fa-bell-o task_icon"}),c.a.createElement("span",{className:"value"},"On Time")))),c.a.createElement(f.a,{now:100,className:"pg"}),c.a.createElement("p",{className:"text-center pbar"},"".concat(100,"% complete")),c.a.createElement("div",{className:"subtask"},c.a.createElement("div",{className:"st"},c.a.createElement("i",{className:"fa fa-check-square","aria-hidden":"true"})," ",c.a.createElement("span",{className:"value"}," Subtask 1")),c.a.createElement("div",{className:"cross_icon"},c.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"}))),c.a.createElement("div",{className:"subtask2"},c.a.createElement("div",{className:"st2"},c.a.createElement("i",{className:"fa fa-check-square","aria-hidden":"true"})," ",c.a.createElement("span",{className:"value"}," Subtask 2")),c.a.createElement("div",{className:"cross_icon2"},c.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"}))),c.a.createElement("div",{className:"add_task"},c.a.createElement("div",{className:"text-center text-success"}," ",c.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"})," Add Subtask")),c.a.createElement(N,null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement("button",{className:"btn btn-light light"},"Cancel")),c.a.createElement("div",{className:"col-6"},c.a.createElement("button",{type:"button",className:"btn btn-dark dark"},"Update")))))}}]),t}(n.Component)),b=(t(33),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.call(this)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(u,{title:"Task Conversation",part:"third"}),c.a.createElement("div",{className:" mssg"},c.a.createElement("i",{className:"fa fa-commenting-o","aria-hidden":"true"})),c.a.createElement("div",{className:"write_text"},c.a.createElement("input",{className:"form form-control input-field",type:"text",placeholder:"Write your message..."}),c.a.createElement("span",{className:"fa fa-paperclip icon","aria-hidden":"true"})))}}]),t}(n.Component)),k=function(){return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row homepage"},c.a.createElement("div",{className:"col-md-3 first"},c.a.createElement(v,null)),c.a.createElement("div",{className:"col-md-6 second"},c.a.createElement(h,null)),c.a.createElement("div",{className:"col-md-3 third"},c.a.createElement(b,null))))},O=(t(34),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(k,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.544c8720.chunk.js.map