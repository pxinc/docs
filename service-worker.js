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
    "revision": "97f03ca5bcc19278d899c77a5a90d68f"
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
    "url": "assets/js/24.718ddd7d.js",
    "revision": "2a28e63eac4228a244a1960e8968572b"
  },
  {
    "url": "assets/js/25.e849f857.js",
    "revision": "f7368ea4b8ed895d032b040b62b25f25"
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
    "url": "assets/js/4.9802bcd2.js",
    "revision": "a8540c3754c0d4907744f17528bd37c3"
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
    "url": "assets/js/45.600bf1e6.js",
    "revision": "13ed7992318028da93a921496ff12342"
  },
  {
    "url": "assets/js/46.935a329b.js",
    "revision": "fcc8653ea7b98cb6859315b75eeb3e61"
  },
  {
    "url": "assets/js/47.18662c72.js",
    "revision": "b4d897a6dc539682954c73bdf740a5b9"
  },
  {
    "url": "assets/js/48.519d3cad.js",
    "revision": "7eaad459d84fc8ccfd863fd92df9415b"
  },
  {
    "url": "assets/js/49.58bae82a.js",
    "revision": "ad3ac4765e29b9700d9bfab2f88a9557"
  },
  {
    "url": "assets/js/5.24557e6b.js",
    "revision": "3a88cb670fc8ff91980a9ce0bd7f6ceb"
  },
  {
    "url": "assets/js/50.618246fa.js",
    "revision": "13d8ffb877985d3fd0ed65f1cb05b560"
  },
  {
    "url": "assets/js/51.ea33bb64.js",
    "revision": "5344b72461402960ad5d214ecc828fe0"
  },
  {
    "url": "assets/js/52.668f3da8.js",
    "revision": "f1e2df33a4e1b6727f5b4fa510994346"
  },
  {
    "url": "assets/js/53.0e39db38.js",
    "revision": "6b568c8aede5e2064b604ed8622661fa"
  },
  {
    "url": "assets/js/54.9730d2ce.js",
    "revision": "6ea1dd93794a50f9c76847224291305c"
  },
  {
    "url": "assets/js/55.3036dd19.js",
    "revision": "696f10e6644245b2e7b6f32abcfb24c3"
  },
  {
    "url": "assets/js/56.934da804.js",
    "revision": "49b20ee9c4c3e43a37e6765f8d4b8c1f"
  },
  {
    "url": "assets/js/57.36105dc2.js",
    "revision": "49b997a30003ce8ce180735e4fb0e42f"
  },
  {
    "url": "assets/js/58.01b6ae71.js",
    "revision": "c0aeb08272beeebda7970b349482c585"
  },
  {
    "url": "assets/js/59.0ae32368.js",
    "revision": "6d56088d2f63509668e12091af90548b"
  },
  {
    "url": "assets/js/6.cc76533c.js",
    "revision": "690076d7f009d8b8fae3ac60c692a8a4"
  },
  {
    "url": "assets/js/60.f7f3d03f.js",
    "revision": "b67925df2e60a7b089fe69de41115c46"
  },
  {
    "url": "assets/js/61.0aa48fb5.js",
    "revision": "5263e1fa9aec00e33ed69b21ef6b9146"
  },
  {
    "url": "assets/js/62.360da5b9.js",
    "revision": "adc6cd7e382ccf2523bb2d1e5c668a27"
  },
  {
    "url": "assets/js/63.ff124efe.js",
    "revision": "9d7f9db92759e6ceb00d59873922681e"
  },
  {
    "url": "assets/js/64.7faaaf72.js",
    "revision": "e80460144a4308ae35d8141eaba425ac"
  },
  {
    "url": "assets/js/65.9912c9f7.js",
    "revision": "205b93423dff4cb4d1965af5184c7c92"
  },
  {
    "url": "assets/js/66.200badcf.js",
    "revision": "3c8691721202932f35fda934f71007cc"
  },
  {
    "url": "assets/js/67.cfc609ff.js",
    "revision": "e6876c907332573445edba935863fe48"
  },
  {
    "url": "assets/js/68.8541bb59.js",
    "revision": "58660dfe222e7b28c1a0c1e21503bbc2"
  },
  {
    "url": "assets/js/69.a965511d.js",
    "revision": "e998b76d7968cc3b85b8cb015c46a94c"
  },
  {
    "url": "assets/js/7.4120bd53.js",
    "revision": "db916931f457729702643b28775207a8"
  },
  {
    "url": "assets/js/70.75a00611.js",
    "revision": "e182417402025ea4e23129903b72026c"
  },
  {
    "url": "assets/js/71.8827ab2b.js",
    "revision": "a599d6076ac10842a44ce4f53ba6d66a"
  },
  {
    "url": "assets/js/72.38a8742a.js",
    "revision": "3f4657b4cda7eb47e293256deba7dca5"
  },
  {
    "url": "assets/js/73.2be6cb64.js",
    "revision": "05665f5c05a63e258f9b57a28dcec23e"
  },
  {
    "url": "assets/js/74.b3c52b58.js",
    "revision": "2750f40ddb6a7ac4605171215f3deacd"
  },
  {
    "url": "assets/js/75.3014bd5e.js",
    "revision": "bc0649c6ed31135f167f66601edeee6c"
  },
  {
    "url": "assets/js/76.bdf5ac65.js",
    "revision": "e1a81769212583a0e7a00b3211ac4efa"
  },
  {
    "url": "assets/js/77.ba054f74.js",
    "revision": "32d85ee24ccb9068684fee3c992eebcc"
  },
  {
    "url": "assets/js/78.abcbec7c.js",
    "revision": "c3bc6b78a3843e0640d168caaa8c9e1e"
  },
  {
    "url": "assets/js/79.4e8295e7.js",
    "revision": "f2e2b5114aa3705ed19705a04c9aa4f6"
  },
  {
    "url": "assets/js/8.752714b0.js",
    "revision": "2c3eae3f2b3fd3211b346760b2a70a41"
  },
  {
    "url": "assets/js/80.8cf9bf7f.js",
    "revision": "6c684652d45005cd03de1fc73e96705b"
  },
  {
    "url": "assets/js/81.26dbfa53.js",
    "revision": "16810c6998979565b4b944dc831f6649"
  },
  {
    "url": "assets/js/82.4b37b42c.js",
    "revision": "b7a569697b1283e7813285419d58c6a4"
  },
  {
    "url": "assets/js/83.ef9359e6.js",
    "revision": "f0d6c6dac3a56b8b393ee1078b0a8b76"
  },
  {
    "url": "assets/js/84.01f9bfa2.js",
    "revision": "80edfb49e5d50ce3a8cda905d0883929"
  },
  {
    "url": "assets/js/9.361f7bad.js",
    "revision": "928b7ac16c1f034a15bdd71c30a59d7b"
  },
  {
    "url": "assets/js/app.c487fe5a.js",
    "revision": "950beb6dd11296ad12844bc3c274ae9d"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "6ded699f354864f9ec3f875b4b0fbcd9"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "494ffd130689ce387de1e5609c49617c"
  },
  {
    "url": "backend/nginx/built-in-variables.html",
    "revision": "eb3f79f7178192f29a01e755bf90775f"
  },
  {
    "url": "backend/nginx/configurin-systemd-service-for-nginx.html",
    "revision": "524e99460abe057d2132790dbbc47681"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "10f4e7283e0e2f8ee0d5b8bbe8841446"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "8d2ea29853b7610bd1a086fd657e98e8"
  },
  {
    "url": "backend/nginx/install-goaccess.html",
    "revision": "2d92cdecdd5a083bb1ae662f6e42a021"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "b209caf2e07758c569983cc49ed1ecc3"
  },
  {
    "url": "backend/nginx/limit-module.html",
    "revision": "dd44d28fb2eafa36a5b45b13bc5bf4a6"
  },
  {
    "url": "backend/nginx/location-rules.html",
    "revision": "70e94a6c77d4113e4dcd8e2bfc72b0b2"
  },
  {
    "url": "backend/nginx/master-slave-nginx.html",
    "revision": "9d76ac5645e254bbde4ba38037d39a10"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "0a7d6f52583ea7e7e14d285637a3fe0a"
  },
  {
    "url": "backend/nginx/nginx-upstream.html",
    "revision": "67ae395cd0bd11756c1abb6f4cf456e6"
  },
  {
    "url": "backend/nginx/proxy-pass-rules.html",
    "revision": "366e8a89e272435b3301a5fc473141a7"
  },
  {
    "url": "backend/nginx/referer-module.html",
    "revision": "3cb9b6f0e53be0c59c0716765bc2b6c1"
  },
  {
    "url": "backend/nginx/rewrite-rules.html",
    "revision": "3ddab9134037a7b1af3ab17570dd2927"
  },
  {
    "url": "backend/nginx/the-difference-between-root-and-alias.html",
    "revision": "033cf6afb2c3657b71bce24bc9ef0522"
  },
  {
    "url": "backend/nginx/upgrade-http-to-https.html",
    "revision": "9e2475e5cc74404b4282cc34aafb9507"
  },
  {
    "url": "backend/nginx/websocket-proxy.html",
    "revision": "ebf494498d282a748e476ceec4d1cac3"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "fcb631fc85b39a6de9e7ad1801273951"
  },
  {
    "url": "backend/nodejs/install-nodejs.html",
    "revision": "95fd3bce2af192406be6928eecaa7d98"
  },
  {
    "url": "backend/nodejs/npm-version.html",
    "revision": "0ef467b656a981b1399145bb7f139ac9"
  },
  {
    "url": "backend/nodejs/npx.html",
    "revision": "e51ebd1e9a5eb6d7d8a6af8a88ac9c73"
  },
  {
    "url": "base/algorithm/index.html",
    "revision": "4f019637a910a5a826d26a8169c1f525"
  },
  {
    "url": "base/design-pattern/index.html",
    "revision": "fbc227543a502776a4fc572f714ca547"
  },
  {
    "url": "base/interview/javascript-value-range.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "base/regexp/index.html",
    "revision": "eb471c3d0509af33386d246120e1b02a"
  },
  {
    "url": "bookmark/bookmark-scripts.gif",
    "revision": "b2a54dfaadc2464d22fc6909c7206e09"
  },
  {
    "url": "frontend/javascript/array-accessor-methods.html",
    "revision": "f6178e21a9e8e0e0d903993d44fd6262"
  },
  {
    "url": "frontend/javascript/array-iteration-methods.html",
    "revision": "2976e07e67840dd1d3d9222d774b89e6"
  },
  {
    "url": "frontend/javascript/array-mutator-methods.html",
    "revision": "243d444abfd555ca80533a663ad58d82"
  },
  {
    "url": "frontend/javascript/array.html",
    "revision": "817de42158bb17067eb9b3e1ac26c284"
  },
  {
    "url": "frontend/javascript/arrow-function.html",
    "revision": "5b04b2bd4a1485b074890d17b0694b38"
  },
  {
    "url": "frontend/javascript/can-not-read-property-of-undefined-or-null.html",
    "revision": "9f5ef35516d8d12cd41436cab92055eb"
  },
  {
    "url": "frontend/javascript/error.html",
    "revision": "4addbfef279eb0084a015ec27ff0c5c6"
  },
  {
    "url": "frontend/javascript/function-methods.html",
    "revision": "ad64a62d38594d8d865f81e7a66e729d"
  },
  {
    "url": "frontend/javascript/implicit-coercion.html",
    "revision": "1f92307ea7cb1750af7a98fdd25e1f45"
  },
  {
    "url": "frontend/javascript/index.html",
    "revision": "9724101bc558389b8adc690d0d0c65f5"
  },
  {
    "url": "frontend/javascript/invocation-expression.html",
    "revision": "1d451409f6188ba8d8b61e9850413ccb"
  },
  {
    "url": "frontend/javascript/invoking-functions.html",
    "revision": "73ab9a97112516fe87c0ae03e70b63f8"
  },
  {
    "url": "frontend/javascript/object-constructor-methods-freeze.html",
    "revision": "a77b57c264a8f907d903c98e1863fef0"
  },
  {
    "url": "frontend/javascript/object-constructor-methods-property.html",
    "revision": "c33fe37dcd9a76d8440001791f286935"
  },
  {
    "url": "frontend/javascript/object-constructor-methods.html",
    "revision": "7904d05bd0314d3aff53feda6a33e52e"
  },
  {
    "url": "frontend/javascript/object-instance-methods.html",
    "revision": "f1008ecf94890363e50c771e3dbd84e0"
  },
  {
    "url": "frontend/javascript/prototype-chain.html",
    "revision": "4a042af43dc0653906f28ddda4c5792a"
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
    "revision": "22727e3efc27252e99e1e17dfc925f5b"
  },
  {
    "url": "frontend/javascript/scope-and-closures.html",
    "revision": "b0ea65a217fec8e1502e09d8af64a4ce"
  },
  {
    "url": "frontend/javascript/statements-and-expressions.html",
    "revision": "751aea0b1f9e17b21f9a74d64b39e946"
  },
  {
    "url": "frontend/javascript/string-concat.html",
    "revision": "dfd6b21ddb8925f85add8be6b76bdec4"
  },
  {
    "url": "frontend/javascript/string-format.html",
    "revision": "ccdb85b300c160fccfac54d5a7eb8481"
  },
  {
    "url": "frontend/javascript/string-query.html",
    "revision": "2c85265c0928465cb7cabfb911d11e8c"
  },
  {
    "url": "frontend/javascript/string-regexp.html",
    "revision": "95556ebb7d50cb86e5448ae3b91cc0c1"
  },
  {
    "url": "frontend/javascript/string-substring.html",
    "revision": "ecaec4a1eeb7bc8be38db4ab49311806"
  },
  {
    "url": "frontend/javascript/this-identifier.html",
    "revision": "1d23b11d35f1c63ae41f41facdc48aa8"
  },
  {
    "url": "frontend/tricks/index.html",
    "revision": "3a26a8103b9aaf24de3ea8db3d914fa6"
  },
  {
    "url": "frontend/utils/code-adapter.html",
    "revision": "b85d57e08f1cfa02ee962ac7a1f1005e"
  },
  {
    "url": "frontend/utils/code-archived.html",
    "revision": "96f3099a423db147b163c0062bf44661"
  },
  {
    "url": "frontend/utils/code-array.html",
    "revision": "4a9ccedf828cbe759fc6c57867107e12"
  },
  {
    "url": "frontend/utils/code-browser.html",
    "revision": "fb997a9f9f6b254c8cab6c882773537b"
  },
  {
    "url": "frontend/utils/code-date.html",
    "revision": "ed85ee6b02c33b9210ad250779c0e090"
  },
  {
    "url": "frontend/utils/code-function.html",
    "revision": "3edbb9488f3d34c98dd0bb355da3ff43"
  },
  {
    "url": "frontend/utils/code-math.html",
    "revision": "452ce4f4ea0d1f12601280693f554647"
  },
  {
    "url": "frontend/utils/code-node.html",
    "revision": "5afe22b01ba9c928a601cf675ec979ac"
  },
  {
    "url": "frontend/utils/code-object.html",
    "revision": "b30cb499a2a0f2e88ffe1ce180ac8a43"
  },
  {
    "url": "frontend/utils/code-string.html",
    "revision": "855ff24bc07665a774dd8a9a0b2ee9c5"
  },
  {
    "url": "frontend/utils/code-type.html",
    "revision": "6a213fbe0b8966e621782f2b2cf645a5"
  },
  {
    "url": "frontend/utils/code-utility.html",
    "revision": "96ee39565eb1c28facd81c5b2410745e"
  },
  {
    "url": "frontend/utils/index.html",
    "revision": "0dbeec1c22782b7e46f769b0b2f5775b"
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
    "revision": "126e5e2e079b7f6dd932c8207721463e"
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
    "revision": "97661b1f988036dfd3d52f40180d3484"
  },
  {
    "url": "tools/chrome/edit-file-with-workspaces.html",
    "revision": "ad1b5a30ce40d8d1c792c84921994bc6"
  },
  {
    "url": "tools/chrome/index.html",
    "revision": "42df3524b1b710fb27d9548a6c159681"
  },
  {
    "url": "tools/chrome/user-friendly-settings.html",
    "revision": "3ef74644ad4672fb14063a4cce50289e"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "295ef5e4a7196fea94d372ea099c678d"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "28ff3474f76f80a13d40be256c1d3238"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "8c56b351fd673f08f98ef3bf34d2fa1f"
  },
  {
    "url": "tools/git/git-flight-rules.html",
    "revision": "c4eded770b7c8685be0988d1395f15e6"
  },
  {
    "url": "tools/git/git-proxy.html",
    "revision": "b15dc3de6bed54d600a202ae86673fd2"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "2b6d81148f89dd11620ebf3af0f67aaa"
  },
  {
    "url": "tools/git/index.html",
    "revision": "3e9866432c17c4459c08bf119fa0e180"
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
