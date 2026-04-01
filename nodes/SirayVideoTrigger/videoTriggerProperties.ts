import type { INodeProperties } from "n8n-workflow";

export const sirayImageTriggerOperation: INodeProperties[] = [
  {
    displayName: "Task ID",
    name: "taskId",
    type: "string",
    required: true,
    default: "",
    description: "Task ID returned from the Siray image generation request",
  },
];
