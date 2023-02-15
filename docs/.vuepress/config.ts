import { defineUserConfig } from "vuepress"
import { defaultTheme } from "@vuepress/theme-default"
import { head, navbarZh, sidebarZh, plugins } from "./configs/index"

export default defineUserConfig({
  base: "/record/",
  lang: "zh-CN",
  title: "记录",
  description: "记录学习和问题",
  // head
  head,
  theme: defaultTheme({
    logo: "/images/logo.png",
    repo: "https://github.com/solosts/record.git",
    locales: {
      "/": {
        // navbar
        navbar: navbarZh,
        // sidebar
        sidebar: sidebarZh,
        // page meta
        editLink: false,
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",
        // custom containers
        tip: "提示",
        warning: "注意",
        danger: "警告",
        // 404 page
        notFound: [
          "这里什么都没有",
          "我们怎么到这来了？",
          "这是一个 404 页面",
          "看起来我们进入了错误的链接",
        ],
        backToHome: "返回首页",
        // a11y
        openInNewWindow: "在新窗口打开",
        toggleColorMode: "切换颜色模式",
        toggleSidebar: "切换侧边栏",
      },
    },
  }),
  // 插件配置
  plugins,
})
