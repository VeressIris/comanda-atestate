import { connect } from "$lib/db";

export const POST = async ({ request }) => {
  const client = await connect();

  try {
    const data = await request.json();
    const ordersCollection = client.db("orders").collection("orders");
    const order = {
      ...data,
      completed: false,
      timestamp: new Date(),
    };
    await ordersCollection.insertOne(order);
    console.log("Order successfully placed for " + data.name);

    return new Response(
      JSON.stringify({ message: "Successfully added new order" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error adding order: ", error);
    return new Response(JSON.stringify({ message: "Failed to add order" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } finally {
    await client.close();
  }
};
