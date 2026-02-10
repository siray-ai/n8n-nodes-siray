# n8n-nodes-siray

Custom n8n nodes created by Siray.

## Table of Contents

- About
- Project Structure
- Roadmap / TODO
- Contributing
- Code of Conduct

## About

This repository contains custom nodes for n8n tailored for Siray workflows. The goal is to add nodes incrementally and document each feature as a separate issue so progress is visible and manageable over time.

## Project Structure

```bash
n8n-nodes-siray/
|-- package.json
|-- tsconfig.json
|-- nodes/
|   |-- SirayNode/
|   |   |-- SirayNode.node.ts          # Main node logic
|   |   |-- SirayNode.node.json        # Node metadata
|   |   `-- SirayNode.svg              # Node icon
|   `-- index.ts                       # Export definitions
|-- credentials/
|   |-- MyNodeApi.credentials.ts       # Authentication logic
|   `-- MyNodeApi.credentials.json     # Credential metadata
`-- README.md
```

## Roadmap / TODO

These are intentionally small, issue-sized tasks. I will open one issue per item and implement them over time.

- Add a second node with a different trigger type
- Add a resource/operation collection example (list, get, create, update, delete)
- Add pagination and rate-limit handling helpers
- Add tests for node execution and credential validation
- Add a sample workflow JSON demonstrating the node usage
- Add documentation for environment variables and required credentials
- Add linting and formatting scripts
- Add release notes and versioning policy
- Add CI workflow for build and lint checks
- Add a changelog template

## Contributing

Contributions are welcome. Please open an issue first so it aligns with the roadmap and stays focused.

- Read the contribution guidelines in `CONTRIBUTING.md`.
- Follow the community standards in `CODE_OF_CONDUCT.md`.

## Code of Conduct

Please review `CODE_OF_CONDUCT.md` before participating in this project.
