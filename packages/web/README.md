# aoneng-fe-monitor-web

奥能电源--前端稳定性监控 Web 监控

## 简介

这是奥能电源前端团队开发的 Web 应用稳定性监控系统，专注于 Web 应用的性能与错误监控，帮助开发团队实时掌握用户端页面运行状态。

## 核心功能

### 错误监控

- ✅ JavaScript 运行时错误捕获
- ✅ 资源加载失败监控（CSS/JS/图片等）
- ✅ Promise 未捕获异常
- ✅ 页面崩溃检测
- ✅ 跨域错误捕获

### 性能监控

- 📊 页面加载性能（FP/FCP/LCP）
- ⏱️ 资源加载时间统计
- 📈 用户交互延迟监控
- 🎯 长任务检测
- 📦 缓存命中率统计

### 行为监控

- 📝 用户操作轨迹记录
- 🔗 页面跳转跟踪
- 📊 页面停留时间统计
- 🎯 按钮点击监控

## 快速开始

### 安装

```bash
pnpm install aoneng-fe-monitor-web --save
```

### 基础使用

#### 方式一：全局监控

```typescript
// index.ts
import WebMonitor from 'aoneng-fe-monitor-web';

const monitor = new WebMonitor({
  appId: 'your-application-id',
  serverUrl: 'https://monitor-api.example.com/report',
  environment: 'production',
});

// 启动监控
monitor.start();
```

#### 方式二：CDN 引入

```html
<script src="https://cdn.example.com/aoneng-fe-monitor-web.min.js"></script>
<script>
  const monitor = new WebMonitor({
    appId: 'your-application-id',
    serverUrl: 'https://monitor-api.example.com/report',
    environment: 'production',
  });
  monitor.start();
</script>
```

### 配置参数

| 参数名                   | 类型    | 描述                                       |
| ------------------------ | ------- | ------------------------------------------ |
| appId                    | string  | 应用唯一标识                               |
| serverUrl                | string  | 数据上报地址                               |
| environment              | string  | 运行环境（production/staging/development） |
| sampleRate               | number  | 采样率（0-1）                              |
| maxBreadcrumbs           | number  | 最大行为栈长度                             |
| enableErrorMonitor       | boolean | 是否启用错误监控                           |
| enablePerformanceMonitor | boolean | 是否启用性能监控                           |
| enableBehaviorMonitor    | boolean | 是否启用行为监控                           |

## API 文档

### WebMonitor 类

```typescript
class WebMonitor {
  constructor(config: MonitorConfig);
  start(): void;
  stop(): void;
  reportError(error: Error, context?: any): void;
  reportPerformance(metrics: PerformanceMetrics): void;
  reportBehavior(behavior: BehaviorData): void;
}
```

### 工具函数

#### captureError(error: Error): ErrorInfo

捕获并格式化错误信息

#### capturePerformance(): PerformanceMetrics

捕获页面性能指标

#### captureBehavior(behavior: BehaviorData): void

捕获用户行为数据

## 技术实现

### 核心特性

1. **全链路监控** - 从页面加载到用户交互的完整监控
2. **低侵入性** - 无需修改现有代码即可集成
3. **高性能** - 低内存占用、低CPU消耗
4. **跨域支持** - 支持跨域错误捕获与上报

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

## 兼容性

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
