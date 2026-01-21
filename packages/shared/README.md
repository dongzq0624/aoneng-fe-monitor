# aoneng-fe-monitor-shared

奥能电源--前端稳定性监控 共享参数

## 简介

这是奥能电源前端稳定性监控系统的共享参数模块，提供各端监控系统通用的常量、配置与工具函数，确保各模块间的一致性与可维护性。

## 核心功能

### 共享常量

- 🎯 错误类型常量
- 📊 性能指标常量
- 🔌 插件类型常量
- 📡 上报协议常量

### 配置模板

- ⚙️ 监控配置模板
- 📊 性能配置模板
- 📈 采样配置模板

### 工具函数

- 🛠️ 数据格式化工具
- 🎯 类型校验工具
- 🔍 配置合并工具
- 📦 数据转换工具

## 快速开始

### 安装

```bash
pnpm install aoneng-fe-monitor-shared --save
```

### 基础使用

#### 导入共享常量

```typescript
import { ERROR_TYPES, PERFORMANCE_METRICS, PLUGIN_TYPES } from 'aoneng-fe-monitor-shared';

// 使用错误类型常量
const errorType = ERROR_TYPES.JAVASCRIPT;

// 使用性能指标常量
const metric = PERFORMANCE_METRICS.LCP;
```

#### 使用配置模板

```typescript
import { DEFAULT_CONFIG } from 'aoneng-fe-monitor-shared';

// 基于默认配置创建新配置
const customConfig = {
  ...DEFAULT_CONFIG,
  appId: 'your-application-id',
  sampleRate: 0.5,
};
```

#### 使用工具函数

```typescript
import { formatError, validateConfig } from 'aoneng-fe-monitor-shared';

// 格式化错误信息
const errorInfo = formatError(new Error('test error'));

// 验证配置
const isValid = validateConfig(customConfig);
```

## API 文档

### 错误类型常量

#### ERROR_TYPES

```typescript
const ERROR_TYPES = {
  JAVASCRIPT: 'javascript',
  RESOURCE: 'resource',
  PROMISE: 'promise',
  CRASH: 'crash',
};
```

### 性能指标常量

#### PERFORMANCE_METRICS

```typescript
const PERFORMANCE_METRICS = {
  FP: 'fp',
  FCP: 'fcp',
  LCP: 'lcp',
  FID: 'fid',
};
```

### 插件类型常量

#### PLUGIN_TYPES

```typescript
const PLUGIN_TYPES = {
  ERROR: 'error',
  PERFORMANCE: 'performance',
  BEHAVIOR: 'behavior',
};
```

### 配置模板

#### DEFAULT_CONFIG

```typescript
const DEFAULT_CONFIG = {
  appId: '',
  serverUrl: '',
  environment: 'production',
  sampleRate: 1.0,
  maxBreadcrumbs: 20,
};
```

### 工具函数

#### formatError(error: Error): ErrorInfo

格式化错误信息，包含错误堆栈、消息等

#### validateConfig(config: any): boolean

验证配置是否合法

#### mergeConfig(defaultConfig: any, customConfig: any): any

合并配置，自定义配置覆盖默认配置

#### formatReportData(data: any): any

格式化上报数据

## 技术实现

### 核心特性

1. **单一数据源** - 集中管理所有共享常量与配置
2. **类型安全** - 完整的 TypeScript 类型定义
3. **可扩展性** - 支持自定义扩展共享参数
4. **一致性保障** - 确保各模块使用相同的常量与配置

### 目录结构

```
shared/
├── constants/          # 共享常量
│   ├── error-types.ts
│   ├── performance-metrics.ts
│   └── plugin-types.ts
├── config/            # 配置模板
│   └── default-config.ts
├── utils/             # 工具函数
│   ├── format-error.ts
│   ├── validate-config.ts
│   └── merge-config.ts
└── index.ts           # 入口文件
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
