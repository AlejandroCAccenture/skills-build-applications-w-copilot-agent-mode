# Octofit Tracker Frontend

React 19 presentation tier for Octofit Tracker, with routes for activities, the leaderboard, teams, users, and workouts.

## Configure the API URL

Define `VITE_CODESPACE_NAME` in `octofit-tracker/frontend/.env.local` using your Codespaces name without the `-8000` suffix:

```dotenv
VITE_CODESPACE_NAME=your-codespace-name
```

The frontend calls `https://${VITE_CODESPACE_NAME}-8000.app.github.dev/api/[resource]/`. Restart Vite after changing environment variables. If `VITE_CODESPACE_NAME` is unset or blank, requests use `http://localhost:8000`.

The API client supports array responses and paginated responses with `results`, `data`, or `items` arrays.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
