import GhostContentAPI from '@tryghost/content-api';
import { GHOST_KEY, GHOST_URL, GHOST_VERSION } from '$env/static/private';

export const load = async () => {
	const api = GhostContentAPI({
		url: GHOST_URL,
		key: GHOST_KEY,
		version: GHOST_VERSION
	});
	const postsJson = await api.posts.browse({ limit: 5, include: 'tags,authors' });
	return {
		postsJson: postsJson
	};
};
