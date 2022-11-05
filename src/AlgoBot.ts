import { Client, ClientOptions } from "discord.js";
import ready from "./listeners/ready";
import interaction from "./listeners/interactionCreate";

//Parsing the token
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(__dirname, "../token.env") });
const token = process.env.TOKEN;

//Starting the bot
console.log("Bot is starting...");

//Creation du client
const client = new Client({
    intents: []
});

//Listeners
ready(client);
interaction(client);

//Login
client.login(token);