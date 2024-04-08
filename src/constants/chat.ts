import { v4 as uuidv4 } from 'uuid';
import { ChatInterface, ConfigInterface, ModelOptions } from '@type/chat';
import useStore from '@store/store';

const date = new Date();
const dateString =
  date.getFullYear() +
  '-' +
  ('0' + (date.getMonth() + 1)).slice(-2) +
  '-' +
  ('0' + date.getDate()).slice(-2);

// default system message obtained using the following method: https://twitter.com/DeminDimin/status/1619935545144279040
export const _defaultSystemMessage =
  import.meta.env.VITE_DEFAULT_SYSTEM_MESSAGE ??
  `You are ChatGPT, a large language model trained by OpenAI.
Carefully heed the user's instructions. 
Respond using Markdown.`;

export const modelOptions: ModelOptions[] = [
  'starcoder2-15b',
  'openchat_3.5',
  'lzlv_70b_fp16_hf',
  'CodeLlama-34b-Instruct-hf',
  'pygmalion-13b-4bit-128g',
  'airoboros-70b',
  'Mixtral-8x7B-Instruct-v0.1',
  'Mistral-7B-Instruct-v0.1',
  'dolphin-2.6-mixtral-8x7b',
  'Llama-2-7b-chat-hf',
  'CodeLlama-70b-Instruct-hf',
  'Llama-2-70b-chat-hf',
  'airoboros-l2-70b-gpt4-1.4.1',
  'Llama-2-13b-chat-hf',
  'gemma-7b',
  'llava-1.5-7b-hf',
  'gpt-3.5-turbo',
  'gpt-3.5-turbo-16k',
  'gpt-4',
  'gpt-4-turbo',
  'claude-3-sonnet',
  'claude-3-haiku',
  'claude-instant-100k',
  'claude-instant',
  'gemini-pro'
];

export const defaultModel = 'claude-3-sonnet';

const modelMaxToken = {
  "starcoder2-15b": 5120,
  "openchat_3.5": 4096,
  "lzlv_70b_fp16_hf": 7168,
  "CodeLlama-34b-Instruct-hf": 4096,
  "pygmalion-13b-4bit-128g": 8192,
  "airoboros-70b": 8192,
  "Mixtral-8x7B-Instruct-v0.1": 8192,
  "Mistral-7B-Instruct-v0.1": 8192,
  "dolphin-2.6-mixtral-8x7b": 8192,
  "Llama-2-7b-chat-hf": 8192,
  "CodeLlama-70b-Instruct-hf": 8192,
  "Llama-2-70b-chat-hf": 8192,
  "airoboros-l2-70b-gpt4-1.4.1": 8192,
  "Llama-2-13b-chat-hf": 8192,
  "gemma-7b": 8192,
  "llava-1.5-7b-hf": 8192,
  "gpt-3.5-turbo": 4096,
  "gpt-3.5-turbo-16k": 16384,
  "gpt-4": 8192,
  "gpt-4-turbo": 8192,
  "claude-3-sonnet": 4096,
  "claude-3-haiku": 4096,
  "claude-instant-100k": 8192,
  "claude-instant": 4096,
  "gemini-pro": 8192
};

const modelCost = {
  "starcoder2-15b": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "openchat_3.5": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "lzlv_70b_fp16_hf": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "CodeLlama-34b-Instruct-hf": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "pygmalion-13b-4bit-128g": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "airoboros-70b": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "Mixtral-8x7B-Instruct-v0.1": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "Mistral-7B-Instruct-v0.1": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "dolphin-2.6-mixtral-8x7b": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "Llama-2-7b-chat-hf": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "CodeLlama-70b-Instruct-hf": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "Llama-2-70b-chat-hf": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "airoboros-l2-70b-gpt4-1.4.1": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "Llama-2-13b-chat-hf": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "gemma-7b": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "llava-1.5-7b-hf": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "gpt-3.5-turbo": {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  "gpt-3.5-turbo-16k": {
    prompt: { price: 0.003, unit: 1000 },
    completion: { price: 0.004, unit: 1000 },
  },
  "gpt-4": {
    prompt: { price: 0.03, unit: 1000 },
    completion: { price: 0.06, unit: 1000 },
  },
  "gpt-4-turbo": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "claude-3-sonnet": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "claude-3-haiku": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "claude-instant-100k": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "claude-instant": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "gemini-pro": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  }
};

export const defaultUserMaxToken = 4000;

export const _defaultChatConfig: ConfigInterface = {
  model: defaultModel,
  max_tokens: defaultUserMaxToken,
  temperature: 1,
  presence_penalty: 0,
  top_p: 1,
  frequency_penalty: 0,
};

export const generateDefaultChat = (
  title?: string,
  folder?: string
): ChatInterface => ({
  id: uuidv4(),
  title: title ? title : 'New Chat',
  messages:
    useStore.getState().defaultSystemMessage.length > 0
      ? [{ role: 'system', content: useStore.getState().defaultSystemMessage }]
      : [],
  config: { ...useStore.getState().defaultChatConfig },
  titleSet: false,
  folder,
});

export const codeLanguageSubset = [
  'python',
  'javascript',
  'java',
  'go',
  'bash',
  'c',
  'cpp',
  'csharp',
  'css',
  'diff',
  'graphql',
  'json',
  'kotlin',
  'less',
  'lua',
  'makefile',
  'markdown',
  'objectivec',
  'perl',
  'php',
  'php-template',
  'plaintext',
  'python-repl',
  'r',
  'ruby',
  'rust',
  'scss',
  'shell',
  'sql',
  'swift',
  'typescript',
  'vbnet',
  'wasm',
  'xml',
  'yaml',
];
