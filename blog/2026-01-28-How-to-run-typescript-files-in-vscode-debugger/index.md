---
slug: how-to-run-typescript-files-in-vscode-debugger
title: How to run typescript files in vscode debugger
authors: ["hari"]
tags: [ts, node-js, vs-code, debugging]
draft: false
# draft will hide this from list of blog
---


I came to know Node.js now can run typescript files by its own (_Bye bye ts-node_). So I 
started a project to familiarize the openAI JS SDK but I got an error in one of my 
execution. Now I want to run this typescript (es-module) file in my vscode debugger. This is 
the project I am referring: https://github.com/hkvongit/llm-experiments

<!-- truncate -->

## Introduction

Starting from Node.js v22.6.0, you can run TypeScript files natively using the `--experimental-strip-types` flag. This eliminates the need for tools like `ts-node` or pre-compilation steps. In this guide, I'll show you how to set up VS Code's debugger to leverage this feature.

I started a project to familiarize myself with the OpenAI JS SDK but encountered an error during execution. I needed to debug my TypeScript (ES module) file directly in VS Code. Here's the project I'm referring to: https://github.com/hkvongit/llm-experiments

## Prerequisites

- **Node.js v22.6.0 or higher** — This version introduced experimental TypeScript support
- **VS Code** — With the built-in JavaScript debugger
- A TypeScript project with ES modules configured

## Step-by-Step Setup

### Create the launch.json file

1. Open your project in VS Code
2. Go to the **Run and Debug** panel (Ctrl+Shift+D / Cmd+Shift+D)
3. Click **"create a launch.json file"** or navigate to `.vscode/launch.json`

### Step 2: Configure the debugger

Add the following configuration to your `launch.json`:

```json showLineNumbers title=".vscode/launch.json"
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug index.ts",
      // highlight-next-line
      "runtimeExecutable": "/Users/harikrishnanv/.nvm/versions/node/v25.5.0/bin/node",
      "skipFiles": ["<node_internals>/**"],
      // highlight-next-line
      "program": "${workspaceFolder}/index.ts",
      "console": "integratedTerminal",
      // highlight-start
      "runtimeArgs": ["--env-file=.env", "--experimental-strip-types"],
      "args": ["--invoke_fn=functionCalling"]
      // highlight-end
    }
  ]
}
```

## Configuration Options Explained

| Property | Description |
|----------|-------------|
| `type` | Set to `"node"` for Node.js debugging |
| `request` | Set to `"launch"` to start a new process |
| `name` | Display name shown in the debug dropdown |
| `runtimeExecutable` | Path to Node.js binary. Use `"node"` for system default, or specify full path like `/Users/username/.nvm/versions/node/v25.5.0/bin/node` if using nvm |
| `skipFiles` | Array of glob patterns to skip during debugging. `<node_internals>/**` skips Node.js core modules |
| `program` | Entry point file to debug. Use `${workspaceFolder}` for project root |
| `console` | Set to `"integratedTerminal"` to see output in VS Code's terminal |
| `runtimeArgs` | Arguments passed to Node.js runtime (before your script) |
| `args` | Arguments passed to your script (accessible via `process.argv`) |

### Key Points in My Configuration

- **`runtimeExecutable`**: I specify the full path to ensure VS Code uses the correct Node.js version (especially important when using nvm)
- **`--env-file=.env`**: Loads environment variables from `.env` file (Node.js v20.6.0+ feature)
- **`--experimental-strip-types`**: Enables native TypeScript execution
- **`args`**: Custom arguments parsed in my code using `process.argv.slice(2)`

## Running the Debugger

1. Set breakpoints in your TypeScript file by clicking in the gutter (left of line numbers)
2. Press **F5** or click the green play button in the Run and Debug panel
3. Your code will pause at breakpoints, allowing you to inspect variables and step through execution

## Troubleshooting

### "Cannot find module" errors
Ensure your `package.json` has `"type": "module"` if using ES modules.

### Wrong Node.js version
If VS Code uses a different Node.js version, specify the full path in `runtimeExecutable`.

### TypeScript syntax errors
The `--experimental-strip-types` flag only strips type annotations — it doesn't perform type checking. Run `tsc --noEmit` separately for type checking.

## Conclusion

With Node.js's native TypeScript support, debugging TypeScript files in VS Code has become much simpler. No more `ts-node` setup, no compilation steps — just configure `launch.json` and start debugging!
