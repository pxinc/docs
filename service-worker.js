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
    "revision": "6066e16017b2962c19e111b91fe6ac4f"
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
    "url": "assets/js/34.9d04ee50.js",
    "revision": "1d413453eee4b3fdc89649d2488d02fd"
  },
  {
    "url": "assets/js/35.6c1626e4.js",
    "revision": "de34a81d7a5bd47e52d3d0d10f515b57"
  },
  {
    "url": "assets/js/36.5993328a.js",
    "revision": "104fa8910a98381b3a09a996e4275019"
  },
  {
    "url": "assets/js/37.bce96ef5.js",
    "revision": "e4e1feb80d13f642eb46c0641508412c"
  },
  {
    "url": "assets/js/38.866c05c2.js",
    "revision": "6fc3529b5f4a8e227c7072c571db7dab"
  },
  {
    "url": "assets/js/39.148bc3ec.js",
    "revision": "7ef8e69ebf57c6d7ca9f0602bf3758a9"
  },
  {
    "url": "assets/js/4.29911381.js",
    "revision": "d91ac64678ab1167170c77b2ddaaa3ab"
  },
  {
    "url": "assets/js/40.09439453.js",
    "revision": "5b9a75da917bb272552e8844b184c53d"
  },
  {
    "url": "assets/js/41.e70dcc7c.js",
    "revision": "bd28b2a185651b9d63d7af0630d88afd"
  },
  {
    "url": "assets/js/42.59e7610a.js",
    "revision": "47cbf4c272b499472180e935ba6999c2"
  },
  {
    "url": "assets/js/43.16ba0148.js",
    "revision": "a2bebc14d058de32763b9562a7895a92"
  },
  {
    "url": "assets/js/44.b3d71724.js",
    "revision": "6e6b30d3ddaa9ba5cc64cf69ab1dc409"
  },
  {
    "url": "assets/js/45.966a36c5.js",
    "revision": "523c248b68acd4ed97f052c4cf0549c1"
  },
  {
    "url": "assets/js/46.b6979725.js",
    "revision": "f31b1e1c17e07ef7ba661f5472e08884"
  },
  {
    "url": "assets/js/47.077e0bd1.js",
    "revision": "b82e79420d45fb906e11886cde035ff8"
  },
  {
    "url": "assets/js/48.dc214205.js",
    "revision": "a4b7a7dec4f798b974ffa3992b99a93b"
  },
  {
    "url": "assets/js/49.0c2d31ab.js",
    "revision": "c7956f3d940ab1c9d9366e49cd7fcd97"
  },
  {
    "url": "assets/js/5.24557e6b.js",
    "revision": "3a88cb670fc8ff91980a9ce0bd7f6ceb"
  },
  {
    "url": "assets/js/50.9618d0d7.js",
    "revision": "76ddf4294fc60f4af6369426a91be840"
  },
  {
    "url": "assets/js/51.16551118.js",
    "revision": "8fb1aa03510b22c7ae7bb66fcc2072a3"
  },
  {
    "url": "assets/js/52.3b45cb55.js",
    "revision": "2effe494631e5492cccbddade6080409"
  },
  {
    "url": "assets/js/53.99ac3490.js",
    "revision": "3979c56f584d2f296abbc5b57180c883"
  },
  {
    "url": "assets/js/54.74934a80.js",
    "revision": "168a53df2acfacb944e4ee68179c5908"
  },
  {
    "url": "assets/js/55.4effb40c.js",
    "revision": "c6421b05eb2420f0015bbb4efd255531"
  },
  {
    "url": "assets/js/56.29f5d370.js",
    "revision": "01e93c02d0e51447dab47efee69f1983"
  },
  {
    "url": "assets/js/57.90c70a00.js",
    "revision": "56320413b312f7e9f5a912c41a332124"
  },
  {
    "url": "assets/js/58.0618b47c.js",
    "revision": "9a134f7f896cddd89e3b9de7483cf9cb"
  },
  {
    "url": "assets/js/59.6e71f9da.js",
    "revision": "fb7a18486620147690cbc17ff4cd0bd0"
  },
  {
    "url": "assets/js/6.cc76533c.js",
    "revision": "690076d7f009d8b8fae3ac60c692a8a4"
  },
  {
    "url": "assets/js/60.6964b7ae.js",
    "revision": "5ff32afd4af3aa84fbc12bc35be5bb1a"
  },
  {
    "url": "assets/js/61.44ba04d4.js",
    "revision": "636e032d04ae8aab0453b8b708b6969e"
  },
  {
    "url": "assets/js/62.2312e3cf.js",
    "revision": "e31fca9a9734fe70d40a4a627a890fdf"
  },
  {
    "url": "assets/js/63.018fd3ba.js",
    "revision": "7aff350a4ea07f3c973b5c50fd48f33c"
  },
  {
    "url": "assets/js/64.ba6c64ad.js",
    "revision": "44fbadbe87aefa504bc99e5451158cf9"
  },
  {
    "url": "assets/js/65.a0f521b6.js",
    "revision": "5ab5d6f1c18aadc759586abdd500029d"
  },
  {
    "url": "assets/js/66.7a8d7ccf.js",
    "revision": "c53b2f8d547025eb774379cf025f4e15"
  },
  {
    "url": "assets/js/67.4f721c45.js",
    "revision": "2ce8dcbd7d1b66f349dd36138c22e877"
  },
  {
    "url": "assets/js/68.1c047f5e.js",
    "revision": "deae889ada749604e264c3236e774de2"
  },
  {
    "url": "assets/js/69.3befebd1.js",
    "revision": "056158d01ca6e97f5191b5b9b98601f1"
  },
  {
    "url": "assets/js/7.4120bd53.js",
    "revision": "db916931f457729702643b28775207a8"
  },
  {
    "url": "assets/js/70.d2e44c4a.js",
    "revision": "8f963dcfe2b111f558e321d8134c5257"
  },
  {
    "url": "assets/js/71.220f6ff8.js",
    "revision": "c3ee9eda4ac2b64ecb4cb8ee600d21be"
  },
  {
    "url": "assets/js/72.8dda44c1.js",
    "revision": "4e75ae862858e8bdcff388362926b4e8"
  },
  {
    "url": "assets/js/73.db3182bd.js",
    "revision": "210d3f1c8ffff8b63c65180ed465f769"
  },
  {
    "url": "assets/js/74.051c1745.js",
    "revision": "ef87fc021020fdafc602ad43a973c1c9"
  },
  {
    "url": "assets/js/75.69d13027.js",
    "revision": "4cede281f0942b4cb4eb3a6f91464262"
  },
  {
    "url": "assets/js/76.928e9d7d.js",
    "revision": "0e3054f9ad89d38aa27de89cb65acd1a"
  },
  {
    "url": "assets/js/77.caa623d8.js",
    "revision": "eb9f073a88dd49f84a529a6c7b0bce0d"
  },
  {
    "url": "assets/js/78.9a8293df.js",
    "revision": "2c458d797aa10a5f7dddb752814e117a"
  },
  {
    "url": "assets/js/79.2229c4fb.js",
    "revision": "544ca3747bfedb1c127c7a18a312f032"
  },
  {
    "url": "assets/js/8.752714b0.js",
    "revision": "2c3eae3f2b3fd3211b346760b2a70a41"
  },
  {
    "url": "assets/js/80.e3afdaa5.js",
    "revision": "bda199e811f93329daf1aa7b99543ee4"
  },
  {
    "url": "assets/js/9.361f7bad.js",
    "revision": "928b7ac16c1f034a15bdd71c30a59d7b"
  },
  {
    "url": "assets/js/app.1991ad34.js",
    "revision": "beb4299e17e1a48b923d4054acff4540"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "4acf86f1e9a9129c367da00a0c231420"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "cdc615242412fd91567eef04f0ac10ce"
  },
  {
    "url": "backend/nginx/built-in-variables.html",
    "revision": "d2e4810797835cdf1ba8814b1b129ed3"
  },
  {
    "url": "backend/nginx/configurin-systemd-service-for-nginx.html",
    "revision": "527fee2be316062f2bc6737d6f3f87b6"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "56d3f0aeebc8fcb6b71f5c2e4ccd003b"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "837bd3d37d1619b89042b9e8af796620"
  },
  {
    "url": "backend/nginx/install-goaccess.html",
    "revision": "b7585d49a7bef07cf64a80423679c2e5"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "1c3f0e0c274844d318dbdc9703a822cc"
  },
  {
    "url": "backend/nginx/limit-module.html",
    "revision": "be75b683e89eccaa38e08d0e027aa8a8"
  },
  {
    "url": "backend/nginx/location-rules.html",
    "revision": "1a1874a85fa30e320a04d87599fb9dbe"
  },
  {
    "url": "backend/nginx/master-slave-nginx.html",
    "revision": "e2693a547bb1ac6c523806f94d8382bb"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "468af71ecd0674c2bab8179c4d482d56"
  },
  {
    "url": "backend/nginx/nginx-upstream.html",
    "revision": "2eb123f00aa66b3a50250a8bc2fac026"
  },
  {
    "url": "backend/nginx/proxy-pass-rules.html",
    "revision": "07c434dfc0729f3ba913d31a86615f25"
  },
  {
    "url": "backend/nginx/referer-module.html",
    "revision": "5abcb20b05212ed929f1ccd4e668d2b3"
  },
  {
    "url": "backend/nginx/rewrite-rules.html",
    "revision": "cd32624df52c5a9a5039b2534ca5cad4"
  },
  {
    "url": "backend/nginx/the-difference-between-root-and-alias.html",
    "revision": "750af37e845d7037a0917ded27d11761"
  },
  {
    "url": "backend/nginx/upgrade-http-to-https.html",
    "revision": "a2274a07a7706abe70a715ad6fc87540"
  },
  {
    "url": "backend/nginx/websocket-proxy.html",
    "revision": "a5295ee7949f71cf88db48441ef75fda"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "675ddaa76922303cca668bf425218dc8"
  },
  {
    "url": "backend/nodejs/install-nodejs.html",
    "revision": "3c94cbc7038ef2cdbf0c04bd53a89796"
  },
  {
    "url": "backend/nodejs/npm-version.html",
    "revision": "a3062dc528afe37319532e4db7cd3512"
  },
  {
    "url": "backend/nodejs/npx.html",
    "revision": "35495e3d6ef332165effc6ff3eb2ee16"
  },
  {
    "url": "base/algorithm/index.html",
    "revision": "00e9b5a77869447e74664e535128040c"
  },
  {
    "url": "base/design-pattern/index.html",
    "revision": "16d9dd83eaea9b19e3825944404ed5b9"
  },
  {
    "url": "base/interview/javascript-value-range.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "base/regexp/index.html",
    "revision": "217eab6f901b8296140b8a0bae6ed16d"
  },
  {
    "url": "bookmark/bookmark-scripts.gif",
    "revision": "b2a54dfaadc2464d22fc6909c7206e09"
  },
  {
    "url": "frontend/javascript/array-accessor-methods.html",
    "revision": "0987f41e86110434cb9e5805e70e0396"
  },
  {
    "url": "frontend/javascript/array-iteration-methods.html",
    "revision": "a0785371f47c1503ae60a54b3d0abaf2"
  },
  {
    "url": "frontend/javascript/array-mutator-methods.html",
    "revision": "8a6fa83bc2cbad6477e6fe8cc0a5492d"
  },
  {
    "url": "frontend/javascript/array.html",
    "revision": "fa4cdc1826aac4a15f19db14be6da4a6"
  },
  {
    "url": "frontend/javascript/arrow-function.html",
    "revision": "12f49a9163df227ed48fbeb897096d1a"
  },
  {
    "url": "frontend/javascript/can-not-read-property-of-undefined-or-null.html",
    "revision": "d43ab7d35d49992b2551f7925504aad0"
  },
  {
    "url": "frontend/javascript/error.html",
    "revision": "3e4255847d2a11bea486be2147875acd"
  },
  {
    "url": "frontend/javascript/function-methods.html",
    "revision": "927f6284ccc68af16fa52f2ac71b4c0a"
  },
  {
    "url": "frontend/javascript/implicit-coercion.html",
    "revision": "84585f20b01b1e4fdedc2aad72ebf736"
  },
  {
    "url": "frontend/javascript/index.html",
    "revision": "0f25e3b6e9c8779cc5b74443e64ccd5d"
  },
  {
    "url": "frontend/javascript/invocation-expression.html",
    "revision": "2d0e0df54be6742baf6eda1ac4828d43"
  },
  {
    "url": "frontend/javascript/invoking-functions.html",
    "revision": "ee5c20d3988fadf4e5aeef1f7803aa34"
  },
  {
    "url": "frontend/javascript/prototype-chain.html",
    "revision": "2563f281406d39c38b1f3977e75e9369"
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
    "url": "frontend/javascript/resolve-function-call-in-jsx.html",
    "revision": "c02fac41da32a3dbe665390c34ff1fc4"
  },
  {
    "url": "frontend/javascript/scope-and-closures.html",
    "revision": "bdfccf77afa2651bff8807edf5becf1e"
  },
  {
    "url": "frontend/javascript/statements-and-expressions.html",
    "revision": "5620aaf9ffeef34b6f3d553e45122d73"
  },
  {
    "url": "frontend/javascript/string-concat.html",
    "revision": "6f7cde149267fbcacb75e2840f736009"
  },
  {
    "url": "frontend/javascript/string-format.html",
    "revision": "5f9929eba9bae4e9979002deee8d0995"
  },
  {
    "url": "frontend/javascript/string-query.html",
    "revision": "098ff2ccf6385bd8ee6b0df6499df032"
  },
  {
    "url": "frontend/javascript/string-regexp.html",
    "revision": "510299b8337c08ce340fe1ba10fa01b3"
  },
  {
    "url": "frontend/javascript/string-substring.html",
    "revision": "b22e797af6563c76ae787c8dbd38c87e"
  },
  {
    "url": "frontend/javascript/this-identifier.html",
    "revision": "6a6110c02c3278b1726ff6b58660cbd6"
  },
  {
    "url": "frontend/tricks/index.html",
    "revision": "53db0d3f8187a56b05479931bfd83c51"
  },
  {
    "url": "frontend/utils/code-adapter.html",
    "revision": "707b09f15fbdda0f90d2f13a62774901"
  },
  {
    "url": "frontend/utils/code-archived.html",
    "revision": "f06a9d507f06a1c4b07f989213db0617"
  },
  {
    "url": "frontend/utils/code-array.html",
    "revision": "b118ff9c4506b89987581f1649f90fde"
  },
  {
    "url": "frontend/utils/code-browser.html",
    "revision": "515e1bbcad7e0d25eb6d5395c205c74f"
  },
  {
    "url": "frontend/utils/code-date.html",
    "revision": "bfb340dda90a8ce424a0459163a2e54f"
  },
  {
    "url": "frontend/utils/code-function.html",
    "revision": "44dd0ed38c852bfd6cfbc542da4d5f4c"
  },
  {
    "url": "frontend/utils/code-math.html",
    "revision": "e3cd432d348bb86c1a5d53e0af8564fb"
  },
  {
    "url": "frontend/utils/code-node.html",
    "revision": "b42dede852a8cad4d4df0c0dd0e6cb96"
  },
  {
    "url": "frontend/utils/code-object.html",
    "revision": "69169e991babc148197544b46ee5ba12"
  },
  {
    "url": "frontend/utils/code-string.html",
    "revision": "16f84953e1d4e59b195a51b3d80ff65b"
  },
  {
    "url": "frontend/utils/code-type.html",
    "revision": "3b73f39d54b5540f5b3fbebdeed1b005"
  },
  {
    "url": "frontend/utils/code-utility.html",
    "revision": "5a7f56560b8e73eb646e1fd19a6b1bc3"
  },
  {
    "url": "frontend/utils/index.html",
    "revision": "989e5bf5f3d168869732d33056b92f81"
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
    "revision": "a3dc2b78f3e5241461f3ea68e749e04c"
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
    "revision": "b3881a031609163850ab73dbd4132027"
  },
  {
    "url": "tools/chrome/edit-file-with-workspaces.html",
    "revision": "42cd6d39deb06d1c9093ebb6559e31cf"
  },
  {
    "url": "tools/chrome/index.html",
    "revision": "5f49aefa61760b8866c07a70df390bbf"
  },
  {
    "url": "tools/chrome/user-friendly-settings.html",
    "revision": "4a0d639af72dee49d8b9c5e041549cb7"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "0b845d2dacb6d2ce1caa17fc8ca7205b"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "3a9abbcce368cfc77beb7964f2d81832"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "2ef649537bdce787e0ccbb3f6bc3e7a1"
  },
  {
    "url": "tools/git/git-flight-rules.html",
    "revision": "3eaab564e2875079a122def6e79eefc5"
  },
  {
    "url": "tools/git/git-proxy.html",
    "revision": "b09a6d4c2b5be91ca2380e3fba9e8e3f"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "517aa4fc22236186dbfb7ff83ee8d098"
  },
  {
    "url": "tools/git/index.html",
    "revision": "17275edde67208ff2e8d16f1ae608f5b"
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
