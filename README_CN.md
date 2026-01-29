# Kiro Slidev PPT 制作工具

[English](./README.md) | 中文文档

一个基于 Kiro IDE 和 Slidev 框架的 AI 驱动演示文稿生成器。通过简单的自然语言提示创建专业的 AWS 主题演示文稿。

🎥 **[视频演示](https://du7u4d2q1sjz6.cloudfront.net/kiroppt_compressed.mp4)**

## 特性

- 🤖 **AI 驱动**: 使用自然语言生成完整的演示文稿
- 🎨 **AWS 深色主题**: 内置专业的 AWS 深色主题
- 📝 **基于 Markdown**: 易于编辑和版本控制
- 🚀 **快速预览**: 使用 Slidev 即时预览
- 📤 **多种导出格式**: PDF、PPTX、PNG 和静态网站
- 🎯 **最佳实践**: 内置内容密度、图表和动画规则

## 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/yytdfc/kiro-slidev-ppt-maker
```

### 2. 在 Kiro IDE 中打开

```bash
kiro kiro-slidev-ppt-maker
```

### 3. 使用 AI 创建演示文稿

1. 在 Kiro IDE 中打开对话会话
2. 切换到 **Vibe 模式**（AI 代理模式）
3. 提供您的需求，例如：
   - "创建一个关于 AWS Lambda 介绍的 PPT"
   - "根据这个博客生成演示文稿：[URL]"
   - "制作一个关于微服务架构的技术演示"

### 4. 预览和演示

AI 生成演示文稿后，安装依赖并启动 Slidev 服务器：

```bash
# 首次运行：安装依赖
npm install

# 启动 Slidev 服务器
npx slidev ppt-{您的主题}/slides.md
```

例如：
```bash
npm install
npx slidev ppt-aws-lambda/slides.md
```

Slidev 将启动本地服务器并提供多个 URL：

```
●■▲ Slidev  v52.10.1

  theme       ../theme-aws-dark
  css engine  unocss
  entry       /path/to/ppt-aws-lambda/slides.md

  public slide show   > http://localhost:3030/
  presenter mode      > http://localhost:3030/presenter/
  slides overview     > http://localhost:3030/overview/
  export slides       > http://localhost:3030/export/
```

**可用模式：**
- **幻灯片放映** (`http://localhost:3030/`) - 演示您的幻灯片
- **演讲者模式** (`http://localhost:3030/presenter/`) - 查看演讲者备注
- **概览模式** (`http://localhost:3030/overview/`) - 一次查看所有幻灯片
- **导出模式** (`http://localhost:3030/export/`) - 导出为 PDF、PPTX 或 PNG

在浏览器中打开任意 URL 即可查看、编辑和导出您的演示文稿！

## 工作原理

### 架构

```
┌─────────────────────────────────────────────────────────────┐
│                         Kiro IDE                            │
│  ┌───────────────────────────────────────────────────────┐  │
│  │              AI 代理 (Vibe 模式)                       │  │
│  │  - 从 .kiro/steering/skill.md 读取规则                 │  │
│  │  - 从 ppt-aws-theme-demo 学习 Slidev 语法              │  │
│  │  - 生成演示文稿内容                                     │  │
│  └───────────────────────────────────────────────────────┘  │
│                           ↓                                 │
│  ┌───────────────────────────────────────────────────────┐  │
│  │         生成的项目: ppt-{主题}/                         │  │
│  │  ├── slides.md (Markdown 演示文稿)                     │  │
│  │  └── public/ (图片、资源)                              │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                           ↓
                    ┌──────────────┐
                    │    Slidev    │
                    │  (预览和导出) │
                    └──────────────┘
```

### 核心组件

1. **引导规则** (`.kiro/steering/skill.md`)
   - 定义 AI 代理的行为和指南
   - 指定 Slidev 语法和最佳实践
   - 强制执行内容密度、图表简洁性和动画规则
   - 设置 AWS 深色主题为默认主题

2. **主题模板** (`ppt-aws-theme-demo/`)
   - 带有 AWS 深色主题的参考示例
   - 展示所有可用的布局和功能
   - 显示正确的语法和组件使用方法

3. **AWS 深色主题** (`theme-aws-dark/`)
   - 专业的 AWS 品牌深色主题
   - 针对技术演示优化
   - 一致的样式和配色方案

## 项目结构

```
kiro-slidev-ppt-maker/
├── .kiro/
│   └── steering/
│       └── skill.md              # AI 代理规则和指南
├── theme-aws-dark/               # Slidev 的 AWS 深色主题
├── ppt-aws-theme-demo/           # 参考示例项目
│   └── slides.md                 # 示例演示文稿
├── ppt-{您的主题}/               # 生成的演示文稿
│   ├── slides.md                 # 您的演示文稿内容
│   └── public/                   # 资源（图片等）
└── README.md
```

## 示例

### 示例 1: 技术博客转演示文稿
```
用户: "根据这篇关于 Lambda Managed Instances 的 AWS 博客创建 PPT"
AI: [生成 ppt-lambda-managed-instances/ 完整演示文稿]
```

### 示例 2: 基于主题的演示文稿
```
用户: "制作一个关于微服务架构的演示文稿，包含 10 张幻灯片"
AI: [生成 ppt-microservices-architecture/ 结构化内容]
```

### 示例 3: 中文支持
```
用户: "根据这个技术文档制作一个中文 PPT"
AI: [生成格式正确的中文演示文稿]
```

## 自定义

### 修改 AI 行为
编辑 `.kiro/steering/skill.md` 以自定义：
- 内容组织规则
- 动画偏好
- 图表复杂度限制
- 图标使用指南

### 更改主题
在演示文稿的 headmatter 中修改主题：
```yaml
---
theme: ../theme-aws-dark  # 默认 AWS 深色主题
# 或使用其他主题:
# theme: default
# theme: seriph
---
```

## 系统要求

- [Kiro IDE](https://kiro.dev) - AI 驱动的开发环境
- [Node.js](https://nodejs.org/) - 运行 Slidev
- [npx](https://www.npmjs.com/package/npx) - Node.js 自带

## 使用技巧

1. **明确需求**: 提供清晰的需求以获得更好的结果
2. **迭代优化**: 要求 AI 修改特定的幻灯片或部分
3. **经常预览**: 使用 `npx slidev` 检查您的演示文稿
4. **保持简洁**: 遵循 AI 的内容密度指南
5. **参考示例**: 查看 `ppt-aws-theme-demo/` 了解语法

## 故障排除

### 图表溢出
- AI 会自动添加 `{scale: 0.7}` 或 `{scale: 0.8}`
- 如果仍然溢出，要求 AI 拆分为多个幻灯片

### 图标不显示
- AI 使用已验证的 carbon 图标或 emoji 替代
- 查看 `ppt-aws-theme-demo/` 中的工作示例

### 主题未加载
- 确保 headmatter 中有 `theme: ../theme-aws-dark`
- 验证 `theme-aws-dark/` 目录存在

## 贡献

欢迎贡献！请随时提交问题或拉取请求。

## 许可证

MIT 许可证 - 详见 LICENSE 文件

## 致谢

- 使用 [Slidev](https://sli.dev/) 构建
- 由 [Kiro IDE](https://kiro.dev) 驱动
- AWS 深色主题灵感来自 AWS 设计指南

## 链接

- [Slidev 文档](https://sli.dev/)
- [Kiro IDE](https://kiro.dev)
- [GitHub 仓库](https://github.com/yytdfc/kiro-slidev-ppt-maker)
