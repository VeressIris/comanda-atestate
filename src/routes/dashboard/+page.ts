/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
  const response = await fetch("/api/getOrders");

  const orders = await response.json();
  return { orders };
}
