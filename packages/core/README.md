# aoneng-fe-monitor-core

奥能电源--前端稳定性监控 核心功能

## 简介

这是奥能电源前端稳定性监控系统的核心模块，提供监控系统的核心能力与基础架构，支撑各端监控系统的运行。

## 核心功能

### 监控核心

- 🎯 事件总线系统
- 📊 数据采集器
- 📦 数据处理器
- 🔌 插件系统

### 配置管理

- ⚙️ 全局配置管理
- 🎯 动态配置更新
- 🔒 配置加密存储

### 数据上报

- 📡 多协议上报支持
- 📦 批量上报策略
- 🔌 上报插件扩展

### 错误处理

- 🚨 全局错误捕获
- 📊 错误聚合分析
- 🔍 错误溯源

## 快速开始

### 安装

```bash
pnpm install aoneng-fe-monitor-core --save
```

### 基础使用

```typescript
import { CoreMonitor } from 'aoneng-fe-monitor-core';

const coreMonitor = new CoreMonitor({
  appId: 'your-application-id',
  serverUrl: 'https://monitor-api.example.com/report',
  environment: 'production',
});

// 注册插件
coreMonitor.registerPlugin(ErrorPlugin);
coreMonitor.registerPlugin(PerformancePlugin);

// 启动监控
coreMonitor.start();
```

### 配置参数

| 参数名              | 类型    | 描述                                       |
| ------------------- | ------- | ------------------------------------------ |
| appId               | string  | 应用唯一标识                               |
| serverUrl           | string  | 数据上报地址                               |
| environment         | string  | 运行环境（production/staging/development） |
| sampleRate          | number  | 采样率（0-1）                              |
| maxBreadcrumbs      | number  | 最大行为栈长度                             |
| enableBatchReport   | boolean | 是否启用批量上报                           |
| batchReportInterval | number  | 批量上报间隔（毫秒）                       |

## 技术实现

### 核心架构

1. **事件驱动架构** - 基于事件总线的模块化设计
2. **插件化扩展** - 支持自定义插件扩展功能
3. **分层架构** - 采集层、处理层、上报层分离
4. **高性能设计** - 低内存占用、低CPU消耗

### 核心模块

#### EventBus

事件总线系统，负责各模块间的通信

#### DataCollector

数据采集器，负责收集各类监控数据

#### DataProcessor

数据处理器，负责数据清洗、转换、聚合

#### ReportClient

上报客户端，负责将数据上报到后端

## 插件开发

### 开发自定义插件

```typescript
import { Plugin } from 'aoneng-fe-monitor-core';

class CustomPlugin implements Plugin {
  name = 'custom-plugin';

  init(monitor: CoreMonitor) {
    // 插件初始化逻辑
  }

  start() {
    // 插件启动逻辑
  }

  stop() {
    // 插件停止逻辑
  }
}
```

## 兼容性

- ✅ 浏览器环境
- ✅ Node.js 环境
- ✅ 微信小程序环境
- ✅ 支付宝小程序环境
- ✅ 字节跳动小程序环境

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
