import{S as H,i as I,s as J,k,l as b,m as g,h,n as E,b as v,D as m,g as d,d as w,a as S,q as A,c as q,r as z,H as y,e as N,Z as P,N as U,v as V,f as C,J as Z,y as j,z as F,A as G,B as K}from"./index.21fe5810.js";function $(o,t,s){const n=o.slice();return n[7]=t[s],n}function M(o){let t,s,n,e,_;return{c(){t=k("span"),s=k("span"),n=S(),e=k("a"),_=A(o[2]),this.h()},l(l){t=b(l,"SPAN",{});var r=g(t);s=b(r,"SPAN",{class:!0}),g(s).forEach(h),n=q(r),e=b(r,"A",{href:!0});var a=g(e);_=z(a,o[2]),a.forEach(h),r.forEach(h),this.h()},h(){E(s,"class","no-arrow svelte-891zq2"),E(e,"href","/lexmain/"+o[4])},m(l,r){v(l,t,r),m(t,s),m(t,n),m(t,e),m(e,_)},p:y,i:y,o:y,d(l){l&&h(t)}}}function O(o){let t,s,n,e,_,l,r,a,c,u,i=o[0]&&T(o);return{c(){t=k("span"),s=k("span"),n=A("▶"),e=S(),_=A(o[2]),l=S(),i&&i.c(),r=N(),this.h()},l(f){t=b(f,"SPAN",{});var p=g(t);s=b(p,"SPAN",{class:!0});var D=g(s);n=z(D,"▶"),D.forEach(h),e=q(p),_=z(p,o[2]),p.forEach(h),l=q(f),i&&i.l(f),r=N(),this.h()},h(){E(s,"class","arrow svelte-891zq2"),P(s,"arrowDown",o[1])},m(f,p){v(f,t,p),m(t,s),m(s,n),m(t,e),m(t,_),v(f,l,p),i&&i.m(f,p),v(f,r,p),a=!0,c||(u=U(t,"click",o[5]),c=!0)},p(f,p){(!a||p&2)&&P(s,"arrowDown",f[1]),f[0]?i?(i.p(f,p),p&1&&d(i,1)):(i=T(f),i.c(),d(i,1),i.m(r.parentNode,r)):i&&(V(),w(i,1,1,()=>{i=null}),C())},i(f){a||(d(i),a=!0)},o(f){w(i),a=!1},d(f){f&&h(t),f&&h(l),i&&i.d(f),f&&h(r),c=!1,u()}}}function T(o){let t,s,n=o[3],e=[];for(let l=0;l<n.length;l+=1)e[l]=B($(o,n,l));const _=l=>w(e[l],1,1,()=>{e[l]=null});return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=N()},l(l){for(let r=0;r<e.length;r+=1)e[r].l(l);t=N()},m(l,r){for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(l,r);v(l,t,r),s=!0},p(l,r){if(r&8){n=l[3];let a;for(a=0;a<n.length;a+=1){const c=$(l,n,a);e[a]?(e[a].p(c,r),d(e[a],1)):(e[a]=B(c),e[a].c(),d(e[a],1),e[a].m(t.parentNode,t))}for(V(),a=n.length;a<e.length;a+=1)_(a);C()}},i(l){if(!s){for(let r=0;r<n.length;r+=1)d(e[r]);s=!0}},o(l){e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)w(e[r]);s=!1},d(l){Z(e,l),l&&h(t)}}}function B(o){let t,s;return t=new W({props:{tree:o[7]}}),{c(){j(t.$$.fragment)},l(n){F(t.$$.fragment,n)},m(n,e){G(t,n,e),s=!0},p:y,i(n){s||(d(t.$$.fragment,n),s=!0)},o(n){w(t.$$.fragment,n),s=!1},d(n){K(t,n)}}}function Q(o){let t,s,n,e,_;const l=[O,M],r=[];function a(c,u){return c[3]?0:1}return n=a(o),e=r[n]=l[n](o),{c(){t=k("ul"),s=k("li"),e.c(),this.h()},l(c){t=b(c,"UL",{class:!0});var u=g(t);s=b(u,"LI",{});var i=g(s);e.l(i),i.forEach(h),u.forEach(h),this.h()},h(){E(t,"class","svelte-891zq2")},m(c,u){v(c,t,u),m(t,s),r[n].m(s,null),_=!0},p(c,[u]){e.p(c,u)},i(c){_||(d(e),_=!0)},o(c){w(e),_=!1},d(c){c&&h(t),r[n].d()}}}const L={};function R(o,t,s){let n,{tree:e}=t;const{label:_,children:l,id:r}=e;let a=L[_]||!1;const c=()=>{s(0,a=L[_]=!a)};return o.$$set=u=>{"tree"in u&&s(6,e=u.tree)},o.$$.update=()=>{o.$$.dirty&1&&s(1,n=a)},[a,n,_,l,r,c,e]}class W extends H{constructor(t){super(),I(this,t,R,Q,J,{tree:6})}}export{W as T};
