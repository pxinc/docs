const moment = require('moment');
moment.locale("zh-cn");

module.exports = {
    "vuepress-plugin-auto-sidebar": {
        titleMode: "uppercase",
        collapseList: [
          "/frontend/javascript/"
        ]
    },
    '@vuepress/last-updated': {
      transformer: (timestamp) =>  moment(timestamp).fromNow()
    },
    '@vuepress/back-to-top': true,
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用.",
        buttonText: "刷新"
      }
    },
    '@vuepress/medium-zoom': {
      selector: 'img.zoom-custom-imgs',
      options: {
        margin: 16
      }
    }
}