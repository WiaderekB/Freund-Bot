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

	const embed_question = new EmbedBuilder()
		.setColor(0x809696)
		.setTitle(`@${i.options.get("person").user.username}#${i.options.get("person").user.discriminator} you died.`)
		.setDescription(`Do you feel well-killed?`)
		.setTimestamp()
		.setFooter({
			text: "BURN IN HELL! 🔥",
			iconURL: "https://cdn.discordapp.com/avatars/1051643493577130004/5e3ac8379ae3ceb815c8d746b25db9f0.png",
		});

	const btn1 = new ActionRowBuilder().addComponents(
		new ButtonBuilder().setCustomId("notKillAgain").setLabel("YUP! I am fine!").setStyle(ButtonStyle.Success)
	);
	const btn2 = new ActionRowBuilder().addComponents(
		new ButtonBuilder().setCustomId("killAgain").setLabel("I don't fell killed").setStyle(ButtonStyle.Danger)
	);

	i.reply({ embeds: [embed, embed_question], components: [btn1, btn2] });
	setTimeout(() => {
		i.editReply({ embeds: [embed], components: [] });
	}, 25000);

	console.log(
		`${timeConverter(i.createdTimestamp)}
		${i.user.username}#${i.user.discriminator} killed ${i.options.get("person").user.username}#${i.options.get("person").user.discriminator}`
	);

	c.on(Events.InteractionCreate, async (interaction) => {
		const embed_killAgain = new EmbedBuilder()
			.setColor(0x809696)
			.setTitle(`@${i.options.get("person").user.username}#${i.options.get("person").user.discriminator}, NOW YOU WLL DIE!!!`)
			.setTimestamp()
			.setFooter({
				text: "I WILL CRUSH YOU LIKE A COCKROACH! 🪳",
				iconURL: "https://cdn.discordapp.com/avatars/1051643493577130004/5e3ac8379ae3ceb815c8d746b25db9f0.png",
			});

		const gif_killAgain = await (await fetch("https://g.tenor.com/v1/random?&q=killing&key=LIVDSRZULELA&limit=20")).json();

		if (
			interaction.isButton() &&
			(interaction.customId == "notKillAgain" || interaction.customId == "killAgain") &&
			interaction.user.id == i.options.get("person").user.id
		) {
			switch (interaction.customId) {
				case "notKillAgain":
					i.editReply({ embeds: [embed], components: [] });

					console.log(
						`${timeConverter(i.createdTimestamp)}
		${i.options.get("person").user.username}#${i.options.get("person").user.discriminator} feels well-killed`
					);
					break;

				case "killAgain":
					i.editReply({ embeds: [embed, embed_killAgain], components: [] });

					for (let result of gif_killAgain.results) interaction.user.send(result.url);

					setTimeout(() => {
						i.editReply({ embeds: [embed], components: [] });
					}, 10000);

					console.log(
						`${timeConverter(i.createdTimestamp)}
		${i.options.get("person").user.username}#${i.options.get("person").user.discriminator} doesn't feel well-killed`
					);
					break;
			}
		}
	});
}
