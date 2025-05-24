# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

````js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})

# Frontend Project Boilerplate

This is a modern, scalable, and well-structured React + Vite + TypeScript frontend boilerplate, following best practices and the latest tooling.

---

## 📁 Project Structure Overview

```bash
src/
├── app/                      # App-level configuration and entry points
│   ├── providers/           # App-wide context providers (e.g., theme, auth)
│   └── router/              # App router configuration (e.g., routes, layouts)
├── assets/                  # Static assets (images, fonts, svgs, etc.)
├── components/              # Shared UI components
│   ├── ui/                 # Base UI components (e.g., Button, Input)
│   ├── atoms/              # Small, reusable components
│   ├── molecules/          # Combinations of atoms
│   ├── organisms/          # Larger composed sections
│   └── templates/          # Page layouts and templates
├── config/                  # App configuration (env, constants, etc.)
├── features/                # Feature-based modules
│   └── [feature]/
│       ├── api/           # API logic specific to the feature
│       ├── components/    # Feature-specific components
│       ├── hooks/         # Feature-specific hooks
│       ├── routes/        # Pages/routes related to this feature
│       ├── stores/        # 🆕 Feature-specific Zustand stores
│       ├── types/         # Type definitions for the feature
│       └── utils/         # 🆕 Utilities related to the feature
├── hooks/                  # 🆕 Global custom hooks
├── lib/                    # Third-party integrations and helpers
│   ├── api/               # 🆕 API client (e.g., ky wrapper)
│   ├── auth/              # 🆕 Auth utilities (e.g., token handling)
│   ├── storage/           # 🆕 Storage utilities (e.g., localStorage helpers)
│   └── utils.ts           # General-purpose utility functions
├── stores/                 # 🆕 Global Zustand stores
├── styles/                 # Global styles, themes, and variables
├── types/                  # 🆕 Global TypeScript type definitions
├── utils/                  # Shared utility functions
└── test/                   # Testing setup and global mocks

📘 docs/ folder with structured developer guides

🧭 Code comments and JSDoc or TSDoc annotations

🧩 A CONTRIBUTING.md for contribution and structure rules

💬 Onboarding guides in Notion, Docusaurus, or similar tools
````
