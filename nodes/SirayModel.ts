import type {
	ILoadOptionsFunctions,
	INodePropertyOptions,
} from 'n8n-workflow';

export type SirayModelType = {
	id: number;
	name: string;
	model_name: string;
	description: string;
	tag: string;
};

/* TODO:
 Test if [model.tag === "multi-model"] works im each model
 and produce expected results
*/

/*
    Tag = 'chat' | 'text-to-image' | 'image-to-image'| 'text-to-video'	|
          'image-to-video' | 'video-to-video' | 'multi-model' | 'embedding';
*/ 
export const methods = {
	loadOptions: {
	getModels: async function(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
			const generationType = this.getCurrentNodeParameter('generationType') as string;
			const url = 'https://api-gateway.siray.ai/api/model-verse/models';

			const response = await this.helpers.httpRequest({
				method: 'GET',
				url: url,
				headers: {
					Accept: 'application/json',
				},
			});
      // model is an json object, for now set as 'any'
			const allmodels: SirayModelType[] = response.data.map((model:any) => ({
				id: model.id,
				name: model.name,
				model_name: model.model_name,
				description: model.description,
				tag: model.tag,
			}));
			return allmodels
				.filter((m) => m.tag === generationType)
				.sort((a, b) => a.name.localeCompare(b.name))
				.map((n) => ({
					name: n.name,
					value: n.model_name,
					description: n.description,
				}));
		},
	},
};
