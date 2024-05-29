import GhostContentAPI from '@tryghost/content-api';
import { GHOST_KEY, GHOST_URL, GHOST_VERSION } from '$env/static/private';

export const load = async ({ params }) => {
	const api = GhostContentAPI({
		url: GHOST_URL,
		key: GHOST_KEY,
		version: GHOST_VERSION
	});

	const post = await api.posts.read({ slug: params.slug });
	return {
		props: {
			post
		}
	};
};
