/**
 * Siray API Credentials
 * Handles authentication for Siray AI services
 * 
 * This credential type manages:
 * - API key authentication
 * - Base URL configuration
 * - Authentication headers
 * - Token management
 */

import {
  IAuthenticateGeneric,
  Icon, 
  ICredentialType,
  ICredentialTestRequest,
  INodeProperties,
} from 'n8n-workflow';

export class SirayApi implements ICredentialType {
  name = 'sirayApi';
  displayName = 'Siray API';
  // icon: Icon = { light: 'file:../icons/siray.svg', dark: 'file:../icons/siray.dark.svg' };

  documentationUrl = 'https://docs.siray.ai';
  
  properties: INodeProperties[] = [
    {
      displayName: 'API Key',
      name: 'apiKey',
      type: 'string',
      typeOptions: { password: true },
      default: '',
      required: true,
      description: 'Your Siray AI API key',
    },
    {
      displayName: 'Base URL',
      name: 'baseUrl',
      type: 'string',
      default: 'https://api.siray.ai',
      description: 'The base URL for Siray AI API',
    },
  ];

  authenticate: IAuthenticateGeneric = {
    type: 'generic',
    properties: {
      headers: {
        Authorization: '=Bearer {{$credentials.apiKey}}',
      },
    },
  };
  // test: ICredentialTestRequest = {
	// 	request: {
	// 		baseURL: 'https://api.github.com',
	// 		url: '/user',
	// 		method: 'GET',
	// 	},
	// };
}
