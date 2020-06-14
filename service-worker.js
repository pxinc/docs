/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "89862d657fff4cdb2bc4fa526e3dedbf"
  },
  {
    "url": "app.png",
    "revision": "d347c8cba560dafd34bbe36e24ece64a"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "d347c8cba560dafd34bbe36e24ece64a"
  },
  {
    "url": "assets/css/0.styles.6012f666.css",
    "revision": "ce6fb8fc13f2c6c3bc6074162870b6d3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.20469f17.js",
    "revision": "8e8a45919f80f338bdd9a56ccb49d6d3"
  },
  {
    "url": "assets/js/11.42d55902.js",
    "revision": "cb606bcb42dabc2d4ebfc38a175af828"
  },
  {
    "url": "assets/js/12.5d9d1e5f.js",
    "revision": "fc3827958c8d54b252d7f97e9fd38b88"
  },
  {
    "url": "assets/js/13.7ed92c86.js",
    "revision": "1f92a73691432eca54e6f67f712ef140"
  },
  {
    "url": "assets/js/14.cb96ffcc.js",
    "revision": "809f52052c77f057726740fd3e6c3919"
  },
  {
    "url": "assets/js/15.d44d7f44.js",
    "revision": "4f049b0d4044b236e5685010f8331881"
  },
  {
    "url": "assets/js/16.6774f4f3.js",
    "revision": "ede30364370ec1d5558d01faa5f956ee"
  },
  {
    "url": "assets/js/17.ffef91f8.js",
    "revision": "2fd70aef32dade6c1f60f2db80a4ac9e"
  },
  {
    "url": "assets/js/18.fc6c03a0.js",
    "revision": "2bc575cbe8ce6e1b6090b6356216b912"
  },
  {
    "url": "assets/js/19.920babae.js",
    "revision": "634e81c2f8addf2c28c600cfef00bdbf"
  },
  {
    "url": "assets/js/2.68982094.js",
    "revision": "8788af2b899c47988771ff5515dacc91"
  },
  {
    "url": "assets/js/20.b966094b.js",
    "revision": "48c29dd8ecba87907ff8be889bd8b204"
  },
  {
    "url": "assets/js/21.2d59e2aa.js",
    "revision": "0fc5465d6a841b6747286efc893c90b7"
  },
  {
    "url": "assets/js/22.7c1ecb27.js",
    "revision": "ebc6f9db1831fb6fc65dc965925fa1dd"
  },
  {
    "url": "assets/js/23.f90cef51.js",
    "revision": "d08e2664e633b2220172267d373312f1"
  },
  {
    "url": "assets/js/24.0e996068.js",
    "revision": "cd264aafbd23145c2da2984e073f0950"
  },
  {
    "url": "assets/js/25.885bf93f.js",
    "revision": "2140a3015df02f4519aeb59f6335cc30"
  },
  {
    "url": "assets/js/26.b7769f03.js",
    "revision": "4f8a2c5a261779eda9fcf4fd4d9707f4"
  },
  {
    "url": "assets/js/27.594f4db0.js",
    "revision": "2c43a0627c93cb1c8b6f27927a615419"
  },
  {
    "url": "assets/js/28.e89f7d39.js",
    "revision": "be9490ff24e5d63731ac6ed689775685"
  },
  {
    "url": "assets/js/29.437b031c.js",
    "revision": "814cf8de9b038454b8e1541767f35beb"
  },
  {
    "url": "assets/js/3.a2178a07.js",
    "revision": "d28119e0ef867a1bd7644b874a6266c4"
  },
  {
    "url": "assets/js/30.ad69fb52.js",
    "revision": "01fb6375ebfa3f6e3c12f8f4ddcea219"
  },
  {
    "url": "assets/js/31.04370349.js",
    "revision": "f13804180a0f6ecd649e58d7153d5005"
  },
  {
    "url": "assets/js/32.1fa1dec9.js",
    "revision": "811d24fd62d0575a0fa913786e1f7e95"
  },
  {
    "url": "assets/js/33.6753dae4.js",
    "revision": "b1ffa54d4849d535a4db15da9d4f6b5b"
  },
  {
    "url": "assets/js/34.74b11dd2.js",
    "revision": "714ef833713928ee648a7b049a8e1c25"
  },
  {
    "url": "assets/js/35.e6f0886b.js",
    "revision": "b7ca1b6aa5d4042d9403fe1d30a7d80c"
  },
  {
    "url": "assets/js/36.fd9b671b.js",
    "revision": "aae31229d8ae36372c4520a525956eb2"
  },
  {
    "url": "assets/js/37.3f8ed6e0.js",
    "revision": "412ad50aec102b847fac5db311d2f6b6"
  },
  {
    "url": "assets/js/38.f7df68e6.js",
    "revision": "d30d144c7cebe5ad194c3139597a21a7"
  },
  {
    "url": "assets/js/39.9f7a9dbe.js",
    "revision": "863a412d2a9322d7c7b706ac6eb3f2de"
  },
  {
    "url": "assets/js/4.5a7ceee5.js",
    "revision": "03c84d3466f0c7127eaad5cfb5e09073"
  },
  {
    "url": "assets/js/40.7af4b1df.js",
    "revision": "1e795d21dc5585e1d93a4b96c14415ad"
  },
  {
    "url": "assets/js/41.8b8a1ab1.js",
    "revision": "cf4c372c396899a41764f5c99cb9b9a6"
  },
  {
    "url": "assets/js/42.e6b6f116.js",
    "revision": "ee5488e13f42ca551b7a1a9c79405c3d"
  },
  {
    "url": "assets/js/43.fafecca8.js",
    "revision": "a6fe989761c24b073afa2496ad2208e0"
  },
  {
    "url": "assets/js/44.2dc7024e.js",
    "revision": "be3a46f264106580244b8c5f69dedba7"
  },
  {
    "url": "assets/js/45.61534160.js",
    "revision": "ebe00df1ffae7717e2af75d4068aa592"
  },
  {
    "url": "assets/js/46.3a2b0504.js",
    "revision": "3234af8022935c6d581936ad506eb549"
  },
  {
    "url": "assets/js/47.a7b82c08.js",
    "revision": "f85278a5db84ab9aa9cda2683e7188ec"
  },
  {
    "url": "assets/js/48.98479877.js",
    "revision": "26de9191e45e1557d10b0ed21659c192"
  },
  {
    "url": "assets/js/5.24557e6b.js",
    "revision": "3a88cb670fc8ff91980a9ce0bd7f6ceb"
  },
  {
    "url": "assets/js/6.cc76533c.js",
    "revision": "690076d7f009d8b8fae3ac60c692a8a4"
  },
  {
    "url": "assets/js/7.4120bd53.js",
    "revision": "db916931f457729702643b28775207a8"
  },
  {
    "url": "assets/js/8.752714b0.js",
    "revision": "2c3eae3f2b3fd3211b346760b2a70a41"
  },
  {
    "url": "assets/js/9.361f7bad.js",
    "revision": "928b7ac16c1f034a15bdd71c30a59d7b"
  },
  {
    "url": "assets/js/app.df035d9e.js",
    "revision": "750e8e1f8df1c4d9be9bdced048fbcae"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "b9b87b64d0c01ec7fe8ec4fe7b790fcb"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "0e197a1ef610fb2175a3c16d1b0c7322"
  },
  {
    "url": "backend/nginx/built-in-variables.html",
    "revision": "08378998e1c126c1a17ec12aede2f8a4"
  },
  {
    "url": "backend/nginx/configurin-systemd-service-for-nginx.html",
    "revision": "6d0d1dac12b6abf0acf6e3fd0b756a0d"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "499eaaad96ff6a68245e953b8e6f086d"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "60790b7ae9b348b3e377d69345e24b66"
  },
  {
    "url": "backend/nginx/install-goaccess.html",
    "revision": "a4616dc6dfba22a2ad28bfd2a81a7938"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "63934b4be5263b274bce6c30ae7ea70b"
  },
  {
    "url": "backend/nginx/limit-module.html",
    "revision": "98bb97bd2f32f50a4d06b5238dc955ef"
  },
  {
    "url": "backend/nginx/location-rules.html",
    "revision": "1c23d81892242b59a7f78471842b2da5"
  },
  {
    "url": "backend/nginx/master-slave-nginx.html",
    "revision": "665c67bf0167c0f3c26b607c721c374e"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "bf6c16811a0d9fbb109b99bd92c356ab"
  },
  {
    "url": "backend/nginx/nginx-upstream.html",
    "revision": "22ee293469886c3d86ed0eabba67717b"
  },
  {
    "url": "backend/nginx/proxy-pass-rules.html",
    "revision": "a6d6c4222528d71542c5218053e0bb0f"
  },
  {
    "url": "backend/nginx/referer-module.html",
    "revision": "5e52a0b2a39df2abdc5355d01a6f0cf9"
  },
  {
    "url": "backend/nginx/rewrite-rules.html",
    "revision": "ea56953f5fb548cc172e8ab936426c87"
  },
  {
    "url": "backend/nginx/the-difference-between-root-and-alias.html",
    "revision": "b68621f3641e6bb10480e3bd134d19fc"
  },
  {
    "url": "backend/nginx/upgrade-http-to-https.html",
    "revision": "c8a00c91a8321e6d1eaaa083c2a496ae"
  },
  {
    "url": "backend/nginx/websocket-proxy.html",
    "revision": "d370efa0ba34db9cbf5607d8035f94e4"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "112f6cd5057fcf4abc49cd0878b67532"
  },
  {
    "url": "backend/nodejs/install-nodejs.html",
    "revision": "5159ebc02b9076221105ac1febfa139a"
  },
  {
    "url": "backend/nodejs/npm-version.html",
    "revision": "46a0b9363707b77d64741247d195b403"
  },
  {
    "url": "backend/nodejs/npx.html",
    "revision": "4b9bb179539219e8823fe6d34d43f2e4"
  },
  {
    "url": "base/algorithm/index.html",
    "revision": "954961b7efe0dbf34f01e9b0778e54e5"
  },
  {
    "url": "base/design-pattern/index.html",
    "revision": "48a29f9155b1006f74d1353272efdd39"
  },
  {
    "url": "base/index.html",
    "revision": "b3200cc0a434afd42e0ecf7a9f3cfa51"
  },
  {
    "url": "base/interview/javascript-value-range.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "base/regexp/index.html",
    "revision": "960e221f6f7b8d95006c5dd1f1004224"
  },
  {
    "url": "bookmark/bookmark-scripts.gif",
    "revision": "b2a54dfaadc2464d22fc6909c7206e09"
  },
  {
    "url": "frontend/javascript/index.html",
    "revision": "aea5d3e52ec4c4afb81f97be51a0ba76"
  },
  {
    "url": "frontend/javascript/prototype-chains-function.jpg",
    "revision": "8eedf7b0b7a667ee145161d4a53f23a9"
  },
  {
    "url": "frontend/javascript/prototype-chains.jpg",
    "revision": "eaeeff3482a626079a774577eff9aeec"
  },
  {
    "url": "frontend/tricks/index.html",
    "revision": "1acdb665c7679f9a4ef4b805c8885e9b"
  },
  {
    "url": "frontend/utils/index.html",
    "revision": "3252a0ba6a0686c078e5ffe310740705"
  },
  {
    "url": "git/git_lifecycle.png",
    "revision": "b65dc1f4245a9a1230e78bac21f5ee6f"
  },
  {
    "url": "git/github-add-ssh-key.png",
    "revision": "9f897b5e1f906c6f540d90791c0492ac"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "1a56c0ee82cbcc4ab95181526f6c7889"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "1a56c0ee82cbcc4ab95181526f6c7889"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "1a56c0ee82cbcc4ab95181526f6c7889"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "1a56c0ee82cbcc4ab95181526f6c7889"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "1a56c0ee82cbcc4ab95181526f6c7889"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "1a56c0ee82cbcc4ab95181526f6c7889"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "1a0cd9784c4a6a7039705c632df7e914"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "d1f29d94dc81f51a22044fc90fa08d93"
  },
  {
    "url": "index.html",
    "revision": "35bf351fde069c862d3797dfa76a006a"
  },
  {
    "url": "os/manjaro/konsole-profile-command.png",
    "revision": "ac1c4dd351d9eba32f589e5dee7407be"
  },
  {
    "url": "os/manjaro/screen-flashing-when-recording.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  },
  {
    "url": "tools/bookmark-scripts/index.html",
    "revision": "99df5a07150ddcb5ea717dd7eb5ef8cd"
  },
  {
    "url": "tools/chrome/edit-file-with-workspaces.html",
    "revision": "f93cd33b2a87bcc79315afe86f74c23d"
  },
  {
    "url": "tools/chrome/index.html",
    "revision": "2122e5e8b847a22a4957dba9b40d827a"
  },
  {
    "url": "tools/chrome/user-friendly-settings.html",
    "revision": "84979ee4d137c5b642f5e85eb5b8d112"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "0290552b88405705657f55cc1bf3690f"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "98fbb463b15c4d0ba909960e6cae57fa"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "2924fa3bc1fd69436c2bcc77c3f0600b"
  },
  {
    "url": "tools/git/git-flight-rules.html",
    "revision": "b9a2a704189ab33efe824c1363d3d5d0"
  },
  {
    "url": "tools/git/git-proxy.html",
    "revision": "d4d01f5a62da3f7cacddb04f471a3a8e"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "3a2c0a4e04ddba6719079057710ac4f8"
  },
  {
    "url": "tools/git/index.html",
    "revision": "60e430c2c3246fbdcc1af84d2d21fcf5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
