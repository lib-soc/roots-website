import{S as t,i as e,a as o,b as r,s as a,e as i,n,d as s,c as m,f as c,t as d,g as f,h as l,v as g,l as p,q as h,m as u}from"./index-4348483d.js";import{w as b}from"./index-71440b21.js";import{loadLocaleContent as w}from"../../../../../../../../../js/libraries/serverTools.js";function v(t){let e,o,a,i,n,m,b,w,v,y,x,k,L,z,M,T,_,j=t[1].contactUs+"",C=t[1].inviteLink+"";return{c(){e=c("footer"),o=c("div"),a=c("div"),i=c("div"),n=c("h2"),m=d(j),b=f(),w=c("p"),v=d("Discord: "),y=c("a"),x=d(C),k=f(),L=c("button"),L.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="42.545" height="72.601" viewBox="0 0 42.545 72.601"><g id="Group_268" data-name="Group 268" transform="translate(-6.177 -2.399)"><rect id="Rectangle_146" data-name="Rectangle 146" width="11" height="51" rx="5.5" transform="translate(22 24)" fill="#D87819"></rect><path id="Path_1145" data-name="Path 1145" d="M23.814,4.021a5,5,0,0,1,7.372,0l16.134,17.6c2.94,3.207,1.046,10.4-3.686,8.379S28.02,14.081,28.391,13.524,16.544,27.976,11.366,30,4.741,24.828,7.68,21.621Z" fill="#D87819"></path></g></svg>',z=f(),M=c("p"),M.innerHTML='Licensed under a Creative Commons <a href="https://creativecommons.org/licenses/by/4.0/legalcode " target="_blank" rel="noreferrer">CC BY 4.0 license.</a>',l(y,"href","https://discord.gg/pSTMacJZsK"),l(y,"target","_blank"),l(y,"rel","noreferrer"),g(y,"margin-left","1.8rem"),l(i,"id","contact-us-container"),l(a,"id","footer-grid-content-container"),l(a,"class","logged"),l(L,"id","footer-up"),l(L,"aria-label","go up"),l(M,"id","footer-copyright"),l(o,"id","footer-content-container")},m(s,c){r(s,e,c),p(e,o),p(o,a),p(a,i),p(i,n),p(n,m),p(i,b),p(i,w),p(w,v),p(w,y),p(y,x),p(o,k),p(o,L),p(o,z),p(o,M),T||(_=h(L,"click",t[4]),T=!0)},p(t,e){2&e&&j!==(j=t[1].contactUs+"")&&u(m,j),2&e&&C!==(C=t[1].inviteLink+"")&&u(x,C)},d(t){t&&s(e),T=!1,_()}}}function y(t){let e,o=2==t[0]&&v(t);return{c(){o&&o.c(),e=i()},m(t,a){o&&o.m(t,a),r(t,e,a)},p(t,r){2==t[0]?o?o.p(t,r):(o=v(t),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null)},d(t){o&&o.d(t),t&&s(e)}}}function x(t){let e,o=t[0],m=y(t);return{c(){m.c(),e=i(),this.c=n},m(t,o){m.m(t,o),r(t,e,o)},p(t,[r]){1&r&&a(o,o=t[0])?(m.d(1),m=y(t),m.c(),m.m(e.parentNode,e)):m.p(t,r)},i:n,o:n,d(t){t&&s(e),m.d(t)}}}function k(t,e,o){let r,a,i=b(0);m(t,i,(t=>o(0,r=t)));let n=b({});m(t,n,(t=>o(1,a=t))),w(n,"countries",i),w(n,"footer-component",i);return[r,a,i,n,()=>{location.href="#"}]}class L extends t{constructor(t){super(),this.shadowRoot.innerHTML="<style>@import '/css/common.css';footer{position:relative;bottom:0;width:100%;height:auto;background:#5e6551;border-top:#D87819 solid 0.5rem}footer p,footer a{font-family:var(--sans-serif)}#footer-content-container{position:relative;margin:auto;padding-top:2rem;max-width:116rem;width:97vw}#footer-grid-content-container{display:grid;margin-left:2rem;margin-right:2rem;margin-bottom:1rem}.logged{grid-template-columns:auto auto 2rem}footer h2{color:#ffffff;font-size:1.3rem;margin-bottom:0.5rem}#footer-copyright{position:relative;margin:auto;width:100%;bottom:0rem;height:3rem;top:0rem;margin-bottom:0;font-size:1rem;text-align:center}#footer-copyright *{font-size:1rem}footer a{font-size:1.1rem;color:#ffffff}footer p{display:block;font-size:1.1rem;color:#d8d8d8;font-family:var(--sans-serif,sans-serif);margin-bottom:0.5rem}#contact-us-container{width:16rem}#footer-up{position:absolute;width:4.8rem;height:4.8rem;border-radius:3.4rem;top:3rem;right:2rem;background:#ffffff}#footer-up svg{width:40%;height:auto}@media only screen and (max-width: 1170px){.logged{grid-template-rows:auto auto auto;grid-template-columns:auto;row-gap:2rem}#footer-copyright{height:1rem;top:-2rem}}</style>",e(this,{target:this.shadowRoot,props:o(this.attributes),customElement:!0},k,x,a,{},null),t&&t.target&&r(t.target,this,t.anchor)}}customElements.define("footer-component",L);export{L as default};
