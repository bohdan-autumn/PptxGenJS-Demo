# pptxgenjs Demo

This is a simple Node.js demo project that generates a PowerPoint presentation using the [pptxgenjs](https://github.com/gitbrent/PptxGenJS) library.

## Prerequisites
- Node.js (v14 or higher recommended)

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```

## Usage
To generate a sample PowerPoint file, run:

```bash
node index.js
```

This will create a file named `DemoPresentation.pptx` in the project directory.

## Development Mode

To automatically regenerate the presentation whenever you change the code, use:

```bash
npm run dev
```

This uses [nodemon](https://nodemon.io/) to watch for changes and rerun the script.

## What it does
- Creates a new PowerPoint presentation
- Adds a slide with a title, a rectangle shape, and some text
- Saves the presentation as `DemoPresentation.pptx` 