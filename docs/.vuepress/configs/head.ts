import type { HeadConfig } from "@vuepress/core"

export const head: HeadConfig[] = [
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/images/logo.png",
    },
  ],
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "../public/images/logo.png",
    },
  ],
]
