# Contributing to Siray AI Custom n8n

Thank you for your interest in contributing to Siray AI's custom n8n implementation! We welcome contributions from the community.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone <your-fork-url>`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test your changes thoroughly
6. Submit a pull request

## Development Setup

### Prerequisites

- Node.js v18 or higher
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Installation

```bash
# Install dependencies
npm install

# Set up development environment
npm run setup

# Start development server
npm run dev
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## How to Contribute

### Types of Contributions

- **Bug Fixes**: Fix issues and improve stability
- **New Features**: Add new custom nodes or functionality
- **Documentation**: Improve or add documentation
- **Tests**: Add or improve test coverage
- **Performance**: Optimize existing code
- **Refactoring**: Improve code quality and maintainability

## Coding Standards

### Code Style

- Use TypeScript for all new code
- Follow existing code formatting (Prettier configuration)
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### TypeScript Guidelines

```typescript
// Use explicit types
function processData(input: string): ProcessedData {
  // Implementation
}

// Use interfaces for object shapes
interface NodeConfig {
  name: string;
  type: string;
  options?: Record<string, any>;
}

// Avoid 'any' type when possible
```

### File Organization

```
nodes/
  ├── YourNode/
  │   ├── YourNode.node.ts
  │   ├── YourNode.node.json
  │   └── YourNode.test.ts
credentials/
  ├── YourCredential.credentials.ts
```

## Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(nodes): add Siray AI Chat node
fix(auth): resolve authentication token expiry issue
docs(readme): update installation instructions
test(nodes): add unit tests for data processing node
```

## Pull Request Process

1. **Update Documentation**: Ensure README and relevant docs are updated
2. **Add Tests**: Include tests for new features or bug fixes
3. **Update TODO.md**: Mark completed features as done
4. **Follow Code Style**: Ensure code passes linting
5. **Write Clear Description**: Explain what and why in PR description
6. **Link Issues**: Reference related issues in PR description
7. **Request Review**: Tag relevant reviewers

### PR Checklist

- [ ] Code follows project style guidelines
- [ ] Tests added/updated and passing
- [ ] Documentation updated
- [ ] TODO.md updated if applicable
- [ ] Commit messages follow convention
- [ ] No merge conflicts
- [ ] PR description is clear and complete

## Reporting Bugs

### Before Submitting

- Check existing issues to avoid duplicates
- Verify the bug in the latest version
- Collect relevant information

### Bug Report Template

```markdown
**Description**
Clear description of the bug

**Steps to Reproduce**
1. Step one
2. Step two
3. Step three

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Environment**
- OS: [e.g., Windows 11]
- Node.js version: [e.g., 18.0.0]
- n8n version: [e.g., 1.0.0]

**Screenshots**
If applicable

**Additional Context**
Any other relevant information
```

## Suggesting Features

We welcome feature suggestions! Please:

1. Check if the feature already exists or is planned (see TODO.md)
2. Open an issue with the "feature request" label
3. Provide clear use cases and benefits
4. Be open to discussion and feedback

### Feature Request Template

```markdown
**Feature Description**
Clear description of the proposed feature

**Use Case**
Why is this feature needed?

**Proposed Solution**
How should it work?

**Alternatives Considered**
Other approaches you've thought about

**Additional Context**
Any other relevant information
```

## Code Review Process

- All submissions require review
- Reviewers will provide constructive feedback
- Address feedback promptly
- Maintain respectful communication
- Be patient - reviews take time

## Community

- Be respectful and inclusive
- Follow our [Code of Conduct](CODE_OF_CONDUCT.md)
- Help others when possible
- Share knowledge and learn together

## Questions?

If you have questions, feel free to:
- Open an issue with the "question" label
- Reach out to maintainers
- Check existing documentation

---

Thank you for contributing to Siray AI Custom n8n! 🚀
