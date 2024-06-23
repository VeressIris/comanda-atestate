import { connect } from "$lib/db";
export const GET = async ({ url }) => {
  const client = await connect();
  try {
    const name = url.searchParams.get("name");
    const ordersCollection = client.db("orders").collection("orders");
    const order = await ordersCollection.findOne({ name: name });
    return new Response(JSON.stringify(order), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching order: ", error);
    return new Response(JSON.stringify({ message: "Failed to fetch order" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } finally {
    await client.close();
  }
};
