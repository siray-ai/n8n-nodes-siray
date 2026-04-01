import { NodeConnectionTypes, NodeOperationError } from "n8n-workflow";
import type {
  IExecuteFunctions,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
} from "n8n-workflow";
import { sirayEmbeddingOperation } from "./embeddingProperties";
import { methods } from "../SirayModel";

export class Siray implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Siray",
    name: "siray",
    icon: {
      light: "file:../../icons/siray.svg",
      dark: "file:../../icons/siray.svg",
    },
    group: ["input"],
    version: 1,
    description: "Siray Embedding Node",
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
    properties: [...sirayEmbeddingOperation],
  };
  methods = methods;
  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    let item: INodeExecutionData[] = [];

    for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
      try {
        const dimensions = this.getNodeParameter(
          "dimensions",
          itemIndex,
        ) as number;
        const encoding_format = this.getNodeParameter("encoding_format",itemIndex) as "float" | "base64";
        const input = this.getNodeParameter("input", itemIndex) as string | string[];
        const model = this.getNodeParameter("model", itemIndex) as string;

        const url = "https://api.siray.ai/v1/embeddings";

        const response = await this.helpers.httpRequest({
          method: "POST",
          url,
          body: {
            dimensions,
            encoding_format,
            input,
            model,
          },
          json: true,
        });


        item.push({
          json: {
            object: response.object,
            model: response.model,
            data: response.data,
            usage: {
              input_tokens:response.usage?.input_tokens,
              output_tokens:response.usage?.output_tokens,
              total_tokens: response.usage?.total_tokens,
            },
          },
        });
      } catch (error) {
        if (this.continueOnFail()) {
          item.push({
            json: this.getInputData(itemIndex)[0].json,
            error,
            pairedItem: itemIndex,
          });
        } else {
          if ((error as { context?: { itemIndex?: number } }).context) {
            (error as { context: { itemIndex?: number } }).context.itemIndex =
              itemIndex;
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
