(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{35:function(e,t,n){"use strict";var a=n(6),r=(n(0),n(56));n(76);t.a=function(){return Object(a.jsx)("div",{className:"loader-container",children:Object(a.jsx)(r.a,{animation:"grow"})})}},46:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a="http://www.omdbapi.com/",r="df450ce"},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a=function(e,t){if(!e||0===e.length)return[];for(var n=[],a=0;a<e.length;a+=t)n.push(e.slice(a,a+t));return n},r=function(e,t,n){for(var a=0;a<n.length;a++)if(n[a][e]===t)return a;return-1}},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var a=n(46),r=n(50),c=n(7),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"captain";return function(r){return r({type:c.i}),fetch("".concat(a.b,"?apikey=").concat(a.a,"&s=").concat(n,"&page=").concat(t,"&type=").concat(e)).then((function(e){return e.json()})).then((function(a){r({type:c.d}),"True"!==a.Response||0===a.Search.length?r({type:c.f}):(1===t&&r({type:c.f}),r({type:c.a,payload:{res:a.Search,page:t,type:e,search:n}}))})).catch((function(e){r({type:c.f})}))}},i=function(e,t,n){return function(a){var o=t.imdbID,i=Object(r.b)("imdbID",o,e);return"add"===n?e.push(t):e.splice(i,1),localStorage.setItem("favorites",JSON.stringify(e)),a({type:c.g,payload:{favorites:e}})}}},7:function(e,t,n){"use strict";n.d(t,"j",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"i",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return f}));var a="COMMON/SHOW_LOADING",r="COMMON/HIDE_LOADER",c="LIST/SHOW_INDEX_LOADER",o="LIST/HIDE_INDEX_LOADER",i="LIST/FETCHED_LIST",s="LIST/NO_DATA",u="LIST/SET_FAVORITE",d="DETAILS/SHOW_DETAILS_LOADER",l="DETAILS/HIDE_DETAILS_LOADER",f="DETAILS/FETCH_DETAILS"},73:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(0),c=n.n(r),o=n(16),i=n.n(o),s=n(32),u=(n(73),n(74),n(41)),d=n.n(u),l=n(52),f=n(9),j=(n(75),n(35)),h=n(63),b=n(87),O=n(89),p=n(86),v=n(88),g=n(60),x=n(59),I=n(51),m=Object(s.b)(null,{fetchList:I.a})((function(e){var t=e.fetchList,n=Object(r.useState)(""),c=Object(h.a)(n,2),o=c[0],i=c[1];return Object(a.jsxs)(b.a,{expand:"md",collapseOnSelect:!0,sticky:"top",bg:"dark",variant:"dark",children:[Object(a.jsx)(b.a.Brand,{href:"/",children:"FilmyApp"}),Object(a.jsxs)(O.a,{className:"mr-auto",children:[Object(a.jsx)(O.a.Link,{href:"/favorites",children:"Favorites"}),Object(a.jsxs)(p.a,{title:"Type",id:"collasible-nav-dropdown",children:[Object(a.jsx)(p.a.Item,{onClick:function(){return t("movie",1,o)},children:"Movie"}),Object(a.jsx)(p.a.Item,{onClick:function(){return t("series",1,o)},children:"Series"}),Object(a.jsx)(p.a.Item,{onClick:function(){return t("episode",1,o)},children:"Episode"})]})]}),Object(a.jsxs)(v.a,{inline:!0,children:[Object(a.jsx)(g.a,{type:"text",placeholder:"Search",className:"mr-sm-2",value:o,onChange:function(e){return i(e.currentTarget.value)}}),Object(a.jsx)(x.a,{variant:"outline-info",onClick:function(){return t("",1,o)},children:"Search"})]})]})})),S=function(){var e=d()({loader:function(){return n.e(4).then(n.bind(null,102))},loading:j.a}),t=d()({loader:function(){return n.e(3).then(n.bind(null,103))},loading:j.a}),r=d()({loader:function(){return n.e(5).then(n.bind(null,105))},loading:j.a});return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(l.a,{children:[Object(a.jsx)(m,{}),Object(a.jsxs)(f.c,{children:[Object(a.jsx)(f.a,{path:"/details/:id",component:r,exact:!0}),Object(a.jsx)(f.a,{path:"/favorites",component:t,exact:!0}),Object(a.jsx)(f.a,{path:"/index",component:e,exact:!0}),Object(a.jsx)(f.a,{path:"/",component:e,exact:!0})]})]})})},L=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,104)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))},y=n(27),D=n(62),E=n(8),T=n(7),w={showLoader:!0},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case T.j:return Object(E.a)(Object(E.a)({},e),{},{showLoader:!0});case T.e:return Object(E.a)(Object(E.a)({},e),{},{showLoader:!1});default:return e}},_=n(43),N={showIndexLoader:!0,data:null,page:1,search:"captain",type:"",favorites:localStorage.getItem("favorites")?JSON.parse(localStorage.getItem("favorites")):[]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case T.i:return Object(E.a)(Object(E.a)({},e),{},{showIndexLoader:!0});case T.d:return Object(E.a)(Object(E.a)({},e),{},{showIndexLoader:!1});case T.a:return Object(E.a)(Object(E.a)({},e),{},{data:Array.isArray(e.data)?[].concat(Object(_.a)(e.data),Object(_.a)(a.res)):a.res,page:a.page,search:a.search,type:a.type});case T.f:return Object(E.a)(Object(E.a)({},e),{},{data:[]});case T.g:return Object(E.a)(Object(E.a)({},e),{},{favorites:Object(_.a)(a.favorites)});default:return e}},k={showDetailsLoader:!0,data:null,favorites:localStorage.getItem("favorites")?JSON.parse(localStorage.getItem("favorites")):[]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case T.h:return Object(E.a)(Object(E.a)({},e),{},{showDetailsLoader:!0});case T.c:return Object(E.a)(Object(E.a)({},e),{},{showDetailsLoader:!1});case T.b:return Object(E.a)(Object(E.a)({},e),{},{data:a});default:return e}},H=Object(y.c)({common:A,list:C,details:F}),R=Object(y.d)(H,Object(y.a)(D.a));i.a.render(Object(a.jsx)(s.a,{store:R,children:Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(S,{})})}),document.getElementById("root")),L()}},[[80,1,2]]]);
//# sourceMappingURL=main.87138d5d.chunk.js.map