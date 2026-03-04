# Siray AI - Custom n8n Workflow Automation

A custom n8n implementation tailored for Siray AI, providing intelligent workflow automation with AI-powered capabilities.

## Overview

This project extends n8n with custom nodes and integrations specifically designed for Siray AI's automation needs. It enables seamless workflow creation, AI integration, and process automation.

## Features

- Custom AI-powered nodes for Siray workflows
- Extended n8n functionality with domain-specific integrations
- Intelligent automation capabilities
- Scalable workflow management

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- n8n core dependencies

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd n8n-nodes-siray

# Install dependencies
npm install

# Start development server
npm run dev
```

### Usage

```bash
# Build the project
npm run build

```

## Example Usage

You can test all three nodes (Chat, Image, and Video) by copying the example JSON and pasting it directly onto your n8n canvas:

<details>
  <summary>Check <a href="./example-workflow.json">Example Workflow</a></summary>
</details>

### Recommended

- Follow n8n's [development environment setup guide](https://docs.n8n.io/integrations/creating-nodes/build/node-development-environment/)

> [!NOTE]
> The `@n8n/node-cli` is included as a dev dependency and will be installed automatically when you run `npm install`. The CLI includes n8n for local development, so you don't need to install n8n globally.

This command runs `n8n-node dev` which:

- Builds your node with watch mode
- Starts n8n with your node available
- Automatically rebuilds when you make changes
- Opens n8n in your browser (usually http://localhost:5678)

You can now test your node in n8n workflows!

> [!NOTE]
> Learn more about CLI commands in the [@n8n/node-cli documentation](https://www.npmjs.com/package/@n8n/node-cli).

## Project Structure

```
.
├── nodes/          # Custom n8n nodes
├── credentials/    # Custom credential types
├── workflows/      # Example workflows
└──  docs/          # Documentation
```

## Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before submitting pull requests.

## Development Status

See [TODO.md](TODO.md) for current development status and planned features.

## License

See [LICENSE](LICENSE) file for details.

## Support

For issues and questions, please open an issue in the repository.

---

Built with ❤️ by Siray AI
