import { timeConverter } from "./timeConverter.js";
import { EmbedBuilder } from "discord.js";

export async function dice(i) {
	let number = Math.floor(Math.random() * i.options.get("d").value.toString()) + 1;

	const embed = new EmbedBuilder()
		.setColor(0x809696)
		.setTitle(`${i.user.username}#${i.user.discriminator} rolled **d${i.options.get("d").value}**`)
		.setDescription(`The resut is **${number.toString()}!!!**`)
		.setThumbnail(`https://cdn.discordapp.com/avatars/${i.user.id}/${i.user.avatar}.png`)
		.setTimestamp()
		.setFooter({
			text: "HOPEULLY you got what you wanted!",
			iconURL: "https://cdn.discordapp.com/avatars/1051643493577130004/5e3ac8379ae3ceb815c8d746b25db9f0.png",
		});

	i.reply({ embeds: [embed] });

	console.log(
		`${timeConverter(i.createdTimestamp)}
		${i.user.username}#${i.user.discriminator} rolled d${i.options.get("d").value} and got ${number}`
	);
}
