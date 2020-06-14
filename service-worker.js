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
    "revision": "a91e3f16af490329ad3e66a839ea0bf7"
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
    "url": "assets/js/16.bef4730f.js",
    "revision": "8a73202bea05c24f0834dfda914ead7b"
  },
  {
    "url": "assets/js/17.c3f02a69.js",
    "revision": "03a1130345632c46320add538124e0c1"
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
    "url": "assets/js/31.61b4c6d2.js",
    "revision": "6e6c78bfcf861341d75de71779d20089"
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
    "url": "assets/js/app.d0c5f19d.js",
    "revision": "7fa11bca3c7ed28c10427f170cbeeb94"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "43924d0c1b4e8d45ab6443d154fa968f"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "f956cc2723052c0427c8f06fb3674901"
  },
  {
    "url": "backend/nginx/built-in-variables.html",
    "revision": "29e088d95fb91c478d17dc5be3f4b646"
  },
  {
    "url": "backend/nginx/configurin-systemd-service-for-nginx.html",
    "revision": "64dc540cf03c04bcc924ef2e0075a8ed"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "12c805b5cf3725bc993046e6f8145108"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "31d0146c309ec5511e9f2fc402f1bd96"
  },
  {
    "url": "backend/nginx/install-goaccess.html",
    "revision": "d5a7d295b0b921976cb6986b566a5705"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "1f0f5a9726180507204a9b710d3f7165"
  },
  {
    "url": "backend/nginx/limit-module.html",
    "revision": "3d5aa6c3dd74ad46be7faee888468bc7"
  },
  {
    "url": "backend/nginx/location-rules.html",
    "revision": "010674bcf1ffc76febd3ddd9ef94c893"
  },
  {
    "url": "backend/nginx/master-slave-nginx.html",
    "revision": "2fca9e6b2a8fae085175315605e3deb9"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "0a603a0b11b35dc2ca226274e026d90e"
  },
  {
    "url": "backend/nginx/nginx-upstream.html",
    "revision": "03c65bef8b72f4be13ae0f962a808c60"
  },
  {
    "url": "backend/nginx/proxy-pass-rules.html",
    "revision": "34bce7468fb3b0c54eebf18965a632f6"
  },
  {
    "url": "backend/nginx/referer-module.html",
    "revision": "0e9c5678c53df41051380bd6828869c9"
  },
  {
    "url": "backend/nginx/rewrite-rules.html",
    "revision": "36986cd76a193bf7f00611a1d526208d"
  },
  {
    "url": "backend/nginx/the-difference-between-root-and-alias.html",
    "revision": "5e036528468e788aad7823120208c5d6"
  },
  {
    "url": "backend/nginx/upgrade-http-to-https.html",
    "revision": "bec2d23d3d56d699ff2e435c1cb4d947"
  },
  {
    "url": "backend/nginx/websocket-proxy.html",
    "revision": "be81f77f6c8e4ceff9b21ddb8fe186f0"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "da05055081eecf2508843048437204ba"
  },
  {
    "url": "backend/nodejs/install-nodejs.html",
    "revision": "6cf8e817223f5a74e021438e35c7c711"
  },
  {
    "url": "backend/nodejs/npm-version.html",
    "revision": "c8fb9ea8d2bc97a2622e9f35bcff42cd"
  },
  {
    "url": "backend/nodejs/npx.html",
    "revision": "137e0c9e412abdd8ff13f257a55612c4"
  },
  {
    "url": "base/algorithm/index.html",
    "revision": "f22f2c924c3f65eed83b4b191249b83f"
  },
  {
    "url": "base/design-pattern/index.html",
    "revision": "8367c381f035a904ca9ae2cb9834c13c"
  },
  {
    "url": "base/index.html",
    "revision": "4bc554330d0ca0a09b9971bea955f8a1"
  },
  {
    "url": "base/interview/javascript-value-range.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "base/regexp/index.html",
    "revision": "a7332edc8b60dfd575b6941d99ed2ced"
  },
  {
    "url": "bookmark/bookmark-scripts.gif",
    "revision": "b2a54dfaadc2464d22fc6909c7206e09"
  },
  {
    "url": "frontend/javascript/index.html",
    "revision": "46fb05ffddaeafdb3766766a4cde6f19"
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
    "revision": "11392c40c76a0c28dc43921638257a50"
  },
  {
    "url": "frontend/utils/index.html",
    "revision": "14b2f2c0767add601b8290765c01839e"
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
    "revision": "1752af7614cb9c99b36e2ac1c10659b6"
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
    "revision": "f3f9fad9caf6095a0065e261cfe5b759"
  },
  {
    "url": "tools/chrome/edit-file-with-workspaces.html",
    "revision": "791c1f745db4e55641a3e780dde09ba6"
  },
  {
    "url": "tools/chrome/index.html",
    "revision": "ea89dad3b552d9ccb325e1d36fa83a78"
  },
  {
    "url": "tools/chrome/user-friendly-settings.html",
    "revision": "e1d56fe86f8fbfaba3e3a65d7e085bcf"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "e434ff35a3b2fd0450af9f65e0493115"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "4fa68daf11840b8f3af5a1272ca0eb2d"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "fda3510fe4f6f0352b95731ac253485e"
  },
  {
    "url": "tools/git/git-flight-rules.html",
    "revision": "9562b480db9bb42f3d370dc79d4be850"
  },
  {
    "url": "tools/git/git-proxy.html",
    "revision": "4875b7a7f6b34babaec2d68e277e05e1"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "05cd5d852992643e5f7419b81e228187"
  },
  {
    "url": "tools/git/index.html",
    "revision": "bc08c1cfde097a1a7fa97f3af21f9d5a"
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
