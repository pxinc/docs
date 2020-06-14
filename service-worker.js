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
    "revision": "c5ba8ac47764826900d14eb4bf269273"
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
    "url": "assets/js/app.dfd1974a.js",
    "revision": "c9fb4fd789f750d0675e5fd8a90736ca"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "7553caecbbc1541a78c4b26d8f7b9a77"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "f49eb26f0a76fb0b495d243088723c68"
  },
  {
    "url": "backend/nginx/built-in-variables.html",
    "revision": "7f1f166cce6442d60feb9ab12b440564"
  },
  {
    "url": "backend/nginx/configurin-systemd-service-for-nginx.html",
    "revision": "a15912177603c40864ee27419c721248"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "e28278fae35d593fc04f52764442934c"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "b03e25f1519b8528690fbcd797c84ff5"
  },
  {
    "url": "backend/nginx/install-goaccess.html",
    "revision": "b37ff9fec1127546f9807f56f07eae32"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "f29a147a3a47b227372c16dc7b4bd7f0"
  },
  {
    "url": "backend/nginx/limit-module.html",
    "revision": "d7a6b148eb36da0373f4e0d7eff4f2e2"
  },
  {
    "url": "backend/nginx/location-rules.html",
    "revision": "5a5698119c61870af70b7f35bdb6dc47"
  },
  {
    "url": "backend/nginx/master-slave-nginx.html",
    "revision": "6067de8379e4a85078817c3601874ec3"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "b55b90fb6a6ef1522c979376c410eb2a"
  },
  {
    "url": "backend/nginx/nginx-upstream.html",
    "revision": "e92fa37d673aa027c1b85ee2f661e1a4"
  },
  {
    "url": "backend/nginx/proxy-pass-rules.html",
    "revision": "11d091a99e0d11922e74d156e93e6b41"
  },
  {
    "url": "backend/nginx/referer-module.html",
    "revision": "3088a3ddc41a2235d444e8d38b60900b"
  },
  {
    "url": "backend/nginx/rewrite-rules.html",
    "revision": "b3e4676d888c95063b2f771c8966dd38"
  },
  {
    "url": "backend/nginx/the-difference-between-root-and-alias.html",
    "revision": "18cf1a5b15e03669496fbc5530309bb1"
  },
  {
    "url": "backend/nginx/upgrade-http-to-https.html",
    "revision": "f2afc74a2c09e1ee14ad193ce1f590df"
  },
  {
    "url": "backend/nginx/websocket-proxy.html",
    "revision": "6727a6d2934f2c520f86aa877a2f67ba"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "2236f1edc76adc531ddbaf8e3048e9aa"
  },
  {
    "url": "backend/nodejs/install-nodejs.html",
    "revision": "c76ddbd51058a346f69b48d40e46baab"
  },
  {
    "url": "backend/nodejs/npm-version.html",
    "revision": "74dc2d45ca7e0329e02bfdc7e64c7d5e"
  },
  {
    "url": "backend/nodejs/npx.html",
    "revision": "a2ce4fe88a63b0259cbd20e046211538"
  },
  {
    "url": "base/algorithm/index.html",
    "revision": "eeb267d0bcd6b979c3250690a7ca2e64"
  },
  {
    "url": "base/design-pattern/index.html",
    "revision": "9afefd7de77b6b0b5849a3fc40065a64"
  },
  {
    "url": "base/interview/javascript-value-range.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "base/regexp/index.html",
    "revision": "33cdeeddc5fdf35116af788fc8fd90de"
  },
  {
    "url": "bookmark/bookmark-scripts.gif",
    "revision": "b2a54dfaadc2464d22fc6909c7206e09"
  },
  {
    "url": "frontend/javascript/index.html",
    "revision": "31bf4d714e87bad200f104b323ec215b"
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
    "revision": "b89d8d2721132ac8df5653491613ddd9"
  },
  {
    "url": "frontend/utils/index.html",
    "revision": "2d306e9f9a62e906db00991b5b822203"
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
    "revision": "c7284a439185f21675e6c40e13928b41"
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
    "revision": "adb1584db2e8eb3784123ed7568f6d92"
  },
  {
    "url": "tools/chrome/edit-file-with-workspaces.html",
    "revision": "85731dcff88247cca7a4c4e52c2131f7"
  },
  {
    "url": "tools/chrome/index.html",
    "revision": "8636364009188ae8ac1ba647917fc331"
  },
  {
    "url": "tools/chrome/user-friendly-settings.html",
    "revision": "dc15654a3a2133f54e53ed6b3a5ddd2d"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "a0ba2a94b8ba6e21c73f06b56d9f0809"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "03a6303b2fdb6d0835cf1815bca31098"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "f94351779c7d95ae7a5175f0b89fe8cf"
  },
  {
    "url": "tools/git/git-flight-rules.html",
    "revision": "b841b900f50a03ac53d3040a18416477"
  },
  {
    "url": "tools/git/git-proxy.html",
    "revision": "a43a16db65889b9a362560b6b7a553cb"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "d6acdb7755be864fbbb476b733c47d5d"
  },
  {
    "url": "tools/git/index.html",
    "revision": "a699fa3dc3a6c2ec5ea99ecce0ac5070"
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
