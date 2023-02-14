module.exports = {
  base: "/",
  theme: "reco",
  title: "Node.js 文档",
  description: "Node.js 学习文档及小案例展示",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    subSidebar: "auto",
    nav: [
      { text: "首页", link: "/" },
      { text: "实例", link: "" },
      {
        text: "其他",
        items: [
          { text: "Github", link: "https://github.com/MuBaiYang123" },
          { text: "博客", link: "https://mubaiyang123.github.io/" },
        ],
      },
    ],
    sidebar: [
      {
        title: "欢迎学习Node.js!",
        path: "/",
      },
      {
        title: "Node.js基础学习",
        path: "/Node/intrudoce",
        collapsable: false,
        children: [
          { title: "介绍", path: "/Node/intrudoce" },
          { title: "交互器", path: "/Node/jiaohuqi" },
        ],
      },
    ],
  },
}
