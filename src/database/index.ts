import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client, Pool } from "pg";
import * as schema from "./schema";

const client = new Client({
  connectionString: process.env.POSTGRES_URL,
});
(async () => {
  try {
    await client.connect();
    console.log("Database connection established successfully");
  } catch (error: any) {
    console.error("Failed to connect to the database:", error.message);
    // process.exit(1); // Exit process on failure
  }
})();

export const db = drizzle(client, {
  schema: schema,
});
