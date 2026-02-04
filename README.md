# n8n-nodes-siray

Custom n8n nodes created by Siray


### Structure

`n8n-nodes-siray/
├── package.json
├── tsconfig.json
├── nodes/
│   ├── SirayNode/
│   │   ├── SirayNode.node.ts          # Main node logic
│   │   ├── SirayNode.node.json        # Node metadata
│   │   └── SirayNode.svg              # Node icon
│   └── index.ts                    # Export definitions
├── credentials/
│   ├── MyNodeApi.credentials.ts    # Authentication logic
│   └── MyNodeApi.credentials.json  # Credential metadata
└── README.md`