import { timeConverter } from "./timeConverter.js";
import fetch from "node-fetch";

export async function meme(i) {
	const img = await (await fetch("https://meme-api.com/gimme")).json();

	i.reply(img.url);

	console.log(
		`${timeConverter(i.createdTimestamp)}
		${i.user.username}#${i.user.discriminator} asked for a meme`
	);
}
