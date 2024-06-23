import { connect } from "$lib/db";
export const GET = async () => {
  const client = await connect();
  try {
    const ordersCollection = client.db("orders").collection("orders");
    const orders = await ordersCollection.find().toArray();
    return new Response(JSON.stringify(orders), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching orders: ", error);
    return new Response(JSON.stringify({ message: "Failed to fetch orders" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } finally {
    await client.close();
  }
};
