import commands from "./src/commands.js";
import { Client, Events, GatewayIntentBits, Routes, REST } from "discord.js";

import dotenv from "dotenv";
dotenv.config();
const token = process.env.TOKEN;

import { timeConverter } from "./src/functions/timeConverter.js";
import { meme } from "./src/functions/meme.js";
import { dice } from "./src/functions/dice.js";
import { ping } from "./src/functions/ping.js";
import { kill } from "./src/functions/kill.js";
import { hug } from "./src/functions/hug.js";
import { inspire } from "./src/functions/inspire.js";
import { nsfw } from "./src/functions/nsfw.js";
import { pictureofus } from "./src/functions/pictureofus.js";
import { quote } from "./src/functions/quote.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const rest = new REST({ version: "10" }).setToken(token);

client.once(Events.ClientReady, async (c) => {
	console.clear();
	console.log(`${timeConverter(c.readyTimestamp)}
	Ready! Logged in as ${c.user.tag}`);
});

async function main() {
	try {
		await rest.put(Routes.applicationGuildCommands("1051643493577130004", "1051649341137354874"), { body: commands });
		await rest.put(Routes.applicationGuildCommands("1051643493577130004", "689161030714392612"), { body: commands });
		client.login(token);
	} catch (e) {
		console.error(e);
	}
}

client.on(Events.InteractionCreate, (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	switch (interaction.commandName) {
		case "ping":
			ping(interaction);
			break;
		case "meme":
			meme(interaction);
			break;
		case "dice":
			dice(interaction, client);
			break;
		case "kill":
			kill(interaction, client);
			break;
		case "hug":
			hug(interaction, client);
			break;
		case "inspire":
			inspire(interaction);
			break;
		case "nsfw":
			nsfw(interaction);
			break;
		case "pictureofus":
			pictureofus(interaction);
			break;
		case "quote":
			quote(interaction, client);
			break;
	}
});

client.on(Events.MessageCreate, (m) => {
	if (m.author.bot) return;

	if (m.content == "freund") {
		m.channel.send("**HEY! HEY! HEY!**");
	}
});

main();
