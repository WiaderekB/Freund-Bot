import { timeConverter } from "./timeConverter.js";
import fetch from "node-fetch";

export async function hug(i) {
	const gif_result = await (await fetch("https://g.tenor.com/v1/random?&q=huging&key=LIVDSRZULELA&limit=1")).json();

	i.reply(gif_result.results[0].url);

	console.log(
		`${timeConverter(i.createdTimestamp)}
		${i.user.username}#${i.user.discriminator} huged ${i.options.get("person").user.username}#${i.options.get("person").user.discriminator}`
	);
}
