import { getContent, getBuilderSearchParams } from '@builder.io/sdk-svelte';
import { BUILDER_PUBLIC_API_KEY } from '../../apiKey';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	// fetch your Builder content
	const content = await getContent({
		model: 'page',
		apiKey: BUILDER_PUBLIC_API_KEY,
		options: getBuilderSearchParams(event.url.searchParams),
		userAttributes: {
			urlPath: event.url.pathname || '/'
		}
	});

	return { content };
};
