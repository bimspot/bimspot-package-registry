module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t){e.exports=require("react")},function(e,t,n){e.exports=n(9)()},function(e,t){e.exports=require("@xeokit/xeokit-sdk/src/plugins/GLTFLoaderPlugin/GLTFLoaderPlugin")},function(e,t){e.exports=require("@xeokit/xeokit-sdk/src/plugins/XKTLoaderPlugin/XKTLoaderPlugin")},function(e,t,n){(function(t){var n=/^\[object .+?Constructor\]$/,r="object"==typeof t&&t&&t.Object===Object&&t,o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();function a(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function u(e,t){return!!(e?e.length:0)&&function(e,t,n){if(t!=t)return function(e,t,n,r){var o=e.length,i=n+(r?1:-1);for(;r?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,l,n);var r=n-1,o=e.length;for(;++r<o;)if(e[r]===t)return r;return-1}(e,t,0)>-1}function c(e,t,n){for(var r=-1,o=e?e.length:0;++r<o;)if(n(t,e[r]))return!0;return!1}function s(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}function l(e){return e!=e}function f(e,t){return e.has(t)}var p,d=Array.prototype,h=Function.prototype,v=Object.prototype,y=i["__core-js_shared__"],b=(p=/[^.]+$/.exec(y&&y.keys&&y.keys.IE_PROTO||""))?"Symbol(src)_1."+p:"",m=h.toString,g=v.hasOwnProperty,_=v.toString,w=RegExp("^"+m.call(g).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),k=i.Symbol,O=v.propertyIsEnumerable,P=d.splice,j=k?k.isConcatSpreadable:void 0,S=Math.max,x=q(i,"Map"),T=q(Object,"create");function C(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function E(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function V(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function F(e){var t=-1,n=e?e.length:0;for(this.__data__=new V;++t<n;)this.add(e[t])}function A(e,t){for(var n,r,o=e.length;o--;)if((n=e[o][0])===(r=t)||n!=n&&r!=r)return o;return-1}function L(e,t,n,r){var o,i=-1,a=u,s=!0,l=e.length,p=[],d=t.length;if(!l)return p;n&&(t=function(e,t){for(var n=-1,r=e?e.length:0,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}(t,(o=n,function(e){return o(e)}))),r?(a=c,s=!1):t.length>=200&&(a=f,s=!1,t=new F(t));e:for(;++i<l;){var h=e[i],v=n?n(h):h;if(h=r||0!==h?h:0,s&&v==v){for(var y=d;y--;)if(t[y]===v)continue e;p.push(h)}else a(t,v,r)||p.push(h)}return p}function I(e){return!(!U(e)||(t=e,b&&b in t))&&(K(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?w:n).test(function(e){if(null!=e){try{return m.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e));var t}function R(e,t){var n,r,o=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof t?"string":"hash"]:o.map}function q(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return I(n)?n:void 0}function B(e){return G(e)||function(e){return $(e)&&g.call(e,"callee")&&(!O.call(e,"callee")||"[object Arguments]"==_.call(e))}(e)||!!(j&&e&&e[j])}C.prototype.clear=function(){this.__data__=T?T(null):{}},C.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},C.prototype.get=function(e){var t=this.__data__;if(T){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return g.call(t,e)?t[e]:void 0},C.prototype.has=function(e){var t=this.__data__;return T?void 0!==t[e]:g.call(t,e)},C.prototype.set=function(e,t){return this.__data__[e]=T&&void 0===t?"__lodash_hash_undefined__":t,this},E.prototype.clear=function(){this.__data__=[]},E.prototype.delete=function(e){var t=this.__data__,n=A(t,e);return!(n<0)&&(n==t.length-1?t.pop():P.call(t,n,1),!0)},E.prototype.get=function(e){var t=this.__data__,n=A(t,e);return n<0?void 0:t[n][1]},E.prototype.has=function(e){return A(this.__data__,e)>-1},E.prototype.set=function(e,t){var n=this.__data__,r=A(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},V.prototype.clear=function(){this.__data__={hash:new C,map:new(x||E),string:new C}},V.prototype.delete=function(e){return R(this,e).delete(e)},V.prototype.get=function(e){return R(this,e).get(e)},V.prototype.has=function(e){return R(this,e).has(e)},V.prototype.set=function(e,t){return R(this,e).set(e,t),this},F.prototype.add=F.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},F.prototype.has=function(e){return this.__data__.has(e)};var M,z,D=(M=function(e,t){return $(e)?L(e,function e(t,n,r,o,i){var a=-1,u=t.length;for(r||(r=B),i||(i=[]);++a<u;){var c=t[a];n>0&&r(c)?n>1?e(c,n-1,r,o,i):s(i,c):o||(i[i.length]=c)}return i}(t,1,$,!0)):[]},z=S(void 0===z?M.length-1:z,0),function(){for(var e=arguments,t=-1,n=S(e.length-z,0),r=Array(n);++t<n;)r[t]=e[z+t];t=-1;for(var o=Array(z+1);++t<z;)o[t]=e[t];return o[z]=r,a(M,this,o)});var G=Array.isArray;function N(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!K(e)}function $(e){return function(e){return!!e&&"object"==typeof e}(e)&&N(e)}function K(e){var t=U(e)?_.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}function U(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}e.exports=D}).call(this,n(11))},function(e,t){e.exports=require("@xeokit/xeokit-sdk/src/viewer/Viewer")},function(e,t){e.exports=require("@xeokit/xeokit-sdk/src/viewer/scene/math/math")},function(e,t){e.exports=require("@xeokit/xeokit-sdk/src/plugins/BCFViewpointsPlugin/BCFViewpointsPlugin")},function(e,t){e.exports=require("@xeokit/xeokit-sdk/src/plugins/NavCubePlugin/NavCubePlugin")},function(e,t,n){"use strict";var r=n(10);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),u=n(5),c=n(7),s=n(8),l=n(4),f=n.n(l);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){var t=function(t){function n(){return d(this,n),v(this,y(n).apply(this,arguments))}var r,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(n,t),r=n,(i=[{key:"componentDidMount",value:function(){var e=this.props,t=e.camera,n=e.bcfViewpoint;this.setUpViewer(),t&&this.setCamera(),this.loadPlugins();var r=this.loadModels();n&&this.setBCFViewpoints(r),this.pickEntity()}},{key:"componentDidUpdate",value:function(e){var t=this,n=this.props;if(e.models!==n.models){var r=f()(n.models,e.models),o=f()(e.models,n.models),i=r.map((function(e){return t.modelLoader.load(e)}));n.bcfViewpoint&&this.setBCFViewpoints(i),o.forEach((function(e){var n=e.id;t.viewer.scene.models[n].destroy()}))}}},{key:"componentWillUnmount",value:function(){this.viewer.destroy()}},{key:"setUpViewer",value:function(){var e=this.props.canvasID;this.viewer=new u.Viewer({canvasId:e})}},{key:"setCamera",value:function(){var e=this.viewer.scene.camera,t=this.props.camera,n=t.eye,r=t.look,o=t.up,i=t.zoom;e.eye=n,e.look=r,e.up=o,e.zoom(i)}},{key:"setBCFViewpoints",value:function(e){var t=this,n=this.props.bcfViewpoint,r=e.map((function(e){return new Promise((function(t){return e.on("loaded",t)}))}));Promise.all(r).then((function(){return t.BCFViewpointsPlugin.setViewpoint(n)}))}},{key:"loadModels",value:function(){var e=this;return this.props.models.map((function(t){return e.modelLoader.load(t)}))}},{key:"loadPlugins",value:function(){var t=this.props,n=t.bcfViewpoint,r=t.navCubeSettings;this.modelLoader=new e(this.viewer),n&&(this.BCFViewpointsPlugin=new c.BCFViewpointsPlugin(this.viewer)),r&&new s.NavCubePlugin(this.viewer,r)}},{key:"pickEntity",value:function(){var e=this.props.eventToPickOn,t=null,n=null,r=this.viewer.scene;r.input.on(e,(function(e){var o=r.pick({canvasPos:e});o?(console.log(o.entity.id),t&&o.entity.id===t.id||(t&&(t.colorize=n),t=o.entity,n=o.entity.colorize.slice(),o.entity.colorize=[0,1,0])):t&&(t.colorize=n,t=null)}))}},{key:"takeScreenshot",value:function(){var e=this.viewer.getSnapshot({format:"png"}),t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download","model-screenshot"),t.click()}},{key:"render",value:function(){var e=this,t=this.props,n=t.canvasID,r=t.width,i=t.height,a=t.navCubeSettings,u=t.enableScreenshot;return o.a.createElement("div",null,o.a.createElement("canvas",{id:n,width:r,height:i,className:"d-block mx-auto border border-secondary m-3 mw-100"}),a?o.a.createElement("canvas",{id:a.canvasId,width:a.canvasWidth,height:a.canvasHeight,className:"d-block mx-auto mw-100"}):null,u?o.a.createElement("button",{type:"button",id:"take-screenshot",className:"btn btn-primary",onClick:function(){return e.takeScreenshot()}},"Take Screenshot"):null)}}])&&h(r.prototype,i),a&&h(r,a),n}(r.Component);return t.propTypes={canvasID:a.a.string.isRequired,width:a.a.number,height:a.a.number,camera:a.a.object,models:a.a.arrayOf(a.a.shape({id:a.a.string.isRequired,src:a.a.string.isRequired})).isRequired,bcfViewpoint:a.a.object,eventToPickOn:a.a.string,navCubeSettings:a.a.shape({canvasId:a.a.string.isRequired,canvasWidth:a.a.number,canvasHeight:a.a.number}),enableScreenshot:a.a.bool},t.defaultProps={eventToPickOn:"mouseclicked"},t},g=n(2),_=n(3),w=m(g.GLTFLoaderPlugin),k=m(_.XKTLoaderPlugin),O=n(6),P=function(e,t,n){var r=null,o=null,i=e.scene;i.input.on(t,(function(e){r&&r.model.destroyed&&(r=null,o=null,n(null));var t=i.pick({canvasPos:e});t?(n(t.entity),r&&t.entity.id===r.id||(r&&(r.colorize=o),r=t.entity,o=t.entity.colorize.slice(),t.entity.colorize=[0,1,0])):r&&(r.colorize=o,r=null,n(null))}))},j=(g.GLTFLoaderPlugin,_.XKTLoaderPlugin,function(e){var t=e.match(/\.(\w+)$/);return t&&t[1].toLowerCase()}),S=[{label:"front",boundaries:[[7,7,4,4]],dir:[0,0,-1],up:[0,1,0]},{label:"back",boundaries:[[19,7,4,4]],dir:[0,0,1],up:[0,1,0]},{label:"right",boundaries:[[13,7,4,4]],dir:[-1,0,0],up:[0,1,0]},{label:"left",boundaries:[[1,7,4,4]],dir:[1,0,0],up:[0,1,0]},{label:"top",boundaries:[[7,1,4,4]],dir:[0,-1,0],up:[0,0,-1]},{label:"bottom",boundaries:[[7,13,4,4]],dir:[0,1,0],up:[0,0,1]}],x=function(e,t){return function(n){var r=S.find((function(e){return e.label===n}));if(t){var o=O.math.vec3(),i=e.scene.aabb,a=O.math.getAABB3Diag(i);O.math.getAABB3Center(i,o);var u=Math.abs(a/Math.tan(27.5));e.cameraFlight.flyTo({look:o,eye:[o[0]-u*r.dir[0],o[1]-u*r.dir[1],o[2]-u*r.dir[2]],up:r.up||[0,1,0],orthoScale:1.3*a,fitFOV:45,duration:.5})}}};function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var C={gltf:{loader:g.GLTFLoaderPlugin},xkt:{loader:_.XKTLoaderPlugin}},E=function(e,t,n){var o=Object(r.useRef)();return Object(r.useEffect)((function(){t?o.current=e:(o.current=[],n(!1))}),[t,e,n]),o.current},V=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,a=Object(r.useState)(!1),u=T(a,2),c=u[0],s=u[1],l=E(t,e,s),p=f()(t,l),d=f()(l,t);return Object(r.useEffect)((function(){if(e){d.forEach((function(t){var n=t.id,r=e.scene.models[n];r&&r.destroy()})),o&&o.model.destroyed&&i(null);var t=p.map((function(t){return new Promise((function(r){var o=n[j(t.src)]||{},i=o.loader,a=o.dataSource;if(i){var u=e.plugins;(u&&u[i.name]||new i(e,{id:i.name,dataSource:a})).load(t).on("loaded",r)}else r()}))}));Promise.all(t).then((function(){return s(!0)}))}}),[e,t,n,s]),Object(r.useEffect)((function(){if(e&&c){var n=e.scene.models[t[0]&&t[0].id];n&&e.cameraFlight.flyTo(n)}}),[e,c]),c};function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var A=S.map((function(e){return e.label})),L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.eventToPickOn,o=void 0===n?"mouseclicked":n,i=t.loaders,a=Object(r.useState)(null),c=F(a,2),s=c[0],l=c[1],f=Object(r.useState)(null),p=F(f,2),d=p[0],h=p[1],v=V(d,e,i,s,l),y=Object(r.useMemo)((function(){return{ref:function(e){return h(e?new u.Viewer({canvasElement:e}):null)}}}),[h]),b=function(){if(d){var e=d.getSnapshot({format:"png"}),t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download","model-screenshot"),t.click()}};return Object(r.useEffect)((function(){return d&&P(d,o,l),function(){d&&(l(null),d.destroy())}}),[d]),{viewerCanvasProps:y,takeScreenshot:b,setCameraPreset:x(d,v),pickedEntityID:s?s.id:"",faces:A}};n.d(t,"GLTFViewer",(function(){return w})),n.d(t,"XKTViewer",(function(){return k})),n.d(t,"useViewer",(function(){return L}))}]);