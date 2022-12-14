import { timeConverter } from "./timeConverter.js";
import fetch from "node-fetch";
import { EmbedBuilder } from "discord.js";

export async function inspire(i) {
	const quote = await (
		await fetch("https://api.api-ninjas.com/v1/quotes?category=inspirational", {
			headers: {
				"X-Api-Key": "UZTCi0XDvXgpMMl/zWjSag==rgAqJsH1U4zGw9ML",
			},
		})
	).json();

	const embed = new EmbedBuilder()
		.setColor(0x809696)
		.setTitle(quote[0].quote)
		.setAuthor({ name: "YOU! 😁", iconURL: `https://cdn.discordapp.com/avatars/${i.user.id}/${i.user.avatar}.png` })
		.setTimestamp()
		.setFooter({
			text: "You will be someone important! 🌟",
			iconURL: "https://cdn.discordapp.com/avatars/1051643493577130004/5e3ac8379ae3ceb815c8d746b25db9f0.png",
		});

	i.reply({ embeds: [embed] });

	console.log(
		`${timeConverter(i.createdTimestamp)}
		${i.user.username}#${i.user.discriminator} asked for a quotee and got "${quote[0].quote}"`
	);
}
