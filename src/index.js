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

function timeConverter(UNIX_timestamp) {
	var a = new Date(UNIX_timestamp);
	var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	var hour = a.getHours();
	var min = a.getMinutes();
	var sec = a.getSeconds();

	if (hour < 10) hour = `0${hour}`;
	if (min < 10) min = `0${min}`;
	if (sec < 10) sec = `0${sec}`;
	if (date < 10) date = `0${date}`;

	var time = hour + ":" + min + ":" + sec + " | " + date + " " + month + " " + year + " ";
	return time;
}

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

function ping(i) {
	i.reply("Pong!");

	console.log(
		`${timeConverter(i.createdTimestamp)}
		${i.user.username}#${i.user.discriminator} pinged`
	);
}

async function meme(i) {
	const img = await (await fetch("https://meme-api.com/gimme")).json();

	i.reply(img.url);

	console.log(
		`${timeConverter(i.createdTimestamp)}
		${i.user.username}#${i.user.discriminator} asked for a meme`
	);
}

function dice(i) {
	let number = Math.floor(Math.random() * i.options.get("d").value.toString()) + 1;
	i.reply(number.toString());

	console.log(
		`${timeConverter(i.createdTimestamp)}
		${i.user.username}#${i.user.discriminator} rolled d${i.options.get("d").value} and got ${number}`
	);
}

async function kill(i) {
	const gif_result = await (await fetch("https://g.tenor.com/v1/random?&q=killing&key=LIVDSRZULELA&limit=1")).json();

	i.reply(gif_result.results[0].url);

	console.log(
		`${timeConverter(i.createdTimestamp)}
		${i.user.username}#${i.user.discriminator} killed ${i.options.get("person").user.username}#${i.options.get("person").user.discriminator}`
	);
}

async function hug(i) {
	const gif_result = await (await fetch("https://g.tenor.com/v1/random?&q=huging&key=LIVDSRZULELA&limit=1")).json();

	i.reply(gif_result.results[0].url);

	console.log(
		`${timeConverter(i.createdTimestamp)}
		${i.user.username}#${i.user.discriminator} huged ${i.options.get("person").user.username}#${i.options.get("person").user.discriminator}`
	);
}

async function inspire(i) {
	const quote = await (
		await fetch("https://api.api-ninjas.com/v1/quotes?category=inspirational", {
			headers: {
				"X-Api-Key": "UZTCi0XDvXgpMMl/zWjSag==rgAqJsH1U4zGw9ML",
			},
		})
	).json();

	i.reply(quote[0].quote);

	console.log(
		`${timeConverter(i.createdTimestamp)}
		${i.user.username}#${i.user.discriminator} asked for a quotee and got "${quote[0].quote}"`
	);
}

main();
