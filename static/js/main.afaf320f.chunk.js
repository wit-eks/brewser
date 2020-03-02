(this.webpackJsonpbrewser=this.webpackJsonpbrewser||[]).push([[0],{44:function(e,t,a){e.exports=a(55)},55:function(e,t,a){"use strict";a.r(t);var n,r,o,i,c=a(0),l=a.n(c),u=a(15),s=a.n(u),f=a(85),m=a(81),d=a(12),b=a(80),v=a(83),h=a(31);!function(e){e.Coffee="coffee",e.Water="water",e.Ratio="ratio"}(n||(n={})),r=n.Coffee,o=n.Water,i=n.Ratio;var w=function e(t,a){Object(h.a)(this,e),this[r]=void 0,this[o]=void 0,this[i]=void 0,this.coffee=t,this.water=a,this.ratio=a/t},p=a(32),g=a(4),E=a(77),j=a(84),O=a(34),C=a.n(O),y=a(35),k=a.n(y),x=a(75),W=function(e){var t,a,r=e.recipe,o=e.onRecipeChanged,i=Object(c.useState)((t={},Object(g.a)(t,n.Coffee,!1),Object(g.a)(t,n.Water,!1),Object(g.a)(t,n.Ratio,!0),t)),u=Object(d.a)(i,2),s=u[0],f=u[1],m=(a={},Object(g.a)(a,n.Coffee,(function(){return r.water/r.ratio})),Object(g.a)(a,n.Water,(function(){return r.coffee*r.ratio})),Object(g.a)(a,n.Ratio,(function(){return r.water/r.coffee})),a),b=function(e,t){var a=Object(p.a)({},r);for(var n in a){var i=n;a.hasOwnProperty(n)&&(n===e?a[i]=t:s[i]||(a[i]=m[i]()))}o&&o(a)},v=function(e){return l.a.createElement(x.a,{disabled:s[e],onClick:function(){return function(e){var t,a=(t={},Object(g.a)(t,n.Coffee,!1),Object(g.a)(t,n.Water,!1),Object(g.a)(t,n.Ratio,!1),t);a[e]=!0,f(a)}(e)},color:"primary"},s[e]?l.a.createElement(C.a,null):l.a.createElement(k.a,null))};return l.a.createElement(l.a.Fragment,null,v(n.Coffee),l.a.createElement(E.a,{variant:"button"},"Coffee"),l.a.createElement(j.a,{disabled:s.coffee,value:r.coffee,min:1,max:100,onChange:function(e,t){return b(n.Coffee,t)},marks:[{value:r.coffee,label:r.coffee.toFixed(1)+" g"}]}),v(n.Water),l.a.createElement(E.a,{variant:"button"},"Water"),l.a.createElement(j.a,{value:r.water,disabled:s.water,min:10,max:1e3,step:10,onChange:function(e,t){return b(n.Water,t)},marks:[{value:r.water,label:r.water.toFixed()+" ml"}]}),v(n.Ratio),l.a.createElement(E.a,{variant:"button"},"Ratio"),l.a.createElement(j.a,{value:r.ratio,disabled:s.ratio,min:1,max:100,step:.1,onChange:function(e,t){return b(n.Ratio,t)},marks:[{value:r.ratio,label:"1:"+r.ratio.toFixed(1)}]}))},R=a(78),F=a(79),S=a(36),A=a.n(S),P=new Audio("bell.mp3"),B=function(e){var t=e.recipe,a=Object(c.useState)(0),n=Object(d.a)(a,2),r=n[0],o=n[1],i=Object(c.useState)(Array.from(new Array(5),(function(e,t){return(t+1)/5}))),u=Object(d.a)(i,2),s=u[0],f=u[1],m=Object(c.useState)(),b=Object(d.a)(m,2),v=b[0],h=b[1],w=s.sort(),p=w.map((function(e){return{value:e,label:"".concat((e*t.water).toFixed()," ml")}})),g=function(){return setInterval((function(){o((function(e){return e+1<225?(0!==e&&e%45===0&&P.play(),e+1):(P.play(),O(),0)}))}),1e3)},O=function(){h((function(e){clearInterval(e)}))},C=Math.floor(r/45),y=((w[C]-(C?w[C-1]:0))*t.water).toFixed();return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,null,"Prepare ",t.coffee.toFixed(1)," g of coffee"),l.a.createElement(E.a,null,"Pour in ",new Set(s).size," steps by:"),l.a.createElement(j.a,{value:s,onChange:function(e,t){return f(t)},"aria-labelledby":"range-slider",max:1,step:.001,marks:p}),l.a.createElement(R.a,{container:!0},l.a.createElement(R.a,{item:!0,xs:6},l.a.createElement(E.a,{variant:"h4"},A.a.unix(r).format("mm:ss"))),l.a.createElement(R.a,{item:!0,xs:6},l.a.createElement(F.a,{variant:"contained",color:"primary",onClick:function(){return v?O():h(g())}},v?"Pause":"Start"))),l.a.createElement(E.a,{variant:"h5"},"Step ",C+1),l.a.createElement(E.a,{variant:"h5"},"Pour ",y," ml of water"),l.a.createElement(E.a,{variant:"h4"},"Total ",p[C].label," of water"))},T=function(){var e=Object(c.useState)(new w(20,300)),t=Object(d.a)(e,2),a=t[0],n=t[1];return l.a.createElement(b.a,{maxWidth:"sm"},l.a.createElement(v.a,{marginRight:2},l.a.createElement(E.a,{variant:"h4"},"Brewser"),l.a.createElement(W,{recipe:a,onRecipeChanged:n}),l.a.createElement(B,{recipe:a})))},U=a(37),I=Object(U.a)({palette:{primary:{main:"#BB86FC"},secondary:{main:"#03DAC6"},error:{main:"#CF6679"},background:{default:"#212121"},text:{primary:"#F5F5F5",secondary:"#E0E0E0"}}}),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(l.a.createElement(m.a,{theme:I},l.a.createElement(f.a,null),l.a.createElement(T,null)),document.querySelector("#root")),function(e){if("serviceWorker"in navigator){if(new URL("/brewser",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/brewser","/service-worker.js");J?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(t,e)}))}}()}},[[44,1,2]]]);
//# sourceMappingURL=main.afaf320f.chunk.js.map