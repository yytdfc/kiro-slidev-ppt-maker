# Kiro Slidev PPT Maker

[中文文档](./README_CN.md) | English

An AI-powered presentation generator using Kiro IDE and Slidev framework. Create professional AWS-themed presentations with simple natural language prompts.

🎥 **[Video Demo](https://du7u4d2q1sjz6.cloudfront.net/kiroppt_compressed.mp4)**

## Features

- 🤖 **AI-Powered**: Generate complete presentations using natural language
- 🎨 **AWS Dark Theme**: Built-in professional AWS dark theme
- 📝 **Markdown-Based**: Easy to edit and version control
- 🚀 **Quick Preview**: Instant preview with Slidev
- 📤 **Multiple Export Formats**: PDF, PPTX, PNG, and static website
- 🎯 **Best Practices**: Built-in rules for content density, diagrams, and animations

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yytdfc/kiro-slidev-ppt-maker
```

### 2. Open in Kiro IDE

```bash
kiro kiro-slidev-ppt-maker
```

### 3. Create Presentation with AI

1. Open a chat session in Kiro IDE
2. Switch to **Vibe mode** (AI agent mode)
3. Provide your requirements, for example:
   - "Create a PPT about AWS Lambda introduction"
   - "Generate a presentation based on this blog: [URL]"
   - "Make a technical presentation about microservices architecture"

### 4. Preview and Present

After the AI generates your presentation, install dependencies and start the Slidev server:

```bash
# First time: Install dependencies
npm install

# Start Slidev server
npx slidev ppt-{your-topic}/slides.md
```

For example:
```bash
npm install
npx slidev ppt-aws-lambda/slides.md
```

Slidev will start a local server and provide several URLs:

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

**Available modes:**
- **Slide Show** (`http://localhost:3030/`) - Present your slides
- **Presenter Mode** (`http://localhost:3030/presenter/`) - View with speaker notes
- **Overview** (`http://localhost:3030/overview/`) - See all slides at once
- **Export** (`http://localhost:3030/export/`) - Export to PDF, PPTX, or PNG

Open any of these URLs in your browser to view, edit, and export your presentation!

## How It Works

### Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Kiro IDE                            │
│  ┌───────────────────────────────────────────────────────┐  │
│  │              AI Agent (Vibe Mode)                     │  │
│  │  - Reads steering rules from .kiro/steering/skill.md  │  │
│  │  - Understands Slidev syntax from ppt-aws-theme-demo  │  │
│  │  - Generates presentation content                     │  │
│  └───────────────────────────────────────────────────────┘  │
│                           ↓                                 │
│  ┌───────────────────────────────────────────────────────┐  │
│  │         Generated Project: ppt-{topic}/               │  │
│  │  ├── slides.md (Markdown presentation)                │  │
│  │  └── public/ (images, assets)                         │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                           ↓
                    ┌──────────────┐
                    │    Slidev    │
                    │  (Preview &  │
                    │   Export)    │
                    └──────────────┘
```

### Key Components

1. **Steering Rules** (`.kiro/steering/skill.md`)
   - Defines AI agent behavior and guidelines
   - Specifies Slidev syntax and best practices
   - Enforces content density, diagram simplicity, and animation rules
   - Sets AWS dark theme as default

2. **Theme Template** (`ppt-aws-theme-demo/`)
   - Reference example with AWS dark theme
   - Demonstrates all available layouts and features
   - Shows proper syntax and component usage

3. **AWS Dark Theme** (`theme-aws-dark/`)
   - Professional AWS-branded dark theme
   - Optimized for technical presentations
   - Consistent styling and color scheme

## Project Structure

```
kiro-slidev-ppt-maker/
├── .kiro/
│   └── steering/
│       └── skill.md              # AI agent rules and guidelines
├── theme-aws-dark/               # AWS dark theme for Slidev
├── ppt-aws-theme-demo/           # Reference example project
│   └── slides.md                 # Example presentation
├── ppt-{your-topic}/             # Generated presentations
│   ├── slides.md                 # Your presentation content
│   └── public/                   # Assets (images, etc.)
└── README.md
```

## Examples

### Example 1: Technical Blog to Presentation
```
User: "Create a PPT based on this AWS blog about Lambda Managed Instances"
AI: [Generates ppt-lambda-managed-instances/ with complete presentation]
```

### Example 2: Topic-Based Presentation
```
User: "Make a presentation about microservices architecture with 10 slides"
AI: [Generates ppt-microservices-architecture/ with structured content]
```

### Example 3: Chinese Language Support
```
User: "根据这个技术文档制作一个中文PPT"
AI: [Generates Chinese presentation with proper formatting]
```

## Customization

### Modify AI Behavior
Edit `.kiro/steering/skill.md` to customize:
- Content organization rules
- Animation preferences
- Diagram complexity limits
- Icon usage guidelines

### Change Theme
Modify the theme in your presentation's headmatter:
```yaml
---
theme: ../theme-aws-dark  # Default AWS dark theme
# or use other themes:
# theme: default
# theme: seriph
---
```

## Requirements

- [Kiro IDE](https://kiro.dev) - AI-powered development environment
- [Node.js](https://nodejs.org/) - For running Slidev
- [npx](https://www.npmjs.com/package/npx) - Comes with Node.js

## Tips

1. **Be Specific**: Provide clear requirements for better results
2. **Iterate**: Ask the AI to modify specific slides or sections
3. **Preview Often**: Use `npx slidev` to check your presentation
4. **Keep It Simple**: Follow the AI's content density guidelines
5. **Use Examples**: Reference `ppt-aws-theme-demo/` for syntax

## Troubleshooting

### Diagrams Overflow
- AI will automatically add `{scale: 0.7}` or `{scale: 0.8}`
- If still overflowing, ask AI to split into multiple slides

### Icons Not Displaying
- AI uses verified carbon icons or emoji fallbacks
- Check `ppt-aws-theme-demo/` for working examples

### Theme Not Loading
- Ensure `theme: ../theme-aws-dark` is in headmatter
- Verify `theme-aws-dark/` directory exists

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

MIT License - See LICENSE file for details

## Credits

- Built with [Slidev](https://sli.dev/)
- Powered by [Kiro IDE](https://kiro.dev)
- AWS Dark Theme inspired by AWS design guidelines

## Links

- [Slidev Documentation](https://sli.dev/)
- [Kiro IDE](https://kiro.dev)
- [GitHub Repository](https://github.com/yytdfc/kiro-slidev-ppt-maker)
