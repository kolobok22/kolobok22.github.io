import{r as a,a as R,s as S,c as j,o as I,b as o,d as m,e as z,f as T,g,w as q,h as k,u as w,i as F,T as G}from"./index-32976724.js";import{_ as H,a as D,b as J,c as K,d as L}from"./_plugin-vue_export-helper-59d742f4.js";const O={class:"flex justify-center items-center h-96"},P={class:"text-center"},Q={key:0,class:"flex flex-col"},U={key:1},W={key:2,class:"justify-center text-lg"},X={__name:"Division",setup(B){const u=a(!1),M=a(!1),r=a(!1),i=a(!1),p=a(0),$=a("/"),h=a(0),x=a(0),s=a(0),c=a(null),v=a(null);let l=R([]);const _=S(D),b=j(()=>!c.value||!v.value?0:N(v.value-c.value));function f(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)}function V(e){p.value=e,y(),u.value=!0,c.value=new Date().getTime()}function A(e){if(e==l[s.value].result?(h.value++,i.value=!0):(x.value++,i.value=!1),_.value=L,s.value===l.length-1){setTimeout(()=>{r.value=!0},2e3),v.value=new Date().getTime();return}else setTimeout(()=>_.value=D,1e3),s.value++}function y(){l=[];for(let e=0;e<p.value;e++){let t,n,C,d;n=f(1,9),C=f(1,9),t=n*C;do d=[...new Set([t/n,f(1,99),f(1,99)])];while(d.length!==3);d.sort(()=>Math.random()-.5),l.push({x:t,y:n,result:t/n,variants:d})}}function E(){h.value=0,x.value=0,r.value=!1,u.value=!1,i.value=!1,s.value=0,c.value=null,v.value=null,_.value=D,y()}function N(e){var t=Math.floor(e/1e3%60),n=Math.floor(e/(60*1e3)%60);return n?n+" мин. "+t+" сек.":t+" сек."}return I(()=>{y()}),(e,t)=>(o(),m("div",O,[z("div",P,[!u.value&&!r.value?(o(),m("div",Q,[T(J,{onStart:V})])):g("",!0),!r.value&&u.value&&!M.value?(o(),m("div",U,[T(G,{name:"slide-up"},{default:q(()=>[(o(),k(F(_.value),{x:w(l)[s.value].x,y:w(l)[s.value].y,sign:$.value,current:s.value,total:p.value,variants:w(l)[s.value].variants,isCorrectAnswer:i.value,onDo:A},null,40,["x","y","sign","current","total","variants","isCorrectAnswer"]))]),_:1})])):g("",!0),r.value&&u.value?(o(),m("div",W,[T(K,{success:h.value,failed:x.value,spentTime:b.value,onRestart:E},null,8,["success","failed","spentTime"])])):g("",!0)])]))}},Y=H(X,[["__scopeId","data-v-01a5180b"]]),te={__name:"DivisionView",setup(B){return(u,M)=>(o(),k(Y))}};export{te as default};