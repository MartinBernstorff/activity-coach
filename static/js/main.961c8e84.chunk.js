(this["webpackJsonpactivity-coach"]=this["webpackJsonpactivity-coach"]||[]).push([[0],{14:function(e,t,r){},28:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(9),i=r.n(o),a=(r(14),r(3)),s=r(4),c=r(5),l=r(7),d=r(6),u=r(2),f=r.n(u),g=r(0),p=new f.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log"),b=(new Date).toISOString().substring(0,10),h=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).rateToday=function(e){console.log("Rating today"),n.setState({value:e});for(var t=function(t){n.state.activities[t].fields["exec-date"]!==b&&p.update(n.state.activities[t].id,{"T Well Spent?":e.toString()}).then((function(r){console.log("Rating "+n.state.activities[t].id+" a "+e),console.log(r)}))},r=0;r<n.state.activities.length;r++)t(r)},n.state={activities:[]},n}return Object(c.a)(r,[{key:"componentDidMount",value:function(){var e=this;p.list({maxRecords:999,pageSize:100,view:"L: Review",cellFormat:"json"}).then((function(t){e.setState({activities:t.records})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"w-full p-2",children:[Object(g.jsx)("h1",{className:"font-medium text-black text-2xl mb-1",children:"Did you spend yesterday well?"}),Object(g.jsxs)("div",{className:"grid grid-cols-8",children:[Object(g.jsx)("button",{onClick:function(){return e.rateToday(1)},className:"rounded-l-lg border-l w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(1===this.state.value?"bg-gray-100":""),children:"1"}),Object(g.jsx)("button",{onClick:function(){return e.rateToday(2)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(2===this.state.value?"bg-gray-100":""),children:"2"}),Object(g.jsx)("button",{onClick:function(){return e.rateToday(3)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(3===this.state.value?"bg-gray-100":""),children:"3"}),Object(g.jsx)("button",{onClick:function(){return e.rateToday(4)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(4===this.state.value?"bg-gray-100":""),children:"4"}),Object(g.jsx)("button",{onClick:function(){return e.rateToday(5)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(5===this.state.value?"bg-gray-100":""),children:"5"}),Object(g.jsx)("button",{onClick:function(){return e.rateToday(6)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(6===this.state.value?"bg-gray-100":""),children:"6"}),Object(g.jsx)("button",{onClick:function(){return e.rateToday(7)},className:"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(7===this.state.value?"bg-gray-100":""),children:"7"}),Object(g.jsx)("button",{onClick:function(){return e.rateToday(8)},className:"rounded-r-lg w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 "+(8===this.state.value?"bg-gray-100":""),children:"8"})]})]})}}]),r}(n.Component),j=new f.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log"),m=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).promote=function(){j.update(e.props.id,{"T Well Spent?":e.props.val}).then((function(t){console.log("Rating "+e.props.id+"with "+e.props.val),console.log(t)}))},e.openInAt=function(){console.log("Opening in Airtable"),window.open("https://airtable.com/tblo6SQZQakNq4URH/viwd4XwZ1wC8esYgg/"+e.props.id)},e}return Object(c.a)(r,[{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:function(){return e.promote()},className:"w-full px-1 py-1 border-gray-50 active:border-gray-500 hover:bg-gray-100 text-center focus:outline-none active:shadow-sm text-xs border-r border-t border-b text-gray-200 "+(this.props.rating===this.props.val?"bg-gray-50":"")+" "+this.props.style,children:this.props.val})})}}]),r}(n.Component),x=new f.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log"),v=(new Date).toISOString().substring(0,10);String.prototype.toHHMM=function(){var e=parseInt(this,10),t=Math.floor(e/3600),r=Math.floor((e-3600*t)/60),n=e-3600*t-60*r;return t<10&&(t="0"+t),r<10&&(r="0"+r),n<10&&(n="0"+n),t+":"+r};var y=function(e){Object(l.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).replan=function(){var t=document.getElementById(e.props.id);console.log(e.props.name+" "+e.props.promotion),t.style.opacity="0.2",x.create({fields:{"What?":e.props.what_id,Context:"Leisure","exec-date":v,"Group #":5}}).then((function(e){console.log(e),t.style.borderColor="yellow",t.style.borderWidth="medium"}))},e.delete=function(){var t=document.getElementById(e.props.id);t.style.opacity="0.2",x.delete(e.props.id).then((function(e){console.log(e),t.style.borderColor="red",t.style.borderWidth="medium"}))},e.openInAt=function(){console.log("Opening in Airtable"),window.open("https://airtable.com/tblJy7BTWYrsbf5M5/viwO8FxxQGtiJGwTh/"+e.props.id)},e}return Object(c.a)(r,[{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{children:Object(g.jsxs)("a",{href:this.href,className:"shadow-sm active:border-gray-500 group block rounded-lg p-2 sm:p-4 hover:border-gray-300 m-0 text-left border "+(this.props.promotion>0?"opacity-25":""),id:this.props.id,children:[Object(g.jsx)("div",{className:"grid",children:Object(g.jsx)("div",{className:"font-medium text-black text-2xl mb-1",children:this.props.name})}),Object(g.jsx)("div",{className:"space-y-0",children:"goals"in this.props&&"undefined"!==typeof this.props.goals?this.props.goals.split(",").map((function(e){return Object(g.jsx)("div",{className:"inline-block rounded py-1 px-1 bg-gray-300 text-white mr-1",style:{fontSize:"0.6rem"},children:e})})):""}),Object(g.jsxs)("div",{children:[this.props.notes," ","undefined"!==typeof this.props.duration?this.props.duration.toString().toHHMM():""]}),Object(g.jsxs)("div",{className:"grid grid-cols-3 mt-2",children:[Object(g.jsx)("button",{onClick:function(){return e.delete()},className:"w-full rounded-lg py-2 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm border mr-1",children:"Delete"}),Object(g.jsx)("button",{onClick:function(){return e.replan()},className:"w-full rounded-lg py-2 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm border mr-1",children:"Replan"}),Object(g.jsx)("button",{onClick:function(){return e.openInAt()},className:"w-full rounded-lg py-2 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm border mr-1",children:"Airtable"})]}),Object(g.jsxs)("div",{className:"grid grid-cols-8 mt-2",children:[Object(g.jsx)(m,{val:"1",id:this.props.id,rating:this.props.rating,style:"rounded-l-lg border-l"}),Object(g.jsx)(m,{val:"2",id:this.props.id,rating:this.props.rating}),Object(g.jsx)(m,{val:"3",id:this.props.id,rating:this.props.rating}),Object(g.jsx)(m,{val:"4",id:this.props.id,rating:this.props.rating}),Object(g.jsx)(m,{val:"5",id:this.props.id,rating:this.props.rating}),Object(g.jsx)(m,{val:"6",id:this.props.id,rating:this.props.rating}),Object(g.jsx)(m,{val:"7",id:this.props.id,rating:this.props.rating}),Object(g.jsx)(m,{val:"8",id:this.props.id,style:"rounded-r-lg"})]})]})})}}]),r}(n.Component),w=new Date;w.setDate(w.getDate()-1);var O=String(w.getDate()).padStart(2,"0"),S=String(w.getMonth()+1).padStart(2,"0");w=O+"/"+S;var C=new f.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log");function N(e){var t=Object(n.useState)({}),r=Object(a.a)(t,2),o=r[0],i=r[1];return Object(n.useEffect)((function(){C.list({maxRecords:999,pageSize:100,view:"L: Review",cellFormat:"json"}).then((function(e){i(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(o),console.log("Testing "+e.cycle),Object(g.jsxs)("div",{className:"mt-2",children:[Object(g.jsx)("h1",{className:"text-3xl font-bold",children:"Morning"}),Object(g.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-2",children:o.length>0?o.sort((function(e,t){return e.fields["Concluded formula"]-t.fields["Concluded formula"]})).filter((function(e){return e.fields["exec-date"]===w})).filter((function(e){return"undefined"!==typeof e.fields["time-of-day"]})).filter((function(e){return!0===e.fields["time-of-day"].includes("Morning")})).map((function(e){return Object(g.jsx)(y,{name:e.fields.what_string,id:e.id,notes:e.fields["Learning points"],goals:e.fields.goals_string,concluded:e.fields["Concluded formula"]},e.id)})):Object(g.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})]})}var k=new Date;k.setDate(k.getDate()-1);var M=String(k.getDate()).padStart(2,"0"),R=String(k.getMonth()+1).padStart(2,"0");k=M+"/"+R;var D=new f.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log");function L(e){var t=Object(n.useState)({}),r=Object(a.a)(t,2),o=r[0],i=r[1];return Object(n.useEffect)((function(){D.list({maxRecords:999,pageSize:100,view:"L: Review",cellFormat:"json"}).then((function(e){i(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(o),console.log("Testing "+e.cycle),Object(g.jsxs)("div",{className:"mt-2",children:[Object(g.jsx)("h1",{className:"text-3xl font-bold",children:"Afternoon"}),Object(g.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-2",children:o.length>0?o.sort((function(e,t){return e.fields["Concluded formula"]-t.fields["Concluded formula"]})).filter((function(e){return e.fields["exec-date"]===k})).filter((function(e){return"undefined"!==typeof e.fields["time-of-day"]})).filter((function(e){return!0===e.fields["time-of-day"].includes("Afternoon")})).map((function(e){return Object(g.jsx)(y,{name:e.fields.what_string,id:e.id,notes:e.fields["Learning points"],goals:e.fields.goals_string,concluded:e.fields["Concluded formula"]},e.id)})):Object(g.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})]})}var T=new Date;T.setDate(T.getDate()-1);var I=String(T.getDate()).padStart(2,"0"),P=String(T.getMonth()+1).padStart(2,"0");T=I+"/"+P;var W=new f.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log");function B(e){var t=Object(n.useState)({}),r=Object(a.a)(t,2),o=r[0],i=r[1];return Object(n.useEffect)((function(){W.list({maxRecords:999,pageSize:100,view:"L: Review",cellFormat:"json"}).then((function(e){i(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(o),console.log("Testing "+e.cycle),Object(g.jsxs)("div",{className:"mt-2",children:[Object(g.jsx)("h1",{className:"text-3xl font-bold",children:"Evening"}),Object(g.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-2",children:o.length>0?o.sort((function(e,t){return e.fields["Concluded formula"]-t.fields["Concluded formula"]})).filter((function(e){return e.fields["exec-date"]===T})).filter((function(e){return"undefined"!==typeof e.fields["time-of-day"]})).filter((function(e){return!0===e.fields["time-of-day"].includes("Evening")})).map((function(e){return Object(g.jsx)(y,{name:e.fields.what_string,id:e.id,notes:e.fields["Learning points"],goals:e.fields.goals_string,concluded:e.fields["Concluded formula"]},e.id)})):Object(g.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})]})}var A=new Date;A.setDate(A.getDate()-1);var F=String(A.getDate()).padStart(2,"0"),E=String(A.getMonth()+1).padStart(2,"0");A=F+"/"+E;var _=new f.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log");function X(e){var t=Object(n.useState)({}),r=Object(a.a)(t,2),o=r[0],i=r[1];return Object(n.useEffect)((function(){_.list({maxRecords:999,pageSize:100,view:"L: Review",cellFormat:"json"}).then((function(e){i(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(o),console.log("Testing "+e.cycle),Object(g.jsx)("div",{children:Object(g.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-2",children:o.length>0?o.sort((function(e,t){return e.fields["Concluded formula"]-t.fields["Concluded formula"]})).filter((function(e){return e.fields["exec-date"]===A})).filter((function(e){return"undefined"===typeof e.fields["time-of-day"]})).map((function(e){return Object(g.jsx)(y,{name:e.fields.what_string,id:e.id,notes:e.fields["Learning points"],goals:e.fields.goals_string,concluded:e.fields["Concluded formula"]},e.id)})):Object(g.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})})}var K=function(e){var t=Object(n.useState)({}),r=Object(a.a)(t,2),o=r[0],i=r[1];return console.log(o),Object(g.jsx)("div",{className:"grid mx-auto max-w-5xl",children:Object(g.jsxs)("div",{className:"grid m-2",children:[Object(g.jsx)(h,{}),Object(g.jsx)(X,{reRun:i}),Object(g.jsx)(N,{reRun:i}),Object(g.jsx)(L,{reRun:i}),Object(g.jsx)(B,{reRun:i})]})})};i.a.render(Object(g.jsx)(K,{tasks:[]}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.961c8e84.chunk.js.map