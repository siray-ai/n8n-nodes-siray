import { NodeConnectionTypes, NodeOperationError } from "n8n-workflow";
import type {
  IExecuteFunctions,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
} from "n8n-workflow";
import { sirayChatOperation } from "./chatProperties";
import { methods } from "../SirayModel";

export class Siray implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Siray-Chat",
    name: "sirayChat",
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
    properties: [...sirayChatOperation],
  };
  methods = methods;
  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();

    let item: INodeExecutionData[] = [];

    for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
      try {
      
        const message = this.getNodeParameter("message", itemIndex) as string;
        const filter  = this.getNodeParameter("filter", itemIndex) as string;
        const model = this.getNodeParameter("model", itemIndex) as string;
        const max_tokens = this.getNodeParameter("max_tokens",itemIndex,) as string;
        const temperature = this.getNodeParameter("temprature",itemIndex,) as string;

        /*
        Following fields are implemented by Offical Siray API Documentation
        But N8N methods only requires model, temperature and max_token
        */

        /* 
           const frequency_penalty = this.getNodeParameter("frequency_penalty",itemIndex,) as string;
           const presence_penalty = this.getNodeParameter("presence_penalty",itemIndex,) as string;
           const stream = this.getNodeParameter("stream", itemIndex) as string;
           const top_p = this.getNodeParameter("top_p", itemIndex) as string;
        */
        let url: string = "https://api.siray.ai/v1/chat/completions";

        const response = await this.helpers.httpRequest({
          method: "POST",
          url,
          body: {
            model,
            messages: [
              {
                role: filter,
                content: message,
              },
            ],

            temperature,
            max_tokens,
          },
          json: true,
        });
        const content = response.choices?.[0]?.message?.content;  

        item.push({
          json: {
            id: response.id,
            object: response.object,
            created: response.created,
            model: response.model,

            content,

            usage: {
              input_tokens: response.usage?.input_tokens,
              output_tokens: response.usage?.output_tokens,
              total_tokens: response.usage?.total_tokens,
            },
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
