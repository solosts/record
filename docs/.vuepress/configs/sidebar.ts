import type { SidebarConfig } from "@vuepress/theme-default"

export const sidebarZh: SidebarConfig = {
  "/": [
    {
      text: "介绍",
      children: ["/README.md"],
    },
  ],
  "/problemRecord/": [
    {
      text: "手机端问题记录",
      collapsible: true,
      children: [
        "/problemRecord/smallProgram/smallProgram.md",
        "/problemRecord/h5/h5.md",
      ],
    },
    {
      text: "WEB问题记录",
      collapsible: true,
      children: [
        "/problemRecord/styleProblem/styleProblem.md",
        "/problemRecord/jsProblem/jsProblem.md",
      ],
    },
  ],
  "/utils/": [
    {
      text: "工具方法",
      collapsible: true,
      children: [
        "/utils/practicalMethod/practicalMethod.md",
        "/utils/practicalComponent/practicalComponent.md",
        "/utils/practicalTool/practicalTool.md",
      ],
    },
  ],
}
