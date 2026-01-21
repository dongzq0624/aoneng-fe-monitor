# aoneng-fe-monitor-wx-mini-program-performance

奥能电源--前端稳定性监控 小程序性能监控

## 简介

这是奥能电源前端团队开发的微信小程序性能监控系统，专注于小程序端性能数据采集与分析，帮助开发团队优化小程序性能体验。

## 核心功能

### 性能监控
- 📊 小程序启动性能（冷启动/热启动）
- ⏱️ 页面加载性能统计
- 📈 网络请求耗时分析
- 🎯 渲染性能监控
- 📦 包体积分析

### 资源监控
- 📦 静态资源加载速度
- 📊 缓存命中率统计
- 🔍 资源依赖分析

### 性能优化建议
- 💡 自动生成性能优化报告
- 📋 性能瓶颈定位
- 🎯 优化方案推荐

## 快速开始

### 安装

```bash
npm install aoneng-fe-monitor-wx-mini-program-performance --save
```

### 基础使用

```typescript
// app.js
import PerformanceMonitor from 'aoneng-fe-monitor-wx-mini-program-performance';

const performanceMonitor = new PerformanceMonitor({
  appId: 'your-application-id',
  serverUrl: 'https://monitor-api.example.com/report',
  environment: 'production'
});

// 启动性能监控
performanceMonitor.start();
```

### 配置参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| appId | string | 应用唯一标识 |
| serverUrl | string | 数据上报地址 |
| environment | string | 运行环境（production/staging/development） |
| sampleRate | number | 采样率（0-1） |
| enableAutoReport | boolean | 是否自动上报性能数据 |

## 技术实现

### 核心特性

1. **全链路性能监控** - 从启动到页面渲染的完整性能数据
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
    "launchTime": 1200,
    "pageLoadTime": 800,
    "networkTime": 300,
    "renderTime": 200
  },
  "page": "pages/index/index",
  "device": {
    "model": "iPhone 13",
    "network": "4G"
  }
}
```

## 兼容性

- ✅ 微信小程序基础库 2.2.0+
- ✅ 支付宝小程序（适配中）
- ✅ 字节跳动小程序（适配中）

## 开发指南

### 本地开发

```bash
# 安装依赖
npm install

# 构建
npm run build

# 测试
npm run test
```

## License

MIT
