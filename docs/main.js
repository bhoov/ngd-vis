!function(t){function s(s){for(var e,n,h=s[0],l=s[1],o=s[2],p=0,d=[];p<h.length;p++)n=h[p],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);for(c&&c(s);d.length;)d.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,s=0;s<i.length;s++){for(var a=i[s],e=!0,h=1;h<a.length;h++){var l=a[h];0!==r[l]&&(e=!1)}e&&(i.splice(s--,1),t=n(n.s=a[0]))}return t}var e={},r={0:0},i=[];function n(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,s,a){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)n.d(a,e,function(s){return t[s]}.bind(null,e));return a},n.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="";var h=window.webpackJsonp=window.webpackJsonp||[],l=h.push.bind(h);h.push=s,h=h.slice();for(var o=0;o<h.length;o++)s(h[o]);var c=l;i.push([69,1]),a()}({67:function(t,s,a){t.exports=a.p+"index.html"},68:function(t,s,a){},69:function(t,s,a){"use strict";a.r(s);var e=a(0);let r=0,i=0;class n{static uid(){return r+=1}static simpleUId(t=""){return t+(i+=1)}}var h=a(70);class l{constructor(t){this.element=t,this.eventListeners=[]}bind(t,s){for(const a of t.split(" ")){this.eventListeners.push({eventName:a,eventFunction:s});const t=t=>s(t.detail,t);this.element.addEventListener(a,t,!1)}}getListeners(){return this.eventListeners}trigger(t,s){this.element.dispatchEvent(new CustomEvent(t,{detail:s}))}}class o{constructor(t,s,a=0){this.parent=t,this.eventHandler=s||new l(this.parent.node()),this.ID=a}newInstance(t){}get events(){return{noEvent:(t=>`${this.baseName}_${t}`)("NoEvent")}}get baseName(){return`${this.cssname}_ID${this.ID}`}updateOptions(t){Object.keys(t).forEach(s=>this.options[s]=t[s])}destroy(){this.base.remove()}}var c=a(82);class p{static translate(t,s){return`translate(${t},${s})`}static rotate(t,s){return null==s?`rotate(${t})`:`rotate(${t},${s.x},${s.y})`}static skew(t,s=0){return`skew(${t}, ${s})`}static skewX(t){return`skewX(${t})`}static skewY(t){return`skewY(${t})`}static scale(t,s){return`scale(${t}, ${null!=s?s:t})`}static group(t,s,a={x:0,y:0}){return t.append("g").attr("class",s).attr("transform",p.translate(a.x,a.y))}static addSVG(t,s,a,e){return t.append("svg").attr("width","100%").attr("height","100%").attr("viewBox","0 0 "+(s+e.left+e.right)+" "+(a+e.top+e.bottom)).attr("preserveAspectRatio","xMidYMid meet").append("g").attr("transform",p.translate(e.left,e.top))}static addArrows(t){t.append("defs").append("marker").attr("id","arrow").attr("markerUnits","strokeWidth").attr("markerWidth",5.5).attr("markerHeight",5.5).attr("viewBox","0 0 12 12").attr("refX",6).attr("refY",6).attr("orient","auto").append("path").attr("d","M2,2 L10,6 L2,10 L6,6 L2,2")}static insertArrow(t,s,a,e,r,i,n){return t.append("line").attr("x1",s).attr("y1",a).attr("x2",e).attr("y2",r).attr("stroke",i).attr("stroke-width",n).attr("marker-end","url(#arrow)")}static meshgrid(t,s,a,e){const r=(t,s)=>t.map(t=>t*(s[1]-s[0])+s[0]);return((t,s)=>{const a=[];return t.forEach(t=>{s.forEach(s=>{a.push({x:t,y:s})})}),a})(r(c.a(0,t).map(s=>(s+.5)/t),a),r(c.a(0,s).map(t=>(t+.5)/s),e))}}class d extends o{constructor(t,s,a={},e=0){super(t,s,e),this.options={margin:{top:0,right:0,bottom:0,left:0},maxWidth:450,maxHeight:450}}initSVG(t={},s=[]){this.updateOptions(t);const a=this.options;a.width=a.maxWidth-(a.margin.left+a.margin.right),a.height=a.maxHeight-(a.margin.top+a.margin.bottom),this.svg=p.addSVG(this.parent,a.width,a.height,a.margin),this.base=p.group(this.svg,""),this.layers={},s&&s.forEach(t=>{this.layers[t]=p.group(this.base,t)}),this.init()}}const u=t=>t.x*t.y-1,x=e.p().domain([0,.8]).range([.001,.25]);class g{constructor(t=0,s=.1,a=u,e=x){this.err=a,this.q=t,this.eta=s,this.step2lr=e}get lrScale(){return this.step2lr(this.eta)}absErr(t){return Math.abs(this.err(t))}loss(t){return Math.pow(this.err(t),2)}gradient(t){const s=this.err(t);return{x:t.y*s,y:t.x*s}}eigenvalues(t){const s=(t,s)=>Math.pow(t,2)+Math.pow(s,2);return{x:s(t.x,t.y),y:s(t.x,t.y)}}dv(t){const s=this.gradient(t),a=this.eigenvalues(t);return{x:-s.x/Math.abs(Math.pow(a.x,this.q)),y:-s.y/Math.abs(Math.pow(a.y,this.q))}}lr(t){const s=this.dv(t),a=this.absErr(t),e=this.step2lr(this.eta);return{x:e*s.x/a,y:e*s.y/a}}next(t){const s=this.dv(t);return{x:t.x+s.x*this.eta,y:t.y+s.y*this.eta}}nextLr(t){const s=this.lr(t);return{x:t.x+3*s.x,y:t.y+3*s.y}}}class m extends g{eigenvalues(t){return{x:2*Math.pow(t.y,2),y:2*Math.pow(t.x,2)}}}var y=a(77),f=a(75),b=a(71),v=a(78);class w extends d{constructor(t,s,a={}){super(t,s,a),this.cssname="simple-graph",this.options={maxWidth:450,maxHeight:500,margin:{top:50,right:75,bottom:125,left:50},pad:30,xrange:[0,1.6],yrange:[0,1.6],n:500,m:500},this.scales={},this.sels={},this._curr={x:.1,y:.2},this.ideal=1,super.initSVG(this.options),this.base.classed(this.cssname,!0),this.updater=new g,this.initPlot()}setUpdater(t){this.q(),this.eta();"block"==t?this.updater=new m(this.q(),this.eta()):"full"==t?this.updater=new g(this.q(),this.eta()):console.log("Please enter a valid input as updater"),this.updateQuivers()}plotContours(){const t=this.options,s=this.scales,a=function(t,s,a,e,r){let i=new Array(t*s);for(var n=.5,h=0;n<s;++n)for(var l=.5;l<t;++l,++h){const o=l/t*(a[1]-a[0])+a[0],c=(1-n/s)*(e[1]-e[0])+e[0];i[h]=r(o,c)}return i}(t.n,t.m,t.xrange,t.yrange,(t,s)=>this.updater.absErr({x:t,y:s}));let r=e.o(e.m(a),e.k(a),.08);const i=(.95*r[0]+(1-.95)*r[1])/2;r=h.a(1,i,r),s.color=e.p().domain([0,2]).range([.2,.7]).interpolate(()=>e.h),s.contours.thresholds(r);const n=s.contours(a);this.base.append("g").attr("id","contour-group").selectAll("path.contour").data(n).join("path").attr("class","contour").attr("d",e.g(e.f().scale(t.width/t.n))).attr("fill",t=>s.color(t.value)).classed("main-fit",t=>t.value==i).classed("not-fit",t=>t.value!=i)}addCircle(t,s=null){const a=this.scales,e=this.sels;return null!=s&&this.base.append("line").attr("x1",a.x(s.x)).attr("y1",a.y(s.y)).attr("x2",a.x(t.x)).attr("y2",a.y(t.y)).classed("descending-line",!0),e.circle=this.base.append("circle").attr("cx",a.x(t.x)).attr("cy",a.y(t.y)).attr("r",2).classed("descending-point",!0),t}clearCircles(){e.t(".descending-point").remove(),e.t(".descending-line").remove()}clearQuivers(){e.t(".quiver").remove(),this.sels.arrows=[]}plotDescent(){const t=this;let s=null;const a={next:t=>{this.addCircle(t,s),s=t},err:t=>console.log(t),complete:()=>console.log("COMPLETE")};this.ticker=Object(y.a)(10).pipe(Object(f.a)((()=>{this.addCircle(this.curr()),s=this.curr()})()),Object(b.a)(s=>t.updater.next(s),t.curr()),Object(v.a)(1e3)).subscribe(a)}intoVis(t){return{x:this.scales.x(t.x),y:this.scales.y(t.y)}}intoMath(t){return{x:this.scales.x.invert(t.x),y:this.scales.y.invert(t.y)}}updateQuivers(){const t=this,s=this.sels,a=this.scales;s.arrows.forEach(s=>{const e=this.intoMath({x:+s.attr("x1"),y:+s.attr("y1")}),r=t.updater.nextLr(e);s.attr("x2",a.x(r.x)).attr("y2",a.y(r.y))})}createQuivers(){const t=this,s=this.options,a=this.scales,e=this.sels,r=p.meshgrid(11,11,s.xrange,s.yrange),i=this.base.append("g").attr("id","quiver-group");this.clearQuivers(),e.arrows=r.map(s=>{const e=t.updater.nextLr(s),r=p.insertArrow(i,a.x(s.x),a.y(s.y),a.x(e.x),a.y(e.y),"blue",1.25);return r.classed("quiver",!0),r})}initPlot(){this.plotContours(),this.createQuivers()}init(){const t=this,s=this.options,a=this.scales,r=this.sels;p.addArrows(this.svg),a.contours=e.c().size([s.n,s.m]),a.curve=e.d.alpha(.5),a.x=e.p().domain(s.xrange).range([0,s.width]),a.y=e.p().domain(s.yrange).range([s.height,0]),r.xaxis=this.base.append("g").attr("class","axis axis--x").attr("transform",p.translate(0,s.height)).call(e.a(a.x).ticks(3,"s")),r.yaxis=this.base.append("g").attr("class","axis axis--y").attr("transform",p.translate(0,0)).call(e.b(a.y).ticks(3,"s")),r.xlabel=this.base.append("text").text("w0").attr("class","titles").attr("transform",p.translate(s.width/2,s.height+s.pad)),r.ylabel=this.base.append("text").text("w1").attr("class","titles").attr("transform",p.translate(-s.pad,s.height/2)+p.rotate(-90)),this.base.on("click",function(){null!=t.ticker&&t.ticker.unsubscribe();const s=e.n(this);t.curr({x:a.x.invert(s[0]),y:a.y.invert(s[1])}),t.addCircle(t.curr()),t.clearCircles(),t.plotDescent()})}curr(t){return null==t?this._curr:(this._curr=t,this)}data(t){return null==t?this._data:(this._data=t,this)}q(t){return null==t?this.updater.q:(this.updater.q=t,this.updateQuivers(),this)}eta(t){return null==t?this.updater.eta:(this.updater.eta=t,this.updateQuivers(),this)}}const k=(t,s,a)=>{const r=(s-t)/(a-1);return e.o(t,s+r,r).slice(0,a)};e.u.prototype.clear=function(){return this.selectAll("*").remove(),this},e.u.prototype.toggleClass=function(t){return this.classed(t,!this.classed(t)),this},e.u.prototype.show=function(){return this.style("display","initial"),this},e.u.prototype.hide=function(){return this.style("display","none"),this},e.u.prototype.toggle=function(){var t="none"==this.style("display");return this.style("display",t?"inherit":"none")},e.u.prototype.after=function(t){var s=[];return this.each(function(){var a=document.createElement(t);this.parentNode.insertBefore(a,this.nextSibling),s.push(a)}),e.t(s)},e.u.prototype.before=function(t){var s=[];return this.each(function(){var a=document.createElement(t);this.parentNode.insertBefore(a,this),s.push(a)}),e.t(s)};var M=a(72),q=a(73),S=a(76),_=a(80);const L=t=>.5*Math.pow(t,2),P=t=>s=>t.loss(t.f(s)),B={hole:{name:"hole",f:t=>Math.tanh(13.5*t),df:t=>13.5*Math.pow(Math.cosh(13.5*t),-2),xrange:[-6/13.5,6/13.5],yrange:[0,.6],loss:L},steps:{name:"steps",f:t=>Math.tanh(13.5*t-11)/4+Math.tanh(13.5*t-6)/4+Math.tanh(13.5*t)+Math.tanh(13.5*t+6)/4+Math.tanh(13.5*t+11)/4,df:t=>13.5*(Math.pow(Math.cosh(13.5*t-11),-2)/4+Math.pow(Math.cosh(13.5*t-6),-2)/4+Math.pow(Math.cosh(13.5*t),-2)+Math.pow(Math.cosh(13.5*t+6),-2)/4+Math.pow(Math.cosh(13.5*t+11),-2)/4),xrange:[-1,1],yrange:[0,2.5],loss:L},seagull:{name:"seagull",f:t=>Math.sign(t)*(1-1/(1+Math.abs(16.5*t))),df:t=>16.5/Math.pow(1+Math.abs(16.5*t),2),xrange:[-12/16.5,12/16.5],yrange:[0,.6],loss:L},bowl:{name:"bowl",f:t=>Math.sinh(t/3),df:t=>Math.cosh(t/3)/3,xrange:[-9,9],yrange:[0,50],loss:L},deep_net:{name:"deep_net",f:t=>Math.pow(Math.abs(t/3+1),3)-1,df:t=>1*Math.pow(Math.abs(t/3+1),2),xrange:[3*-.95,.95*3],yrange:[0,4],loss:L}};class E{constructor(t,s,a=0,e=.1){this.f=t,this.df=s,this.q=a,this.eta=e}loss(t){return L(this.f(t))}gradient(t){return this.f(t)*this.df(t)}psdhess(t){return Math.pow(this.df(t),2)}updateModifier(t){return Math.pow(this.df(t),1-2*this.q)}updateAmt(t){return this.f(t)*this.updateModifier(t)}step(t){return-this.eta*this.updateAmt(t)}next(t){return t+this.step(t)}}var X=a(79);class j{constructor(t,s,a=0){this.updater=t,this._x=a,this.classname=s,this.stream=new X.a}get x(){return this._x}set x(t){this._x=t}nextX(){return this.updater.next(this._x)}next(){this.nextX();return new j(this.updater,this.classname,this.nextX())}step_(t=null){return this.x=null!=t?t:this.nextX(),this.stream.next({classname:this.classname,x:this.x,loss:this.updater.loss(this.x)}),this}toVec(t){return{x:this._x,y:t(this._x)}}q(t){return null==t?this.updater.q:(this.updater.q=t,this)}eta(t){return null==t?this.updater.eta:(this.updater.eta=t,this)}}class A extends d{constructor(t,s,a={},e=0){super(t,s,a,e),this.cssname="golf-hole-chart",this.options={maxWidth:400,maxHeight:200,margin:{top:10,right:10,bottom:40,left:50},pad:30,maxIter:600,landscape:B.hole},this.scales={},this.sels={},this.maskId=`line-mask-${this.ID}`,super.initSVG(a,["bg"]),this.base.classed(this.cssname,!0);const r=this.options.landscape,i=[new j(new E(r.f,r.df,0,.9),"golf-ball-sgd",4)];this.data(i),this.initBalls()}landscape(t){if(null==t)return this.options.landscape;const s=this.options;return s.landscape=t,this.updateScales(s),this.updateAxes(this.scales,s),this.data().forEach(s=>{s.updater.f=t.f,s.updater.df=t.df}),this.clearCurve(),this.plotCurve(),this}get dataHead(){try{return this.data()[0]}catch(t){console.log("Looks like there is no data in this golf hole"),console.log(t)}}intoVis(t){return{x:this.scales.math2px.x(t.x),y:this.scales.math2px.y(t.y)}}intoMath(t){return{x:this.scales.math2px.x.invert(t.x),y:this.scales.math2px.y.invert(t.y)}}num2vec(t){return{x:t,y:this.options.landscape.loss(t)}}ball2vis(t){return this.intoVis(t.toVec(P(this.options.landscape)))}plotBall(t){const s=(t=>"."+t)(t.classname),a=this.ball2vis(t);this.sels.ball=this.base.selectAll(s).data([a]).join("circle").classed("golf-ball",!0).classed(t.classname,!0).attr("cx",t=>t.x).attr("cy",t=>t.y).attr("r","5px")}clearCurve(){this.layers.bg.selectAll(".line").remove(),this.sels.maskLine.html(""),this.base.selectAll("#line-background").html("")}plotCurveByDefault(t){const s=this.options,a=this.scales,e=this.sels;a.paths.forEach(s=>{this.layers.bg.append("path").datum(t).attr("class","line").attr("d",t=>s(t))}),e.lineBackground.selectAll(".grad-box").data([1]).join("rect").classed("grad-box",!0).attr("width",s.width).attr("height",s.height).attr("fill-opacity",0)}plotCurveByGradient(t){const s=this,a=this.scales,r=this.sels,i=this.options,n=i.width*(t[1]-t[0])/(e.k(t)-e.m(t)),h=s.data()[0].updater,l=a.paths[0];r.maskLine.attr("d",l(t));e.r(e.i);const o=t.map(t=>Math.log(Math.abs(h.updateModifier(t)))),c=(M.a((t,s,a)=>{const r=q.a(t,s),i=S.a(r,a);return a.map(t=>t-e.l(i))}),e.v(t,o).map(t=>({x:t[0],updateAmt:t[1]}))),p=e.p().domain([-2,0,2]).range(["#67a9cf","#f7f7f7","#ef8a62"]);r.lineBackground.selectAll(".grad-box").data(c).join("rect").classed("grad-box",!0).attr("height",i.height).attr("width",s.scales.math2px.x(n)).attr("x",t=>s.scales.math2px.x(t.x)).attr("y",0).attr("fill",t=>p(t.updateAmt)),r.lineBackground.attr("mask",`url(#${this.maskId})`)}plotCurve(){const t=this.options,s=k(t.landscape.xrange[0],t.landscape.xrange[1],1e3),a=this;this.scales,this.sels;null!=a.data()&&(a.data().length>1?a.plotCurveByDefault(s):a.plotCurveByGradient(s))}updateScales(t){const s=this.scales,a=[-1,1],r=[1,0],i=[0,t.width],n=[t.height,0];s.base2math={x:e.p().domain(a).range(t.landscape.xrange),y:e.p().domain(r).range(t.landscape.yrange)},s.base2px={x:e.p().domain(a).range(i),y:e.p().domain(r).range(n)},s.math2px={x:e.p().domain(t.landscape.xrange).range(i),y:e.p().domain(t.landscape.yrange).range(n)},s.base2loss=e.p().domain(t.landscape.yrange).range([0,1]),s.paths=this.newPaths(t.landscape)}updateAxes(t,s){this.sels.xaxis.call(e.a(t.math2px.x).tickValues([0]).tickFormat(t=>"0"))}init(){const t=this.options,s=this.scales,a=this.sels;this.updateScales(t),a.xaxis=this.base.append("g").attr("class","axis axis--x").attr("transform",p.translate(0,t.height)),a.xlabel=this.base.append("text").text("θ - θ*").attr("class","titles").attr("transform",p.translate(t.width/2,t.height+t.pad)),a.mask=this.base.append("mask").attr("id",this.maskId),a.maskBackground=a.mask.append("rect").attr("width",t.width).attr("height",t.height).attr("fill","black"),a.maskLine=a.mask.selectAll("#transparent-line").data([1]).join("path").attr("id","transparent-line").attr("stroke","white").attr("stroke-width","5px"),a.lineBackground=this.base.selectAll("#line-background").data([1]).join("g").attr("id","line-background"),a.backdrop=this.layers.bg.append("g").attr("id","backdrop").classed("grass",!0).append("rect").attr("height",t.height).attr("width",t.width),this.updateAxes(s,t),s.paths=this.newPaths(t.landscape),this.plotCurve()}newPaths(t){const s=this.scales;return[e.j().x((t,a)=>s.math2px.x(t)).y((a,e)=>s.math2px.y(P(t)(a))).curve(e.e)]}initBalls(){const t=this,s=this.options,a=t=>{let a;return a=isNaN(t)?s.landscape.xrange[0]:(t=>t<s.landscape.xrange[0])(t)?s.landscape.xrange[0]:(t=>t>s.landscape.xrange[1])(t)?s.landscape.xrange[1]:t};const r={next:s=>{s.forEach(s=>t.plotBall(s))},error:t=>console.log("ERROR: ",t),complete:()=>console.log("COMPLETE")},i=()=>Object(y.a)(10).pipe(Object(b.a)(s=>(_.a(t=>e.s(`.${t.classname}`).classed("dead-ball"),t.data())&&n.unsubscribe(),t.data().forEach(s=>(function(s){const e=s.nextX(),r=t.base.select(`.${s.classname}`),i=a(e);return r.classed("dead-ball")?s:s.step_(i)})(s)),t.data()),t.data()),Object(v.a)(s.maxIter)).subscribe(r);let n={unsubscribe:()=>console.log("Empty Ticker!")};this.sels.lineBackground.on("click",function(){n.unsubscribe();const s=function([t,s]){return{x:t,y:s}}(e.n(this));e.t(".golf-ball").classed("dead-ball",!1),t.data().forEach((a,e)=>a.x=t.intoMath(s).x),t.data().forEach(s=>t.plotBall(s)),t.eventHandler.trigger("loss-click",{}),n=i()})}q(t){return null==t?this.dataHead.updater.q:(this.dataHead.q(t),this.plotCurve(),this)}eta(t){return null==t?this.dataHead.updater.q:(this.dataHead.eta(t),this)}data(t){return null==t?this._data:(this._data=t,this.initBalls(),this)}dataToBase_(){return this.data().map(t=>(t.x=this.scales.base2math.x.invert(t.x),t)),this.data()}dataFromBase(t){return t.forEach(t=>{t.x=this.scales.base2math.x(t.x)}),this.initBalls(),this}}var $=a(81),I=a(74);class D extends d{intoVis(t){return{x:this.scales.x(t.x),y:this.scales.y(t.y)}}intoMath(t){return{x:this.scales.x.invert(t.x),y:this.scales.y.invert(t.y)}}}const O=1;class C extends D{constructor(t,s,a={}){super(t,s,a),this.cssname="line-plot",this.options={maxWidth:350,maxHeight:250,margin:{top:10,right:10,bottom:30,left:30},pad:{top:5,right:1,bottom:10,left:15},xrange:[0,600],yrange:[1.1,.001]},this.scales={},this.sels={},super.initSVG(this.options,["bg"]),this.base.classed(this.cssname,!0),this.defaultXrange=this.options.xrange,this.data({})}addDataKey_(t){const s=this;$.a(t,this.data())||(console.log(`Adding key: ${t}`),this.data()[t]={sel:s.initBaseLine(t),vals:[]})}updateScales(t){const s=this.options;this.scales.x=e.p().domain(t).range([0,s.width]).clamp(!0)}clearPaths(){this.data(S.a(t=>I.a("vals",[],t),this.data()))}plotPath(t,s){const a=this;this.addDataKey_(t.classname);const e=null==s?t=>t:s,r=this.data()[t.classname];r.vals.push(e(t.loss));const i=[Math.max(0,r.vals.length-this.options.xrange[1]),Math.max(r.vals.length,this.options.xrange[1])];this.updateScales(i),this.createPath(),r.sel.data([r]).join("path").classed(t.classname,!0).attr("d",t=>a.path(t.vals))}initBaseLine(t){return this.layers.bg.append("path").classed(t,!0).classed("line",!0)}init(){this.options,this.scales,this.sels;this.createScales(),this.createPath(),this.createAxes()}createScales(){const t=this.scales,s=this.options;t.x=e.p().domain(s.xrange).range([0,s.width]).clamp(!0),t.y=e.q().domain(s.yrange).range([0,s.height]).clamp(!0)}createAxes(){const t=this.sels,s=this.scales,a=this.options;t.yaxis=this.base.append("g").attr("class","axis axis--y").attr("transform",p.translate(0,-O)).call(e.b(s.y).tickFormat("").ticks(4)),t.xaxis=this.base.append("g").attr("class","axis axis--x").attr("transform",p.translate(0,a.height-O)).call(e.a(s.x).tickFormat("").ticks(4)),this.base.append("text").attr("transform",p.translate(a.width/2,a.margin.top+a.height+10)).style("text-anchor","middle").text("Time"),this.base.append("text").style("text-anchor","middle").text("Loss").attr("y",a.pad.left-a.margin.left).attr("x",a.pad.top-a.height/2).attr("transform",p.rotate(-90))}createPath(){this.path=e.j().x((t,s)=>this.scales.x(s)).y((t,s)=>this.scales.y(t)).curve(e.e)}data(t){return null==t?this._data:(this._data=t,this)}resetXrange_(){return this.options.xrange=this.defaultXrange,this}}const H=1;class V extends D{constructor(t,s,a={}){super(t,s,a),this.cssname="line-plot",this.options={maxWidth:350,maxHeight:250,margin:{top:10,right:10,bottom:30,left:30},pad:{top:5,right:1,bottom:10,left:15},xrange:[0,600],yrange:[1,0]},this.scales={},this.sels={},super.initSVG(this.options,["bg"]),this.base.classed(this.cssname,!0),this.defaultXrange=this.options.xrange,this.data({})}addDataKey_(t){const s=this;$.a(t,this.data())||(console.log(`Adding key: ${t}`),this.data()[t]={sel:s.initBaseLine(t),vals:[]})}clearPaths(){this.data(S.a(t=>I.a("vals",[],t),this.data()))}plotPath(t,s){const a=this;this.addDataKey_(t.classname);const e=null==s?t=>t:s,r=this.data()[t.classname];r.vals.push(e(Math.abs(t.x)));const i=[Math.max(0,r.vals.length-this.options.xrange[1]),Math.max(r.vals.length,this.options.xrange[1])];this.updateScales(i),this.createPath(),r.sel.data([r]).join("path").classed(t.classname,!0).attr("d",t=>a.path(t.vals))}updateScales(t){const s=this.options;this.scales.x=e.p().domain(t).range([0,s.width]).clamp(!0)}initBaseLine(t){return this.layers.bg.append("path").classed(t,!0).classed("line",!0)}createScales(){const t=this.options;this.scales.x=e.p().domain(t.xrange).range([0,t.width]).clamp(!0),this.scales.y=e.p().domain(t.yrange).range([0,t.height]).clamp(!0)}init(){this.options,this.scales,this.sels;this.createScales(),this.createPath(),this.createAxes()}createAxes(){const t=this.sels,s=this.scales,a=this.options;t.xaxis=this.base.append("g").attr("class","axis axis--x").attr("transform",p.translate(0,a.height-H)).call(e.a(s.x).ticks(4).tickFormat("")),t.yaxis=this.base.append("g").attr("class","axis axis--y").attr("transform",p.translate(0,-H)).call(e.b(s.y).ticks(4).tickFormat("")),this.base.append("text").attr("transform",p.translate(a.width/2,a.margin.top+a.height+10)).style("text-anchor","middle").text("Time"),this.base.append("text").style("text-anchor","middle").text("θ - θ*").attr("y",a.pad.left-a.margin.left).attr("x",a.pad.top-a.height/2).attr("transform",p.rotate(-90))}createPath(){this.path=e.j().x((t,s)=>this.scales.x(s)).y((t,s)=>this.scales.y(t)).curve(e.e)}data(t){return null==t?this._data:(this._data=t,this)}resetXrange_(){return this.options.xrange=this.defaultXrange,this}}const N=M.a((t,s)=>s.toFixed(t)),T=N(1),F=N(4);a(67),a(68);console.log("RUNNING"),function(){const t=e.s("#vis1"),s={quiverPlot:t.select("#chart"),qId:t.select("#q-val"),etaId:t.select("#eta-val"),qSlider:t.select("#q-slider"),etaSlider:t.select("#eta-slider"),hessType:t.select("#hess-type")},a={graph:new w(s.quiverPlot)},r=0,i=.05,n={q:e.p().range([0,10]).domain([0,1]),eta:e.p().range([1,1e3]).domain([Math.pow(10,-5),.6])};a.graph.q(r),a.graph.eta(i),s.qSlider.property("value",n.q(r)),s.etaSlider.property("value",n.eta(i)),s.qId.text(T(r)),s.etaId.text(F(i)),s.qSlider.on("input",function(){const t=e.s(this),r=n.q.invert(+t.property("value"));a.graph.q(r),s.qId.text(`${T(r)}`)}),s.etaSlider.on("input",function(){const t=e.s(this),r=n.eta.invert(t.property("value"));a.graph.eta(r),s.etaId.text(`${F(r)}`)}),s.hessType.on("input",function(){const t=e.s(this).property("value");a.graph.setUpdater(t)})}(),function(){const t=e.s("#vis2"),s={chart:t.select("#chart"),chartXDist:t.select("#chart-xdist"),chartLosses:t.select("#chart-losses"),landscapeSelector:t.select(".landscape-select")},a=new l(t.node()),r={graph:new A(s.chart,a,{},n.uid()),chartXDist:new V(s.chartXDist,a),chartLosses:new C(s.chartLosses,a)},i={landscape:"seagull",qs:[0,.5,1],classNames:["golf-ball-sgd","golf-ball-sngd","golf-ball-ngd"]};i.etas={seagull:[.005,.005,.005],hole:[.005,.005,.005],steps:[.005,.005,.005],bowl:[.03,.03,.03],deep_net:[.01,.01,.01]}[i.landscape];const h=B[i.landscape],o=e.v(i.qs,i.etas,i.classNames).map(t=>new j(new E(h.f,h.df,t[0],t[1]),t[2]));r.graph.data(o),a.bind("loss-click",t=>{r.chartXDist.clearPaths(),r.chartLosses.clearPaths()}),s.landscapeSelector.property("value",i.landscape),r.graph.landscape(B[i.landscape]);let c=[];const p=(t,s=[])=>{const a=t.data().map(t=>t.stream),e={next:s=>{r.chartXDist.plotPath(s,t.scales.base2math.x.invert),r.chartLosses.plotPath(s,t.scales.base2loss)}};return s.forEach(t=>t.unsubscribe()),a.map(t=>t.subscribe(e))};s.landscapeSelector.on("input",function(){const t=e.s(this).property("value");r.chartLosses.resetXrange_(),r.chartXDist.resetXrange_(),r.graph.landscape(B[t]),r.graph.dataFromBase(r.graph.dataToBase_()),c=p(r.graph,c)}),c=p(r.graph,c)}(),function(){const t=e.s("#vis3"),s={chart:t.select("#chart"),chartLosses:t.select("#chart-losses"),chartXDist:t.select("#chart-xdist"),qId:t.select("#q-val"),etaId:t.select("#eta-val"),qSlider:t.select("#q-slider"),etaSlider:t.select("#eta-slider"),landscapeSelector:t.select(".landscape-select")},a=new l(t.node()),r={graph:new A(s.chart,a,{maxIter:1500},n.uid()),chartLosses:new C(s.chartLosses,a),chartXDist:new V(s.chartXDist,a)},i="seagull",h=.5,o=.01;a.bind("loss-click",t=>{r.chartXDist.clearPaths(),r.chartLosses.clearPaths()}),r.graph.data([new j(new E(B.hole.f,B.hole.df,h,o),"golf-ball")]);const c=[-3,0].map(t=>Math.pow(10,t)),p={q:e.p().range([0,10]).domain([0,1]),eta:e.q().range([1,1e3]).domain(c).base(10)};r.graph.landscape(B[i]),s.landscapeSelector.property("value",i),s.qSlider.property("value",p.q(h)),s.etaSlider.property("value",p.eta(o)),s.qId.text(T(h)),s.etaId.text(F(o));let d=[];const u=(t,s=[])=>{const a=t.data().map(t=>t.stream),e={next:s=>{r.chartXDist.plotPath(s,t.scales.base2math.x.invert),r.chartLosses.plotPath(s,t.scales.base2loss)}};return s.forEach(t=>t.unsubscribe()),a.map(t=>t.subscribe(e))};s.qSlider.on("input",function(){const t=e.s(this),a=p.q.invert(t.property("value"));r.graph.q(a),s.qId.text(`${T(a)}`)}),s.etaSlider.on("input",function(){const t=e.s(this),a=p.eta.invert(t.property("value"));r.graph.eta(a),s.etaId.text(`${F(a)}`)}),s.landscapeSelector.on("input",function(){const t=e.s(this).property("value");r.chartLosses.resetXrange_(),r.chartXDist.resetXrange_(),r.graph.landscape(B[t]),r.graph.dataFromBase(r.graph.dataToBase_()),d=u(r.graph,d)}),d=u(r.graph,d)}()}});