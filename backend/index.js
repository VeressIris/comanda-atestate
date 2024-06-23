import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const uri = `mongodb+srv://${process.env.ADMIN}:${process.env.PASSWORD}@cluster0.5hmuaho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello atestate API!");
});

app.listen(port, () => {
  console.log(`Comanda Atestate listening on port ${port}`);
});

// read orders from database
app.get("/getOrders", async (req, res) => {
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
app.post("/addOrder", async (req, res) => {
  try {
    await client.connect();
    const ordersCollection = client.db("orders").collection("orders");
    const order = {
      ...req.body,
      completed: false,
      timestamp: new Date(),
    };
    await ordersCollection.insertOne(order);
    console.log("Order successfully placed for " + req.body.name);

    res.status(200).send({ message: "Successfully added new order" });
  } catch (error) {
    console.error("Error adding order: ", error);
    res.status(500).send({ message: "Failed to add order" });
  } finally {
    await client.close();
  }
});

// change order status (completed to uncompleted or vice-versa)
app.patch("/updateOrderStatus", async (req, res) => {
  try {
    await client.connect();
    const ordersCollection = client.db("orders").collection("orders");
    const order = await ordersCollection.findOne({ name: req.body.name });
    if (!order) {
      return res.status(404).send({ message: "Order not found" });
    }

    const currentStatus = order.completed;
    const updateDocument = {
      $set: {
        completed: !currentStatus,
      },
    };

    const result = await ordersCollection.updateOne(
      { name: req.body.name },
      updateDocument
    );

    if (result.modifiedCount > 0) {
      console.log(`Successfully updated status of ${req.body.name}'s order`);
      res.status(200).send({
        message: `Successfully updated status of ${req.body.name}'s order`,
      });
    } else {
      res.status(500).send({ message: "Failed to update order status" });
    }
  } catch (error) {
    console.error("Error updating order status: ", error);
    res.status(500).send({ message: "Failed to update order status" });
  } finally {
    await client.close();
  }
});

// get current status of order
app.get("/getOrderStatus", async (req, res) => {
  try {
    await client.connect();
    const ordersCollection = client.db("orders").collection("orders");
    const order = await ordersCollection.findOne({ name: req.body.name });
    if (!order) {
      return res.status(404).send({ message: "Order not found" });
    }

    const currentStatus = order.completed;

    console.log(`${req.body.name}'s order: ${currentStatus}`);
    res.status(200).send(currentStatus);
  } catch (error) {
    console.error("Error getting order status: ", error);
    res.status(500).send({ message: "Failed to fetch order status" });
  } finally {
    await client.close();
  }
});

// get someone's order
app.get("/getOrder", async (req, res) => {
  try {
    await client.connect();
    const ordersCollection = client.db("orders").collection("orders");
    const order = await ordersCollection.findOne({ name: req.body.name });
    console.log(order);
    res.status(200).send(order);
  } catch (error) {
    console.error("Error fetching order: ", error);
    res.status(500).send({ message: "Failed to fetch order" });
  } finally {
    await client.close();
  }
});

// connect to MongoDB
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
