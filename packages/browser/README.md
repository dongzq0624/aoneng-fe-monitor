# aoneng-fe-monitor-browser

奥能电源--前端稳定性监控 页面监控

## 简介

这是奥能电源前端团队开发的前端稳定性监控系统，专注于页面级性能与错误监控，帮助开发团队实时掌握用户端页面运行状态。

## 核心功能

### 错误监控

- ✅ JavaScript 运行时错误捕获
- ✅ 资源加载失败监控（CSS/JS/图片等）
- ✅ Promise 未捕获异常
- ✅ 页面崩溃检测

### 性能监控

- 📊 页面加载性能（FP/FCP/LCP）
- ⏱️ 资源加载时间统计
- 📈 用户交互延迟监控

### 行为监控

- 📝 用户操作轨迹记录
- 🔗 页面跳转跟踪

## 快速开始

### 安装

```bash
pnpm install aoneng-fe-monitor-browser --save
```

### 基础使用

```typescript
import Monitor from 'aoneng-fe-monitor-browser';

const monitor = new Monitor({
  appId: 'your-application-id',
  serverUrl: 'https://monitor-api.example.com/report',
  environment: 'production',
});

// 启动监控
monitor.start();
```

### 配置参数

| 参数名         | 类型   | 描述                                       |
| -------------- | ------ | ------------------------------------------ |
| appId          | string | 应用唯一标识                               |
| serverUrl      | string | 数据上报地址                               |
| environment    | string | 运行环境（production/staging/development） |
| sampleRate     | number | 采样率（0-1）                              |
| maxBreadcrumbs | number | 最大行为栈长度                             |

## 技术实现

### 核心模块

1. **handleEvents.ts** - 事件处理中心，统一管理各类监控事件
2. **load.ts** - 页面加载性能监控
3. **replace.ts** - 全局对象重写，用于捕获异常
4. **index.ts** - 系统入口与配置管理

### 上报格式

监控数据采用 JSON 格式上报，包含以下核心字段：

```json
{
  "appId": "app-123",
  "timestamp": 1620000000000,
  "type": "error",
  "level": "error",
  "message": "Uncaught TypeError: Cannot read property 'name' of undefined",
  "stack": "Error: ...",
  "url": "https://example.com/page",
  "userAgent": "Mozilla/5.0 ..."
}
```

## 浏览器兼容性

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ IE 11（部分功能受限）

## 开发指南

### 本地开发

```bash
# 安装依赖
pnpm install

# 构建
pnpm run build

# 测试
pnpm run test
```

## License

MIT
