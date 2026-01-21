# aoneng-fe-monitor-web-performance

奥能电源--前端稳定性监控 Web 性能监控

## 简介

这是奥能电源前端团队开发的 Web 应用性能监控系统，专注于 Web 应用的性能数据采集与分析，帮助开发团队优化 Web 应用性能体验。

## 核心功能

### 性能监控

- 📊 页面加载性能（FP/FCP/LCP）
- ⏱️ 资源加载时间统计
- 📈 用户交互延迟监控
- 🎯 长任务检测
- 📦 缓存命中率统计
- 📊 网络请求性能分析

### 性能优化

- 💡 自动生成性能优化报告
- 📋 性能瓶颈定位
- 🎯 优化方案推荐
- 📈 性能趋势分析

### 可视化

- 📊 性能数据可视化
- 📈 性能趋势图表
- 🎯 性能指标对比

## 快速开始

### 安装

```bash
pnpm install aoneng-fe-monitor-web-performance --save
```

### 基础使用

#### 方式一：全局监控

```typescript
// index.ts
import PerformanceMonitor from 'aoneng-fe-monitor-web-performance';

const performanceMonitor = new PerformanceMonitor({
  appId: 'your-application-id',
  serverUrl: 'https://monitor-api.example.com/report',
  environment: 'production',
});

// 启动性能监控
performanceMonitor.start();
```

#### 方式二：CDN 引入

```html
<script src="https://cdn.example.com/aoneng-fe-monitor-web-performance.min.js"></script>
<script>
  const performanceMonitor = new PerformanceMonitor({
    appId: 'your-application-id',
    serverUrl: 'https://monitor-api.example.com/report',
    environment: 'production',
  });
  performanceMonitor.start();
</script>
```

### 配置参数

| 参数名                 | 类型    | 描述                                       |
| ---------------------- | ------- | ------------------------------------------ |
| appId                  | string  | 应用唯一标识                               |
| serverUrl              | string  | 数据上报地址                               |
| environment            | string  | 运行环境（production/staging/development） |
| sampleRate             | number  | 采样率（0-1）                              |
| enableAutoReport       | boolean | 是否自动上报性能数据                       |
| reportInterval         | number  | 性能数据上报间隔（毫秒）                   |
| enablePerformanceAlert | boolean | 是否启用性能告警                           |

## API 文档

### PerformanceMonitor 类

```typescript
class PerformanceMonitor {
  constructor(config: PerformanceConfig);
  start(): void;
  stop(): void;
  reportPerformance(metrics: PerformanceMetrics): void;
  getPerformanceReport(): PerformanceReport;
}
```

### 工具函数

#### capturePerformance(): PerformanceMetrics

捕获页面性能指标

#### calculatePerformanceScore(metrics: PerformanceMetrics): number

计算性能得分

#### generatePerformanceReport(metrics: PerformanceMetrics): PerformanceReport

生成性能报告

## 技术实现

### 核心特性

1. **全链路性能监控** - 从页面加载到用户交互的完整性能数据
2. **多维度数据分析** - 时间、地域、设备等多维度性能分析
3. **实时告警** - 性能异常实时通知
4. **可视化报表** - 直观的性能数据展示

### 上报格式

性能数据采用 JSON 格式上报，包含以下核心字段：

```json
{
  "appId": "app-123",
  "timestamp": 1620000000000,
  "type": "performance",
  "metrics": {
    "fp": 1000,
    "fcp": 1500,
    "lcp": 2000,
    "fid": 50,
    "cls": 0.1
  },
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
