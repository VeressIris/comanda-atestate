import type { PageLoad } from "./$types";
export const load: PageLoad = ({ params }) => {
  return {
    title: params.name,
  };
};

/* KIND OF EXACTLY WHAT I'M TRYING TO DO
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const post = await getPostFromDatabase(params.slug);

	if (post) {
		return post;
	}

	error(404, 'Not found');
};
*/
