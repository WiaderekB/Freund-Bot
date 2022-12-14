import { timeConverter } from "./timeConverter.js";
import fetch from "node-fetch";

export async function inspire(i) {
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
