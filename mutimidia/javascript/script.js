
//efeito mouseover
var lengenda = document.querySelector(".legenda");
lengenda.addEventListener("mouseover", function () {
    var email = document.querySelector("#email")
    email.classList.remove("hide_info")
});

var lengenda = document.querySelector(".legenda");
lengenda.addEventListener("mouseout", function () {
    var email = document.querySelector("#email")
    email.classList.add("hide_info")
});
//efeito carrossel

// efeito typewriter
   !function(){const e=1500,t=2e3,n=1e3,i=1e3;let o,d,r=!0;
    function s(e,t){const n=e.textContent.length;n>0&&r&&(e.textContent=e.textContent.slice(0,n-1),setTimeout((()=>{s(e,t)}),t))}
    function c(o){return{typingSpeed:t/o,eraseSpeed:n/o,waitingTime:t+e+i}}
    function l({word:e,element:t,typingSpeed:n,waitingTime:i,eraseSpeed:d}){
    !function(e,t,n){
        let i=0;
        const d=()=>{r&&(i<e.length?(t.textContent+=e.charAt(i),i+=1,o=setTimeout(d,n)):t.classList.add("efeito-escrita-pronta"))};
    d()}(e,t,n),setTimeout((()=>{t.classList.remove("efeito-escrita-pronta"),s(t,d)}),i)}
    function a(){
        var o;
        const s=document.querySelectorAll(".efeito-escrita");
        let a=0;
        if(!s.length)return;
        const g=null!==(o=s[0]?.dataset?.words.split(","))&&void 0!==o?o:[];
        if(!g.length)return;
        const u=t+n+e+i+500,{typingSpeed:m,waitingTime:p,eraseSpeed:f}=c(g[a].length);
    l({element:s[0],typingSpeed:m,waitingTime:p,eraseSpeed:f,word:g[a].trim()}),g.length>1&&(a+=1),d=setInterval((()=>{
        if(!r)return;
        const e=g[a].trim(),{typingSpeed:t,waitingTime:n,eraseSpeed:i}=c(e.length);s[0].textContent="",l({element:s[0],typingSpeed:t,eraseSpeed:i,waitingTime:n,word:e}),a<g.length-1?a+=1:a=0}),u)}
        function g(){clearTimeout(o),clearInterval(d),r=!1}document.addEventListener("DOMContentLoaded",a),document.addEventListener("visibilitychange",(function(){document.hidden?g():(g(),r=!0,a())}))}();
