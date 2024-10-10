import{S as G,i as I,s as J,F as M,c as S,m as L,t as h,a as v,d as z,C as N,E as R,g as _,k as W,n as Y,o as b,G as j,H as A,p as B,q as D,e as m,w as y,b as C,f as p,r as T,h as g,u as P,v as K,y as E,x as O,z as F}from"./index-ChG3mfEW.js";function Q(i){let e,t,n,l,s,o,f,a,r,u,k,$,d=i[3]&&H(i);return o=new D({props:{class:"form-field required",name:"password",$$slots:{default:[V,({uniqueId:c})=>({8:c}),({uniqueId:c})=>c?256:0]},$$scope:{ctx:i}}}),{c(){e=m("form"),t=m("div"),n=m("h5"),l=y(`Type your password to confirm changing your email address
                    `),d&&d.c(),s=C(),S(o.$$.fragment),f=C(),a=m("button"),r=m("span"),r.textContent="Confirm new email",p(t,"class","content txt-center m-b-base"),p(r,"class","txt"),p(a,"type","submit"),p(a,"class","btn btn-lg btn-block"),a.disabled=i[1],T(a,"btn-loading",i[1])},m(c,w){_(c,e,w),g(e,t),g(t,n),g(n,l),d&&d.m(n,null),g(e,s),L(o,e,null),g(e,f),g(e,a),g(a,r),u=!0,k||($=P(e,"submit",K(i[4])),k=!0)},p(c,w){c[3]?d?d.p(c,w):(d=H(c),d.c(),d.m(n,null)):d&&(d.d(1),d=null);const q={};w&769&&(q.$$scope={dirty:w,ctx:c}),o.$set(q),(!u||w&2)&&(a.disabled=c[1]),(!u||w&2)&&T(a,"btn-loading",c[1])},i(c){u||(h(o.$$.fragment,c),u=!0)},o(c){v(o.$$.fragment,c),u=!1},d(c){c&&b(e),d&&d.d(),z(o),k=!1,$()}}}function U(i){let e,t,n,l,s;return{c(){e=m("div"),e.innerHTML='<div class="icon"><i class="ri-checkbox-circle-line"></i></div> <div class="content txt-bold"><p>Successfully changed the user email address.</p> <p>You can now sign in with your new email address.</p></div>',t=C(),n=m("button"),n.textContent="Close",p(e,"class","alert alert-success"),p(n,"type","button"),p(n,"class","btn btn-transparent btn-block")},m(o,f){_(o,e,f),_(o,t,f),_(o,n,f),l||(s=P(n,"click",i[6]),l=!0)},p:E,i:E,o:E,d(o){o&&(b(e),b(t),b(n)),l=!1,s()}}}function H(i){let e,t,n;return{c(){e=y("to "),t=m("strong"),n=y(i[3]),p(t,"class","txt-nowrap")},m(l,s){_(l,e,s),_(l,t,s),g(t,n)},p(l,s){s&8&&O(n,l[3])},d(l){l&&(b(e),b(t))}}}function V(i){let e,t,n,l,s,o,f,a;return{c(){e=m("label"),t=y("Password"),l=C(),s=m("input"),p(e,"for",n=i[8]),p(s,"type","password"),p(s,"id",o=i[8]),s.required=!0,s.autofocus=!0},m(r,u){_(r,e,u),g(e,t),_(r,l,u),_(r,s,u),F(s,i[0]),s.focus(),f||(a=P(s,"input",i[7]),f=!0)},p(r,u){u&256&&n!==(n=r[8])&&p(e,"for",n),u&256&&o!==(o=r[8])&&p(s,"id",o),u&1&&s.value!==r[0]&&F(s,r[0])},d(r){r&&(b(e),b(l),b(s)),f=!1,a()}}}function X(i){let e,t,n,l;const s=[U,Q],o=[];function f(a,r){return a[2]?0:1}return e=f(i),t=o[e]=s[e](i),{c(){t.c(),n=R()},m(a,r){o[e].m(a,r),_(a,n,r),l=!0},p(a,r){let u=e;e=f(a),e===u?o[e].p(a,r):(W(),v(o[u],1,1,()=>{o[u]=null}),Y(),t=o[e],t?t.p(a,r):(t=o[e]=s[e](a),t.c()),h(t,1),t.m(n.parentNode,n))},i(a){l||(h(t),l=!0)},o(a){v(t),l=!1},d(a){a&&b(n),o[e].d(a)}}}function Z(i){let e,t;return e=new M({props:{nobranding:!0,$$slots:{default:[X]},$$scope:{ctx:i}}}),{c(){S(e.$$.fragment)},m(n,l){L(e,n,l),t=!0},p(n,[l]){const s={};l&527&&(s.$$scope={dirty:l,ctx:n}),e.$set(s)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){v(e.$$.fragment,n),t=!1},d(n){z(e,n)}}}function x(i,e,t){let n,{params:l}=e,s="",o=!1,f=!1;async function a(){if(o)return;t(1,o=!0);const k=new j("../");try{const $=A(l==null?void 0:l.token);await k.collection($.collectionId).confirmEmailChange(l==null?void 0:l.token,s),t(2,f=!0)}catch($){B.error($)}t(1,o=!1)}const r=()=>window.close();function u(){s=this.value,t(0,s)}return i.$$set=k=>{"params"in k&&t(5,l=k.params)},i.$$.update=()=>{i.$$.dirty&32&&t(3,n=N.getJWTPayload(l==null?void 0:l.token).newEmail||"")},[s,o,f,n,a,l,r,u]}class te extends G{constructor(e){super(),I(this,e,x,Z,J,{params:5})}}export{te as default};
