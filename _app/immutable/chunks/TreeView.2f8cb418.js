import{S as C,i as H,s as I,k as b,l as g,m as v,h as _,n as E,b as d,D as m,g as k,d as y,a as q,c as z,H as w,q as A,e as N,r as S,Z as P,N as J,v as V,f as j,J as U,y as Z,z as F,A as G,B as K}from"./index.21fe5810.js";function $(o,e,r){const l=o.slice();return l[7]=e[r],l}function M(o){let e,r,l;function t(a,n){return a[4]?R:Q}let s=t(o)(o);return{c(){e=b("span"),r=b("span"),l=q(),s.c(),this.h()},l(a){e=g(a,"SPAN",{});var n=v(e);r=g(n,"SPAN",{class:!0}),v(r).forEach(_),l=z(n),s.l(n),n.forEach(_),this.h()},h(){E(r,"class","no-arrow svelte-891zq2")},m(a,n){d(a,e,n),m(e,r),m(e,l),s.m(e,null)},p(a,n){s.p(a,n)},i:w,o:w,d(a){a&&_(e),s.d()}}}function O(o){let e,r,l,t,u,s,a,n,i,h,c=o[0]&&T(o);return{c(){e=b("span"),r=b("span"),l=A("▶"),t=q(),u=A(o[2]),s=q(),c&&c.c(),a=N(),this.h()},l(f){e=g(f,"SPAN",{});var p=v(e);r=g(p,"SPAN",{class:!0});var D=v(r);l=S(D,"▶"),D.forEach(_),t=z(p),u=S(p,o[2]),p.forEach(_),s=z(f),c&&c.l(f),a=N(),this.h()},h(){E(r,"class","arrow svelte-891zq2"),P(r,"arrowDown",o[1])},m(f,p){d(f,e,p),m(e,r),m(r,l),m(e,t),m(e,u),d(f,s,p),c&&c.m(f,p),d(f,a,p),n=!0,i||(h=J(e,"click",o[5]),i=!0)},p(f,p){(!n||p&2)&&P(r,"arrowDown",f[1]),f[0]?c?(c.p(f,p),p&1&&k(c,1)):(c=T(f),c.c(),k(c,1),c.m(a.parentNode,a)):c&&(V(),y(c,1,1,()=>{c=null}),j())},i(f){n||(k(c),n=!0)},o(f){y(c),n=!1},d(f){f&&_(e),f&&_(s),c&&c.d(f),f&&_(a),i=!1,h()}}}function Q(o){let e,r;return{c(){e=b("a"),r=A(o[2]),this.h()},l(l){e=g(l,"A",{href:!0});var t=v(e);r=S(t,o[2]),t.forEach(_),this.h()},h(){E(e,"href","/lexmain/tyhja")},m(l,t){d(l,e,t),m(e,r)},p:w,d(l){l&&_(e)}}}function R(o){let e,r;return{c(){e=b("a"),r=A(o[2]),this.h()},l(l){e=g(l,"A",{href:!0});var t=v(e);r=S(t,o[2]),t.forEach(_),this.h()},h(){E(e,"href","/lexmain/"+o[4])},m(l,t){d(l,e,t),m(e,r)},p:w,d(l){l&&_(e)}}}function T(o){let e,r,l=o[3],t=[];for(let s=0;s<l.length;s+=1)t[s]=B($(o,l,s));const u=s=>y(t[s],1,1,()=>{t[s]=null});return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=N()},l(s){for(let a=0;a<t.length;a+=1)t[a].l(s);e=N()},m(s,a){for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(s,a);d(s,e,a),r=!0},p(s,a){if(a&8){l=s[3];let n;for(n=0;n<l.length;n+=1){const i=$(s,l,n);t[n]?(t[n].p(i,a),k(t[n],1)):(t[n]=B(i),t[n].c(),k(t[n],1),t[n].m(e.parentNode,e))}for(V(),n=l.length;n<t.length;n+=1)u(n);j()}},i(s){if(!r){for(let a=0;a<l.length;a+=1)k(t[a]);r=!0}},o(s){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)y(t[a]);r=!1},d(s){U(t,s),s&&_(e)}}}function B(o){let e,r;return e=new Y({props:{tree:o[7]}}),{c(){Z(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,t){G(e,l,t),r=!0},p:w,i(l){r||(k(e.$$.fragment,l),r=!0)},o(l){y(e.$$.fragment,l),r=!1},d(l){K(e,l)}}}function W(o){let e,r,l,t,u;const s=[O,M],a=[];function n(i,h){return i[3]?0:1}return l=n(o),t=a[l]=s[l](o),{c(){e=b("ul"),r=b("li"),t.c(),this.h()},l(i){e=g(i,"UL",{class:!0});var h=v(e);r=g(h,"LI",{});var c=v(r);t.l(c),c.forEach(_),h.forEach(_),this.h()},h(){E(e,"class","svelte-891zq2")},m(i,h){d(i,e,h),m(e,r),a[l].m(r,null),u=!0},p(i,[h]){t.p(i,h)},i(i){u||(k(t),u=!0)},o(i){y(t),u=!1},d(i){i&&_(e),a[l].d()}}}const L={};function X(o,e,r){let l,{tree:t}=e;const{label:u,children:s,id:a}=t;let n=L[u]||!1;const i=()=>{r(0,n=L[u]=!n)};return o.$$set=h=>{"tree"in h&&r(6,t=h.tree)},o.$$.update=()=>{o.$$.dirty&1&&r(1,l=n)},[n,l,u,s,a,i,t]}class Y extends C{constructor(e){super(),H(this,e,X,W,I,{tree:6})}}export{Y as T};
