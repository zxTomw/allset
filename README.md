# 🧺 菜齐了 (AllSet) - Smart Cooking Assistant

> **Language / 语言选择**: [English](#english) | [中文](#中文)

> **Note**: This documentation was AI-generated / 以下内容由 AI 生成

---

## English

**菜齐了** is an AI-powered smart cooking assistant that helps users discover recipes, manage their fridge inventory, and automatically order ingredients. The name means "All ingredients ready!" in Chinese.

## 🎯 Features

### 🤖 AI Chat Assistant

- **Smart Recipe Recommendations**: Chat with "小齐" (Xiao Qi), your AI kitchen assistant
- **Personalized Suggestions**: Get recipe recommendations based on preferences, portion size, and cooking time
- **Real-time Streaming**: Powered by DeepSeek AI with server-sent events for smooth conversation

### 📱 Mobile App (React Native + Expo)

- **Recipe Discovery**: Browse and search through curated recipe collection
- **Smart Fridge Management**: Track ingredients in your virtual fridge
- **One-Click Shopping**: Automatically generate shopping lists with ingredient prices
- **Interactive Forms**: Portion size calculator, dietary preferences, and taste profile setup

### 🔧 Backend API (NestJS)

- **Chat Streaming Endpoint**: Real-time AI conversation via Server-Sent Events
- **Recipe Management**: CRUD operations for recipes with proper DTOs
- **Environment Configuration**: Secure API key management

## 🏗️ Architecture

This is a **Turborepo monorepo** with the following structure:

```
caiqile/
├── apps/
│   ├── api/           # NestJS backend with AI chat & recipe APIs
│   └── mobile/        # Expo React Native app with bottom tab navigation
├── libs/
│   └── types.ts       # Shared TypeScript interfaces
├── turbo.json         # Turborepo pipeline configuration
└── package.json       # Workspace management
```

## 🛠️ Tech Stack

### Frontend (Mobile)

- **Framework**: Expo SDK ~53.0.9 with React Native 0.79.2
- **Navigation**: React Navigation v7 with bottom tabs
- **UI Components**: Custom components with modern design
- **AI Integration**: LangChain with DeepSeek and Ollama support
- **State Management**: React hooks with chat state management
- **Icons**: Lucide React Native icons

### Backend (API)

- **Framework**: NestJS v11 with TypeScript
- **AI**: LangChain with DeepSeek Chat model
- **Streaming**: Server-Sent Events (SSE) for real-time responses
- **Testing**: Jest with e2e testing setup
- **Architecture**: Modular design with Controllers, Services, and DTOs

### Development Tools

- **Monorepo**: Turborepo v2.5.3 with npm workspaces
- **Language**: TypeScript 5.7+
- **Linting**: ESLint with Prettier
- **Testing**: Jest for unit and e2e tests

## 🚀 Getting Started

### Prerequisites

- Node.js v16 or later
- npm (using npm workspaces, not Yarn)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd caiqile

# Install all dependencies
npm install
```

### Development

Start all services in development mode:

```bash
npm run dev
```

This will start:

- **API Server**: http://localhost:3000 (NestJS with hot reload)
- **Mobile App**: Expo development server with QR code

Or run services individually:

```bash
# Backend API only
npm run dev --workspace=api

# Mobile app only
npm run dev --workspace=mobile
```

### Building

Build all projects:

```bash
npm run build
```

Build specific workspace:

```bash
npm run build --workspace=api
npm run build --workspace=mobile
```

## 📋 Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start all apps in development mode   |
| `npm run build` | Build all apps for production        |
| `npm run lint`  | Run ESLint across all workspaces     |
| `npm run test`  | Run Jest tests across all workspaces |

### Workspace-Specific Commands

**API (NestJS)**:

```bash
npm run dev --workspace=api       # Development with watch mode
npm run start --workspace=api     # Production start
npm run test --workspace=api      # Run unit tests
npm run test:e2e --workspace=api  # Run e2e tests
```

**Mobile (Expo)**:

```bash
npm run dev --workspace=mobile      # Start Expo dev server
npm run android --workspace=mobile  # Open Android
npm run ios --workspace=mobile      # Open iOS
npm run web --workspace=mobile      # Open web version
```

## 🔧 Configuration

### API Environment Variables

Create a `.env` file in `apps/api/`:

```env
# DeepSeek AI Configuration (required for chat functionality)
DEEPSEEK_API_KEY=your_deepseek_api_key_here
PORT=3000
```

### Mobile App Configuration

The mobile app is configured in `apps/mobile/app.json` with:

- Bundle identifier: `com.tomzxw.mobile`
- Expo project ID for EAS builds
- iOS and Android adaptive icons

## 🌟 Key Features Explained

### 1. AI Chat System

The chat system uses **DeepSeek** AI model with streaming responses:

- Real-time token streaming via Server-Sent Events
- Chinese language support with cooking expertise
- Context-aware recipe recommendations

### 2. Recipe Management

- Full CRUD API for recipe management
- Structured DTOs for data validation
- Recipe entity with extensible properties

### 3. Mobile Navigation

- **首页 (Home)**: AI chat interface
- **菜谱 (Recipes)**: Recipe browsing and favorites
- **冰箱 (Fridge)**: Ingredient inventory management
- **购物车 (Cart)**: Smart shopping lists with pricing
- **我的 (Profile)**: User preferences and settings

### 4. Smart Forms

- Portion size calculator (人数/portion count)
- Cooking time preferences (做菜时长)
- Taste profile setup (口味偏好)
- Quick reply suggestions for common queries

---

## 中文

**菜齐了**是一款AI驱动的智能厨房助手，帮助用户发现食谱、管理冰箱库存，并自动订购食材。

## 🎯 功能特色

### 🤖 AI 聊天助手

- **智能菜谱推荐**：与"小齐"聊天，获得个性化菜谱建议
- **个性化建议**：根据偏好、用餐人数和烹饪时间获得推荐
- **实时流式对话**：采用 DeepSeek AI，通过服务器推送事件实现流畅对话

### 📱 移动应用 (React Native + Expo)

- **菜谱发现**：浏览和搜索精选菜谱集合
- **智能冰箱管理**：追踪虚拟冰箱中的食材库存
- **一键购物**：自动生成带价格的购物清单
- **交互式表单**：用餐人数计算器、饮食偏好和口味设置

### 🔧 后端 API (NestJS)

- **聊天流式端点**：通过服务器推送事件实现实时AI对话
- **菜谱管理**：带有适当DTO的菜谱CRUD操作
- **环境配置**：安全的API密钥管理

## 🏗️ 架构

这是一个基于 **Turborepo** 的单体仓库，结构如下：

```
caiqile/
├── apps/
│   ├── api/           # NestJS 后端，包含 AI 聊天和菜谱 API
│   └── mobile/        # Expo React Native 应用，底部标签导航
├── libs/
│   └── types.ts       # 共享 TypeScript 接口
├── turbo.json         # Turborepo 管道配置
└── package.json       # 工作区管理
```

## 🛠️ 技术栈

### 前端 (移动端)

- **框架**：Expo SDK ~53.0.9 配合 React Native 0.79.2
- **导航**：React Navigation v7 底部标签导航
- **UI组件**：现代设计的自定义组件
- **AI集成**：LangChain 支持 DeepSeek 和 Ollama
- **状态管理**：React hooks 聊天状态管理
- **图标**：Lucide React Native 图标

### 后端 (API)

- **框架**：NestJS v11 配合 TypeScript
- **AI**：LangChain 配合 DeepSeek Chat 模型
- **流式传输**：服务器推送事件(SSE)实现实时响应
- **测试**：Jest 配合 e2e 测试设置
- **架构**：模块化设计，包含控制器、服务和DTO

### 开发工具

- **单体仓库**：Turborepo v2.5.3 配合 npm workspaces
- **语言**：TypeScript 5.7+
- **代码检查**：ESLint 配合 Prettier
- **测试**：Jest 用于单元测试和 e2e 测试

## 🚀 快速开始

### 环境要求

- Node.js v16 或更高版本
- npm (使用 npm workspaces，非 Yarn)

### 安装

```bash
# 克隆仓库
git clone <repository-url>
cd caiqile

# 安装所有依赖
npm install
```

### 开发

启动所有服务的开发模式：

```bash
npm run dev
```

这将启动：

- **API 服务器**：http://localhost:3000 (NestJS 热重载)
- **移动应用**：Expo 开发服务器及二维码

或单独运行服务：

```bash
# 仅后端 API
npm run dev --workspace=api

# 仅移动应用
npm run dev --workspace=mobile
```

### 构建

构建所有项目：

```bash
npm run build
```

构建特定工作区：

```bash
npm run build --workspace=api
npm run build --workspace=mobile
```

## 📋 可用脚本

| 命令            | 描述                       |
| --------------- | -------------------------- |
| `npm run dev`   | 开发模式启动所有应用       |
| `npm run build` | 生产环境构建所有应用       |
| `npm run lint`  | 在所有工作区运行 ESLint    |
| `npm run test`  | 在所有工作区运行 Jest 测试 |

### 工作区特定命令

**API (NestJS)**：

```bash
npm run dev --workspace=api       # 监听模式开发
npm run start --workspace=api     # 生产环境启动
npm run test --workspace=api      # 运行单元测试
npm run test:e2e --workspace=api  # 运行 e2e 测试
```

**移动端 (Expo)**：

```bash
npm run dev --workspace=mobile      # 启动 Expo 开发服务器
npm run android --workspace=mobile  # 打开 Android
npm run ios --workspace=mobile      # 打开 iOS
npm run web --workspace=mobile      # 打开 Web 版本
```

## 🔧 配置

### API 环境变量

在 `apps/api/` 中创建 `.env` 文件：

```env
# DeepSeek AI 配置 (聊天功能必需)
DEEPSEEK_API_KEY=your_deepseek_api_key_here
PORT=3000
```

### 移动应用配置

移动应用在 `apps/mobile/app.json` 中配置：

- Bundle identifier: `com.tomzxw.mobile`
- EAS 构建的 Expo 项目 ID
- iOS 和 Android 自适应图标

## 🌟 核心功能详解

### 1. AI 聊天系统

聊天系统使用 **DeepSeek** AI 模型，支持流式响应：

- 通过服务器推送事件实现实时令牌流
- 中文语言支持，具备烹饪专业知识
- 上下文感知的菜谱推荐

### 2. 菜谱管理

- 菜谱管理的完整 CRUD API
- 结构化 DTO 进行数据验证
- 可扩展属性的菜谱实体

### 3. 移动端导航

- **首页**：AI 聊天界面
- **菜谱**：菜谱浏览和收藏
- **冰箱**：食材库存管理
- **购物车**：智能购物清单及价格
- **我的**：用户偏好和设置

### 4. 智能表单

- 用餐人数计算器
- 烹饪时长偏好
- 口味偏好设置
- 常见查询的快速回复建议
