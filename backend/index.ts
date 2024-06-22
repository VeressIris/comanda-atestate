import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";

dotenv.config();
const uri = `mongodb+srv://${process.env.ADMIN}:${process.env.PASSWORD}@cluster0.5hmuaho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello atestate!");
});

app.listen(port, () => {
  console.log(`Comanda Atestate listening on port ${port}`);
});

// read orders from database
app.get("/getOrders", async (req: Request, res: Response) => {
  try {
    await client.connect();
    const ordersCollection = client.db("orders").collection("orders");
    const orders = await ordersCollection.find().toArray();
    console.log(orders);
    res.status(200).send(orders);
  } catch (error) {
    console.error("Error fetching orders: ", error);
    res.status(500).send({ message: "Failed to fetch orders" });
  } finally {
    await client.close();
  }
});

// write order to database

// change order status (completed to uncompleted or vice-versa)

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
