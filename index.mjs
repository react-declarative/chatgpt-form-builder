import { createCompletion, loadModel } from "gpt4all";
import dotenv from 'dotenv';
import fs from "fs";

dotenv.config();

const SYSTEM_PROMPT = fs.readFileSync('./assets/SYSTEM_PROMPT.txt').toString();
const USER_PROMPT = fs.readFileSync('./assets/USER_PROMPT.txt').toString();
const TRANSFORM_PROMPT = fs.readFileSync('./assets/TRANSFORM_PROMPT.txt').toString();

const model = await loadModel("Nous-Hermes-2-Mistral-7B-DPO.Q4_0.gguf", {
  verbose: true,
});

if (!process.env.SKIP_GENERATE) {
  console.log('Step 1. Generating raw LLM responce');

  console.time("RAW");
  {
    const chat = await model.createChatSession({
      temperature: 0.8,
      systemPrompt: `### System:\n${SYSTEM_PROMPT}.\n\n`,
    });
    const userResponce = await createCompletion(chat, USER_PROMPT);
    const userResponceContent = userResponce.choices[0].message.content.trim();
    fs.writeFileSync("./tmp.txt", userResponceContent);
  }
  console.timeEnd("RAW"); 
}

if (!process.env.SKIP_TRANSFORM) {
  console.log('Step 2. Transforming .jsx code for react app');

  console.time('JSX');
  {
    const userResponceContent = fs.readFileSync('./tmp.txt').toString();
    const chat = await model.createChatSession({
      temperature: 0.8,
      systemPrompt: `### System:\n${TRANSFORM_PROMPT}.\n\n`,
    });
    const transformResponce = await createCompletion(chat, userResponceContent);
    const transformResponceContent = transformResponce.choices[0].message.content.trim();
    fs.writeFileSync("./src/out/index.tsx", transformResponceContent);
  }
  console.timeEnd('JSX');  
}


console.log('Done! Run the app by using `npm run test`')
