module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t){e.exports=require("react")},function(e,t,n){e.exports=n(9)()},function(e,t){e.exports=require("@xeokit/xeokit-sdk/src/viewer/scene/math/math")},function(e,t,n){(function(t){var n=/^\[object .+?Constructor\]$/,r="object"==typeof t&&t&&t.Object===Object&&t,o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();function u(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function a(e,t){return!!(e?e.length:0)&&function(e,t,n){if(t!=t)return function(e,t,n,r){var o=e.length,i=n+(r?1:-1);for(;r?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,s,n);var r=n-1,o=e.length;for(;++r<o;)if(e[r]===t)return r;return-1}(e,t,0)>-1}function c(e,t,n){for(var r=-1,o=e?e.length:0;++r<o;)if(n(t,e[r]))return!0;return!1}function l(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}function s(e){return e!=e}function f(e,t){return e.has(t)}var d,p=Array.prototype,h=Function.prototype,v=Object.prototype,b=i["__core-js_shared__"],y=(d=/[^.]+$/.exec(b&&b.keys&&b.keys.IE_PROTO||""))?"Symbol(src)_1."+d:"",m=h.toString,g=v.hasOwnProperty,_=v.toString,O=RegExp("^"+m.call(g).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),w=i.Symbol,j=v.propertyIsEnumerable,k=p.splice,P=w?w.isConcatSpreadable:void 0,S=Math.max,x=M(i,"Map"),E=M(Object,"create");function C(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function T(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function A(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function V(e){var t=-1,n=e?e.length:0;for(this.__data__=new A;++t<n;)this.add(e[t])}function F(e,t){for(var n,r,o=e.length;o--;)if((n=e[o][0])===(r=t)||n!=n&&r!=r)return o;return-1}function B(e,t,n,r){var o,i=-1,u=a,l=!0,s=e.length,d=[],p=t.length;if(!s)return d;n&&(t=function(e,t){for(var n=-1,r=e?e.length:0,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}(t,(o=n,function(e){return o(e)}))),r?(u=c,l=!1):t.length>=200&&(u=f,l=!1,t=new V(t));e:for(;++i<s;){var h=e[i],v=n?n(h):h;if(h=r||0!==h?h:0,l&&v==v){for(var b=p;b--;)if(t[b]===v)continue e;d.push(h)}else u(t,v,r)||d.push(h)}return d}function I(e){return!(!K(e)||(t=e,y&&y in t))&&(G(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?O:n).test(function(e){if(null!=e){try{return m.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e));var t}function L(e,t){var n,r,o=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof t?"string":"hash"]:o.map}function M(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return I(n)?n:void 0}function R(e){return z(e)||function(e){return $(e)&&g.call(e,"callee")&&(!j.call(e,"callee")||"[object Arguments]"==_.call(e))}(e)||!!(P&&e&&e[P])}C.prototype.clear=function(){this.__data__=E?E(null):{}},C.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},C.prototype.get=function(e){var t=this.__data__;if(E){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return g.call(t,e)?t[e]:void 0},C.prototype.has=function(e){var t=this.__data__;return E?void 0!==t[e]:g.call(t,e)},C.prototype.set=function(e,t){return this.__data__[e]=E&&void 0===t?"__lodash_hash_undefined__":t,this},T.prototype.clear=function(){this.__data__=[]},T.prototype.delete=function(e){var t=this.__data__,n=F(t,e);return!(n<0)&&(n==t.length-1?t.pop():k.call(t,n,1),!0)},T.prototype.get=function(e){var t=this.__data__,n=F(t,e);return n<0?void 0:t[n][1]},T.prototype.has=function(e){return F(this.__data__,e)>-1},T.prototype.set=function(e,t){var n=this.__data__,r=F(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},A.prototype.clear=function(){this.__data__={hash:new C,map:new(x||T),string:new C}},A.prototype.delete=function(e){return L(this,e).delete(e)},A.prototype.get=function(e){return L(this,e).get(e)},A.prototype.has=function(e){return L(this,e).has(e)},A.prototype.set=function(e,t){return L(this,e).set(e,t),this},V.prototype.add=V.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},V.prototype.has=function(e){return this.__data__.has(e)};var q,D,N=(q=function(e,t){return $(e)?B(e,function e(t,n,r,o,i){var u=-1,a=t.length;for(r||(r=R),i||(i=[]);++u<a;){var c=t[u];n>0&&r(c)?n>1?e(c,n-1,r,o,i):l(i,c):o||(i[i.length]=c)}return i}(t,1,$,!0)):[]},D=S(void 0===D?q.length-1:D,0),function(){for(var e=arguments,t=-1,n=S(e.length-D,0),r=Array(n);++t<n;)r[t]=e[D+t];t=-1;for(var o=Array(D+1);++t<D;)o[t]=e[t];return o[D]=r,u(q,this,o)});var z=Array.isArray;function X(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!G(e)}function $(e){return function(e){return!!e&&"object"==typeof e}(e)&&X(e)}function G(e){var t=K(e)?_.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}function K(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}e.exports=N}).call(this,n(11))},function(e,t){e.exports=require("@xeokit/xeokit-sdk/src/viewer/Viewer")},function(e,t){e.exports=require("@xeokit/xeokit-sdk/src/plugins/NavCubePlugin/NavCubePlugin")},function(e,t){e.exports=require("@xeokit/xeokit-sdk/src/plugins/GLTFLoaderPlugin/GLTFLoaderPlugin")},function(e,t){e.exports=require("@xeokit/xeokit-sdk/src/plugins/XKTLoaderPlugin/XKTLoaderPlugin")},function(e,t){e.exports=require("@xeokit/xeokit-sdk/src/plugins/BCFViewpointsPlugin/BCFViewpointsPlugin")},function(e,t,n){"use strict";var r=n(10);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,u){if(u!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1),u=n.n(i),a=n(4),c=n(8),l=n(5),s=n(3),f=n.n(s);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){var t=function(t){function n(){return p(this,n),v(this,b(n).apply(this,arguments))}var r,i,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(n,t),r=n,(i=[{key:"componentDidMount",value:function(){var e=this.props,t=e.camera,n=e.bcfViewpoint;this.setUpViewer(),t&&this.setCamera(),this.loadPlugins();var r=this.loadModels();n&&this.setBCFViewpoints(r),this.pickEntity()}},{key:"componentDidUpdate",value:function(e){var t=this,n=this.props;if(e.models!==n.models){var r=f()(n.models,e.models),o=f()(e.models,n.models),i=r.map((function(e){return t.modelLoader.load(e)}));n.bcfViewpoint&&this.setBCFViewpoints(i),o.forEach((function(e){var n=e.id;t.viewer.scene.models[n].destroy()}))}}},{key:"componentWillUnmount",value:function(){this.viewer.destroy()}},{key:"setUpViewer",value:function(){var e=this.props.canvasID;this.viewer=new a.Viewer({canvasId:e})}},{key:"setCamera",value:function(){var e=this.viewer.scene.camera,t=this.props.camera,n=t.eye,r=t.look,o=t.up,i=t.zoom;e.eye=n,e.look=r,e.up=o,e.zoom(i)}},{key:"setBCFViewpoints",value:function(e){var t=this,n=this.props.bcfViewpoint,r=e.map((function(e){return new Promise((function(t){return e.on("loaded",t)}))}));Promise.all(r).then((function(){return t.BCFViewpointsPlugin.setViewpoint(n)}))}},{key:"loadModels",value:function(){var e=this;return this.props.models.map((function(t){return e.modelLoader.load(t)}))}},{key:"loadPlugins",value:function(){var t=this.props,n=t.bcfViewpoint,r=t.navCubeSettings;this.modelLoader=new e(this.viewer),n&&(this.BCFViewpointsPlugin=new c.BCFViewpointsPlugin(this.viewer)),r&&new l.NavCubePlugin(this.viewer,r)}},{key:"pickEntity",value:function(){var e=this.props.eventToPickOn,t=null,n=null,r=this.viewer.scene;r.input.on(e,(function(e){var o=r.pick({canvasPos:e});o?(console.log(o.entity.id),t&&o.entity.id===t.id||(t&&(t.colorize=n),t=o.entity,n=o.entity.colorize.slice(),o.entity.colorize=[0,1,0])):t&&(t.colorize=n,t=null)}))}},{key:"takeScreenshot",value:function(){var e=this.viewer.getSnapshot({format:"png"}),t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download","model-screenshot"),t.click()}},{key:"render",value:function(){var e=this,t=this.props,n=t.canvasID,r=t.width,i=t.height,u=t.navCubeSettings,a=t.enableScreenshot;return o.a.createElement("div",null,o.a.createElement("canvas",{id:n,width:r,height:i,className:"d-block mx-auto border border-secondary m-3 mw-100"}),u?o.a.createElement("canvas",{id:u.canvasId,width:u.canvasWidth,height:u.canvasHeight,className:"d-block mx-auto mw-100"}):null,a?o.a.createElement("button",{type:"button",id:"take-screenshot",className:"btn btn-primary",onClick:function(){return e.takeScreenshot()}},"Take Screenshot"):null)}}])&&h(r.prototype,i),u&&h(r,u),n}(r.Component);return t.propTypes={canvasID:u.a.string.isRequired,width:u.a.number,height:u.a.number,camera:u.a.object,models:u.a.arrayOf(u.a.shape({id:u.a.string.isRequired,src:u.a.string.isRequired})).isRequired,bcfViewpoint:u.a.object,eventToPickOn:u.a.string,navCubeSettings:u.a.shape({canvasId:u.a.string.isRequired,canvasWidth:u.a.number,canvasHeight:u.a.number}),enableScreenshot:u.a.bool},t.defaultProps={eventToPickOn:"mouseclicked"},t},g=n(6),_=n(7),O=m(g.GLTFLoaderPlugin),w=m(_.XKTLoaderPlugin),j=n(2),k=function(e,t,n){return e.reduce((function(e,r){return e[t?t(r):r]=n||r,e}),Object.create(null))},P=function(e,t,n){var r=t.id,o=t.guids,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],u=e.models[r];if(null==o?void 0:o.length){var a=k(o,null,!0);n[r]=u._nodes.reduce((function(e,t){var n=!!a[t.id];return t.visible=n,n?j.math.expandAABB3(e,t.aabb):e}),j.math.collapseAABB3())}else i&&(u.visible=!0),n[r]=u.aabb},S=function(e,t,n){var r=(Object.values?Object.values(t):Object.keys(t).map((function(e){return t[e]}))).reduce(j.math.expandAABB3,j.math.collapseAABB3());n?e.cameraFlight.flyTo(r):e.cameraFlight.jumpTo(r)},x={gltf:{loader:g.GLTFLoaderPlugin},xkt:{loader:_.XKTLoaderPlugin}},E=function(e){var t=e.match(/\.(\w+)$/);return t&&t[1].toLowerCase()},C=[{label:"front",boundaries:[[7,7,4,4]],dir:[0,0,-1],up:[0,1,0]},{label:"back",boundaries:[[19,7,4,4]],dir:[0,0,1],up:[0,1,0]},{label:"right",boundaries:[[13,7,4,4]],dir:[-1,0,0],up:[0,1,0]},{label:"left",boundaries:[[1,7,4,4]],dir:[1,0,0],up:[0,1,0]},{label:"top",boundaries:[[7,1,4,4]],dir:[0,-1,0],up:[0,0,-1]},{label:"bottom",boundaries:[[7,13,4,4]],dir:[0,1,0],up:[0,0,1]}],T=function(e,t){return function(n){var r=C.find((function(e){return e.label===n}));if(t){var o=j.math.vec3(),i=e.scene.aabb,u=j.math.getAABB3Diag(i);j.math.getAABB3Center(i,o);var a=Math.abs(u/Math.tan(27.5));e.cameraFlight.flyTo({look:o,eye:[o[0]-a*r.dir[0],o[1]-a*r.dir[1],o[2]-a*r.dir[2]],up:r.up||[0,1,0],orthoScale:1.3*u,fitFOV:45,duration:.5})}}},A=function(e){var t=e.match(/#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i);return t?t.slice(1).map((function(e){return parseInt(e,16)/255})):[0,1,0]};function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){B(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var L=function(e,t,n){var o=Object(r.useRef)([]);return Object(r.useEffect)((function(){t?o.current=e:(o.current=[],n(!1))}),[t,e,n]),o.current},M=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:x,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,u=arguments.length>5?arguments[5]:void 0,a=Object(r.useState)(!1),c=I(a,2),l=c[0],s=c[1],d=L(t,e,s),p=Object(r.useRef)(Object.create(null));return Object(r.useEffect)((function(){if(e){var r=t.map((function(e){return e.id})),a=d.map((function(e){return e.id})),c=f()(r,a),l=f()(a,r),h=f()(a,l);l.forEach((function(t){var n;null===(n=e.scene.models[t])||void 0===n||n.destroy(),delete p.current[t]})),(null==o?void 0:o.model.destroyed)&&i(null);var v=k(t,(function(e){return e.id})),b=k(d,(function(e){return e.id})),y=!1;if(h.forEach((function(t){var n=v[t],r=b[t];n.guids!==r.guids&&(y=!0,P(e.scene,n,p.current)),["xrayed","pickable"].forEach((function(o){n[o]!==r[o]&&(e.scene.models[t][o]=n[o])}))})),o&&!o.visible&&(o.selected=!1,i(null)),!l.length&&!y||c.length||S(e,p.current,u),h.length&&!c.length||s(!1),!c.length)return;var m=c.map((function(t){return new Promise((function(r){var o,i=v[t],a=n[E(i.src)]||{},c=a.loader,l=a.dataSource;c?((null===(o=e.plugins)||void 0===o?void 0:o[c.name])||new c(e,{id:c.name,dataSource:l})).load(i.guids?F({},i,{visible:!1}):i).on("loaded",(function(){P(e.scene,i,p.current,!1),S(e,p.current,u),r()})):r()}))}));Promise.all(m).then((function(){return s(!0)}))}}),[e,t,n,s]),l};function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var q=function(e){return e&&!e.model.destroyed&&(e.selected=!1),null},D=function(e,t){var n=R(Object(r.useState)(null),2),o=n[0],i=n[1];return Object(r.useEffect)((function(){var n,r;if(e){var o=e.scene;n=o.input.on("keydown",(function(e){return e===o.input.KEY_ESCAPE?i(q):null})),r=o.input.on(t,(function(e){var t=o.pick({canvasPos:e});i(t?function(e){return function(t){return q(t),e.selected=!0,e}}(t.entity):q)}))}return function(){if(e){var t=e.scene.input;t.off(n),t.off(r)}}}),[e,t]),Object(r.useEffect)((function(){return function(){return i(q)}}),[e]),[o,i]};function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var z=C.map((function(e){return e.label})),X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.eventToPickOn,o=void 0===n?"mouseclicked":n,i=t.loaders,u=t.xraySettings,c=t.flyToModels,s=void 0!==c&&c,f=Object(r.useState)(null),d=N(f,2),p=d[0],h=d[1],v=D(p,o),b=N(v,2),y=b[0],m=b[1],g=M(p,e,i,y,m,s);Object(r.useEffect)((function(){u&&p&&Object.keys(u).forEach((function(e){var t=u[e];p.scene.xrayMaterial[e]!==t&&(p.scene.xrayMaterial[e]=t)}))}),[u,p]);var _=Object(r.useMemo)((function(){return{ref:function(e){return h(e?new a.Viewer({canvasElement:e}):null)}}}),[h]),O=Object(r.useMemo)((function(){return{ref:function(e){var t;return e&&p?new l.NavCubePlugin(p,{canvasElement:e}):null==p?void 0:null===(t=p.plugins)||void 0===t?void 0:t.NavCubePlugin.destroy()}}}),[p]),w=function(){if(p){var e=p.getSnapshot({format:"png"}),t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download","model-screenshot"),t.click()}};Object(r.useEffect)((function(){return function(){p&&p.destroy()}}),[p]);var j=Object(r.useCallback)((function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return e.forEach((function(e){var r=null==p?void 0:p.scene.models[e];r&&(r.xrayed=t,r.pickable=n||!t)}))}),[p]),k=Object(r.useCallback)((function(e,t){return e.forEach((function(e){var n=null==p?void 0:p.scene.models[e];n&&(n.visible=t)}))}),[p]),P=Object(r.useCallback)((function(e,t){return null==p?void 0:p.scene.setObjectsVisible(e,t)}),[p]),S=Object(r.useCallback)((function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];null==p||p.scene.setObjectsXRayed(e,t),null==p||p.scene.setObjectsPickable(e,n||!t)}),[p]),x=Object(r.useCallback)((function(e,t){return null==p?void 0:p.scene.setObjectsColorized(e,A(t))}),[p]),E=Object(r.useMemo)((function(){return p?Object.keys(p.scene.xrayMaterial.presets):[]}),[p]);return{viewerCanvasProps:_,navCubeCanvasProps:O,takeScreenshot:w,setCameraPreset:T(p,g),pickedEntity:y?{entityId:y.id,modelId:y.model.id}:{entityId:"",modelId:""},clearEntitySelection:function(){return m(q)},faces:z,setObjectsVisible:P,setObjectsColorized:x,setObjectsXRayed:S,setModelsXRayed:j,setModelsVisible:k,xrayPresets:E,modelsHaveLoaded:g}};n.d(t,"GLTFViewer",(function(){return O})),n.d(t,"XKTViewer",(function(){return w})),n.d(t,"useViewer",(function(){return X}))}]);