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
  `You are a helpful assistant.`;

export const modelOptions: ModelOptions[] = [
  'starcoder2-15b',
  'openchat_3.5',
  'lzlv_70b_fp16_hf',
  'CodeLlama-34b-Instruct-hf',
  'pygmalion-13b-4bit-128g',
  'airoboros-70b',
  'dbrx-instruct',
  'zephyr-orpo-141b-A35b-v0.1',
  'Mixtral-8x7B-Instruct-v0.1',
  'Mistral-7B-Instruct-v0.1',
  'Mistral-7B-Instruct-v0.2',
  'dolphin-2.6-mixtral-8x7b',
  'WizardLM-2-8x22B',
  'WizardLM-2-7B',
  'Llama-2-7b-chat-hf',
  'CodeLlama-70b-Instruct-hf',
  'Llama-2-70b-chat-hf',
  'Llama-2-13b-chat-hf',
  'gemma-7b',
  'gemma-1.1-7b-it',
  'llava-1.5-7b-hf',
  'gpt-3.5-turbo',
  'gpt-3.5-turbo-16k',
  'net-gpt-3.5-turbo',
  'claude-3-sonnet',
  'claude-3-haiku',
  'claude-instant-100k',
  'claude-instant',
  'gemini-pro'
];

export const defaultModel = 'WizardLM-2-8x22B';

export const modelMaxToken = {
  "starcoder2-15b": 16000,
  "openchat_3.5": 8000,
  "lzlv_70b_fp16_hf": 4000,
  "CodeLlama-34b-Instruct-hf": 4000,
  "pygmalion-13b-4bit-128g": 2000,
  "airoboros-70b": 4000,
  "dbrx-instruct": 132000,
  "zephyr-orpo-141b-A35b-v0.1": 64000,
  "Mixtral-8x7B-Instruct-v0.1": 32000,
  "Mistral-7B-Instruct-v0.1": 32000,
  "Mistral-7B-Instruct-v0.2": 32000,
  "dolphin-2.6-mixtral-8x7b": 32000,
  "WizardLM-2-8x22B": 64000,
  "WizardLM-2-7B": 32000,
  "Llama-2-7b-chat-hf": 4000,
  "CodeLlama-70b-Instruct-hf": 4000,
  "Llama-2-70b-chat-hf": 4000,
  "Llama-2-13b-chat-hf": 4000,
  "gemma-7b": 8000,
  "gemma-1.1-7b-it": 8000,
  "llava-1.5-7b-hf": 4000,
  "gpt-3.5-turbo": 4000,
  "gpt-3.5-turbo-16k": 16000,
  "net-gpt-3.5-turbo": 4000,
  "claude-3-sonnet": 200000,
  "claude-3-haiku": 200000,
  "claude-instant-100k": 100000,
  "claude-instant": 8000,
  "gemini-pro": 30000
};

export const modelCost = {
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
  "dbrx-instruct": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "zephyr-orpo-141b-A35b-v0.1": {
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
  "Mistral-7B-Instruct-v0.2": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "dolphin-2.6-mixtral-8x7b": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "WizardLM-2-8x22B": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "WizardLM-2-7B": {
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
  "Llama-2-13b-chat-hf": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "gemma-7b": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "gemma-1.1-7b-it": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "llava-1.5-7b-hf": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "gpt-3.5-turbo": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "gpt-3.5-turbo-16k": {
    prompt: { price: 0.0, unit: 1000 },
    completion: { price: 0.0, unit: 1000 },
  },
  "net-gpt-3.5-turbo": {
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

export const defaultUserMaxToken = 32000;

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
