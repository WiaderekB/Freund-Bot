import { timeConverter } from "./timeConverter.js";
import fetch from "node-fetch";
import { EmbedBuilder } from "discord.js";

export async function meme(i) {
	const img = await (await fetch("https://meme-api.com/gimme")).json();

	const embed = new EmbedBuilder()
		.setColor(0x809696)
		.setTitle("That'a MEME!!")
		.setAuthor({ name: "YOU! 😁", iconURL: `https://cdn.discordapp.com/avatars/${i.user.id}/${i.user.avatar}.png` })
		.setTimestamp()
		.setImage(img.url)
		.setFooter({
			text: "Hope it made you LAUGH! 📇",
			iconURL: "https://cdn.discordapp.com/avatars/1051643493577130004/5e3ac8379ae3ceb815c8d746b25db9f0.png",
		});

	i.reply({ embeds: [embed] });

	console.log(
		`${timeConverter(i.createdTimestamp)}
		${i.user.username}#${i.user.discriminator} asked for a meme`
	);
}
