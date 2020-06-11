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
    "revision": "c887946f201c6264ba482e0f901f3df6"
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
    "url": "assets/js/30.470f5e6f.js",
    "revision": "8b703d7cf873053266a475ffd62e3d98"
  },
  {
    "url": "assets/js/31.f1a13b70.js",
    "revision": "44a34f918068e2db3c4efb8883333173"
  },
  {
    "url": "assets/js/32.6945fea2.js",
    "revision": "811d24fd62d0575a0fa913786e1f7e95"
  },
  {
    "url": "assets/js/33.157f8e60.js",
    "revision": "fc1ae30a95c508bf071f7ee6d9479b6d"
  },
  {
    "url": "assets/js/34.1978eea8.js",
    "revision": "da85c54ea7438a9d85049dca8d25d8d5"
  },
  {
    "url": "assets/js/35.89b5068b.js",
    "revision": "13393c7cbf25f36e554930016a4f9929"
  },
  {
    "url": "assets/js/36.33a433bf.js",
    "revision": "679c5e94c48838cc846edf3dd898d675"
  },
  {
    "url": "assets/js/37.1d3f444d.js",
    "revision": "8e425baa74fde779830ebd879594e2dd"
  },
  {
    "url": "assets/js/38.6d24d936.js",
    "revision": "4f29f9497ab0956048ca7669a8a39311"
  },
  {
    "url": "assets/js/39.68b7c240.js",
    "revision": "d0940735c2ac1210eb0f5839bd6394dc"
  },
  {
    "url": "assets/js/4.0ae7b29e.js",
    "revision": "57725a2502cb49db21de4be0b4067e75"
  },
  {
    "url": "assets/js/40.0614bc54.js",
    "revision": "941586d176df823fca4cdb15ee8425d7"
  },
  {
    "url": "assets/js/41.363e49fa.js",
    "revision": "698621517adca4b1d45b5fa98e0bdd07"
  },
  {
    "url": "assets/js/42.869fb77b.js",
    "revision": "663709d5c4fb1eff52e58818012ea4e7"
  },
  {
    "url": "assets/js/43.693d42b2.js",
    "revision": "d86c9f3baecf0e2e8eee5d29ee285001"
  },
  {
    "url": "assets/js/44.f93b7692.js",
    "revision": "2c2c3165d6b22a43a17bd8d15cfbc15c"
  },
  {
    "url": "assets/js/45.2d1917bb.js",
    "revision": "5139317d32d4e966939cbd168bebcd3d"
  },
  {
    "url": "assets/js/46.cf90d826.js",
    "revision": "3a0e2a49875002bc482feb871f83cca9"
  },
  {
    "url": "assets/js/47.f0888ea5.js",
    "revision": "4f3db4ddc103e7391675403d9a22a162"
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
    "url": "assets/js/app.0758df53.js",
    "revision": "1a729af049483ddbc7d5950c7eaeaee4"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "761b193856ef316673d64038ec33477c"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "4762eddb699c8875a3953a12f6faff26"
  },
  {
    "url": "backend/nginx/built-in-variables.html",
    "revision": "a25e9fda229cb0869b5fbcd743a734b4"
  },
  {
    "url": "backend/nginx/configurin-systemd-service-for-nginx.html",
    "revision": "26119dee7432ca7b043efcee86afb0c7"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "250b3aa0ee72b9a16b4fb7a807c7c5cd"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "48a1dfc03771bce6b0ce03e38cef1871"
  },
  {
    "url": "backend/nginx/install-goaccess.html",
    "revision": "3b67e8eaf8c96f3b6ce8edae81b55b7f"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "141924755873c4f1e4ff8fbc1643970f"
  },
  {
    "url": "backend/nginx/limit-module.html",
    "revision": "a6a34b9451b8a14c2d91c31690f23673"
  },
  {
    "url": "backend/nginx/location-rules.html",
    "revision": "af0e85554e209b05186a126df423d241"
  },
  {
    "url": "backend/nginx/master-slave-nginx.html",
    "revision": "9915e78112633fac2fc7748df6f45bd0"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "9ceeb08b07ff6b3bb04e87f42925605a"
  },
  {
    "url": "backend/nginx/nginx-upstream.html",
    "revision": "b30ce1a063cd54b8b8b242f2f250a6df"
  },
  {
    "url": "backend/nginx/proxy-pass-rules.html",
    "revision": "9a46dbdc3b17c392fab1764fd18b2215"
  },
  {
    "url": "backend/nginx/referer-module.html",
    "revision": "800b5a651b54cbbb9725285be8c781ee"
  },
  {
    "url": "backend/nginx/rewrite-rules.html",
    "revision": "c74b778f076e72a1198a2f1e4754b4f6"
  },
  {
    "url": "backend/nginx/the-difference-between-root-and-alias.html",
    "revision": "86b63b8838b962d7ab0dfa1247d0cbc4"
  },
  {
    "url": "backend/nginx/upgrade-http-to-https.html",
    "revision": "7ba6552f8446f05d4ecfed1e30348766"
  },
  {
    "url": "backend/nginx/websocket-proxy.html",
    "revision": "2e4889548dde6c4f82a13177e638785c"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "0ef5d17ba3d80609f894ed0726ec0e97"
  },
  {
    "url": "backend/nodejs/install-nodejs.html",
    "revision": "32ccbfd70da790067e83716f10065d17"
  },
  {
    "url": "backend/nodejs/npm-version.html",
    "revision": "42de5e2ca440d7475ddb0ebb2a7890e0"
  },
  {
    "url": "backend/nodejs/npx.html",
    "revision": "c4276d4c622986695336b1db4fdc5e9d"
  },
  {
    "url": "base/algorithm/index.html",
    "revision": "1a00a36352d50bfe092b3dc2d46d50d6"
  },
  {
    "url": "base/design-pattern/index.html",
    "revision": "08af5dd9ad32dfdfe9e5d175c2100f0c"
  },
  {
    "url": "base/interview/javascript-value-range.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "base/regexp/index.html",
    "revision": "0d072cb5b13996a0e94141eb0d56b7e2"
  },
  {
    "url": "bookmark/bookmark-scripts.gif",
    "revision": "b2a54dfaadc2464d22fc6909c7206e09"
  },
  {
    "url": "frontend/javascript/index.html",
    "revision": "360738e215c833c5efaf438986340b1d"
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
    "revision": "44b733a7eef375efde48ac0701afd4a9"
  },
  {
    "url": "frontend/utils/index.html",
    "revision": "2b21545d4e5226f317ba0ab73c614cea"
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
    "revision": "9a726554b3e502e3485c413b7af520e4"
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
    "revision": "11fb465efd20005b3825130df2ef3331"
  },
  {
    "url": "tools/chrome/edit-file-with-workspaces.html",
    "revision": "a540d7cbcff3d0eebd05f8866080f1e5"
  },
  {
    "url": "tools/chrome/index.html",
    "revision": "697c878e10820a6db1bde248a34d83ed"
  },
  {
    "url": "tools/chrome/user-friendly-settings.html",
    "revision": "a179343be103918bf3ccb0367b036aa7"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "7c25fe02ece0846235fa4bed46ed6520"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "8ec79cceb3737aacaf2c73ca0cf52a53"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "8f60538cf9358212ee302d32470458a1"
  },
  {
    "url": "tools/git/git-flight-rules.html",
    "revision": "e20f6033156f000487232ed20549c025"
  },
  {
    "url": "tools/git/git-proxy.html",
    "revision": "541aa5a1f19f3e5127c156cb0cc7456b"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "9bef1e36fe8a0d27faa584c43e340849"
  },
  {
    "url": "tools/git/index.html",
    "revision": "8fb66f052067b09c10358062813c8e42"
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
