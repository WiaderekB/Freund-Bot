import { timeConverter } from "./timeConverter.js";
import fetch from "node-fetch";
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Events } from "discord.js";

export async function kill(i, c) {
	const gif_result = await (await fetch("https://g.tenor.com/v1/random?&q=killing&key=LIVDSRZULELA&limit=1")).json();

	const embed = new EmbedBuilder()
		.setColor(0x809696)
		.setTitle(
			`UH. @${i.options.get("person").user.username}#${i.options.get("person").user.discriminator}, it seems like @${i.user.username}#${
				i.user.discriminator
			} killed you!`
		)
		.setDescription(
			`MY apologies.
		Just kidding! Just kidding! 
		**Nobody liked you!**
		
		<@${i.options.get("person").user.id}>`
		)
		.setThumbnail(`https://cdn.discordapp.com/avatars/${i.options.get("person").user.id}/${i.options.get("person").user.avatar}.png`)
		.setTimestamp()
		.setImage(gif_result.results[0].url)
		.setFooter({
			text: "Now you're KILLER! 🩸",
			iconURL: "https://cdn.discordapp.com/avatars/1051643493577130004/5e3ac8379ae3ceb815c8d746b25db9f0.png",
		});

	console.log(
		`${timeConverter(i.createdTimestamp)}
		${i.user.username}#${i.user.discriminator} killed ${i.options.get("person").user.username}#${i.options.get("person").user.discriminator}`
	);
}
