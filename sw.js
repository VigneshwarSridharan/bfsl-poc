if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,a,c)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const r={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return i;case"module":return r;default:return e(s)}})).then(e=>{const s=c(...e);return i.default||(i.default=s),i})}))}}define("./sw.js",["./workbox-d2987b5d"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"asset-manifest.json",revision:"f5d397c8496870967d1f29d99bc426a8"},{url:"assets/images/android-icon-192x192.png",revision:"a6c90efdadf1956a11c2307222eca1c8"},{url:"assets/images/apple-icon-114x114.png",revision:"ab70bff0d5381baf49028ba76d61c5fa"},{url:"assets/images/apple-icon-120x120.png",revision:"5c50ede937d27a71953082a8dfba654c"},{url:"assets/images/apple-icon-144x144.png",revision:"5cf7362184d766eaf463e4dde53c7231"},{url:"assets/images/apple-icon-152x152.png",revision:"1c43d74c632fc6c18e2de70f294a22c6"},{url:"assets/images/apple-icon-180x180.png",revision:"0bc7a4a8bd474afd9d31e03630f82d90"},{url:"assets/images/apple-icon-57x57.png",revision:"100456fde54eae2cb40c0ce6b4cb1898"},{url:"assets/images/apple-icon-60x60.png",revision:"a5477f9ee43440859e01eef809b8ebad"},{url:"assets/images/apple-icon-72x72.png",revision:"a2f222d0b075ef066ac64d7790d7e77d"},{url:"assets/images/apple-icon-76x76.png",revision:"c5e93ce8a50755589a7a6ef4456b4f60"},{url:"assets/images/favicon-16x16.png",revision:"16f008a7d2dfdd893bda3e7cca5093c2"},{url:"assets/images/favicon-32x32.png",revision:"5089098c0649d681d4f97780ceabd0d4"},{url:"assets/images/favicon-96x96.png",revision:"1237a1d08aa75ce0b5d65ba02dc38383"},{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"index.html",revision:"1dbbe5ae9978777ee5d01cdecd97723f"},{url:"logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"manifest.json",revision:"31b16a3669db5fd06b7023b108f0fedd"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"service-worket.js",revision:"8476ae3d4b3c7e593ae4668039877cf1"},{url:"static/css/main.8c8b27cf.chunk.css",revision:"0d278609d8e024a479be8c9fe7614d85"},{url:"static/js/2.c2689277.chunk.js",revision:"f378363899782115d7066895956bcdd4"},{url:"static/js/2.c2689277.chunk.js.LICENSE.txt",revision:"b8c0ba92a91271ef423bb542e8d829c2"},{url:"static/js/3.248f4cb2.chunk.js",revision:"9c86f0c94c7ed25dc9b34bb1972771ee"},{url:"static/js/main.245d044f.chunk.js",revision:"1f0ec143bd82d6cbe0c04079f7bf9d70"},{url:"static/js/runtime-main.31762715.js",revision:"a9d346b3d2352589f59024efda2679b1"},{url:"static/media/logo.103b5fa1.svg",revision:"5d5d9eefa31e5e13a6610d9fa7a283bb"}],{})}));
//# sourceMappingURL=sw.js.map