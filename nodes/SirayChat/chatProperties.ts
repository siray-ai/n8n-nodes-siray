import type { INodeProperties } from "n8n-workflow";

export const sirayChatOperation: INodeProperties[] = [
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    noDataExpression: true,
    options: [
      {
        name: "Chat Completion",
        value: "chatCompletion",
        description: "Create a chat completion",
        action: "Create a chat completion",
      },
    ],
    default: "chatCompletion",
  },
  {
    displayName: "message",
    name: "message",
    type: "string",
    noDataExpression: true,
    required: true,
    default: "",
  },
  {
    displayName: "Filters",
    name: "filter",
    type: "collection",
    placeholder: "Add Field",
    required: true,
    default: "system",
    options: [
      {
        displayName: "Type",
        name: "type",
        type: "options",
        options: [
          {
            name: "assistance",
            value: "assistance",
          },
          {
            name: "user",
            value: "user",
          },
          {
            name: "system",
            value: "system",
          },
        ],
        default: "system",
      },
    ],
  },
   {
    displayName: "Generation Type",
    name: "generationType",
    type: "options",
    options: [
      {
        name: "Chat",
        value: "chat",
      },
    
    ],
    default: "chat",
  },
  {
    displayName: "Model",
    name: "model",
    type: "options",
    required: true,
   typeOptions: {
          loadOptionsMethod: 'getModels',
          loadOptionsDependsOn: ['generationType'], 
        },
        default:''
  },
  {
    displayName: "frequency_penalty",
    name: "frequency_penalty",
    type: "number",
    typeOptions: {
      minValue: -2,
      maxValue: 2,
    },
    default: "0",
    description: "Penalty for frequent tokens. Required range: -2 <= x <= 2",
  },
  {
    displayName: "max_tokens",
    name: "max_tokens",
    type: "number",
    typeOptions: {
      minValue: 1,
      maxValue: 32768,
    },
    default: "32768",
    description:
      "Maximum number of tokens to generate. Required range: 1 <= x <= 32768",
  },
  {
    displayName: "presence_penalty",
    name: "presence_penalty",
    type: "number",
    typeOptions: {
      minValue: -2,
      maxValue: 2,
    },
    default: "0",
    description: "Penalty for new topics. Required range: -2 <= x <= 2",
  },
  {
    displayName: "stream",
    name: "stream",
    type: "boolean",
    default: "false",
    description: "Enable streaming response.",
  },
  {
    displayName: "temperature",
    name: "temperature",
    type: "number",
    typeOptions: {
      minValue: 0,
      maxValue: 2,
    },
    default: "1",
    description:
      "Controls randomness in output (higher = more random). Required range: 0 <= x <= 2",
  },
  {
    displayName: "top_p",
    name: "top_p",
    type: "number",
    typeOptions: {
      minValue: 0,
      maxValue: 1,
    },
    default: "1",
    description:
      "Nucleus sampling parameter (controls diversity). Required range: 0 <= x <= 1",
  },
];
