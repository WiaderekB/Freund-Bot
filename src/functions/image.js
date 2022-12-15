import { timeConverter } from "./timeConverter.js";
import fetch from "node-fetch";
import { EmbedBuilder } from "discord.js";

export async function image(i) {
	const gif_result = await (await fetch(`https://g.tenor.com/v1/random?&q=${i.options.get("description").value}&key=LIVDSRZULELA&limit=1`)).json();

	const embed = new EmbedBuilder()
		.setColor(0x809696)
		.setTitle(`That's a ${i.options.get("description").value}!!!`)
		.setAuthor({ name: "YOU! 😁", iconURL: `https://cdn.discordapp.com/avatars/${i.user.id}/${i.user.avatar}.png` })
		.setTimestamp()
		.setImage(gif_result.results[0].media[0].gif.url)
		.setFooter({
			text: "Hope you got what you wanted! 🔍",
			iconURL: "https://cdn.discordapp.com/avatars/1051643493577130004/5e3ac8379ae3ceb815c8d746b25db9f0.png",
		});

	i.reply({ embeds: [embed] });

	console.log(
		`${timeConverter(i.createdTimestamp)}
		${i.user.username}#${i.user.discriminator} asked for a ${i.options.get("description").value}`
	);
}
