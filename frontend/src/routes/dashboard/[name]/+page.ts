/** @type {import('./$types').PageLoad} */

export async function load({ params, fetch }) {
  const response = await fetch(
    `https://comanda-atestate-api.vercel.app/getOrder?name=${encodeURIComponent(
      params.name
    )}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const order = await response.json();
  return { order };
}

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
