import { timeConverter } from "./timeConverter.js";
import { EmbedBuilder } from "discord.js";

export function ping(i) {
	const embed = new EmbedBuilder()
		.setColor(0x809696)
		.setTitle("Pong!")
		.setAuthor({ name: "YOU! 😁", iconURL: `https://cdn.discordapp.com/avatars/${i.user.id}/${i.user.avatar}.png` })
		.setTimestamp()
		.setFooter({
			text: "I love Ping! n Pong! 🏓",
			iconURL: "https://cdn.discordapp.com/avatars/1051643493577130004/5e3ac8379ae3ceb815c8d746b25db9f0.png",
		});

	i.reply({ embeds: [embed] });
	console.log(
		`${timeConverter(i.createdTimestamp)}
		${i.user.username}#${i.user.discriminator} pinged`
	);
}
