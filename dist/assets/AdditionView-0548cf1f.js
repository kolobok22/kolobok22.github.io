import{r as a,a as N,s as R,c as S,o as j,b as o,d as m,e as I,f as T,g,w as q,h as C,u as w,i as z,T as F}from"./index-145bf103.js";import{_ as G,a as M,b as H,c as J,d as K}from"./_plugin-vue_export-helper-446ee3b2.js";const L={class:"flex justify-center items-center h-96"},O={class:"text-center"},P={key:0,class:"flex flex-col"},Q={key:1},U={key:2,class:"justify-center text-lg"},W={__name:"Addition",setup(b){const u=a(!1),A=a(!1),r=a(!1),c=a(!1),p=a(0),k=a("+"),h=a(0),x=a(0),s=a(0),i=a(null),v=a(null);let l=N([]);const _=R(M),B=S(()=>!i.value||!v.value?0:E(v.value-i.value));function f(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)}function $(e){p.value=e,y(),u.value=!0,i.value=new Date().getTime()}function D(e){if(e==l[s.value].result?(h.value++,c.value=!0):(x.value++,c.value=!1),_.value=K,s.value===l.length-1){setTimeout(()=>{r.value=!0},2e3),v.value=new Date().getTime();return}else setTimeout(()=>_.value=M,1e3),s.value++}function y(){l=[];for(let e=0;e<p.value;e++){let t,n,d;do t=f(1,99),n=f(1,99);while(t+n>100);do d=[...new Set([t+n,f(10,99),f(10,99)])];while(d.length!==3);d.sort(()=>Math.random()-.5),l.push({x:t,y:n,result:t+n,variants:d})}}function V(){h.value=0,x.value=0,r.value=!1,u.value=!1,c.value=!1,s.value=0,i.value=null,v.value=null,_.value=M,y()}function E(e){var t=Math.floor(e/1e3%60),n=Math.floor(e/(60*1e3)%60);return n?n+" мин. "+t+" сек.":t+" сек."}return j(()=>{y()}),(e,t)=>(o(),m("div",L,[I("div",O,[!u.value&&!r.value?(o(),m("div",P,[T(H,{onStart:$})])):g("",!0),!r.value&&u.value&&!A.value?(o(),m("div",Q,[T(F,{name:"slide-up"},{default:q(()=>[(o(),C(z(_.value),{x:w(l)[s.value].x,y:w(l)[s.value].y,sign:k.value,current:s.value,total:p.value,variants:w(l)[s.value].variants,isCorrectAnswer:c.value,onDo:D},null,40,["x","y","sign","current","total","variants","isCorrectAnswer"]))]),_:1})])):g("",!0),r.value&&u.value?(o(),m("div",U,[T(J,{success:h.value,failed:x.value,spentTime:B.value,onRestart:V},null,8,["success","failed","spentTime"])])):g("",!0)])]))}},X=G(W,[["__scopeId","data-v-7b5a25b6"]]),ee={__name:"AdditionView",setup(b){return(u,A)=>(o(),C(X))}};export{ee as default};
