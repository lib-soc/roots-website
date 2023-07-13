import{S as e,i as n,a as t,b as i,s as o,e as a,n as r,d as s,c as l,o as d,f as m,g as c,t as h,h as p,l as b,q as u,m as g,w as f}from"./index-4348483d.js";import{w as v}from"./index-71440b21.js";import{loadLocaleContent as k}from"../../../../../../../../../js/libraries/serverTools.js";function x(e){let n,t,o,a,r,l,d,f,v,k,x,w,y,j,z,T,H,L,M,N,E,O,R,S,U,q,X=e[2].orgName+"",A=e[2].manifesto+"",B=e[2].joinUs+"",C=e[2].partners+"";return{c(){n=m("header"),t=m("input"),o=c(),a=m("label"),a.innerHTML='<span id="hamb-line"></span>',r=c(),l=m("a"),d=m("picture"),d.innerHTML='<source srcset="/img/common/logo.webp"/> \n                    <source srcset="/img/parties/logo.jpg"/> \n                    <img id="navbar-logo" alt="logo"/>',f=c(),v=m("span"),k=h(X),x=c(),w=m("nav"),y=m("ul"),j=m("li"),z=m("a"),T=h(A),H=c(),L=m("li"),M=m("a"),N=h(B),E=c(),O=m("li"),R=m("a"),S=h(C),p(t,"type","checkbox"),p(t,"id","side-menu"),p(a,"id","hamb"),p(a,"for","side-menu"),p(v,"id","navbar-logo-text"),p(l,"id","logo-container"),p(l,"href","/"+e[5]+"/"),p(z,"href","/"+e[5]+"/manifesto"),p(M,"href","/"+e[5]+"/join-us"),p(R,"href","/"+e[5]+"/partners"),p(y,"id","menu"),p(w,"id","nav"),p(n,"id","navbar")},m(s,m){i(s,n,m),b(n,t),e[7](t),b(n,o),b(n,a),b(n,r),b(n,l),b(l,d),b(l,f),b(l,v),b(v,k),b(n,x),b(n,w),b(w,y),b(y,j),b(j,z),b(z,T),b(y,H),b(y,L),b(L,M),b(M,N),b(y,E),b(y,O),b(O,R),b(R,S),e[8](n),U||(q=u(t,"click",e[6]),U=!0)},p(e,n){4&n&&X!==(X=e[2].orgName+"")&&g(k,X),4&n&&A!==(A=e[2].manifesto+"")&&g(T,A),4&n&&B!==(B=e[2].joinUs+"")&&g(N,B),4&n&&C!==(C=e[2].partners+"")&&g(S,C)},d(t){t&&s(n),e[7](null),e[8](null),U=!1,q()}}}function w(e){let n,t=0!=Object.keys(e[2]).length,o=t&&x(e);return{c(){o&&o.c(),n=a(),this.c=r},m(e,t){o&&o.m(e,t),i(e,n,t)},p(e,[i]){4&i&&(t=0!=Object.keys(e[2]).length),t?o?o.p(e,i):(o=x(e),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i:r,o:r,d(e){o&&o.d(e),e&&s(n)}}}function y(e,n,t){let i,o,a,r=v(0),s=v({});l(e,s,(e=>t(2,i=e)));let m=k(s,"navbar-component",r);return d((()=>{})),[o,a,i,r,s,m,function(){o.checked?t(1,a.style.background="white",a):setTimeout((()=>{t(1,a.style.position="relative",a),t(1,a.style.background="",a),t(1,a.style.boxShadow="",a)}),510)},function(e){f[e?"unshift":"push"]((()=>{o=e,t(0,o)}))},function(e){f[e?"unshift":"push"]((()=>{a=e,t(1,a)}))}]}class j extends e{constructor(e){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';#navbar{position:relative;top:0;width:min(100%,116rem);z-index:1000000000;height:5.26rem}#navbar *{font-family:var(--sans-serif, sans-serif)}#logo-container{display:flex;position:absolute;margin-left:1rem;height:100%;max-height:5.26rem;color:black;z-index:1;flex-direction:row;flex-wrap:nowrap;align-items:center}#navbar-logo{height:3.5rem;width:3.5rem;object-fit:contain;border-radius:1rem}#navbar-logo-text{position:relative;width:auto;height:100%;line-height:400%;white-space:nowrap;text-align:center;font-size:1.4rem;color:#292222;font-family:var(--sans-serif, sans-serif);font-weight:400;padding-left:1.2rem}#nav{position:fixed;width:100%;height:100%;background-color:white;overflow:hidden;z-index:0}#menu a{display:block;padding:1.2rem;padding-top:1rem;padding-bottom:1rem;color:black;font-size:1.4rem}#menu a:hover{background-color:rgb(220, 220, 220)}#menu a:active{background-color:#f7aec0}#menu li{list-style-type:none}#nav{max-height:0}#hamb{position:absolute;cursor:pointer;right:0rem;padding:2.8rem 2rem;z-index:9999}#hamb-line{background:black;display:block;height:2px;position:relative;width:24px}#hamb-line::before,#hamb-line::after{background:black;content:'';display:block;height:100%;position:absolute;transition:all .2s ease-out;width:100%}#hamb-line::before{top:5px}#hamb-line::after{top:-5px}#side-menu{display:none}#side-menu:checked~nav{display:block;max-height:100%;padding-top:5.625rem}#side-menu:checked~#logo-container{position:fixed}#side-menu:checked~#hamb{position:fixed}#side-menu:checked~#logo-container{position:fixed}#side-menu:checked~#hamb #hamb-line{background:transparent}#side-menu:checked~#hamb #hamb-line::before{transform:rotate(-45deg);top:0}#side-menu:checked~#hamb #hamb-line::after{transform:rotate(45deg);top:0}@media only screen and (min-width: 1500px){#navbar{position:relative;width:min(95%,116rem);left:50%;transform:translateX(-50%)}#nav{max-height:none;top:0;position:relative;float:right;width:fit-content;background-color:transparent;overflow:visible}#side-menu:checked~nav{padding-top:0}#menu li{float:left}#menu a:hover{background-color:transparent;color:rgb(127, 127, 127)}#menu a{padding:1.2rem;padding-top:1.9rem;padding-bottom:1.9rem}#hamb{display:none}}</style>",n(this,{target:this.shadowRoot,props:t(this.attributes),customElement:!0},y,w,o,{},null),e&&e.target&&i(e.target,this,e.anchor)}}customElements.define("navbar-component",j);export{j as default};
