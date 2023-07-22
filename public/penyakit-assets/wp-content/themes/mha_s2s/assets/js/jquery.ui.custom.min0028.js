/*! jQuery UI - v1.13.1 - 2022-03-25
* http://jqueryui.com
* Includes: effect.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(u){"use strict";u.ui=u.ui||{};u.ui.version="1.13.1";var a=u,n={},e=n.toString,f=/^([\-+])=\s*(\d+\.?\d*)/,t=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),t[4]?(parseInt(t[4],16)/255).toFixed(2):1]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),t[4]?(parseInt(t[4]+t[4],16)/255).toFixed(2):1]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=a.Color=function(t,e,n,r){return new a.Color.fn.parse(t,e,n,r)},d={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},p={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},s=l.support={},r=a("<p>")[0],h=a.each;function g(t){return null==t?t+"":"object"==typeof t?n[e.call(t)]||"object":typeof t}function m(t,e,n){var r=p[e.type]||{};return null==t?n||!e.def?null:e.def:(t=r.floor?~~t:parseFloat(t),isNaN(t)?e.def:r.mod?(t+r.mod)%r.mod:Math.min(r.max,Math.max(0,t)))}function c(r){var o=l(),i=o._rgba=[];return r=r.toLowerCase(),h(t,function(t,e){var n=e.re.exec(r),n=n&&e.parse(n),e=e.space||"rgba";if(n)return n=o[e](n),o[d[e].cache]=n[d[e].cache],i=o._rgba=n._rgba,!1}),i.length?("0,0,0,0"===i.join()&&a.extend(i,M.transparent),o):M[r]}function o(t,e,n){return 6*(n=(n+1)%1)<1?t+(e-t)*n*6:2*n<1?e:3*n<2?t+(e-t)*(2/3-n)*6:t}r.style.cssText="background-color:rgba(1,1,1,.5)",s.rgba=-1<r.style.backgroundColor.indexOf("rgba"),h(d,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),a.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){n["[object "+e+"]"]=e.toLowerCase()}),(l.fn=a.extend(l.prototype,{parse:function(o,t,e,n){if(void 0===o)return this._rgba=[null,null,null,null],this;(o.jquery||o.nodeType)&&(o=a(o).css(t),t=void 0);var i=this,r=g(o),s=this._rgba=[];return void 0!==t&&(o=[o,t,e,n],r="array"),"string"===r?this.parse(c(o)||M._default):"array"===r?(h(d.rgba.props,function(t,e){s[e.idx]=m(o[e.idx],e)}),this):"object"===r?(h(d,o instanceof l?function(t,e){o[e.cache]&&(i[e.cache]=o[e.cache].slice())}:function(t,n){var r=n.cache;h(n.props,function(t,e){if(!i[r]&&n.to){if("alpha"===t||null==o[t])return;i[r]=n.to(i._rgba)}i[r][e.idx]=m(o[t],e,!0)}),i[r]&&a.inArray(null,i[r].slice(0,3))<0&&(null==i[r][3]&&(i[r][3]=1),n.from&&(i._rgba=n.from(i[r])))}),this):void 0},is:function(t){var o=l(t),i=!0,s=this;return h(d,function(t,e){var n,r=o[e.cache];return r&&(n=s[e.cache]||e.to&&e.to(s._rgba)||[],h(e.props,function(t,e){if(null!=r[e.idx])return i=r[e.idx]===n[e.idx]})),i}),i},_space:function(){var n=[],r=this;return h(d,function(t,e){r[e.cache]&&n.push(t)}),n.pop()},transition:function(t,s){var e=(f=l(t))._space(),n=d[e],t=0===this.alpha()?l("transparent"):this,a=t[n.cache]||n.to(t._rgba),c=a.slice(),f=f[n.cache];return h(n.props,function(t,e){var n=e.idx,r=a[n],o=f[n],i=p[e.type]||{};null!==o&&(null===r?c[n]=o:(i.mod&&(o-r>i.mod/2?r+=i.mod:r-o>i.mod/2&&(r-=i.mod)),c[n]=m((o-r)*s+r,e)))}),this[e](c)},blend:function(t){if(1===this._rgba[3])return this;var e=this._rgba.slice(),n=e.pop(),r=l(t)._rgba;return l(a.map(e,function(t,e){return(1-n)*r[e]+n*t}))},toRgbaString:function(){var t="rgba(",e=a.map(this._rgba,function(t,e){return null!=t?t:2<e?1:0});return 1===e[3]&&(e.pop(),t="rgb("),t+e.join()+")"},toHslaString:function(){var t="hsla(",e=a.map(this.hsla(),function(t,e){return null==t&&(t=2<e?1:0),t=e&&e<3?Math.round(100*t)+"%":t});return 1===e[3]&&(e.pop(),t="hsl("),t+e.join()+")"},toHexString:function(t){var e=this._rgba.slice(),n=e.pop();return t&&e.push(~~(255*n)),"#"+a.map(e,function(t){return 1===(t=(t||0).toString(16)).length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}})).parse.prototype=l.fn,d.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/255,n=t[1]/255,r=t[2]/255,o=t[3],i=Math.max(e,n,r),s=Math.min(e,n,r),a=i-s,c=i+s,t=.5*c,n=s===i?0:e===i?60*(n-r)/a+360:n===i?60*(r-e)/a+120:60*(e-n)/a+240,c=0==a?0:t<=.5?a/c:a/(2-c);return[Math.round(n)%360,c,t,null==o?1:o]},d.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,n=t[1],r=t[2],t=t[3],n=r<=.5?r*(1+n):r+n-r*n,r=2*r-n;return[Math.round(255*o(r,n,e+1/3)),Math.round(255*o(r,n,e)),Math.round(255*o(r,n,e-1/3)),t]},h(d,function(c,t){var e=t.props,i=t.cache,s=t.to,a=t.from;l.fn[c]=function(t){if(s&&!this[i]&&(this[i]=s(this._rgba)),void 0===t)return this[i].slice();var n=g(t),r="array"===n||"object"===n?t:arguments,o=this[i].slice();return h(e,function(t,e){t=r["object"===n?t:e.idx];null==t&&(t=o[e.idx]),o[e.idx]=m(t,e)}),a?((t=l(a(o)))[i]=o,t):l(o)},h(e,function(s,a){l.fn[s]||(l.fn[s]=function(t){var e,n=g(t),r="alpha"===s?this._hsla?"hsla":"rgba":c,o=this[r](),i=o[a.idx];return"undefined"===n?i:("function"===n&&(n=g(t=t.call(this,i))),null==t&&a.empty?this:("string"===n&&(e=f.exec(t))&&(t=i+parseFloat(e[2])*("+"===e[1]?1:-1)),o[a.idx]=t,this[r](o)))})})}),(l.hook=function(t){t=t.split(" ");h(t,function(t,i){a.cssHooks[i]={set:function(t,e){var n,r,o="";if("transparent"!==e&&("string"!==g(e)||(n=c(e)))){if(e=l(n||e),!s.rgba&&1!==e._rgba[3]){for(r="backgroundColor"===i?t.parentNode:t;(""===o||"transparent"===o)&&r&&r.style;)try{o=a.css(r,"backgroundColor"),r=r.parentNode}catch(t){}e=e.blend(o&&"transparent"!==o?o:"_default")}e=e.toRgbaString()}try{t.style[i]=e}catch(t){}}},a.fx.step[i]=function(t){t.colorInit||(t.start=l(t.elem,i),t.end=l(t.end),t.colorInit=!0),a.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})})("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),a.cssHooks.borderColor={expand:function(n){var r={};return h(["Top","Right","Bottom","Left"],function(t,e){r["border"+e+"Color"]=n}),r}};var i,b,y,v,x,C,w,k,_,S,M=a.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"},j="ui-effects-",B="ui-effects-style",I="ui-effects-animated";function H(t){var e,n,r=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,o={};if(r&&r.length&&r[0]&&r[r[0]])for(n=r.length;n--;)"string"==typeof r[e=r[n]]&&(o[e.replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})]=r[e]);else for(e in r)"string"==typeof r[e]&&(o[e]=r[e]);return o}function T(t,e,n,r){return t={effect:t=u.isPlainObject(t)?(e=t).effect:t},"function"==typeof(e=null==e?{}:e)&&(r=e,n=null,e={}),"number"!=typeof e&&!u.fx.speeds[e]||(r=n,n=e,e={}),"function"==typeof n&&(r=n,n=null),e&&u.extend(t,e),n=n||e.duration,t.duration=u.fx.off?0:"number"==typeof n?n:n in u.fx.speeds?u.fx.speeds[n]:u.fx.speeds._default,t.complete=r||e.complete,t}function W(t){return!t||"number"==typeof t||u.fx.speeds[t]||("string"==typeof t&&!u.effects.effect[t]||("function"==typeof t||"object"==typeof t&&!t.effect))}function R(t,e){var n=e.outerWidth(),e=e.outerHeight(),t=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t)||["",0,n,e,0];return{top:parseFloat(t[1])||0,right:"auto"===t[2]?n:parseFloat(t[2]),bottom:"auto"===t[3]?e:parseFloat(t[3]),left:parseFloat(t[4])||0}}u.effects={effect:{}},v=["add","remove","toggle"],x={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1},u.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,e){u.fx.step[e]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(a.style(t.elem,e,t.end),t.setAttr=!0)}}),u.fn.addBack||(u.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),u.effects.animateClass=function(o,t,e,n){var i=u.speed(t,e,n);return this.queue(function(){var n=u(this),t=n.attr("class")||"",e=(e=i.children?n.find("*").addBack():n).map(function(){return{el:u(this),start:H(this)}}),r=function(){u.each(v,function(t,e){o[e]&&n[e+"Class"](o[e])})};r(),e=e.map(function(){return this.end=H(this.el[0]),this.diff=function(t,e){var n,r,o={};for(n in e)r=e[n],t[n]!==r&&(x[n]||!u.fx.step[n]&&isNaN(parseFloat(r))||(o[n]=r));return o}(this.start,this.end),this}),n.attr("class",t),e=e.map(function(){var t=this,e=u.Deferred(),n=u.extend({},i,{queue:!1,complete:function(){e.resolve(t)}});return this.el.animate(this.diff,n),e.promise()}),u.when.apply(u,e.get()).done(function(){r(),u.each(arguments,function(){var e=this.el;u.each(this.diff,function(t){e.css(t,"")})}),i.complete.call(n[0])})})},u.fn.extend({addClass:(y=u.fn.addClass,function(t,e,n,r){return e?u.effects.animateClass.call(this,{add:t},e,n,r):y.apply(this,arguments)}),removeClass:(b=u.fn.removeClass,function(t,e,n,r){return 1<arguments.length?u.effects.animateClass.call(this,{remove:t},e,n,r):b.apply(this,arguments)}),toggleClass:(i=u.fn.toggleClass,function(t,e,n,r,o){return"boolean"==typeof e||void 0===e?n?u.effects.animateClass.call(this,e?{add:t}:{remove:t},n,r,o):i.apply(this,arguments):u.effects.animateClass.call(this,{toggle:t},e,n,r)}),switchClass:function(t,e,n,r,o){return u.effects.animateClass.call(this,{add:e,remove:t},n,r,o)}}),u.expr&&u.expr.pseudos&&u.expr.pseudos.animated&&(u.expr.pseudos.animated=(C=u.expr.pseudos.animated,function(t){return!!u(t).data(I)||C(t)})),!1!==u.uiBackCompat&&u.extend(u.effects,{save:function(t,e){for(var n=0,r=e.length;n<r;n++)null!==e[n]&&t.data(j+e[n],t[0].style[e[n]])},restore:function(t,e){for(var n,r=0,o=e.length;r<o;r++)null!==e[r]&&(n=t.data(j+e[r]),t.css(e[r],n))},setMode:function(t,e){return e="toggle"===e?t.is(":hidden")?"show":"hide":e},createWrapper:function(n){if(n.parent().is(".ui-effects-wrapper"))return n.parent();var r={width:n.outerWidth(!0),height:n.outerHeight(!0),float:n.css("float")},t=u("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e={width:n.width(),height:n.height()},o=document.activeElement;try{o.id}catch(t){o=document.body}return n.wrap(t),n[0]!==o&&!u.contains(n[0],o)||u(o).trigger("focus"),t=n.parent(),"static"===n.css("position")?(t.css({position:"relative"}),n.css({position:"relative"})):(u.extend(r,{position:n.css("position"),zIndex:n.css("z-index")}),u.each(["top","left","bottom","right"],function(t,e){r[e]=n.css(e),isNaN(parseInt(r[e],10))&&(r[e]="auto")}),n.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),n.css(e),t.css(r).show()},removeWrapper:function(t){var e=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),t[0]!==e&&!u.contains(t[0],e)||u(e).trigger("focus")),t}}),u.extend(u.effects,{version:"1.13.1",define:function(t,e,n){return n||(n=e,e="effect"),u.effects.effect[t]=n,u.effects.effect[t].mode=e,n},scaledDimensions:function(t,e,n){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var r="horizontal"!==n?(e||100)/100:1,e="vertical"!==n?(e||100)/100:1;return{height:t.height()*e,width:t.width()*r,outerHeight:t.outerHeight()*e,outerWidth:t.outerWidth()*r}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,n){var r=t.queue();1<e&&r.splice.apply(r,[1,0].concat(r.splice(e,n))),t.dequeue()},saveStyle:function(t){t.data(B,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(B)||"",t.removeData(B)},mode:function(t,e){t=t.is(":hidden");return"toggle"===e&&(e=t?"show":"hide"),e=(t?"hide"===e:"show"===e)?"none":e},getBaseline:function(t,e){var n,r;switch(t[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=t[0]/e.height}switch(t[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=t[1]/e.width}return{x:r,y:n}},createPlaceholder:function(t){var e,n=t.css("position"),r=t.position();return t.css({marginTop:t.css("marginTop"),marginBottom:t.css("marginBottom"),marginLeft:t.css("marginLeft"),marginRight:t.css("marginRight")}).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()),/^(static|relative)/.test(n)&&(n="absolute",e=u("<"+t[0].nodeName+">").insertAfter(t).css({display:/^(inline|ruby)/.test(t.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:t.css("marginTop"),marginBottom:t.css("marginBottom"),marginLeft:t.css("marginLeft"),marginRight:t.css("marginRight"),float:t.css("float")}).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"),t.data(j+"placeholder",e)),t.css({position:n,left:r.left,top:r.top}),e},removePlaceholder:function(t){var e=j+"placeholder",n=t.data(e);n&&(n.remove(),t.removeData(e))},cleanUp:function(t){u.effects.restoreStyle(t),u.effects.removePlaceholder(t)},setTransition:function(r,t,o,i){return i=i||{},u.each(t,function(t,e){var n=r.cssUnit(e);0<n[0]&&(i[e]=n[0]*o+n[1])}),i}}),u.fn.extend({effect:function(){function t(t){var e=u(this),n=u.effects.mode(e,a)||i;e.data(I,!0),c.push(n),i&&("show"===n||n===i&&"hide"===n)&&e.show(),i&&"none"===n||u.effects.saveStyle(e),"function"==typeof t&&t()}var r=T.apply(this,arguments),o=u.effects.effect[r.effect],i=o.mode,e=r.queue,n=e||"fx",s=r.complete,a=r.mode,c=[];return u.fx.off||!o?a?this[a](r.duration,s):this.each(function(){s&&s.call(this)}):!1===e?this.each(t).each(f):this.queue(n,t).queue(n,f);function f(t){var e=u(this);function n(){"function"==typeof s&&s.call(e[0]),"function"==typeof t&&t()}r.mode=c.shift(),!1===u.uiBackCompat||i?"none"===r.mode?(e[a](),n()):o.call(e[0],r,function(){e.removeData(I),u.effects.cleanUp(e),"hide"===r.mode&&e.hide(),n()}):(e.is(":hidden")?"hide"===a:"show"===a)?(e[a](),n()):o.call(e[0],r,n)}},show:(_=u.fn.show,function(t){if(W(t))return _.apply(this,arguments);t=T.apply(this,arguments);return t.mode="show",this.effect.call(this,t)}),hide:(k=u.fn.hide,function(t){if(W(t))return k.apply(this,arguments);t=T.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)}),toggle:(w=u.fn.toggle,function(t){if(W(t)||"boolean"==typeof t)return w.apply(this,arguments);t=T.apply(this,arguments);return t.mode="toggle",this.effect.call(this,t)}),cssUnit:function(t){var n=this.css(t),r=[];return u.each(["em","px","%","pt"],function(t,e){0<n.indexOf(e)&&(r=[parseFloat(n),e])}),r},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):R(this.css("clip"),this)},transfer:function(t,e){var n=u(this),r=u(t.to),o="fixed"===r.css("position"),i=u("body"),s=o?i.scrollTop():0,a=o?i.scrollLeft():0,i=r.offset(),i={top:i.top-s,left:i.left-a,height:r.innerHeight(),width:r.innerWidth()},r=n.offset(),c=u("<div class='ui-effects-transfer'></div>");c.appendTo("body").addClass(t.className).css({top:r.top-s,left:r.left-a,height:n.innerHeight(),width:n.innerWidth(),position:o?"fixed":"absolute"}).animate(i,t.duration,t.easing,function(){c.remove(),"function"==typeof e&&e()})}}),u.fx.step.clip=function(t){t.clipInit||(t.start=u(t.elem).cssClip(),"string"==typeof t.end&&(t.end=R(t.end,t.elem)),t.clipInit=!0),u(t.elem).cssClip({top:t.pos*(t.end.top-t.start.top)+t.start.top,right:t.pos*(t.end.right-t.start.right)+t.start.right,bottom:t.pos*(t.end.bottom-t.start.bottom)+t.start.bottom,left:t.pos*(t.end.left-t.start.left)+t.start.left})},S={},u.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,t){S[t]=function(t){return Math.pow(t,e+2)}}),u.extend(S,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}}),u.each(S,function(t,e){u.easing["easeIn"+t]=e,u.easing["easeOut"+t]=function(t){return 1-e(1-t)},u.easing["easeInOut"+t]=function(t){return t<.5?e(2*t)/2:1-e(-2*t+2)/2}});u.effects});