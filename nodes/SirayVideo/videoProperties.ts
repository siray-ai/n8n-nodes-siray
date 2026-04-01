import type { INodeProperties } from "n8n-workflow";

export const sirayVideoOperation: INodeProperties[] = [
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    noDataExpression: true,
    options: [
      {
        name: "Video Generation",
        value: "videoGeneration",
        description: "Generate a video from text or image input",
        action: "Generate a video",
      },
    ],
    default: "videoGeneration",
  },
  {
    displayName: "Generation Type",
    name: "generationType",
    type: "options",
    options: [
      {
        name: "Text to Video",
        value: "text-to-video",
      },
      {
        name: "Image to Video",
        value: "image-to-video",
      },
    ],
    default: "text-to-video",
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
    displayName: "Duration",
    name: "duration",
    type: "number",
    default: 8,
    typeOptions: {
      minValue: 8,
      maxValue: 8,
    },
    description: "Video duration in seconds. Fixed value: 8",
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
        generationType: ["image-to-video"],
      },
    },
    description: "Input image for generation, it can be data URL or image URL",
  },
];
