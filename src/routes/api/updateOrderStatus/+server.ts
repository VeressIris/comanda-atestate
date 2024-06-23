import { connect } from "$lib/db";
export const PATCH = async ({ url }) => {
  const client = await connect();
  try {
    const name = url.searchParams.get("name");
    const ordersCollection = client.db("orders").collection("orders");
    const order = await ordersCollection.findOne({ name: name });
    const currentStatus = order.completed;
    const updateDocument = {
      $set: {
        completed: !currentStatus,
      },
    };

    await ordersCollection.updateOne({ name: name }, updateDocument);
    return new Response(
      JSON.stringify({
        message: `Successfully updated status of ${name}'s project`,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: `Error updating order status: ${error}` }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } finally {
    await client.close();
  }
};
