(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{49:function(e,t,c){e.exports={item:"QuoteItem_item__3zTm_"}},50:function(e,t,c){e.exports={list:"QuoteList_list__1PZ43",sorting:"QuoteList_sorting__3l9wp"}},51:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__3qySI"}},53:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),i=c(2),o=c(8),r=c(49),a=c.n(r),u=c(1),d=function(e){return Object(u.jsxs)("li",{className:a.a.item,children:[Object(u.jsxs)("figure",{children:[Object(u.jsx)("blockquote",{children:Object(u.jsx)("p",{children:e.text})}),Object(u.jsx)("figcaption",{children:e.author})]}),Object(u.jsx)(o.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},j=c(50),l=c.n(j),b=function(e){var t,c,n=Object(i.h)(),o=Object(i.i)(),r="asc"===new URLSearchParams(o.search).get("sort"),a=(t=e.quotes,c=r,t.sort((function(e,t){return c?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(u.jsxs)(s.Fragment,{children:[Object(u.jsx)("div",{className:l.a.sorting,children:Object(u.jsxs)("button",{onClick:function(){n.push({pathname:o.pathname,search:"?sort=".concat(r?"desc":"asc")})},children:["Sort ",r?"descending":"ascending"]})}),Object(u.jsx)("ul",{className:l.a.list,children:a.map((function(e){return Object(u.jsx)(d,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},h=c(35),x=c(36),O=c(14),m=c(51),p=c.n(m),f=function(){return Object(u.jsxs)("div",{className:p.a.noquotes,children:[Object(u.jsx)("p",{children:"No quotes found!"}),Object(u.jsx)(o.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})};t.default=function(){var e=Object(h.a)(x.d,!0),t=e.sendRequest,c=e.status,i=e.data,o=e.error;return Object(s.useEffect)((function(){t()}),[t]),"pending"===c?Object(u.jsx)("div",{className:"centered",children:Object(u.jsx)(O.a,{})}):o?Object(u.jsx)("p",{className:"centered focus",children:o}):"completed"!==c||i&&0!==i.length?Object(u.jsx)(n.a.Fragment,{children:Object(u.jsx)(b,{quotes:i})}):Object(u.jsx)(f,{})}}}]);
//# sourceMappingURL=5.d74dccde.chunk.js.map