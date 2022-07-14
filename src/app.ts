import Fastify, { FastifyInstance } from "fastify";
import { BankTransactions } from "./models/transactions";

const fs = require("fs");

const server: FastifyInstance = Fastify({});

server.register(require('@fastify/cors'), {});

server.get("/api/transactions", async (request, reply) => {
  // This is where you would get the data from the database
  const transactions: BankTransactions = JSON.parse(
    fs.readFileSync("./datastore/transactions.json", "utf8")
  );
  return transactions;
});

const start = async () => {
  try {
    await server.listen({ port: 3000 });

    const address = server.server.address();
    console.log("Server has been started:", address);
  } catch (err) {
    console.log("Error starting the server", err);
    process.exit(1);
  }
};
start();
