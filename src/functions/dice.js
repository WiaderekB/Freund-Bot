import { timeConverter } from "./timeConverter.js";
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Events } from "discord.js";

export function dice(i, c) {
	c.on(Events.InteractionCreate, (interaction) => {
		if (interaction.isButton() && interaction.customId == "rollAgain") {
			roll(i, false);
		}
	});

	roll(i, true);
}

async function roll(i, first) {
	let number = Math.floor(Math.random() * i.options.get("d").value.toString()) + 1;

	const embed = new EmbedBuilder()
		.setColor(0x809696)
		.setTitle(`${i.user.username}#${i.user.discriminator} rolled **D${i.options.get("d").value}**`)
		.setDescription(`The resut is **${number.toString()}!!!**`)
		.setThumbnail(`https://cdn.discordapp.com/avatars/${i.user.id}/${i.user.avatar}.png`)
		.setTimestamp()
		.setFooter({
			text: "I HOPE you got what you wanted! 🎲",
			iconURL: "https://cdn.discordapp.com/avatars/1051643493577130004/5e3ac8379ae3ceb815c8d746b25db9f0.png",
		});

	const btn = new ActionRowBuilder().addComponents(
		new ButtonBuilder().setCustomId("rollAgain").setLabel("Roll again").setStyle(ButtonStyle.Primary)
	);

	if (first) i.reply({ embeds: [embed], components: [btn] });
	else i.followUp({ embeds: [embed], components: [btn] });

	console.log(
		`${timeConverter(i.createdTimestamp)}
		${i.user.username}#${i.user.discriminator} rolled d${i.options.get("d").value} and got ${number}`
	);
}
