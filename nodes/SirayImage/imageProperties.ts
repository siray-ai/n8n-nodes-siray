import type { INodeProperties } from "n8n-workflow";

export const sirayImageOperation: INodeProperties[] = [
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    noDataExpression: true,
    options: [
      {
        name: "Image Generation",
        value: "imageGeneration",
        description: "Generate an image from text or image input",
        action: "Generate an image",
      },
    ],
    default: "imageGeneration",
  },
  {
    displayName: "Generation Type",
    name: "generationType",
    type: "options",
    options: [
      {
        name: "Text to Image",
        value: "text-to-image",
      },
      {
        name: "Image to Image",
        value: "image-to-image",
      },
    ],
    default: "text-to-image",
  },
  {
    displayName: "Prompt",
    name: "prompt",
    type: "string",
    noDataExpression: true,
    required: true,
    default: "",
    description: "Text prompt for generation",
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
    description: "Model name to use for the request",
    default:''

  },
 
  {
    displayName: "Image",
    name: "image",
    type: "string",
    default: "",
    displayOptions: {
      show: {
        generationType: ["image-to-image"],
      },
    },
    description: "Input image for generation, it can be data URL or image URL",
  },
];
