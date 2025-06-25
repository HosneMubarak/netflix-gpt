# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check
out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information
on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Create .env file:

In the root of react project, create a .env file `.env` with following content:
We're using Vite, prefix env variables with `VITE_`

```
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_GROQ_API_KEY=your_groq_api_key

```

To collect api key you need to create a account on `https://console.groq.com/` and
`https://developer.themoviedb.org/docs/getting-started`

## App url

- https://netflixgpt-78167.web.app/
- https://netflixgpt-78167.firebaseapp.com/