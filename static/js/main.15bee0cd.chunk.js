(this["webpackJsonpreact-moviko"]=this["webpackJsonpreact-moviko"]||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(13),o=a.n(i),c=(a(64),a(8)),s=a(15),l=a(12),d=a(37),p=a(31),u=a(34),j=a(3),b=[{title:"Home",path:"/",icon:Object(j.jsx)(p.a,{}),cName:"nav-text",id:"allMovies"},{title:"NewMovies",path:"/NewMovies",icon:Object(j.jsx)(u.a,{}),cName:"nav-text",id:"newMovie"},{title:"HighestRated",path:"/HighestRated",icon:Object(j.jsx)(u.b,{}),cName:"nav-text",id:"RetedMovie"},{title:"MostPopular",path:"/MostPopular",icon:Object(j.jsx)(u.c,{}),cName:"nav-text",id:"popularMovie"}],v=a(121);var m=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(n.useState)(e),a=Object(c.a)(t,2),r=a[0],i=a[1],o=function(){return i(!r)};return[r,o]},x=a(0),h=function(e){return JSON.parse(localStorage.getItem("cinema")).filter((function(t){return t.id===e}))},g=function(e,t){switch(t.type){case"Home":case"NewMovies":case"HighestRated":case"MostPopular":return h(t.id);default:return e}};var f=function(e,t){return console.log(t.items),t.items},O=Object(n.createContext)(),w=Object(n.createContext)(),_=Object(n.createContext)();function y(e){var t=function(e,t,a){var r=Object(n.useReducer)(a,t,(function(){var a=0;try{a=JSON.parse(window.localStorage.getItem(e)||String(t))}catch(n){a=t}return a})),i=Object(c.a)(r,2),o=i[0],s=i[1];return Object(n.useEffect)((function(){0===window.localStorage.length&&window.localStorage.setItem(e,JSON.stringify(o))}),[]),[o,s]}("cinema","",g),a=Object(c.a)(t,2),r=a[0],i=a[1],o=Object(n.useReducer)(f,""),s=Object(c.a)(o,2),l=s[0],d=s[1];return Object(j.jsx)(_.Provider,{value:{data:l,dis:d,goTo:function(t){e.history.push(t)}},children:Object(j.jsx)(O.Provider,{value:r,children:Object(j.jsx)(w.Provider,{value:i,children:e.children})})})}var M=Object(l.g)(Object(n.memo)(y)),N=a(149),S=a(154),k=a(7),C=a(24),R=a.n(C),I=a(22),F=a(29),H=function(){return new Date},L="04c35731a5ee918f014970082a0088b1",T=H().getFullYear(),z=H().toISOString().substring(0,10),P="https:/api.themoviedb.org/3/search/movie?api_key=".concat(L,"&query="),J="https:/api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=".concat(L,"&page=1"),A="https:/api.themoviedb.org/3/discover/movie?primary_release_year=".concat(T,"&sort_by=vote_average.desc&api_key=").concat(L,"&page=1"),B="https://api.themoviedb.org/3/discover/movie?api_key=".concat(L,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=").concat(T-2,"-01-01&primary_release_date.lte=").concat(z,"&vote_average.gte>7"),D="https:/api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=".concat(L),E=function(e){return"@media (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"2000px"}[e],")")},V=a(40),W=a.n(V);var Y=function(){var e=Object(F.a)(R.a.mark((function e(t){var a,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function U(e){var t=Object(n.useState)([]),a=Object(c.a)(t,2),r=a[0],i=a[1],o=function(){var t=Object(F.a)(R.a.mark((function t(){var a,n;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W.a.get(e);case 2:a=t.sent,n=a.data,i(Object(I.a)(n.results));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[]),Object(I.a)(r)}var q={paper:{width:"60%",position:"flex",marginLeft:"20%",background:"none",top:"50%",left:"50%",borderRadius:"2%"},form:{width:"100%",justifyContent:"center",alignItems:"center",marginBottom:"2px",borderRadius:"80%"}};var G,K=Object(k.a)(q)((function(e){var t=e.classes,a=function(e){var t=Object(n.useState)(e),a=Object(c.a)(t,2),r=a[0],i=a[1];return[r,function(e){i(e.target.value)},function(){i("")}]}(""),r=Object(c.a)(a,3),i=r[0],o=r[1],l=r[2],d=Object(n.useContext)(_),p=d.dis,u=d.goTo;return Object(j.jsx)("div",{className:t.paper,children:Object(j.jsxs)(N.a,{style:{margin:"1rem 0",padding:"0 1rem"},children:[Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),i?Y(P+i).then((function(e){e&&(p({items:e}),u("/search/".concat(i)))})):l()},children:Object(j.jsx)(S.a,{className:t.form,value:i,onChange:o,margin:"normal",label:"search movie...",fullWidth:!0})}),Object(j.jsx)(s.b,{to:"/search/".concat(i)})]})})})),Q=a(19),X={root:{backgroundColor:"#060b26",height:"80px",display:"flex",justifyContent:"start",alignItems:"center"},menubar:{marginLeft:"2rem",fontSize:"2rem",background:"none"},nevMenu:{width:"250px",height:"0%",position:"fixed",transition:"150ms",left:"-200%",top:"0"},navActive:{backgroundColor:"rgba(6, 11, 38, 0.92)",width:"250px",height:"0%",position:"fixed",left:"0",top:"0",transition:"350ms"},navText:(G={display:"fiex",justifyContent:"start",alignItems:"center",padding:"8px 0px 8px 16px",listStyle:"none",marginLeft:"100px",height:"60px","& a":{textDecoration:"none",color:"white",fontSize:"18px",width:"68%",height:"100%",display:"flex",alignItems:"center",padding:"0 16px 0 5px",borderRadius:"4px"},"& a:hover":{backgroundColor:"#1a83ff"},"& svg":{width:"70px"}},Object(Q.a)(G,E("xl"),{marginLeft:"5.8rem",width:"100%",height:"60%",padding:"0 1px 0 1px","& a:hover":{padding:"0 25px 0 2px"},"& svg":{width:"80px"}}),Object(Q.a)(G,E("lg"),{marginLeft:"5rem",width:"68%",height:"60%",padding:"0 1px 0 1px","& a:hover":{padding:"0 25px 0 2px"},"& svg":{width:"0px"}}),Object(Q.a)(G,E("sm"),{marginLeft:".2rem",width:"68%",height:"60%",display:"block",fontSize:"2px",padding:"0 1px 0 1px","& a:hover":{padding:"0 25px 0 2px"},"& svg":{width:"0"}}),Object(Q.a)(G,E("xs"),{marginLeft:".2rem",width:"68%",height:"60%",padding:"0 1px 0 1px","& a:hover":{padding:"0 28px 0 2px"},"& svg":{width:"0"},"& span":{fontSize:"small",marginLeft:".8rem",width:"50px",justifyContent:"center",alignItems:"center"}}),G),navItems:{width:"100%"},navbarToggle:{width:"100%",height:"80px",display:"flex",justifyContent:"start",alignItems:"center"},itemTitle:{marginLeft:"16px"}};var Z=Object(v.a)(X)(Object(l.g)((function(e){var t=e.classes,a=m(!1),r=Object(c.a)(a,2),i=r[0],o=r[1],l=Object(n.useContext)(w),u=Object(n.useContext)(_),v=(u.data,u.dis);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(x.b.Provider,{value:{color:"white"},children:[Object(j.jsx)("div",{className:t.root,children:Object(j.jsx)(s.b,{tg:"#",className:t.menubar,children:i?"":Object(j.jsx)(d.a,{onClick:o})})}),Object(j.jsxs)("div",{style:{position:"relative"},children:[Object(j.jsx)("nav",{className:i?t.navActive:t.nevMenu,children:Object(j.jsx)("div",{className:t.navItems,onClick:o,children:Object(j.jsxs)("li",{className:t.navbarToggle,children:[Object(j.jsx)(s.b,{to:"#",className:t.menubar,children:Object(j.jsx)(p.b,{onClick:o})}),b.map((function(e,a){return Object(j.jsx)("li",{className:t.navText,children:Object(j.jsxs)(s.b,{exact:!0,to:"Home"!==e.title?"#/".concat(e.path):"#/Home",onClick:function(){!function(e){l({type:"".concat(e.title),id:"".concat(e.id)}),v({items:""})}(e)},children:[e.icon,Object(j.jsx)("span",{className:t.itemTitle,children:e.title})]})},a)}))]})})}),Object(j.jsx)(K,{})]})]})})})));var $=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(n.useState)(e),a=Object(c.a)(t,2),r=a[0],i=a[1],o=function(){return i(!r)};return[r,o]},ee=a.p+"static/media/noFoto.1cff21d7.png",te={root:{backgroundColor:"#002e4b",borderRadius:"8px",boxShadow:"0 4px 5px rgba(0,0,0,0.2)",width:"200px",margin:"10px",height:"fit-content",overflow:"hidden",position:"relative"},info:{color:"#fff",display:"flex",alignItems:"center",justifyContent:"space-between",padding:".25rem .5rem .25rem",letterSpacing:".25px"},title:{fontSize:"small",margin:"0",fontweight:"600"},infoSpan:{backgroundColor:"#00385a",margin:".5rem",borderRadius:"4px",fontSize:"small",padding:".25rem .25rem"},overView:{backgroundColor:"rgba(255, 255, 255, 0.863)",fontSize:"small",fontWeight:"600",position:"absolute",padding:".25rem .5rem .25rem",left:"0",bottom:"0",right:"0",height:"100%",overflow:"auto",transform:"translateY(100%)",transition:"transform 0.3s ease-in"},showView:{backgroundColor:"rgba(255, 255, 255, 0.863)",fontSize:"small",fontWeight:"600",position:"absolute",padding:".25rem .5rem .25rem",left:"0",bottom:"0",right:"0",height:"100%",overflow:"auto",transform:"translateY(0)",transition:"transform 0.3s ease-in"},colorRate:{color:"red"},image:{objectFit:"cover",borderRadius:"8px 8px 0 0",width:"100%",height:"350px"}};function ae(e){var t=$(!1),a=Object(c.a)(t,2),n=a[0],r=a[1],i=(e.page,e.classes),o=e.title,s=e.poster_path,l=e.vote_average,d=e.overview,p=e.release_date,u=l>7?"red":"white";return Object(j.jsxs)("div",{className:i.root,onClick:r,children:[Object(j.jsx)("img",{className:i.image,src:s?"https://image.tmdb.org/t/p/w1280/".concat(s):ee,alt:""}),Object(j.jsxs)("div",{className:i.info,children:[Object(j.jsx)("h3",{className:i.title,children:o}),Object(j.jsx)("span",{className:i.infoSpan,style:{color:u},children:l})]}),Object(j.jsx)("div",{className:n?i.showView:i.overView,children:Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Summary"}),":",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),d||"Information unavailable",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Year: ",p||"Unavailable"]})})]})}var ne=Object(v.a)(te)(Object(n.memo)(ae)),re={mainForum:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},noResult:{position:"fixed",top:"40%",left:"45%"},linkBtn:{display:"flex",left:"20%",top:"10%",padding:"8px 0px 8px 16px",listStyle:"none",color:"black",height:"60px","& a":{textDecoration:"none",backgroundColor:"#060b26",color:"black",fontSize:"18px",width:"68%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",padding:"0 16px 0 5px",borderRadius:"4px"},"& a:hover":{backgroundColor:"#1a83ff"}},span:{color:"white"}};var ie=Object(v.a)(re)((function(e){var t=e.classes,a=Object(n.useContext)(O)[0].allMovies.map((function(e,t){return Object(j.jsx)(ne,{index:t,title:e.title,poster_path:e.poster_path,vote_average:e.vote_average,overview:e.overview,release_date:e.release_date,page:"Home"},e.id)}));return Object(j.jsx)("div",{className:t.mainForum,children:a})}));var oe=Object(v.a)(re)((function(e){var t=e.classes,a=Object(n.useContext)(O)[0].popularMovie.map((function(e,t){return Object(j.jsx)(ne,{index:t,title:e.title,poster_path:e.poster_path,vote_average:e.vote_average,overview:e.overview,release_date:e.release_date,page:"MostPopular"},e.id)}));return Object(j.jsx)("div",{className:t.mainForum,children:a})}));function ce(e){var t=e.classes,a=Object(n.useContext)(O)[0].newMovie;console.log(a);var r=a.map((function(e,t){return Object(j.jsx)(ne,{index:t,title:e.title,poster_path:e.poster_path,vote_average:e.vote_average,overview:e.overview,release_date:e.release_date,page:"NewMovies"},e.id)}));return Object(j.jsx)("div",{className:t.mainForum,children:r})}var se=Object(v.a)(re)(Object(n.memo)(ce));var le=Object(v.a)(re)((function(e){var t=e.classes,a=Object(n.useContext)(O)[0].RetedMovie.map((function(e,t){return Object(j.jsx)(ne,{index:t,title:e.title,poster_path:e.poster_path,vote_average:e.vote_average,overview:e.overview,release_date:e.release_date,page:"HighestRated"},e.id)}));return Object(j.jsx)("div",{className:t.mainForum,children:a})})),de=a(56);var pe=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(n.useState)(e),a=Object(c.a)(t,2),r=a[0],i=a[1],o=function(){i(!r)};return[r,o]},ue=a.p+"static/media/noResult.84758466.png";var je=Object(v.a)(re)((function(e){var t=e.classes,a=Object(n.useContext)(_),r=a.data,i=a.goTo,o=r.length?r.map((function(e,t){return Object(j.jsx)(ne,{index:t,title:e.title,poster_path:e.poster_path,vote_average:e.vote_average,overview:e.overview,release_date:e.release_date,page:"SearchReasult"},e.id)})):Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:ue,alt:"",width:150}),Object(j.jsx)("h3",{children:" No results found"}),Object(j.jsx)("li",{className:t.linkBtn,children:Object(j.jsx)(s.b,{exact:!0,to:"/Home",onClick:function(){i("home")},children:Object(j.jsx)("span",{className:t.span,children:"Home"})})})]});return Object(j.jsx)("div",{className:r.length?t.mainForum:t.noResult,children:o})})),be={spinnerLoading:{color:"#002e4b",textAlign:"center",justifyContent:"center",alignItems:"center",display:"block",position:"fixed",top:"38%",left:"50%",transform:"translate(-50%, -50%)"},loadingTitle:{fontSize:"large",marginTop:"6.5rem"}},ve={allMovies:[],newMovie:[],popularMovie:[],RetedMovie:[]},me=window.localStorage;function xe(e){var t=!me.getItem("cinema"),a=pe(t),r=Object(c.a)(a,2),i=r[0],o=r[1],d=e.classes;return function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1],i=function(){var e=Object(F.a)(R.a.mark((function e(){var t,n,i,o,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(B);case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,r(Array.from(n.results)),i=Number(n.total_pages)/(Number(n.total_pages)/2)+2,o=Number(n.page),!(i&&i>o)){e.next=21;break}case 10:if(!(i>o)){e.next=21;break}return o+=1,e.next=14,fetch(B.replace("page=1","page="+o));case 14:return c=e.sent,e.next=17,c.json();case 17:n=e.sent,r.apply(void 0,Object(I.a)(a).concat([Array.from(n.results)])),e.next=10;break;case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),a}().map((function(e){return ve.allMovies.includes(e)?e:ve.allMovies.push(e)})),U(A).map((function(e){return ve.newMovie.includes(e)?e:ve.newMovie.push(e)})),U(D).map((function(e){return ve.RetedMovie.includes(e)?e:ve.RetedMovie.push(e)})),U(J).map((function(e){return ve.popularMovie.includes(e)?e:ve.popularMovie.push(e)})),Object(n.useEffect)((function(){i&&setTimeout((function(){var e=[{id:"allMovies",allMovies:ve.allMovies},{id:"newMovie",newMovie:ve.newMovie},{id:"RetedMovie",RetedMovie:ve.RetedMovie},{id:"popularMovie",popularMovie:ve.popularMovie}];window.localStorage.setItem("cinema",JSON.stringify(e)),o()}),5e3)}),[]),Object(j.jsx)(j.Fragment,{children:i?Object(j.jsxs)("div",{className:d.spinnerLoading,children:[Object(j.jsx)(de.HashLoader,{size:100,color:"#282c34",loading:i}),Object(j.jsx)("h4",{className:d.loadingTitle,children:"Loading..."})]}):Object(j.jsx)(s.a,{basename:"/moviko",children:Object(j.jsx)(l.d,{children:Object(j.jsxs)(M,{children:[Object(j.jsx)(Z,{}),Object(j.jsx)(l.b,{exact:!0,path:"/Home",component:ie}),Object(j.jsx)(l.b,{exact:!0,path:"/NewMovies",component:se}),Object(j.jsx)(l.b,{exact:!0,path:"/HighestRated",component:le}),Object(j.jsx)(l.b,{exact:!0,path:"/MostPopular",component:oe}),Object(j.jsx)(l.b,{exact:!0,path:"/search/:id",component:je}),Object(j.jsx)(l.a,{to:"/Home"})]})})})})}var he=Object(v.a)(be)(Object(n.memo)(xe));var ge=function(){return Object(j.jsx)(M,{children:Object(j.jsx)(he,{})})},fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,156)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),i(e),o(e)}))};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(s.a,{children:Object(j.jsx)(ge,{})})}),document.getElementById("root")),fe()},64:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.15bee0cd.chunk.js.map