# ⚛️ chatgpt-form-builder

> The ChatGPT app which write a part of [React Vite](https://vitejs.dev/) application

## How It's Work

1. The [postinstall.mjs](./scripts/postinstall.mjs) file download `Nous-Hermes-2-Mistral-7B` [LLM](https://en.wikipedia.org/wiki/Large_language_model)

2. The [index.mjs](./index.mjs) file generate `./src/out/index.jsx` according to [SYSTEM_PROMPT](./assets/SYSTEM_PROMPT.txt)

3. The Vite serve the UI on `http://localhost:3000`

## Usage

1. Run `npm install`

2. Edit [USER_PROMPT](./assets/USER_PROMPT.txt)

3. Run `npm start` to generate the code. Will take a couple of minutes if running on CPU. GPU require at least 16Gb embedded RAM

4. Run `npm run test` to launch the code
