import { timeConverter } from "./timeConverter.js";
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

export function dice(i) {
	let number = Math.floor(Math.random() * i.options.get("d").value.toString()) + 1;

	const btn = new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId("primary").setLabel("Roll again").setStyle(ButtonStyle.Primary));

	i.reply({ content: number.toString(), components: [btn] });

	console.log(
		`${timeConverter(i.createdTimestamp)}
		${i.user.username}#${i.user.discriminator} rolled d${i.options.get("d").value} and got ${number}`
	);
}
