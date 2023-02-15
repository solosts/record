import type { SidebarConfig } from "@vuepress/theme-default"

export const sidebarZh: SidebarConfig = {
  "/": [
    {
      text: "指南",
      children: ["/README.md"],
    },
  ],
}
