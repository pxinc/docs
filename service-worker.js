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
    "revision": "92759895c2553a70c7b3462168cda1f2"
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
    "url": "assets/js/31.6134dcac.js",
    "revision": "73ee10786d15adefe171acd76f39a3d7"
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
    "url": "assets/js/app.f3aca0e6.js",
    "revision": "489b7149884bdef0ea9bf4081ff1b468"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "f03aa07c089335a8fb1f22fade319c4f"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "4caf9e293f5c6e41014f67f482f99227"
  },
  {
    "url": "backend/nginx/built-in-variables.html",
    "revision": "2c9c7c7e9899fef0d8d3968c89b361ae"
  },
  {
    "url": "backend/nginx/configurin-systemd-service-for-nginx.html",
    "revision": "4670ede7b08663ee527569feba414b80"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "34510a4e096bffb4dd4440c4eb34535a"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "fd49959c553cd23264fc481751fc4818"
  },
  {
    "url": "backend/nginx/install-goaccess.html",
    "revision": "27cf98b641a1f7f31e3376d9ce465708"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "3b69ae40050072c2cf917f13a32f5b4c"
  },
  {
    "url": "backend/nginx/limit-module.html",
    "revision": "fd1806259aafa038c86d9b94793eb7ec"
  },
  {
    "url": "backend/nginx/location-rules.html",
    "revision": "f3e57eeead6c5dede973167f18b4fd76"
  },
  {
    "url": "backend/nginx/master-slave-nginx.html",
    "revision": "df7eb22afa16ef15dde3152dca9e89f9"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "75400fbdecc79df3c3aafb5e87e37402"
  },
  {
    "url": "backend/nginx/nginx-upstream.html",
    "revision": "ad75c017421775233bd951f69f1543c6"
  },
  {
    "url": "backend/nginx/proxy-pass-rules.html",
    "revision": "8cb6917bd332f272745bf52786199cce"
  },
  {
    "url": "backend/nginx/referer-module.html",
    "revision": "5be65a4fd4d009ac3b12d86189457efa"
  },
  {
    "url": "backend/nginx/rewrite-rules.html",
    "revision": "b73c3d00adfec763399fef6f0187aeba"
  },
  {
    "url": "backend/nginx/the-difference-between-root-and-alias.html",
    "revision": "570ae591632fce3573dc16cca72f854b"
  },
  {
    "url": "backend/nginx/upgrade-http-to-https.html",
    "revision": "e605205e4147248f6a20221b4cee1acc"
  },
  {
    "url": "backend/nginx/websocket-proxy.html",
    "revision": "feb872870fffc8f8944a0932206c0d68"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "0ad6a91fc68b9788f4db6f0c2ce7ac48"
  },
  {
    "url": "backend/nodejs/install-nodejs.html",
    "revision": "b61d212f6305122174113b5f41a96c63"
  },
  {
    "url": "backend/nodejs/npm-version.html",
    "revision": "18891bacb3ecf36676c916adead4c8fe"
  },
  {
    "url": "backend/nodejs/npx.html",
    "revision": "c739195b9e615e5cedcffb60bc9cf0f1"
  },
  {
    "url": "base/algorithm/index.html",
    "revision": "f4022f22141441f6cf0ebf1837f0712e"
  },
  {
    "url": "base/design-pattern/index.html",
    "revision": "de652f5365af83f5d99c8254c93e9387"
  },
  {
    "url": "base/index.html",
    "revision": "3ef83e5153fe6760d318f645d5e8a485"
  },
  {
    "url": "base/interview/javascript-value-range.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "base/regexp/index.html",
    "revision": "71c2f7cd62e993d29098f44bc5648eb8"
  },
  {
    "url": "bookmark/bookmark-scripts.gif",
    "revision": "b2a54dfaadc2464d22fc6909c7206e09"
  },
  {
    "url": "frontend/javascript/index.html",
    "revision": "458466b147236831cb81e78d845d01ce"
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
    "revision": "f6cdf455f5f99be8bc9c6f3de6561dab"
  },
  {
    "url": "frontend/utils/index.html",
    "revision": "c78c46583ed7afe4bd3d5abe2d02c171"
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
    "revision": "3717ee0c16d2aad77fa3bfe2dffb6432"
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
    "revision": "e5ddb5bbabde60786fb57d8f6cec8d80"
  },
  {
    "url": "tools/chrome/edit-file-with-workspaces.html",
    "revision": "2d82130493190a5fd80fcfde53a5cea3"
  },
  {
    "url": "tools/chrome/index.html",
    "revision": "492f5722c3b08e2e31cf8ac5799986ab"
  },
  {
    "url": "tools/chrome/user-friendly-settings.html",
    "revision": "85c54e35705547dd80bbe75410199e02"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "569e9cfedf02fc36a1c13b327b386863"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "111ad8007cbfd3bdf36cbbd85e171845"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "21cec39e8a3a0b2f915480ef1160d271"
  },
  {
    "url": "tools/git/git-flight-rules.html",
    "revision": "bc62d0be6f281eb1d0d8328df7a11b56"
  },
  {
    "url": "tools/git/git-proxy.html",
    "revision": "cf852f913f968f0405372ddab18ee563"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "f5151378c7a77d3058c257309bb9bd1d"
  },
  {
    "url": "tools/git/index.html",
    "revision": "83747a2dc477aa251f99a4e4502f523e"
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
