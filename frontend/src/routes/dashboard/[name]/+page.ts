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