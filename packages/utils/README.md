# aoneng-fe-monitor-utils

奥能电源--前端稳定性监控 通用函数

## 简介

这是奥能电源前端稳定性监控系统的通用工具库，提供监控系统所需的核心工具函数与通用能力。

## 核心功能

### 工具函数

- 🛠️ 数据格式化工具
- 📊 性能计算工具
- 🎯 错误处理工具
- 🔍 数据校验工具

### 通用能力

- 📦 数据上报器
- 🎯 采样器
- 📊 统计分析器
- 🔍 数据加密工具

## 快速开始

### 安装

```bash
pnpm install aoneng-fe-monitor-utils --save
```

### 基础使用

```typescript
import { formatError, generateUUID, sampleData } from 'aoneng-fe-monitor-utils';

// 格式化错误信息
const errorInfo = formatError(new Error('test error'));

// 生成唯一标识
const uuid = generateUUID();

// 数据采样
const sampledData = sampleData(rawData, 0.5);
```

## API 文档

### 错误处理

#### formatError(error: Error): ErrorInfo

格式化错误信息，包含错误堆栈、消息等

#### captureStackTrace(): string

捕获当前调用栈

### 数据处理

#### generateUUID(): string

生成唯一标识

#### sampleData(data: any[], rate: number): any[]

数据采样，按指定比例返回数据

#### formatReportData(data: any): any

格式化上报数据

### 性能工具

#### calculatePerformance(metrics: PerformanceMetrics): PerformanceReport

计算性能指标

#### formatPerformanceData(data: PerformanceData): PerformanceReport

格式化性能数据

### 网络工具

#### sendReport(data: any, url: string): Promise<void>

发送上报数据

#### batchSendReports(data: any[], url: string): Promise<void>

批量发送上报数据

## 技术实现

### 核心特性

1. **模块化设计** - 按功能模块划分工具函数
2. **类型安全** - 完整的 TypeScript 类型定义
3. **高性能** - 优化的算法实现
4. **可扩展性** - 支持自定义扩展

## 兼容性

- ✅ 浏览器环境
- ✅ Node.js 环境
- ✅ 微信小程序环境

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
