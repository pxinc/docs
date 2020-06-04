(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{413:function(s,a,t){"use strict";t.r(a);var n=t(27),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),t("p",[s._v("当使用"),t("RouterLink",{attrs:{to:"/backend/nginx/install-nginx.html#编译安装"}},[s._v("编译安装 Nginx")]),s._v(" 后，同样希望将 Nginx 加入至 systemd 进行管理，如果可以的话希望进一步对该 Nginx 进行区分。")],1),s._v(" "),t("h2",{attrs:{id:"阅读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阅读"}},[s._v("#")]),s._v(" 阅读")]),s._v(" "),t("p",[s._v("首先需要了解一下 yum 安装的 Nginx 配置：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" nginx.service\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /lib/systemd/system/nginx.service")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx - high performance web server\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Documentation")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://nginx.org/en/docs/\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network-online.target remote-fs.target nss-lookup.target\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Wants")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network-online.target\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("forking\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PIDFile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/run/nginx.pid\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/sbin/nginx -c /etc/nginx/nginx.conf\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecReload")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin/kill -s HUP "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MAINPID")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStop")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin/kill -s "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("TERM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MAINPID")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])])]),t("p",[s._v("接着可以阅读下官网的"),t("a",{attrs:{href:"https://www.nginx.com/resources/wiki/start/topics/examples/systemd/",target:"_blank",rel:"noopener noreferrer"}},[s._v("示例"),t("OutboundLink")],1),s._v("：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("The NGINX HTTP and reverse proxy server\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("syslog.target network.target remote-fs.target nss-lookup.target\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("forking\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PIDFile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/run/nginx.pid\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStartPre")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/sbin/nginx -t\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/sbin/nginx\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecReload")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/sbin/nginx -s reload\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStop")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin/kill -s QUIT "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MAINPID")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PrivateTmp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])])]),t("h2",{attrs:{id:"操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[s._v("#")]),s._v(" 操作")]),s._v(" "),t("h3",{attrs:{id:"_1-下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载"}},[s._v("#")]),s._v(" 1. 下载")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/src "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/src 常用于存放内核源码")]),s._v("\n")])])]),t("p",[s._v("接着按照"),t("RouterLink",{attrs:{to:"/backend/nginx/install-nginx.html#_2-下载"}},[s._v("之前")]),s._v("操作。")],1),s._v(" "),t("h3",{attrs:{id:"_2-编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-编译"}},[s._v("#")]),s._v(" 2. 编译")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./configure --help "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("less")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看帮助")]),s._v("\n./configure --prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n\n/usr/local/nginx -V "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证 ")]),s._v("\n")])])]),t("h3",{attrs:{id:"_3-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置"}},[s._v("#")]),s._v(" 3. 配置")]),s._v(" "),t("p",[s._v("nginx 配置：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用 pid 路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/nginx/conf/nginx.conf\n")])])]),t("p",[s._v("systemd 配置：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/lib/systemd/system/nginx-compile.service "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此处自定义命名为 nginx-compile")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加如下内容")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("compile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" - high performance web server\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Documentation")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://nginx.org/en/docs/\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("syslog.target network.target remote-fs.target nss-lookup.target\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("forking\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PIDFile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx/logs/nginx.pid\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStartPre")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx/sbin/nginx -t\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecReload")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx/sbin/nginx -s reload\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStop")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx/sbin/nginx -s stop\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 官网示例如下，但个人使用的为上面两种，尚分不清好坏")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ExecReload=/bin/kill -s HUP $MAINPID")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ExecStop=/bin/kill -s QUIT $MAINPID")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PrivateTmp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])])]),t("h3",{attrs:{id:"_4-验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-验证"}},[s._v("#")]),s._v(" 4. 验证")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl status nginx-compile.service "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示正确后即可执行 systemctl 套件")]),s._v("\nsystemctl start nginx-compile.service\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" nginx-compile.service\nsystemctl status nginx-compile.service "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);