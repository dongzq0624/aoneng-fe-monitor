# aoneng-fe-monitor

> 奥能电源 前端监控稳定性

## 简介

这是奥能电源前端团队开发的一站式前端监控系统，包含前端监控 npm 包、监控异常收集服务与监控告警展示界面，帮助开发团队实时掌握前端应用运行状态。

## 核心功能

### 前端监控 npm 包

1. **[aoneng-fe-monitor-browser](packages/browser)**：前端稳定性监控 页面监控
2. **[aoneng-fe-monitor-core](packages/core)**：前端稳定性监控 核心功能
3. **[aoneng-fe-monitor-react](packages/react)**：前端稳定性监控 React 监控
4. **[aoneng-fe-monitor-vue](packages/vue)**：前端稳定性监控 Vue 监控
5. **[aoneng-fe-monitor-web](packages/web)**：前端稳定性监控 Web 监控
6. **[aoneng-fe-monitor-web-performance](packages/web-performance)**：前端稳定性监控 Web 性能监控
7. **[aoneng-fe-monitor-wx-mini-program](packages/wx-miniprogram)**：前端稳定性监控 小程序监控
8. **[aoneng-fe-monitor-wx-mini-program-performance](packages/wx-miniprogram-performance)**：前端稳定性监控 小程序性能监控
9. **[aoneng-fe-monitor-types](packages/types)**：前端稳定性监控 通用类型声明
10. **[aoneng-fe-monitor-shared](packages/shared)**：前端稳定性监控 共享参数
11. **[aoneng-fe-monitor-utils](packages/utils)**：前端稳定性监控 通用函数

### 监控服务

- **监控异常收集 node 服务**：收集前端上报的监控数据
- **前端监控异常告警&界面展示**：实时展示监控数据与异常告警

## 技术选型

### 前端技术栈

- **包管理工具**：pnpm
- **构建工具**：encode-bundle
- **数据清洗&存储**：Node 生态
- **编程语言**：TypeScript
- **框架支持**：React、Vue、微信小程序

### 后端技术栈

- **服务框架**：Node.js + Express/Koa
- **数据库**：MongoDB/MySQL
- **消息队列**：Redis/RabbitMQ
- **告警系统**：邮件/短信/钉钉告警

## 快速开始

### 安装依赖

```bash
# 安装所有依赖
pnpm install
```

### 构建所有包

```bash
# 构建所有 npm 包
pnpm run build
```

### 启动监控服务

```bash
# 启动监控异常收集服务
pnpm run start:server

# 启动监控告警展示界面
pnpm run start:dashboard
```

## 项目结构

```
aoneng-fe-monitor/
├── packages/              # 前端监控 npm 包
│   ├── browser/          # 浏览器监控
│   ├── core/            # 核心功能
│   ├── react/           # React 监控
│   ├── vue/             # Vue 监控
│   ├── web/             # Web 监控
│   ├── web-performance/ # Web 性能监控
│   ├── wx-mini-program/ # 小程序监控
│   ├── wx-mini-program-performance/ # 小程序性能监控
│   ├── types/           # 通用类型声明
│   ├── shared/          # 共享参数
│   └── utils/           # 通用函数
├── server/               # 监控异常收集服务
├── dashboard/            # 监控告警展示界面
├── docs/                # 项目文档
├── .gitignore
├── package.json
└── README.md
```

## 开发指南

### 本地开发

```bash
# 启动开发模式
pnpm run dev

# 运行测试
pnpm run test

# 运行 lint
pnpm run lint
```

### 发布 npm 包

```bash
# 发布所有包
pnpm run publish

# 发布指定包
pnpm run publish:browser
```

## 部署指南

### 前端部署

```bash
# 构建前端监控包
pnpm run build

# 上传到 CDN
pnpm run upload:cdn
```

### 后端部署

```bash
# 构建后端服务
pnpm run build:server

# 启动生产服务
pnpm run start:server:prod
```

## 贡献指南

### 提交规范

- `feat`: 新增功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试用例更新
- `chore`: 构建/工具类更新

### 开发流程

1. Fork 项目
2. 创建功能分支
3. 提交代码
4. 发起 Pull Request
5. 代码审查
6. 合并分支

## License

MIT

## 联系方式

- 前端团队：fe-team@aoneng.com
- 技术支持：tech-support@aoneng.com
