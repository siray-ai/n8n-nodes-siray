import { NodeConnectionTypes, NodeOperationError } from "n8n-workflow";
import { methods } from "../SirayModel";
import type {
  IExecuteFunctions,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
} from "n8n-workflow";
import { sirayVideoOperation } from "./videoProperties";

export class Siray implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Siray-Video",
    name: "sirayVideo",
    icon: {
      light: "file:../../icons/siray.svg",
      dark: "file:../../icons/siray.svg",
    },
    group: ["input"],
    version: 1,
    description: "Siray Node",
    defaults: {
      name: "Siray",
    },
    usableAsTool: true,
    inputs: [NodeConnectionTypes.Main],
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
    properties: [...sirayVideoOperation],
  };
  methods = methods;
  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();

    let item: INodeExecutionData[] = [];

    for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
      try {
        const model = this.getNodeParameter("model", itemIndex) as string;
        const duration = this.getNodeParameter("duration", itemIndex) as string;
        const prompt = this.getNodeParameter("prompt", itemIndex) as string;
        const image = this.getNodeParameter("image", itemIndex) as string;

        let url: string = "https://api.siray.ai/v1/video/generations";

        const body: {
          duration: string;
          model: string;
          prompt: string;
          image?: string;
        } = {
          duration,
          model,
          prompt,
        };

        if (image) {
          body.image = image;
        }

        const response = await this.helpers.httpRequest({
          method: "POST",
          url,

          body,
          json: true,
        });

        item.push({
          json: {
            code: response.code,
            message: response.message,
            task_id: response.data.task_id,
          },
        });
      } catch (error) {
        // This node should never fail but we want to showcase how
        // to handle errors.
        if (this.continueOnFail()) {
          item.push({
            json: this.getInputData(itemIndex)[0].json,
            error,
            pairedItem: itemIndex,
          });
        } else {
          // Adding `itemIndex` allows other workflows to handle this error
          if (error.context) {
            // If the error thrown already contains the context property,
            // only append the itemIndex
            error.context.itemIndex = itemIndex;
            throw error;
          }
          throw new NodeOperationError(this.getNode(), error, {
            itemIndex,
          });
        }
      }
    }

    return [item];
  }
}
