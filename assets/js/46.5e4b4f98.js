(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{295:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"浅析前端模块化"}},[t._v("浅析前端模块化")]),t._v(" "),a("h2",{attrs:{id:"写在前面"}},[t._v("写在前面")]),t._v(" "),a("p",[t._v("近来学习了 git，github，确实体验了一下开发效率这个问题，比如几条常用命令就可以把代码下载上传到 github 上，可以很快的去测试一下效果。去年就听说过前端模块化这个概念，但是一直没有深入去了解，所以准备继续学习一下相关的技术。虽然现在前端各种口水战，说什么前端目前浮躁，其实个人觉得不然，是因为人容易站在自己的立场去看问题，不管什么框架终究要适用于业务需求需要，各自有自己的适用环境，无从说哪种更好，自己觉得合适就好。")]),t._v(" "),a("h2",{attrs:{id:"前端组件化和模块化的区别"}},[t._v("前端组件化和模块化的区别")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("在这里直接引用一篇黄玄写的**"),a("a",{attrs:{href:"http://huangxuan.me/js-module-7day/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 模块化七日谈"),a("OutboundLink")],1),t._v("**"),a("sup",[t._v("[2]")]),t._v("。")]),t._v(" "),t._m(3),t._v(" "),a("h2",{attrs:{id:"webpack-是什么鬼？"}},[t._v("webpack 是什么鬼？")]),t._v(" "),a("p",[t._v("看完大多数介绍前端模块化的文章你基本都会听到 AMD，CommonJS，RequireJS 等一些列很专业的名词，但是很多时候搞不清他们之间的关系，这里我们先简单分类：")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("这里不详细去讲解每一种的特点以及他们之间的差异，这里我们我们会使用 webpack，所以下面只会详细介绍 CommonJS 标准和 webpack 的基本用法。")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("对应各种不同文件类型的资源, Webpack 有对应的模块 loader。比如 vue.js 用的是 vue-loader, 其他还有很多: http://webpack.github.io/docs/list-of-loaders.html")]),t._v(" "),a("p",[t._v("官网对 webpack 的定义是 MODULE BUNDLER，他的目的就是把有依赖关系的各种文件打包成一系列的静态资源。 请看下图：")]),t._v(" "),t._m(7),t._v(" "),a("h2",{attrs:{id:"webpack-入门"}},[t._v("webpack 入门")]),t._v(" "),a("p",[t._v("webpack 基于 node 的模块加载器，所以这里你要安装 node.js 的运行环境。（不过这里要特别说明的是经过 webpack 打包的前端静态代码是不用依赖与 node.js 环境的，直接放在服务器上可以打开，因为一开始这个我被有些人误导了一直没搞清楚）。使用 webpack 开发的时候不可避免的要使用一些模块包，所以这里要使用 npm（Node Packaged Modules）。")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://jingyan.baidu.com/article/b0b63dbfca599a4a483070a5.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("windows 下安装 nodejs"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://jingyan.baidu.com/article/a17d528506d7f58098c8f2b0.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm 安装图文教程"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://jingyan.baidu.com/article/90895e0fb3495f64ed6b0b50.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何在 windows 下安装 GIT"),a("OutboundLink")],1),t._v("(建议安装 git，当然这个随你)")])]),t._v(" "),a("p",[t._v("安装好了之后，在命令行输入下面的命令查看当前安装版本。")]),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),a("p",[t._v("经过上面的几步后你会发现项目目录下生成了一个 package.json 文件和 node_modules 文件夹。")]),t._v(" "),a("p",[t._v("**package.json: **")]),t._v(" "),t._m(14),a("p",[t._v("既然环境都已经安装好了，那么我们就开始来用 webpack 进行我们的第一个打包运行程序吧！")]),t._v(" "),a("p",[t._v("首先创建一个静态页面 index.html 和一个 JS 入口文件 entry.js,（这里你想用什么名字都可以，只需要在打包的时候读取文件为该名字就好，不过，到时候就知道这个名字的含义啦！）：")]),t._v(" "),a("p",[t._v("**index.html: **")]),t._v(" "),t._m(15),a("p",[t._v("**entry.js: **")]),t._v(" "),t._m(16),a("p",[t._v("文件都已经创建成功了，那么就开始我们的打包吧！在命令行输入命令：")]),t._v(" "),t._m(17),a("p",[t._v("运行成功会出现：")]),t._v(" "),t._m(18),t._m(19),t._v(" "),a("p",[t._v("这么简单的功能直接在 html 中引入不就好了吗？确实是这样的，不过我们这才刚刚开始嘛，不要急。")]),t._v(" "),a("p",[t._v("这里我们新建一个 sub.js 文件作为一个新的模块。\n**sub.js: **")]),t._v(" "),t._m(20),a("p",[t._v("修改 entry.js 文件如下：\n**entry.js: **")]),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),a("p",[t._v("我们每次都需要输入入口文件 entry.js 和输出文件 bundle.js，是不是很麻烦？这里我们简单设置一下 webpack.config.js:")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._m(27),t._v(" "),a("p",[t._v("这个 hello world 介绍了 webpack 的最简单的内容，还没有涉及到添加 CSS 样式，添加图片，由于本文作为前端模块化系列文章第一篇，先不做过多介绍，后面会补充更多内容。")]),t._v(" "),a("p",[t._v("参考文档：（商业转载请联系作者获得授权，非商业转载请注明出处。）")]),t._v(" "),t._m(28),t._v(" "),a("site-footer")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("由于我之前学过 java 和 android app 开发，也略知 java 这种语言的包管理，一方面可以解决命名冲突，一方面可以实现代码模块的复用，在开发过程中还是有一定好处的，代码结构和层次很清晰，容易管理。不过话又说回来，包名臭长臭长的好难记啊，基本写代码靠 copy。"),s("strong",[this._v("/(ㄒ o ㄒ)/~~")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("曾经尝试直接撸个小 UI 库"),a("strong",[t._v("eui")]),t._v("(写出来用了一段时间 bug 太多，停了。。。），尝试了用 jQuery 风格的匿名自执行函数去包装库。期间也看了看很多 js 设计模式的帖子，看了看很多框架的实现方法。后来了解到 vue，react，angular 这种 mvvm 框架，说什么鬼的模块化，最后选择试试了 vue，用 vue 也写了一下，发现确实是挺优雅的一个框架，真的是感觉有可取之处，值得去学习。开始我都是把所有的组件写在一个"),a("strong",[t._v("xxx.js")]),t._v("和"),a("strong",[t._v("xxx.css")]),t._v("里面，但是内容多了，感觉有点烦，看官网上提到的"),a("code",[t._v(".vue")]),t._v("单文件，感觉确实是合理一些。那好吧，那就硬着头皮去入坑模块化，这里贴出知乎上的一篇帖子，仅供参考，后面等我有了自己的体会自己写一篇。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("模块化中的模块一般指的是 Javascript 模块，比如一个用来格式化时间的模块。组件则包含了 template、style 和 script，而它的 Script 可以由各种模块组成。比如一个显示时间的组件会调用上面的那个格式化时间的模块。\n"),s("img",{attrs:{src:"http://i.imgur.com/QiPUhoa.png",alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("第一日 上古时期 Module? 从设计模式说起")]),t._v(" "),a("li",[t._v("第二日 石器时代 Script Loader 只有封装性可不够，我们还需要加载")]),t._v(" "),a("li",[t._v("第三日 蒸汽朋克 Module Loader 模块化架构的工业革命")]),t._v(" "),a("li",[t._v("第四日 号角吹响 CommonJS 征服世界的第一步是跳出浏览器")]),t._v(" "),a("li",[t._v("第五日 双塔奇兵 AMD/CMD 浏览器环境模块化方案")]),t._v(" "),a("li",[t._v("第六日 精灵宝钻 Browserify/Webpack 大势所趋，去掉这层包裹！")]),t._v(" "),a("li",[t._v("第七日 王者归来 ES6 Module 最后的战役")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("Javascript 模块化标准：CommonJS，AMD，CMD，ES6 Modules\n这里简单说说就是定义一般的语法规范，注意与工具的区别。")])]),this._v(" "),s("li",[s("p",[this._v("最常见的模块加载器：")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("browserify/webpack，基于 CommonJS 标准")]),this._v(" "),s("li",[this._v("RequireJS，基于 AMD 标准")]),this._v(" "),s("li",[this._v("SeaJS，基于 CMD 标准")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("Webpack 是德国开发者 Tobias Koppers 开发的模块加载器,Instagram 工程师认为这个方案很棒, 似乎还把作者招过去了。在 Webpack 当中, 所有的资源都被当作是模块, js, css, 图片等等..因此, Webpack 当中 js 可以引用 css, css 中可以嵌入图片 dataUrl。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://i.imgur.com/psArjvs.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("npm 是 nodejs 官方为 nodejs 定制的一个工具，是 Node.js 的包管理器，是 Node Packaged Modules 的简称，通过 npm 可以下载安装 nodejs 的模块包，nodejs 有很多优秀的模块包可以让开发这快速开发。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("安装方法：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("node -v\nnpm -v\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我安装的版本是"),s("code",[this._v("node : v5.10.1 , npm : 3.8.3")]),this._v("，若是版本问题，请更新到最新版。首先我们直接进行全局的安装，运行如下命令："),s("code",[this._v("npm install webpack -g")]),this._v("，可能需要一点时间。安装成功后，在命令行输入"),s("code",[this._v("webpack -h")]),this._v("即可查看当前安装的版本信息。以及可以使用的指令。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("hello world：")]),this._v("\n新建项目文件夹，然后命令行进入项目目录")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("# 创建"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json，直接一路回车就好\nnpm init\n\n# 安装 webpack 依赖\nnpm install webpack "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dev\n\n# 简单的写法："),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("缩写形式\nnpm i webpack "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v("\n# –save：模块名将被添加到dependencies，可以简化为参数"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),t._v("。\n# –save"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 模块名将被添加到devDependencies，可以简化为参数"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v("。\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-webpack"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"devDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"webpack"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^1.12.15"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"echo \\"Error: no test specified\\" && exit 1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"license"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ISC"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utf-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 注意这里引入的不是我们创建的文件，而是用webpack生成的文件 --\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bundle.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("webpack entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),this._v("js bundle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),this._v("js\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),t._v("cef45390255691137e\nVersion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" webpack "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.12")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".15")]),t._v("\nTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("218")]),t._v("ms\n    Asset     Size  Chunks             Chunk Names\nbundle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.45")]),t._v(" kB       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("57")]),t._v(" bytes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("built"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("目录下会生成一个 bundle.js 文件，在浏览器中打开 index.html，就能看到我们设置的文字啦！："),s("strong",[this._v("hello world")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//我们这里使用CommonJS的风格")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" element "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"h2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello China"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//引用sub模块")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sub "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./sub"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("再来进行一次重复的工作，再打包一次。"),s("code",[this._v("webpack entry.js bundle.js")]),this._v("，如果成功，打包过程会显示日志：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" af3c33f78683d1f00e10\nVersion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" webpack "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.12")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".15")]),t._v("\nTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("178")]),t._v("ms\n    Asset    Size  Chunks             Chunk Names\nbundle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),t._v(" kB       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("138")]),t._v(" bytes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("built"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("178")]),t._v(" bytes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("built"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("Webpack 会分析入口文件，解析包含依赖关系的各个文件。这些文件（模块）都打包到 bundle.js 。Webpack 会给每个模块分配一个唯一的 id 并通过这个 id 索引和访问模块。在页面启动时，会先执行 entry.js 中的代码，其它模块会在运行 require 的时候再执行。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("entry 入口文件 让 webpack 用哪个文件作为项目的入口")]),this._v(" "),s("li",[this._v("output 出口 让 webpack 把处理完成的文件放在哪里")]),this._v(" "),s("li",[this._v("module 模块 要用什么不同的模块来处理各种类型的文件")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Webpack "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./entry.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" __dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bundle.js"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("然后在项目根目录运行"),s("code",[this._v("webpack")]),this._v("，如果你的配置没有问题的话，可以在命令行中看到正确的输出，因为这个命令会自动在当前目录中查找 webpack.config.js 的配置文件，并按照里面定义的规则来进行执行。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("[1] Jasin Yip http://www.zhihu.com/question/37649318 来源知乎")]),this._v(" "),s("li",[this._v("[2] 黄玄 http://www.zhihu.com/question/37011441/answer/71639106 来源知乎")]),this._v(" "),s("li",[this._v("[3] Webpack 傻瓜式指南 https://github.com/vikingmute/webpack-for-fools/blob/master/entries/chapter-1.md")])])}],!1,null,null,null);s.default=e.exports}}]);