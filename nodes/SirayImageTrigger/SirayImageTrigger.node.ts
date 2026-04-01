import {
  ITriggerFunctions,
  ITriggerResponse,
  NodeConnectionTypes,
  NodeOperationError,
} from "n8n-workflow";
import type {
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
} from "n8n-workflow";
import { sirayImageTriggerOperation } from "./imageTriggerProperties";

export class Siray implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Siray-Image-Trigger",
    name: "sirayImageTrigger",
    icon: {
      light: "file:../../icons/siray.svg",
      dark: "file:../../icons/siray.svg",
    },
    group: ["trigger"],
    version: 1,
    description: "Fetch Siray image generation result by task ID",
    defaults: {
      name: "Siray Image Trigger",
    },
    inputs: [],
    outputs: [NodeConnectionTypes.Main],
    credentials: [
      {
        name: "sirayApi",
        required: true,
        displayOptions: {
          show: {
            authentication: ["sirayApiKey"],
          },
        },
      },
    ],
    properties: [...sirayImageTriggerOperation],
  };

  async trigger(this: ITriggerFunctions): Promise<ITriggerResponse> {
    const fetchAndEmit = async () => {
      try {
        const taskId = this.getNodeParameter("taskId") as string;

        const url = `https://api.siray.ai/v1/images/generations/async/${taskId}`;

        const response = await this.helpers.httpRequest({
          method: "GET",
          url,
          json: true,
        });

        const item: INodeExecutionData = {
          json: {
            id: response.task_id,
            task_id: response.task_id,
            action: response.action,
            status: response.status,
            progress: response.progress,
            fail_reason: response.fail_reason,
            outputs: response.outputs,
            submit_time: response.submit_time,
            start_time: response.start_time,
            finish_time: response.finish_time,
            data: response.data,
          },
        };

        // Emit result once per trigger run
        this.emit([[item]]);
      } catch (error) {
        throw new NodeOperationError(this.getNode(), error);
      }
    };

    await fetchAndEmit();

    return {
      closeFunction: async () => {},
    };
  }
}
