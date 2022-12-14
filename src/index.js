import commands from "./commands.js";
import { Client, Events, GatewayIntentBits, Routes, REST } from "discord.js";
import token from "../config.json" assert { type: "json" };

import { ping } from "./functions/ping.js";
import { meme } from "./functions/meme.js";
import { dice } from "./functions/dice.js";
import { kill } from "./functions/kill.js";
import { hug } from "./functions/hug.js";
import { inspire } from "./functions/inspire.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const rest = new REST({ version: "10" }).setToken(token.token);

client.once(Events.ClientReady, async (c) => {
	console.clear();
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

async function main() {
	try {
		await rest.put(Routes.applicationGuildCommands("1051643493577130004", "1051649341137354874"), { body: commands });
		client.login(token.token);
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
			dice(interaction);
			break;
		case "kill":
			kill(interaction);
			break;
		case "hug":
			hug(interaction);
			break;
		case "inspire":
			inspire(interaction);
			break;
	}
});

main();
