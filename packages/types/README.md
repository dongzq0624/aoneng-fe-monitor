# aoneng-fe-monitor-types

奥能电源--前端稳定性监控 通用类型声明

## 简介

这是奥能电源前端稳定性监控系统的通用类型声明模块，提供各端监控系统所需的 TypeScript 类型定义，确保代码类型安全与一致性。

## 核心功能

### 基础类型

- 🎯 错误类型定义
- 📊 性能指标类型
- 🔌 插件类型定义
- 📡 上报数据类型

### 配置类型

- ⚙️ 监控配置类型
- 📊 性能配置类型
- 📈 采样配置类型

### 工具类型

- 🛠️ 通用工具类型
- 🎯 类型守卫
- 🔍 类型转换

## 快速开始

### 安装

```bash
pnpm install aoneng-fe-monitor-types --save
```

### 基础使用

#### 导入基础类型

```typescript
import { ErrorInfo, PerformanceMetrics, ReportData } from 'aoneng-fe-monitor-types';

// 使用错误类型
const errorInfo: ErrorInfo = {
  message: 'test error',
  stack: 'error stack',
  type: 'javascript',
};

// 使用性能指标类型
const performance: PerformanceMetrics = {
  fp: 1000,
  fcp: 1500,
  lcp: 2000,
};
```

#### 使用配置类型

```typescript
import { MonitorConfig } from 'aoneng-fe-monitor-types';

// 定义监控配置
const config: MonitorConfig = {
  appId: 'your-application-id',
  serverUrl: 'https://monitor-api.example.com/report',
  environment: 'production',
};
```

## API 文档

### 错误类型

#### ErrorInfo

```typescript
interface ErrorInfo {
  message: string;
  stack?: string;
  type: string;
  context?: any;
}
```

#### ErrorType

```typescript
type ErrorType = 'javascript' | 'resource' | 'promise' | 'crash';
```

### 性能类型

#### PerformanceMetrics

```typescript
interface PerformanceMetrics {
  fp?: number;
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
}
```

#### PerformanceReport

```typescript
interface PerformanceReport {
  metrics: PerformanceMetrics;
  timestamp: number;
  url: string;
}
```

### 配置类型

#### MonitorConfig

```typescript
interface MonitorConfig {
  appId: string;
  serverUrl: string;
  environment?: 'production' | 'staging' | 'development';
  sampleRate?: number;
  maxBreadcrumbs?: number;
}
```

### 上报类型

#### ReportData

```typescript
interface ReportData {
  appId: string;
  timestamp: number;
  type: 'error' | 'performance' | 'behavior';
  data: any;
}
```

### 工具类型

#### PartialBy

```typescript
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
```

#### RequiredBy

```typescript
type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
```

## 技术实现

### 核心特性

1. **类型安全** - 完整的 TypeScript 类型定义
2. **一致性保障** - 确保各模块使用相同的类型定义
3. **可扩展性** - 支持自定义扩展类型
4. **类型守卫** - 提供类型校验工具函数

### 目录结构

```
types/
├── error/             # 错误类型
│   ├── error-info.ts
│   └── error-type.ts
├── performance/       # 性能类型
│   ├── performance-metrics.ts
│   └── performance-report.ts
├── config/           # 配置类型
│   └── monitor-config.ts
├── report/           # 上报类型
│   └── report-data.ts
└── index.ts          # 入口文件
```

## 兼容性

- ✅ TypeScript 4.0+
- ✅ JavaScript 项目
- ✅ 浏览器环境
- ✅ Node.js 环境
- ✅ 小程序环境

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
