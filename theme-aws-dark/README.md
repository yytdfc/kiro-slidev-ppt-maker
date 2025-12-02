# Slidev Theme AWS Dark

A professional dark theme for Slidev presentations, designed with AWS branding and style guidelines.

## Features

- 🎨 AWS brand colors and gradients (Blue, Green, Purple, Orange)
- 🌙 Dark mode optimized with beautiful gradient backgrounds
- 📐 Multiple layout options (cover, section, quote, two-cols, etc.)
- 🖼️ Background images for cover and section slides
- 💼 Professional footer with AWS logo and copyright
- 📊 Big number component for statistics
- 🎯 Gradient text component for highlights

## Installation

### Local Theme (Recommended for development)

Add the following to your slides frontmatter:

```yaml
---
theme: ./theme-aws-dark
---
```

### As NPM Package (Future)

```bash
npm install slidev-theme-aws-dark
```

```yaml
---
theme: aws-dark
---
```

## Layouts

### Cover
Title slide with AWS gradient background

```yaml
---
layout: cover
sessionId: "SESSION-123"  # Optional, only shows if set
---

::title::
Your Presentation Title

::subtitle::
Your subtitle text

::speaker::
Speaker name (pronouns)

Speaker job title

Speaker company
```

Or use simple format:
```yaml
---
layout: cover
---
# Your Title
Your subtitle

Speaker info
```

The `sessionId` parameter is optional. If not provided or empty, the session ID box will not be displayed.

### Section
Section divider with subtle gradient background
```yaml
---
layout: section
---
# Section Title

Optional subtitle text
```

### Default
Standard content slide
```yaml
---
layout: default
---
# Slide Title
Content here
```

### Center
Centered content with same styling as default layout
```yaml
---
layout: center
---
# Centered Title

Content is centered horizontally and vertically
```

### Intro
Introduction layout with subtitle support
```yaml
---
layout: intro
---
# Main Title
## Subtitle
Content here
```

### Two Columns
Two-column layout
```yaml
---
layout: two-cols
---
Left column content

::right::
Right column content
```

### Image Right
Content on left, image on right
```yaml
---
layout: image-right
---
# Title
Content here

::right::
![Image](/path/to/image.png)
```

### End
Closing slide with AWS gradient background (blue to purple)
```yaml
---
layout: end
---
# Thank You
Questions?
```

## Components

### GradientText Component
Highlight text with gradient colors:

```html
<GradientText color="blue-green">Highlighted text</GradientText>
<GradientText color="blue-purple">Another highlight</GradientText>
<GradientText color="orange-pink">Third option</GradientText>
```

Available colors:
- `blue-green` (default): Blue to green gradient
- `blue-purple`: Blue to purple gradient
- `orange-pink`: Orange to pink gradient

### AWSLogo Component
Display AWS logo with different sizes:

```html
<AWSLogo size="sm" />
<AWSLogo size="md" />
<AWSLogo size="lg" />
<AWSLogo size="xl" />
```

## Custom CSS Classes

### Gradient Text (manual styling):
```html
<span class="gradient-text">Highlighted text</span>
```

## Assets

All assets are included in the theme's `public` folder:
- `/aws_logo.png` - AWS logo (white version)
- `/ppt-title-background.png` - Cover slide background with gradient
- `/section-title-background.png` - Section slide background with gradient

These assets are automatically available when using the theme. No need to copy them to your presentation folder.

## Mermaid Diagrams

Mermaid diagrams are styled with white lines and boxes for clarity on dark backgrounds.

### Available Arrow Styles

```mermaid
graph LR
    A --> B   %% Normal arrow (triangle)
    A -.-> B  %% Dotted arrow
    A ==> B   %% Thick arrow
    A --o B   %% Circle end
    A --x B   %% Cross end
    A --- B   %% No arrow (line only)
    A <--> B  %% Bidirectional arrow
```

**Syntax:**
- `-->` Normal arrow with triangle head (default)
- `-.->` Dotted line with arrow
- `==>` Thick line with arrow
- `--o` Line with circle end
- `--x` Line with cross end
- `---` Line without arrow
- `<-->` Bidirectional arrow

For AWS architecture diagrams, use `-->` for standard connections or `---` for line-only connections.

## Colors

- AWS Orange: `#ff9900`
- AWS Blue: `#00a1e0`
- AWS Green: `#00d4aa`
- AWS Purple: `#9d4edd`
- Dark Blue: `#232f3e`
- Background: `rgb(20, 30, 44)`
