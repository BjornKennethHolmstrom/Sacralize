# Sacralize

A modern web application for exploring and creating sacred geometry patterns, built with SvelteKit, TypeScript, and TailwindCSS.

## 🌟 Features

- Interactive sacred geometry pattern generators
  - Flower of Life generator
  - Fibonacci spiral generator
  - Custom shape tools (coming soon)
- Educational content about sacred geometry
  - Comprehensive guides and tutorials
  - Historical background
  - Famous examples
- Multilingual support (English and Swedish)
- Modern, responsive design with dark theme
- SVG export functionality

## 🚀 Getting Started

### Prerequisites

- Node.js (version specified in `.npmrc`)
- npm or another package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sacralize.git
cd sacralize
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🛠️ Tech Stack

- **Framework:** [SvelteKit](https://kit.svelte.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
  - [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
  - [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
  - [@tailwindcss/container-queries](https://github.com/tailwindlabs/tailwindcss-container-queries)
- **Internationalization:** [svelte-i18n](https://github.com/kaisermann/svelte-i18n)
- **Code Quality:**
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
- **Testing:**
  - [Vitest](https://vitest.dev/) for unit testing
  - [Playwright](https://playwright.dev/) for e2e testing

## 📁 Project Structure

```
sacralize/
├── src/
│   ├── lib/
│   │   ├── components/      # Reusable Svelte components
│   │   ├── translations/    # i18n translation files
│   │   └── i18n.js         # i18n configuration
│   ├── routes/             # SvelteKit routes and pages
│   └── app.css            # Global styles
├── static/                # Static assets
├── tests/                # Test files
└── configuration files   # Various config files
```

## 🎨 Design System

The project uses a custom color scheme based on the Dracula theme:

- Primary colors:
  - Cosmic Dark: `#282a36`
  - Cosmic: `#6272a4`
  - Cosmic Light: `#bd93f9`
- Accent colors:
  - Green: `#50fa7b`
  - Pink: `#ff79c6`
  - Yellow: `#f1fa8c`

## 🧪 Testing

Run unit tests:
```bash
npm run test:unit
```

Run e2e tests:
```bash
npm run test:e2e
```

## 🌍 Internationalization

The application supports multiple languages through `svelte-i18n`. Currently supported:

- English (en)
- Swedish (sv)

Translation files are located in `src/lib/translations/`.

## 📜 Scripts

- `dev`: Start development server
- `build`: Build for production
- `preview`: Preview production build
- `check`: Type-check the codebase
- `test`: Run all tests
- `lint`: Run ESLint and Prettier
- `format`: Format code with Prettier

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 👥 Contributing

Contributions are welcome! Here's how you can help:

- Suggest new content for the app.
- Help translate the app into other languages.
- Report bugs or suggest improvements.
- Submit a pull request with new features or fixes.

## 🙏 Acknowledgments

Created by Björn Kenneth Holmström with assistance from:
- ChatGPT 4o
- Claude 3.5 Sonnet

## 📧 Contact

Write to Björn via bjorn.kenneth.holmstrom@gmail.com with the subject 'Sacralize'
