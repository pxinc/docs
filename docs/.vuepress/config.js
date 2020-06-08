const NAV_CONF = require('./config/nav.js')
const PLUGINS_CONF = require('./config/plugins.js')
const HEAD_CONF = require('./config/head.js')

module.exports = {
    title: 'Pxinc Blog',
    description: "Pxinc Blog By VuePress",
    head: HEAD_CONF,
    extraWatchFiles: [
        '../**/*.md',
        './config.js'
    ],
    themeConfig: {
        docsDir: 'docs',
        lastUpdated: '更新时间',
        nav: NAV_CONF,
    },
    plugins: PLUGINS_CONF
}