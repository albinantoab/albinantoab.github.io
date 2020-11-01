(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[5],{101:function(e,a,t){},105:function(e,a,t){"use strict";t.r(a);var s=t(6),r=t(0),c=t.n(r),n=t(32),l=t(46),i=t(7),d=t(35),o=(t(101),t(90)),b=t(97),j=t(1),u=t(2),f=t(3),m=t.n(f),O=t(4),p=t(20),v=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(j.a)({},a,{ref:t,className:m()(a.className,e)}))}))},h=t(54),x=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,r=e.variant,n=e.as,l=void 0===n?"img":n,i=Object(u.a)(e,["bsPrefix","className","variant","as"]),d=Object(O.a)(t,"card-img");return c.a.createElement(l,Object(j.a)({ref:a,className:m()(r?d+"-"+r:d,s)},i))}));x.displayName="CardImg",x.defaultProps={variant:null};var N=x,y=v("h5"),g=v("h6"),w=Object(p.a)("card-body"),P=Object(p.a)("card-title",{Component:y}),C=Object(p.a)("card-subtitle",{Component:g}),R=Object(p.a)("card-link",{Component:"a"}),E=Object(p.a)("card-text",{Component:"p"}),T=Object(p.a)("card-header"),z=Object(p.a)("card-footer"),k=Object(p.a)("card-img-overlay"),I=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.bg,l=e.text,i=e.border,d=e.body,o=e.children,b=e.as,f=void 0===b?"div":b,p=Object(u.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),v=Object(O.a)(t,"card"),x=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:v+"-header"}}),[v]);return c.a.createElement(h.a.Provider,{value:x},c.a.createElement(f,Object(j.a)({ref:a},p,{className:m()(s,v,n&&"bg-"+n,l&&"text-"+l,i&&"border-"+i)}),d?c.a.createElement(w,null,o):o))}));I.displayName="Card",I.defaultProps={body:!1},I.Img=N,I.Title=P,I.Subtitle=C,I.Body=w,I.Link=R,I.Text=E,I.Header=T,I.Footer=z,I.ImgOverlay=k;var D=I,B=t(98),M=t(61),G=t(50),L=t(95),S=t(96),F=t(51);a.default=Object(n.b)(null,{fetchDetails:function(e){return function(a){return a({type:i.h}),fetch("".concat(l.b,"?apikey=").concat(l.a,"&i=").concat(e)).then((function(e){return e.json()})).then((function(e){a({type:i.b,payload:e}),a({type:i.c})})).catch((function(e){a({type:i.b,payload:{}})}))}},setFavorite:F.b})((function(e){var a=Object(n.c)((function(e){return e.details.data})),t=Object(n.c)((function(e){return e.list.showDetailsLoader})),c=e.match.params.id,l=Object(n.c)((function(e){return e.list.favorites})),i=Object(G.b)("imdbID",c,l);if(Object(r.useEffect)((function(){e.fetchDetails(c)}),[]),t)return Object(s.jsx)(d.a,{});if(!a||"True"!==a.Response)return Object(s.jsx)(o.a,{});var j=a.Title,u=a.Type,f=a.Writer,m=a.Director,O=a.imdbRating,p=a.imdbVotes,v=a.Runtime,h=a.Released,x=a.Production,N=a.Poster,y=a.Plot,g=a.Language,w=a.Genre,P=a.Country,C=a.Awards,R=a.Actors,E={Poster:N,Title:j,Type:u,Year:a.Year,imdbID:c};return Object(s.jsx)(b.a,{className:"details-container",children:Object(s.jsxs)(D,{bg:"dark",children:[Object(s.jsx)(D.Img,{variant:"top",src:N,alt:"poster"}),Object(s.jsxs)(D.Body,{children:[Object(s.jsxs)("div",{className:"movie-name",children:[j,-1===i?Object(s.jsx)(L.a,{className:"details-fav-icon",onClick:function(){return e.setFavorite(l,E,"add")}}):Object(s.jsx)(S.a,{className:"details-fav-icon",onClick:function(){return e.setFavorite(l,E,"remove")}})]}),Object(s.jsx)("div",{className:"movie-details",children:Object(s.jsxs)(B.a,{children:[Object(s.jsx)(M.a,{children:y}),Object(s.jsxs)(M.a,{children:[Object(s.jsxs)("div",{className:"details-data",children:[Object(s.jsx)("span",{className:"data-label",children:"Cast: "}),Object(s.jsxs)("span",{className:"data-value",children:[" ",R," "]})]}),Object(s.jsxs)("div",{className:"details-data",children:[Object(s.jsx)("span",{className:"data-label",children:"Type: "}),Object(s.jsxs)("span",{className:"data-value",children:[" ",u," "]})]}),Object(s.jsxs)("div",{className:"details-data",children:[Object(s.jsx)("span",{className:"data-label",children:"Genre: "}),Object(s.jsxs)("span",{className:"data-value",children:[" ",w," "]})]}),Object(s.jsxs)("div",{className:"details-data",children:[Object(s.jsx)("span",{className:"data-label",children:"IMdB Rating: "}),Object(s.jsxs)("span",{className:"data-value",children:[" ",O," "]})]}),Object(s.jsxs)("div",{className:"details-data",children:[Object(s.jsx)("span",{className:"data-label",children:"IMdB Voting: "}),Object(s.jsxs)("span",{className:"data-value",children:[" ",p," "]})]}),Object(s.jsxs)("div",{className:"details-data",children:[Object(s.jsx)("span",{className:"data-label",children:"Release Date: "}),Object(s.jsxs)("span",{className:"data-value",children:[" ",h," "]})]}),Object(s.jsxs)("div",{className:"details-data",children:[Object(s.jsx)("span",{className:"data-label",children:"Writer: "}),Object(s.jsxs)("span",{className:"data-value",children:[" ",f," "]})]}),Object(s.jsxs)("div",{className:"details-data",children:[Object(s.jsx)("span",{className:"data-label",children:"Director: "}),Object(s.jsxs)("span",{className:"data-value",children:[" ",m," "]})]}),Object(s.jsxs)("div",{className:"details-data",children:[Object(s.jsx)("span",{className:"data-label",children:"Runtime: "}),Object(s.jsxs)("span",{className:"data-value",children:[" ",v," "]})]}),Object(s.jsxs)("div",{className:"details-data",children:[Object(s.jsx)("span",{className:"data-label",children:"Production: "}),Object(s.jsxs)("span",{className:"data-value",children:[" ",x," "]})]}),Object(s.jsxs)("div",{className:"details-data",children:[Object(s.jsx)("span",{className:"data-label",children:"Language: "}),Object(s.jsxs)("span",{className:"data-value",children:[" ",g," "]})]}),Object(s.jsxs)("div",{className:"details-data",children:[Object(s.jsx)("span",{className:"data-label",children:"Country: "}),Object(s.jsxs)("span",{className:"data-value",children:[" ",P," "]})]}),Object(s.jsxs)("div",{className:"details-data",children:[Object(s.jsx)("span",{className:"data-label",children:"Awards: "}),Object(s.jsxs)("span",{className:"data-value",children:[" ",C," "]})]})]})]})})]})]})})}))},90:function(e,a,t){"use strict";var s=t(6);t(91);a.a=function(){return Object(s.jsx)("div",{className:"no-data-div",children:"No data found..."})}},91:function(e,a,t){},95:function(e,a,t){"use strict";var s=t(0),r=t.n(s),c=t(5),n=t.n(c);function l(){return(l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}function i(e,a){if(null==e)return{};var t,s,r=function(e,a){if(null==e)return{};var t,s,r={},c=Object.keys(e);for(s=0;s<c.length;s++)t=c[s],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)t=c[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=Object(s.forwardRef)((function(e,a){var t=e.color,s=e.size,c=i(e,["color","size"]);return r.a.createElement("svg",l({ref:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:s,height:s,fill:t},c),r.a.createElement("path",{fillRule:"evenodd",d:"M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"}))}));d.propTypes={color:n.a.string,size:n.a.oneOfType([n.a.string,n.a.number])},d.defaultProps={color:"currentColor",size:"1em"},a.a=d},96:function(e,a,t){"use strict";var s=t(0),r=t.n(s),c=t(5),n=t.n(c);function l(){return(l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}function i(e,a){if(null==e)return{};var t,s,r=function(e,a){if(null==e)return{};var t,s,r={},c=Object.keys(e);for(s=0;s<c.length;s++)t=c[s],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)t=c[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=Object(s.forwardRef)((function(e,a){var t=e.color,s=e.size,c=i(e,["color","size"]);return r.a.createElement("svg",l({ref:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:s,height:s,fill:t},c),r.a.createElement("path",{fillRule:"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"}))}));d.propTypes={color:n.a.string,size:n.a.oneOfType([n.a.string,n.a.number])},d.defaultProps={color:"currentColor",size:"1em"},a.a=d},97:function(e,a,t){"use strict";var s=t(1),r=t(2),c=t(3),n=t.n(c),l=t(0),i=t.n(l),d=t(4),o=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.fluid,l=e.as,o=void 0===l?"div":l,b=e.className,j=Object(r.a)(e,["bsPrefix","fluid","as","className"]),u=Object(d.a)(t,"container"),f="string"===typeof c?"-"+c:"-fluid";return i.a.createElement(o,Object(s.a)({ref:a},j,{className:n()(b,c?""+u+f:u)}))}));o.displayName="Container",o.defaultProps={fluid:!1},a.a=o},98:function(e,a,t){"use strict";var s=t(1),r=t(2),c=t(3),n=t.n(c),l=t(0),i=t.n(l),d=t(4),o=["xl","lg","md","sm","xs"],b=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.noGutters,b=e.as,j=void 0===b?"div":b,u=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),f=Object(d.a)(t,"row"),m=f+"-cols",O=[];return o.forEach((function(e){var a,t=u[e];delete u[e];var s="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&O.push(""+m+s+"-"+a)})),i.a.createElement(j,Object(s.a)({ref:a},u,{className:n.a.apply(void 0,[c,f,l&&"no-gutters"].concat(O))}))}));b.displayName="Row",b.defaultProps={noGutters:!1},a.a=b}}]);
//# sourceMappingURL=5.b2ff68ac.chunk.js.map