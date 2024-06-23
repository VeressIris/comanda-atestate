/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
  const response = await fetch(
    "https://comanda-atestate-api.vercel.app/getOrders"
  );

  const orders = await response.json();
  return { props: await orders };
}
