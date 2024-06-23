import dotenv from "dotenv";
import { MongoClient } from "mongodb";
dotenv.config();

const uri = `mongodb+srv://${process.env.ADMIN}:${process.env.PASSWORD}@cluster0.5hmuaho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

export async function connect() {
  let client = new MongoClient(uri);
  return await client.connect();
}
