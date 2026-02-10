import {
  nodeConnectionTypes,
  NodeConnectionTypes,
  type INodeType,
  type INodeTypeDescription,
} from "n8n-workflow";

export class Siray implements INodeType {
  description: INodeTypeDescription = {
      displayName: "Siray",
      name: "sirai",
      icon: {
          light: "file:../../icons/siray.svg",
          dark: "file:../../icons/siray.svg",
      },
      group: ["input"],
      version: 1,
      // subtitle
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
                      authentication: ["sirayApiKy"],
                  },
              },
          },
      ],
      properties: []
  };
}
