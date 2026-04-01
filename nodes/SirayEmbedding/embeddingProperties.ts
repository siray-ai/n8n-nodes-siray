import type { INodeProperties } from "n8n-workflow";

export const sirayEmbeddingOperation: INodeProperties[] = [
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    noDataExpression: true,
    options: [
      {
        name: "Create Embedding",
        value: "createEmbedding",
        description: "Create embedding vectors from input",
        action: "Create an embedding",
      },
    ],
    default: "createEmbedding",
  },
   {
    displayName: "Dimensions",
    name: "dimensions",
    type: "number",
    required: true,
    default: 1,
    typeOptions: {
      minValue: 1,
      maxValue: 1,
    },
    description: "The number of dimensions the resulting output embeddings should have. Only supported in some models. Required range: x >= 1",
  },
    {
    displayName: "Encoding Format",
    name: "encoding_format",
    type: "options",
    required: true,
    options: [
      {
        name: "Float",
        value: "float",
      },
      {
        name: "Base64",
        value: "base64",
      },
    ],
    default: "float",
    description: "The format to return the embeddings in. Available options: float, base64 ",
  },
   {
    displayName: "Input",
    name: "input",
    type: "string",
    required: true,
    typeOptions: {
    multipleValues: true, 
  },
    default: [],
    description:
      'The input text to embed, either a string or array of strings',
  },{
    displayName: "Generation Type",
    name: "generationType",
    type: "options",
    options: [
      {
        name: "Embedding",
        value: "embedding",
      },
    
    ],
    default: "embedding",
  },
  {
    displayName: "Model",
    name: "model",
    type: "string",
    required: true,
    typeOptions: {
          loadOptionsMethod: 'getModels',
          loadOptionsDependsOn: ['generationType'], 
        },
    description: "Model name to use for the request",
    default:''
  },
 
];
