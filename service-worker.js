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
    "revision": "e26fa3c7f675f95539bac6d49b2011a4"
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
    "url": "assets/css/0.styles.294cdfdc.css",
    "revision": "04a1b12a1adac282af30a751eb75aaee"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b6367a5e.js",
    "revision": "885bc06b98463e7756f6ea6ab75b6479"
  },
  {
    "url": "assets/js/11.084b06ea.js",
    "revision": "927ba26c50ac8d438a2bb5310e532697"
  },
  {
    "url": "assets/js/12.381a9540.js",
    "revision": "68ba705ccb3a6d11aa58fdded8e4342d"
  },
  {
    "url": "assets/js/13.73448c6c.js",
    "revision": "6242546498042df727c672f3ce8fd6f1"
  },
  {
    "url": "assets/js/14.fb064a5a.js",
    "revision": "f4d64a1b77b3368a19666fae5a7f147e"
  },
  {
    "url": "assets/js/15.4accb529.js",
    "revision": "4e28deeccb4b54048649e0c76e12a109"
  },
  {
    "url": "assets/js/16.d85e04c8.js",
    "revision": "ce6c7d910ea39cbbe71f436c2aadaf7c"
  },
  {
    "url": "assets/js/17.02c345f1.js",
    "revision": "e724a9cca9aaad2d6ee1381db90f1777"
  },
  {
    "url": "assets/js/18.a9f68eca.js",
    "revision": "1e087be6a199f788b25124ec53b402bf"
  },
  {
    "url": "assets/js/19.31c98726.js",
    "revision": "7e1b7b22aa9d4f8030b4bfabbdef2a80"
  },
  {
    "url": "assets/js/2.084def07.js",
    "revision": "8788af2b899c47988771ff5515dacc91"
  },
  {
    "url": "assets/js/20.338bd7f3.js",
    "revision": "54f037d865a11e3f08608cd61164479a"
  },
  {
    "url": "assets/js/21.70715975.js",
    "revision": "0c5490adc2ed3188dceabde51957313c"
  },
  {
    "url": "assets/js/22.ff7546ca.js",
    "revision": "a805651acfab9d3f006b95a7d7148f2f"
  },
  {
    "url": "assets/js/23.4c19f236.js",
    "revision": "45de59c355b7fe4cac31a5d4d849e5f1"
  },
  {
    "url": "assets/js/24.84252917.js",
    "revision": "d89981d9339a475bf603ea492c78821b"
  },
  {
    "url": "assets/js/25.473d0e26.js",
    "revision": "fa03ae03fc42e5b0e1e53d8828f2a38c"
  },
  {
    "url": "assets/js/26.ea237769.js",
    "revision": "3671a4f3406dce3006445caa455d67b9"
  },
  {
    "url": "assets/js/27.e733069a.js",
    "revision": "0e818265020da1684ed85afbd8bf369c"
  },
  {
    "url": "assets/js/28.d6c77842.js",
    "revision": "553dab45626da322026a146988d3bbcd"
  },
  {
    "url": "assets/js/29.1fbae91c.js",
    "revision": "174831e50d78acfb72465a84cbbbcff8"
  },
  {
    "url": "assets/js/3.a2178a07.js",
    "revision": "d28119e0ef867a1bd7644b874a6266c4"
  },
  {
    "url": "assets/js/30.5eac9075.js",
    "revision": "27bfb339722268c52d367088c647d8ef"
  },
  {
    "url": "assets/js/31.da36b4f7.js",
    "revision": "266e975d654518a2464404430e1d7675"
  },
  {
    "url": "assets/js/32.d961f6d1.js",
    "revision": "a052a8cc01b6fe02a5443864b7cdd2e5"
  },
  {
    "url": "assets/js/33.71e8b6a0.js",
    "revision": "a9fa436cd4b25abe7e9ae4bccf6f4a94"
  },
  {
    "url": "assets/js/34.cdb9fc5f.js",
    "revision": "07fb9bb8389c93355fba82c087f34fa3"
  },
  {
    "url": "assets/js/35.787f6e2e.js",
    "revision": "af4ad0df98bd00214a643f3bc32afc58"
  },
  {
    "url": "assets/js/36.3a84ede2.js",
    "revision": "ded469fb38b3c17d9e715056bcf414dd"
  },
  {
    "url": "assets/js/37.86fcf599.js",
    "revision": "404723d33f7101001a27d3a8d3846de6"
  },
  {
    "url": "assets/js/38.16ff92e2.js",
    "revision": "393d8a1caa7d8f95c5fa2d1d64fd5431"
  },
  {
    "url": "assets/js/39.0b3a4e3e.js",
    "revision": "2284a9514548b0f6ab23db8d99a941cc"
  },
  {
    "url": "assets/js/4.6d653c24.js",
    "revision": "5a9c1fb4ad42e5535c9e9d90ac114624"
  },
  {
    "url": "assets/js/40.3b8b1319.js",
    "revision": "7b48a27bdc61c18312835dbb1bca09c2"
  },
  {
    "url": "assets/js/41.1898114f.js",
    "revision": "4ccddad16e7e87c27a0e0269dbc29e9c"
  },
  {
    "url": "assets/js/42.d130dc4c.js",
    "revision": "41a758557711d9e7e86a304172d88f9f"
  },
  {
    "url": "assets/js/43.47b6878d.js",
    "revision": "358448bc651a5f2e6aeb374cffde5d35"
  },
  {
    "url": "assets/js/44.815ac02d.js",
    "revision": "32bf7e974f124f28b0238e2863d40c63"
  },
  {
    "url": "assets/js/45.1c7e4ef4.js",
    "revision": "69c43732084ef9dd420bb5088f6bbf69"
  },
  {
    "url": "assets/js/46.fad6ab04.js",
    "revision": "55c2b02b54092ae63ea9388709922698"
  },
  {
    "url": "assets/js/47.1dccbb5a.js",
    "revision": "9a92d60def2789bfddfb3fb756dd6e88"
  },
  {
    "url": "assets/js/48.b6d45a7c.js",
    "revision": "ec1970b15117c0b4ca8e3d5927cba356"
  },
  {
    "url": "assets/js/49.3edd9c0a.js",
    "revision": "dba0bfd24dbb76999ab60166d54f6d63"
  },
  {
    "url": "assets/js/5.24557e6b.js",
    "revision": "3a88cb670fc8ff91980a9ce0bd7f6ceb"
  },
  {
    "url": "assets/js/50.351eb6ba.js",
    "revision": "bc5641ef6c879216b9a71205e8d024e0"
  },
  {
    "url": "assets/js/51.f3933276.js",
    "revision": "8560a03b0deddb64487793a3f735690e"
  },
  {
    "url": "assets/js/52.68b7f5fc.js",
    "revision": "1ebb8d365e81f8b657facd07ffcddba2"
  },
  {
    "url": "assets/js/53.39368b73.js",
    "revision": "33e621469d1a20d13fdb59ef6b4471c2"
  },
  {
    "url": "assets/js/54.b2b207ee.js",
    "revision": "79642b682da46c68a228693a3368c1b8"
  },
  {
    "url": "assets/js/55.5bcb2e7d.js",
    "revision": "c9d63af828d27e8522c7d01ef96a6ee9"
  },
  {
    "url": "assets/js/56.8dd43c82.js",
    "revision": "5444d519f630df18a1f4064b65e9d2e2"
  },
  {
    "url": "assets/js/57.dfe8f926.js",
    "revision": "0cd117dd8c6a24eba196ee0c6e1ee501"
  },
  {
    "url": "assets/js/58.4e86b628.js",
    "revision": "6daf62806f25b2c5a38ddb3e9af4bdb3"
  },
  {
    "url": "assets/js/59.abde2f02.js",
    "revision": "19a1eeb96ca504424bf1d4cbb4ec0927"
  },
  {
    "url": "assets/js/6.4f136b96.js",
    "revision": "377a07238a26101d61ce8e0f93c89868"
  },
  {
    "url": "assets/js/60.cfdef925.js",
    "revision": "2424e57f7887ed1a1f64580a2c29066d"
  },
  {
    "url": "assets/js/61.3e5af63c.js",
    "revision": "8a6c7ac235196eb152193b6daf5104d8"
  },
  {
    "url": "assets/js/62.c166ebb1.js",
    "revision": "36b75d68b0d2aae35f11eebf7721e647"
  },
  {
    "url": "assets/js/63.fda8190d.js",
    "revision": "4e9879de6eefd3dea76109b763606134"
  },
  {
    "url": "assets/js/64.a9ccaa5a.js",
    "revision": "845d1ceef0121a67de63f1522569f9f1"
  },
  {
    "url": "assets/js/65.abe98033.js",
    "revision": "87b25a47543c596db3764207b09c8cd7"
  },
  {
    "url": "assets/js/66.885278a1.js",
    "revision": "8a73a0c57b22bbd890ad61849cae94bf"
  },
  {
    "url": "assets/js/67.34fc0502.js",
    "revision": "846b348808172144b9684849de77b498"
  },
  {
    "url": "assets/js/68.7fab814e.js",
    "revision": "fc2fbb5975e95f47572bbefbd80cf8ed"
  },
  {
    "url": "assets/js/69.1b778b88.js",
    "revision": "1fad568b6fe5f41e68c052f72f973b8e"
  },
  {
    "url": "assets/js/7.0cb1043b.js",
    "revision": "f07e506f766ab41dddbdfa5a02c0d619"
  },
  {
    "url": "assets/js/70.f9520481.js",
    "revision": "2a4d79ab3ce59a14b3813d3ccd6c5d85"
  },
  {
    "url": "assets/js/71.d591a163.js",
    "revision": "f3d238af35265c7e67b60ebf27e8b699"
  },
  {
    "url": "assets/js/72.983b46a0.js",
    "revision": "f1c94ed0ac30ab3bdd7f51ba48b98a88"
  },
  {
    "url": "assets/js/73.437b6b35.js",
    "revision": "33b38099bd9df295b09ce574465d3db1"
  },
  {
    "url": "assets/js/74.20c03ad3.js",
    "revision": "6cc2bc7516e8f336c751ec5d0c877da3"
  },
  {
    "url": "assets/js/75.f0661ded.js",
    "revision": "3108e29218f39bda225c232e624db8a2"
  },
  {
    "url": "assets/js/76.59145109.js",
    "revision": "ec509dbd3c013a7bba41b20c0ac5789d"
  },
  {
    "url": "assets/js/77.b531ee29.js",
    "revision": "26ba44a08cd47295fa560930eb32c554"
  },
  {
    "url": "assets/js/78.e0d43faa.js",
    "revision": "b5cbbe286d9017504c8984f8b8889be3"
  },
  {
    "url": "assets/js/79.59e94555.js",
    "revision": "f5b33b0071b73da506942c134c2d86e5"
  },
  {
    "url": "assets/js/8.302ba650.js",
    "revision": "af3fb735baefc16f6ee4d33ec13058a7"
  },
  {
    "url": "assets/js/80.1e1c5ba8.js",
    "revision": "c020ca53952ab72aeddc0f2cea1eafe2"
  },
  {
    "url": "assets/js/81.3344dac9.js",
    "revision": "22aa9ff37093a23840341c2b3a04ff16"
  },
  {
    "url": "assets/js/82.c74d3a74.js",
    "revision": "11c37312ee3a8d146e62f42496381a5f"
  },
  {
    "url": "assets/js/83.48247631.js",
    "revision": "e19cb9d2493aab457fcacbaf413a67f4"
  },
  {
    "url": "assets/js/84.01f9bfa2.js",
    "revision": "80edfb49e5d50ce3a8cda905d0883929"
  },
  {
    "url": "assets/js/9.5089a52a.js",
    "revision": "f1966d731ae62ae2ce036259d6854677"
  },
  {
    "url": "assets/js/app.eccbca07.js",
    "revision": "b702d7ba11b227dddb561347d012d421"
  },
  {
    "url": "backend/koa/index.html",
    "revision": "d0e0028c8a83145b98120a7d47004f00"
  },
  {
    "url": "backend/mongodb/index.html",
    "revision": "7d71d0dddde963023c7a303413f6cac3"
  },
  {
    "url": "backend/nginx/built-in-variables.html",
    "revision": "e2077656001932bc9c4a71be24287d82"
  },
  {
    "url": "backend/nginx/configurin-systemd-service-for-nginx.html",
    "revision": "1adcc73bddb1c920f4aa62c453f70bd7"
  },
  {
    "url": "backend/nginx/explain-the-main-configuration-file-of-nginx.html",
    "revision": "d09902cb77795d905c9190049ed59a61"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "7185a350f367a45fb7a56b1d6e62cad1"
  },
  {
    "url": "backend/nginx/install-goaccess.html",
    "revision": "811edcb51d79e20d60173ef779b9dbf9"
  },
  {
    "url": "backend/nginx/install-nginx.html",
    "revision": "032435683656753cbcf17e55d282ff8d"
  },
  {
    "url": "backend/nginx/limit-module.html",
    "revision": "76934677770417dd09cf6aaad6968c29"
  },
  {
    "url": "backend/nginx/location-rules.html",
    "revision": "b64af3e94593db3627d6b52b6c58f95b"
  },
  {
    "url": "backend/nginx/master-slave-nginx.html",
    "revision": "32260b9daf52c6b244e0233821333a77"
  },
  {
    "url": "backend/nginx/nginx-basic-operation.html",
    "revision": "93635e4fe101a8bb8c468e38884fe726"
  },
  {
    "url": "backend/nginx/nginx-upstream.html",
    "revision": "2e535806c78600e0577b2538f15fd324"
  },
  {
    "url": "backend/nginx/proxy-pass-rules.html",
    "revision": "bc6be7c66325ca4f84c5f20f3fc2aa75"
  },
  {
    "url": "backend/nginx/referer-module.html",
    "revision": "04a3b7f7214cb31518f29f7073a7680d"
  },
  {
    "url": "backend/nginx/rewrite-rules.html",
    "revision": "31128819f29ef0e3a96d635e962cd711"
  },
  {
    "url": "backend/nginx/the-difference-between-root-and-alias.html",
    "revision": "01ad2ac65b310f0ea31d0f9c7af3f2dd"
  },
  {
    "url": "backend/nginx/upgrade-http-to-https.html",
    "revision": "4237d04ada354251f39776550154d7b0"
  },
  {
    "url": "backend/nginx/websocket-proxy.html",
    "revision": "94fb5a2a714fd11715f3031f5dc445db"
  },
  {
    "url": "backend/nodejs/index.html",
    "revision": "8a570107e07d7eea25bd2c84f2a28501"
  },
  {
    "url": "backend/nodejs/install-nodejs.html",
    "revision": "fe4528c88e85a535467e4f79e0840ebe"
  },
  {
    "url": "backend/nodejs/npm-version.html",
    "revision": "7f07d5e6fefad73170744e58f589ea32"
  },
  {
    "url": "backend/nodejs/npx.html",
    "revision": "0b056aef16ff0d02857184e603475611"
  },
  {
    "url": "base/algorithm/index.html",
    "revision": "19ff1ad71fcc7a770ae71893d9e604d7"
  },
  {
    "url": "base/design-pattern/index.html",
    "revision": "02d424f3e0fb119f55fd8be4a00b84b1"
  },
  {
    "url": "base/interview/javascript-value-range.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "base/regexp/index.html",
    "revision": "abda63c1d1bcbd0c9699ec92287a646a"
  },
  {
    "url": "bookmark/bookmark-scripts.gif",
    "revision": "b2a54dfaadc2464d22fc6909c7206e09"
  },
  {
    "url": "frontend/javascript/array-accessor-methods.html",
    "revision": "eb958c3296dc129d9b29e73619f2c4ac"
  },
  {
    "url": "frontend/javascript/array-iteration-methods.html",
    "revision": "49063bfd54e5fcac73edf4049adcaffd"
  },
  {
    "url": "frontend/javascript/array-mutator-methods.html",
    "revision": "94e836a7d2a2cca38366ab91c50e61b1"
  },
  {
    "url": "frontend/javascript/array.html",
    "revision": "75340fbf842d39b3bcfc7f4a8306eeaf"
  },
  {
    "url": "frontend/javascript/arrow-function.html",
    "revision": "2e570d0d863e9807b2467884379ce515"
  },
  {
    "url": "frontend/javascript/can-not-read-property-of-undefined-or-null.html",
    "revision": "61c36af6c1f717596539d6dd35459205"
  },
  {
    "url": "frontend/javascript/error.html",
    "revision": "570b0e484c739f300f5a1ced91abce3f"
  },
  {
    "url": "frontend/javascript/function-methods.html",
    "revision": "ae0cfb1ec4879be3718529a10fb41018"
  },
  {
    "url": "frontend/javascript/implicit-coercion.html",
    "revision": "f520f3e739990bcf4c546fea7c9d43a0"
  },
  {
    "url": "frontend/javascript/index.html",
    "revision": "0a43e3744f122f8ce1ec4f767fff1edc"
  },
  {
    "url": "frontend/javascript/invocation-expression.html",
    "revision": "ae23c257b60fafd51e99bb420c781da9"
  },
  {
    "url": "frontend/javascript/invoking-functions.html",
    "revision": "eecca25dc9e69f664a0446e2767725a4"
  },
  {
    "url": "frontend/javascript/object-constructor-methods-freeze.html",
    "revision": "7a3e731ffb8a52176939fb94855dd4cc"
  },
  {
    "url": "frontend/javascript/object-constructor-methods-property.html",
    "revision": "3215f5e150333392a95652186a495299"
  },
  {
    "url": "frontend/javascript/object-constructor-methods.html",
    "revision": "27011ecdbf1178c4217b72e53ec72e5b"
  },
  {
    "url": "frontend/javascript/object-instance-methods.html",
    "revision": "9679d0ad66ec70db31a7c2ee38248de9"
  },
  {
    "url": "frontend/javascript/prototype-chain.html",
    "revision": "34191ee22a0654c5a41a806ab7b8cd94"
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
    "revision": "144e5cf53cfc8c04b98c05384ad5297a"
  },
  {
    "url": "frontend/javascript/scope-and-closures.html",
    "revision": "58912a1bfd025b763a4e264cb153c94b"
  },
  {
    "url": "frontend/javascript/statements-and-expressions.html",
    "revision": "e54cb9e41e3cec141a52a524b216036d"
  },
  {
    "url": "frontend/javascript/string-concat.html",
    "revision": "12ef97f6da838f99e3699e0fe03700d8"
  },
  {
    "url": "frontend/javascript/string-format.html",
    "revision": "ecfa9f314a6c610d2ea991c507f778c7"
  },
  {
    "url": "frontend/javascript/string-query.html",
    "revision": "fdde7b1ef74345d2078b66c1fce8efe7"
  },
  {
    "url": "frontend/javascript/string-regexp.html",
    "revision": "9eafc31cf0299325db229bf15834e961"
  },
  {
    "url": "frontend/javascript/string-substring.html",
    "revision": "bb41798fc2f8b6bd08e45a14970a0f24"
  },
  {
    "url": "frontend/javascript/this-identifier.html",
    "revision": "ae3a5b24f2b01247360ad08edfb5838f"
  },
  {
    "url": "frontend/tricks/index.html",
    "revision": "e4be97837350138cdcb8a1db97e2783c"
  },
  {
    "url": "frontend/utils/code-adapter.html",
    "revision": "308b8476a6bbeba632e6dac5ae1f6a96"
  },
  {
    "url": "frontend/utils/code-archived.html",
    "revision": "c3f138dc80e56027ce33209edf0a19ec"
  },
  {
    "url": "frontend/utils/code-array.html",
    "revision": "d5e8b80011f7873f0ad209bb4b8f8b2f"
  },
  {
    "url": "frontend/utils/code-browser.html",
    "revision": "159bde454e6dd22234c87a42e5f86e0b"
  },
  {
    "url": "frontend/utils/code-date.html",
    "revision": "983f4af319f1fbfa39aba1451a1cb91c"
  },
  {
    "url": "frontend/utils/code-function.html",
    "revision": "418969bb2b876c85910f309089a7bbbc"
  },
  {
    "url": "frontend/utils/code-math.html",
    "revision": "990dcc431e6532eb2448c54cae67192f"
  },
  {
    "url": "frontend/utils/code-node.html",
    "revision": "2e1e1a47b00c46bfc90afda20d24555f"
  },
  {
    "url": "frontend/utils/code-object.html",
    "revision": "66058990f91bf6936454abbc9dba8568"
  },
  {
    "url": "frontend/utils/code-string.html",
    "revision": "731c02e6ba23afefa32dc9d5af5abd97"
  },
  {
    "url": "frontend/utils/code-type.html",
    "revision": "a0a56cc8e3ed8466ce89fccba102e7ce"
  },
  {
    "url": "frontend/utils/code-utility.html",
    "revision": "1a7f37389c74b11b8e7ef4469b68afcc"
  },
  {
    "url": "frontend/utils/index.html",
    "revision": "24c9e003472663d0674dd7e94da22fd9"
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
    "revision": "d89ba8847c848accb066e0eaabcef3f8"
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
    "revision": "ce9f67125960da5a4e33616447b2b9ce"
  },
  {
    "url": "tools/chrome/edit-file-with-workspaces.html",
    "revision": "79008a060b8dad205362db33ae824446"
  },
  {
    "url": "tools/chrome/index.html",
    "revision": "3a549bc98f63e507af74405272ed1a47"
  },
  {
    "url": "tools/chrome/user-friendly-settings.html",
    "revision": "ae39daeb8d7826c58b3fb4c0fac76c13"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "7be2ec9727f41984fea68974137a613b"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "098474585c014d9fa79eb6320b33591b"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "e167f98fb1c2126805ae5f3e12de2fb8"
  },
  {
    "url": "tools/git/git-flight-rules.html",
    "revision": "541920690ccad14edbd773ccd8a4d399"
  },
  {
    "url": "tools/git/git-proxy.html",
    "revision": "6c218352bad1ce81c27fe19530ea07c0"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "a6e22619c43fc9a40694bb2fcbdf3e0e"
  },
  {
    "url": "tools/git/index.html",
    "revision": "61a39c433631cf4da6678ec14f6399d2"
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
