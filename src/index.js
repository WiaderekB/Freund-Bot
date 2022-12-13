import fetch from "node-fetch";
import commands from "./commands.js";
import { Client, Events, GatewayIntentBits, Routes, REST } from "discord.js";
import token from "../config.json" assert { type: "json" };

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const rest = new REST({ version: "10" }).setToken(token.token);

client.once(Events.ClientReady, async (c) => {
	console.clear();
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

async function main() {
	try {
		await rest.put(
			Routes.applicationGuildCommands("1051643493577130004", "1051649341137354874"),
			{ body: commands }
		);
		client.login(token.token);
	} catch (e) {
		console.error(e);
	}
}

main();

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
	}
});

function ping(i) {
	i.reply("Pong!");
}

async function meme(i) {
	const img = await (await fetch("https://meme-api.com/gimme")).json();

	i.reply(img.url);
}

function dice(i) {
	let number = Math.floor(Math.random() * i.options.get("d").value.toString()) + 1;
	i.reply(number.toString());
}
