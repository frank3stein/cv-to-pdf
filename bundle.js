!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);function r(){}function o(e){return e()}function a(){return Object.create(null)}function l(e){e.forEach(o)}function c(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}new Set;function s(e,t){e.appendChild(t)}function u(e,t,n){e.insertBefore(t,n||null)}function f(e){e.parentNode.removeChild(e)}function d(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function p(){return m(" ")}function g(){return m("")}function $(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function v(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function w(e,t,n){e.classList[n?"add":"remove"](t)}let b;function k(e){b=e}const y=[],x=[],j=[],M=[],_=Promise.resolve();let C=!1;function S(){C||(C=!0,_.then(P))}function O(e){j.push(e)}function P(){const e=new Set;do{for(;y.length;){const e=y.shift();k(e),I(e.$$)}for(;x.length;)x.pop()();for(let t=0;t<j.length;t+=1){const n=j[t];e.has(n)||(n(),e.add(n))}j.length=0}while(y.length);for(;M.length;)M.pop()();C=!1}function I(e){e.fragment&&(e.update(e.dirty),l(e.before_update),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_update.forEach(O))}const T=new Set;let E;function N(e,t){e&&e.i&&(T.delete(e),e.i(t))}function q(e,t,n,r){if(e&&e.o){if(T.has(e))return;T.add(e),E.c.push(()=>{T.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}"undefined"!=typeof window?window:global;let D;function L(e,t,n){const{fragment:r,on_mount:a,on_destroy:i,after_update:s}=e.$$;r.m(t,n),O(()=>{const t=a.map(o).filter(c);i?i.push(...t):l(t),e.$$.on_mount=[]}),s.forEach(O)}function A(e,t){e.$$.fragment&&(l(e.$$.on_destroy),e.$$.fragment.d(t),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={})}function R(e,t,n,o,c,i){const s=b;k(e);const u=t.props||{},f=e.$$={fragment:null,ctx:null,props:i,update:r,not_equal:c,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:a(),dirty:null};let d=!1;var h;f.ctx=n?n(e,u,(t,n,r=n)=>(f.ctx&&c(f.ctx[t],f.ctx[t]=r)&&(f.bound[t]&&f.bound[t](r),d&&function(e,t){e.$$.dirty||(y.push(e),S(),e.$$.dirty=a()),e.$$.dirty[t]=!0}(e,t)),n)):u,f.update(),d=!0,l(f.before_update),f.fragment=o(f.ctx),t.target&&(t.hydrate?f.fragment.l((h=t.target,Array.from(h.childNodes))):f.fragment.c(),t.intro&&N(e.$$.fragment),L(e,t.target,t.anchor),P()),k(s)}"undefined"!=typeof HTMLElement&&(D=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}$destroy(){A(this,1),this.$destroy=r}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}});class U{$destroy(){A(this,1),this.$destroy=r}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}n(6);function H(e){var t;return{c(){(t=h("h1")).textContent="Emil Martinov",v(t,"class","svelte-d9mq36")},m(e,n){u(e,t,n)},p:r,i:r,o:r,d(e){e&&f(t)}}}var z=class extends U{constructor(e){super(),R(this,e,null,H,i,[])}};n(8);function B(e,t,n){const r=Object.create(e);return r.skill=t[n],r}function F(e){var t,n,o=e.skill+"";return{c(){t=h("li"),n=m(o),v(t,"class","tooltip svelte-1es51kh")},m(e,r){u(e,t,r),s(t,n)},p:r,d(e){e&&f(t)}}}function X(e){var t,n,o;let a=e.skills,l=[];for(let t=0;t<a.length;t+=1)l[t]=F(B(e,a,t));return{c(){t=h("article"),n=h("ul");for(let e=0;e<l.length;e+=1)l[e].c();v(n,"class","svelte-1es51kh"),w(n,"column",e.column),o=$(n,"click",e.clickHandler)},m(e,r){u(e,t,r),s(t,n);for(let e=0;e<l.length;e+=1)l[e].m(n,null)},p(e,t){if(e.skills){let r;for(a=t.skills,r=0;r<a.length;r+=1){const o=B(t,a,r);l[r]?l[r].p(e,o):(l[r]=F(o),l[r].c(),l[r].m(n,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=a.length}e.column&&w(n,"column",t.column)},i:r,o:r,d(e){e&&f(t),d(l,e),o()}}}function G(e,t,n){let r=!1;return{skills:["JavaScript","CSS","HTML","Webpack","React","Node"],column:r,clickHandler:e=>{e.stopPropagation(),n("column",r=!r)}}}var V=class extends U{constructor(e){super(),R(this,e,G,X,i,[])}};n(10);function W(e,t,n){const r=Object.create(e);return r.contact=t[n],r}function Y(e){var t,n,o,a,l=e.contact.name+"";return{c(){t=h("li"),n=h("a"),o=m(l),a=p(),v(n,"href",e.contact.link),v(n,"target","_blank"),v(n,"class","svelte-1slwjeq"),v(t,"class","svelte-1slwjeq")},m(e,r){u(e,t,r),s(t,n),s(n,o),s(t,a)},p:r,d(e){e&&f(t)}}}function J(e){var t,n,o,a;let l=e.Contact,c=[];for(let t=0;t<l.length;t+=1)c[t]=Y(W(e,l,t));return{c(){t=h("section"),(n=h("article")).innerHTML='<a href="tel:+31634336711"># +31 6 343 36 711</a>',o=p(),a=h("nav");for(let e=0;e<c.length;e+=1)c[e].c();v(n,"class","svelte-1slwjeq"),v(a,"class","svelte-1slwjeq"),v(t,"class","svelte-1slwjeq")},m(e,r){u(e,t,r),s(t,n),s(t,o),s(t,a);for(let e=0;e<c.length;e+=1)c[e].m(a,null)},p(e,t){if(e.Contact){let n;for(l=t.Contact,n=0;n<l.length;n+=1){const r=W(t,l,n);c[n]?c[n].p(e,r):(c[n]=Y(r),c[n].c(),c[n].m(a,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=l.length}},i:r,o:r,d(e){e&&f(t),d(c,e)}}}function K(e){return{Contact:[{name:"martinov.emil@gmail.com",link:"mailto:martinov.emil@gmail.com"},{name:"@emilmartinov",link:"https://www.twitter.com/emilmartinov"},{name:"github/frank3stein",link:"https://github.com/frank3stein/"},{name:"linkedin.com/in/emilmartinov",link:"https://www.linkedin.com/in/emilmartinov"}]}}var Q=class extends U{constructor(e){super(),R(this,e,K,J,i,[])}};function Z(e,t,n){const r=Object.create(e);return r.work=t[n],r}function ee(e){var t,n,o,a,l,c,i,d,g,$,v=e.work.title+"",w=e.work.beginningDate+"",b=e.work.endDate?e.work.endDate:"now",k=e.work.text+"";return{c(){t=h("h2"),n=m(v),o=p(),a=h("p"),l=m(w),c=m(" - "),i=m(b),d=p(),g=h("p"),$=m(k)},m(e,r){u(e,t,r),s(t,n),u(e,o,r),u(e,a,r),s(a,l),s(a,c),s(a,i),u(e,d,r),u(e,g,r),s(g,$)},p:r,d(e){e&&(f(t),f(o),f(a),f(d),f(g))}}}function te(e){var t,n,o;let a=e.workXP,l=[];for(let t=0;t<a.length;t+=1)l[t]=ee(Z(e,a,t));return{c(){(t=h("h2")).textContent="Work Experience",n=p();for(let e=0;e<l.length;e+=1)l[e].c();o=g()},m(e,r){u(e,t,r),u(e,n,r);for(let t=0;t<l.length;t+=1)l[t].m(e,r);u(e,o,r)},p(e,t){if(e.workXP){let n;for(a=t.workXP,n=0;n<a.length;n+=1){const r=Z(t,a,n);l[n]?l[n].p(e,r):(l[n]=ee(r),l[n].c(),l[n].m(o.parentNode,o))}for(;n<l.length;n+=1)l[n].d(1);l.length=a.length}},i:r,o:r,d(e){e&&(f(t),f(n)),d(l,e),e&&f(o)}}}function ne(e){return{workXP:[{title:"Mentor for Frontend Web Development, Udacity",beginningDate:"May 2018",endDate:"",text:"Udacity is an online education platform which partners with companies like Google, Facebook, Github, Amazon and IBM to bring industry standard education programs to prepare candidates to the job market. I work as a reviewer and mentor to enable students grow into their job roles. I have reviewed hundreds of projects, with an average of 4.92 out of 5 as student feedback."}]}}var re=class extends U{constructor(e){super(),R(this,e,ne,te,i,[])}};n(12);function oe(e,t,n){const r=Object.create(e);return r.project=t[n],r}function ae(e){var t,n,o,a,l,c,i,d,g=e.project.title+"",$=e.project.link+"",w=e.project.text+"";return{c(){t=h("h2"),n=m(g),o=m(" - "),a=h("a"),l=m($),c=p(),i=h("p"),d=m(w),v(a,"href",e.project.link)},m(e,r){u(e,t,r),s(t,n),s(t,o),s(t,a),s(a,l),u(e,c,r),u(e,i,r),s(i,d)},p:r,d(e){e&&(f(t),f(c),f(i))}}}function le(e){var t,n,o;let a=e.projects,l=[];for(let t=0;t<a.length;t+=1)l[t]=ae(oe(e,a,t));return{c(){(t=h("h2")).textContent="Projects",n=p();for(let e=0;e<l.length;e+=1)l[e].c();o=g()},m(e,r){u(e,t,r),u(e,n,r);for(let t=0;t<l.length;t+=1)l[t].m(e,r);u(e,o,r)},p(e,t){if(e.projects){let n;for(a=t.projects,n=0;n<a.length;n+=1){const r=oe(t,a,n);l[n]?l[n].p(e,r):(l[n]=ae(r),l[n].c(),l[n].m(o.parentNode,o))}for(;n<l.length;n+=1)l[n].d(1);l.length=a.length}},i:r,o:r,d(e){e&&(f(t),f(n)),d(l,e),e&&f(o)}}}function ce(e){return{projects:[{title:"Serverless Todo App",link:"https://github.com/frank3stein/serverless",text:"A react todo app. The backend is deployed using Serverless and Cloudformation template. I used OAuth for authentication and DynamoDB for the database. You can also upload images to the app, which is uplaoded to an S3 bucket, with a presigned URL."},{title:"Neighbourhood Project",link:"https://bit.ly/2PiNPxx",text:"I have used YELP API to pull information about pizzerias around Sydney. The results were shown as pins on google maps. You can change the search query and the results update. The location can be updated as well, the modularity exists, but I didn’t add it to view. Lately in order learn/try Vue, I have updated the project to Vue.js and used webpack to bundle it."},{title:"Interactive Resume",link:"https://bit.ly/2V6NumT",text:"I have used React and modularized each piece of the page. So a json file is fed to the app and from that file React renders the whole page. I would like to add a backend to the app as I get more experienced with  node.js. The whole app is bundled with webpack. Initially the app was using Jquery."}]}}var ie=class extends U{constructor(e){super(),R(this,e,ce,le,i,[])}};n(14);function se(e,t,n){const r=Object.create(e);return r.degree=t[n],r}function ue(e,t,n){const r=Object.create(e);return r.school=t[n],r}function fe(e){var t,n,o,a,l,c=e.degree.name+"";return{c(){t=h("ul"),n=h("a"),o=h("li"),a=m(c),l=p(),v(o,"class","svelte-19dq4ab"),v(n,"href",e.degree.link),v(n,"target","_blank")},m(e,r){u(e,t,r),s(t,n),s(n,o),s(o,a),s(t,l)},p:r,d(e){e&&f(t)}}}function de(e){var t,n,r,o,a=e.school.school+"";let l=e.school.degrees,c=[];for(let t=0;t<l.length;t+=1)c[t]=fe(se(e,l,t));return{c(){t=h("h3"),n=m(a),r=p();for(let e=0;e<c.length;e+=1)c[e].c();o=g(),v(t,"class","svelte-19dq4ab")},m(e,a){u(e,t,a),s(t,n),u(e,r,a);for(let t=0;t<c.length;t+=1)c[t].m(e,a);u(e,o,a)},p(e,t){if(e.education){let n;for(l=t.school.degrees,n=0;n<l.length;n+=1){const r=se(t,l,n);c[n]?c[n].p(e,r):(c[n]=fe(r),c[n].c(),c[n].m(o.parentNode,o))}for(;n<c.length;n+=1)c[n].d(1);c.length=l.length}},d(e){e&&(f(t),f(r)),d(c,e),e&&f(o)}}}function he(e){var t,n,o;let a=e.education,l=[];for(let t=0;t<a.length;t+=1)l[t]=de(ue(e,a,t));return{c(){(t=h("h2")).textContent="Education",n=p();for(let e=0;e<l.length;e+=1)l[e].c();o=g(),v(t,"class","svelte-19dq4ab")},m(e,r){u(e,t,r),u(e,n,r);for(let t=0;t<l.length;t+=1)l[t].m(e,r);u(e,o,r)},p(e,t){if(e.education){let n;for(a=t.education,n=0;n<a.length;n+=1){const r=ue(t,a,n);l[n]?l[n].p(e,r):(l[n]=de(r),l[n].c(),l[n].m(o.parentNode,o))}for(;n<l.length;n+=1)l[n].d(1);l.length=a.length}},i:r,o:r,d(e){e&&(f(t),f(n)),d(l,e),e&&f(o)}}}function me(e){return{education:[{school:"Rotterdam School of Management, Erasmus University",degrees:[{name:"MSc, Marketing Management ",link:"https://www.rsm.nl/master/msc-programmes/msc-marketing-management/overview/"},{name:"MSc, Innovation Management ",link:"https://www.rsm.nl/master/msc-programmes/msc-management-of-innovation/overview/"},{name:"MSc, General Management (Renamed, Management) ",link:"https://www.rsm.nl/master/msc-programmes/mscba-master-in-management/overview/"}]},{school:"Koc University (Full Scholarship), Istanbul Turkey",degrees:[{name:"Bachelor of Physics",link:"https://science.ku.edu.tr/en/departments/physics/about/"}]}]}}var pe=class extends U{constructor(e){super(),R(this,e,me,he,i,[])}};function ge(e,t,n){const r=Object.create(e);return r.certificate=t[n],r}function $e(e){var t,n,o,a=e.certificate.name+"";return{c(){t=h("li"),n=h("a"),o=m(a),v(n,"href",e.certificate.link),v(n,"target","_blank")},m(e,r){u(e,t,r),s(t,n),s(n,o)},p:r,d(e){e&&f(t)}}}function ve(e){var t,n,o,a;let l=e.Certifications,c=[];for(let t=0;t<l.length;t+=1)c[t]=$e(ge(e,l,t));return{c(){(t=h("h2")).textContent="Certifications",n=p(),o=h("article"),a=h("ul");for(let e=0;e<c.length;e+=1)c[e].c()},m(e,r){u(e,t,r),u(e,n,r),u(e,o,r),s(o,a);for(let e=0;e<c.length;e+=1)c[e].m(a,null)},p(e,t){if(e.Certifications){let n;for(l=t.Certifications,n=0;n<l.length;n+=1){const r=ge(t,l,n);c[n]?c[n].p(e,r):(c[n]=$e(r),c[n].c(),c[n].m(a,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=l.length}},i:r,o:r,d(e){e&&(f(t),f(n),f(o)),d(c,e)}}}function we(e){return{Certifications:[{name:"Udacity Digital Marketing Nanodegree",link:"https://www.udacity.com/course/digital-marketing-nanodegree--nd018"},{name:"Udacity Frontend Developer Nanodegree",link:"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011"}]}}var be=class extends U{constructor(e){super(),R(this,e,we,ve,i,[])}};n(16);function ke(e){var t,n,o,a,l,c,i,d,m=new z({}),g=new Q({}),$=new V({}),w=new re({}),b=new ie({}),k=new pe({}),y=new be({});return{c(){t=h("article"),m.$$.fragment.c(),n=p(),g.$$.fragment.c(),o=p(),$.$$.fragment.c(),a=p(),w.$$.fragment.c(),l=p(),b.$$.fragment.c(),c=p(),k.$$.fragment.c(),i=p(),y.$$.fragment.c(),v(t,"class","svelte-23wee7")},m(e,r){u(e,t,r),L(m,t,null),s(t,n),L(g,t,null),s(t,o),L($,t,null),s(t,a),L(w,t,null),s(t,l),L(b,t,null),s(t,c),L(k,t,null),s(t,i),L(y,t,null),d=!0},p:r,i(e){d||(N(m.$$.fragment,e),N(g.$$.fragment,e),N($.$$.fragment,e),N(w.$$.fragment,e),N(b.$$.fragment,e),N(k.$$.fragment,e),N(y.$$.fragment,e),d=!0)},o(e){q(m.$$.fragment,e),q(g.$$.fragment,e),q($.$$.fragment,e),q(w.$$.fragment,e),q(b.$$.fragment,e),q(k.$$.fragment,e),q(y.$$.fragment,e),d=!1},d(e){e&&f(t),A(m),A(g),A($),A(w),A(b),A(k),A(y)}}}new class extends U{constructor(e){super(),R(this,e,null,ke,i,[])}}({target:document.body})},function(e,t){},,,,,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){},,function(e,t){}]);