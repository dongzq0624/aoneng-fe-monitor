# aoneng-fe-monitor-react

奥能电源--前端稳定性监控 React 监控

## 简介

这是奥能电源前端团队开发的 React 应用稳定性监控系统，专注于 React 应用的性能与错误监控，帮助开发团队实时掌握 React 应用运行状态。

## 核心功能

### 错误监控

- ✅ React 组件渲染错误捕获
- ✅ JavaScript 运行时错误捕获
- ✅ Promise 未捕获异常
- ✅ 自定义错误边界集成

### 性能监控

- 📊 React 组件渲染性能
- ⏱️ 页面加载性能（FP/FCP/LCP）
- 📈 网络请求耗时分析
- 🎯 渲染性能瓶颈定位

### 行为监控

- 📝 用户操作轨迹记录
- 🔗 页面跳转跟踪
- 🎯 组件交互监控

## 快速开始

### 安装

```bash
pnpm install aoneng-fe-monitor-react --save
```

### 基础使用

#### 方式一：全局监控

```typescript
// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReactMonitor from 'aoneng-fe-monitor-react';

// 初始化监控
const monitor = new ReactMonitor({
  appId: 'your-application-id',
  serverUrl: 'https://monitor-api.example.com/report',
  environment: 'production'
});

// 启动监控
monitor.start();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

#### 方式二：错误边界集成

```typescript
// ErrorBoundary.tsx
import { ErrorBoundary } from 'aoneng-fe-monitor-react';

const FallbackComponent = () => (
  <div>Something went wrong!</div>
);

const AppWithErrorBoundary = () => (
  <ErrorBoundary
    fallback={<FallbackComponent />}
    appId='your-application-id'
    serverUrl='https://monitor-api.example.com/report'
  >
    <App />
  </ErrorBoundary>
);
```

### 配置参数

| 参数名                   | 类型    | 描述                                       |
| ------------------------ | ------- | ------------------------------------------ |
| appId                    | string  | 应用唯一标识                               |
| serverUrl                | string  | 数据上报地址                               |
| environment              | string  | 运行环境（production/staging/development） |
| sampleRate               | number  | 采样率（0-1）                              |
| maxBreadcrumbs           | number  | 最大行为栈长度                             |
| enableComponentMonitor   | boolean | 是否启用组件监控                           |
| enablePerformanceMonitor | boolean | 是否启用性能监控                           |

## API 文档

### 核心组件

#### ReactMonitor

React 监控主类

```typescript
class ReactMonitor {
  constructor(config: MonitorConfig);
  start(): void;
  stop(): void;
  reportError(error: Error, context?: any): void;
  reportPerformance(metrics: PerformanceMetrics): void;
}
```

#### ErrorBoundary

React 错误边界组件

```typescript
interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  appId: string;
  serverUrl: string;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {}
```

#### withMonitor

高阶组件，用于监控特定组件

```typescript
function withMonitor<T extends React.ComponentType<any>>(Component: T, options?: MonitorOptions): T;
```

## 技术实现

### 核心特性

1. **自动错误捕获** - 基于 React 错误边界的全局错误捕获
2. **组件级监控** - 监控每个 React 组件的渲染性能
3. **性能分析** - 自动分析 React 应用性能瓶颈
4. **低侵入性** - 无需修改现有代码即可集成

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
  "component": "App",
  "url": "https://example.com/page"
}
```

## 兼容性

- ✅ React 16.8+
- ✅ React 17+
- ✅ React 18+
- ✅ TypeScript 4.0+

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
