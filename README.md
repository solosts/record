# 目录结构

.
├── docs
│ ├── .vuepress 用于存放全局的配置、组件、静态资源等
│ │ ├── .cache 缓存目录
│ │ ├── .temp 缓存目录
│ │ ├── dist 打包后文件目录
│ │ ├── public 静态资源目录
│ │ │ └── image 图片
│ │ ├── config.js 配置文件的入口文件，也可以是 YML 或 toml。
│ │
│ ├── README.md 首页
│ ├── problemRecord 问题记录
│ │ ├── h5 h5 问题
│ │ ├── jsProblem js 问题
│ │ ├── smallProgram 小程序问题
│ │ └── styleProblem 样式问题
│ ├── utils 工具方法
│ │ ├── practicalComponent 组件
│ │ ├── practicalMethod 方法
│ │ └── practicalTool 工具
│
├── deploy.sh sh 文件，运行即可自动提交部署文件
├── put.bat 自动部署，点击即可自动提交部署文件
└── package.json
