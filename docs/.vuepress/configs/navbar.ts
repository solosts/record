import type { NavbarConfig } from "@vuepress/theme-default"

export const navbarZh: NavbarConfig = [
  {
    text: "介绍",
    link: "/",
  },
  {
    text: "问题记录",
    children: [
      {
        text: "微信",
        children: [
          "/problemRecord/smallProgram/smallProgram.md",
          "/problemRecord/h5/h5.md",
        ],
      },
      {
        text: "WEB",
        children: [
          "/problemRecord/styleProblem/styleProblem.md",
          "/problemRecord/jsProblem/jsProblem.md",
        ],
      },
    ],
  },
  {
    text: "复用",
    children: [
      "/utils/practicalMethod/practicalMethod.md",
      "/utils/practicalComponent/practicalComponent.md",
      "/utils/practicalTool/practicalTool.md",
    ],
  },
]
