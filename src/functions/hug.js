import { timeConverter } from "./timeConverter.js";
import fetch from "node-fetch";
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Events } from "discord.js";

export async function hug(i, c) {
	const gif_result = await (await fetch("https://g.tenor.com/v1/random?&q=hugging&key=LIVDSRZULELA&limit=1")).json();

	const embed = new EmbedBuilder()
		.setColor(0x809696)
		.setTitle(
			`WOHOHO. @${i.options.get("person").user.username}#${i.options.get("person").user.discriminator}, it seems like @${i.user.username}#${
				i.user.discriminator
			} hugged you!`
		)
		.setDescription(
			`**LOVE IS EVERYWHERE!**
			
Give someone love too!
		
<@${i.options.get("person").user.id}>`
		)
		.setThumbnail(`https://cdn.discordapp.com/avatars/${i.options.get("person").user.id}/${i.options.get("person").user.avatar}.png`)
		.setTimestamp()
		.setImage(gif_result.results[0].media[0].gif.url)
		.setFooter({
			text: "That's so cute! 💕",
			iconURL: "https://cdn.discordapp.com/avatars/1051643493577130004/5e3ac8379ae3ceb815c8d746b25db9f0.png",
		});

	const embed_question = new EmbedBuilder()
		.setColor(0x809696)
		.setTitle(`@${i.options.get("person").user.username}#${i.options.get("person").user.discriminator}, someone gave you LOVE!.`)
		.setDescription(`<@${i.options.get("person").user.id}>, do you feel well-hugged?`)
		.setTimestamp()
		.setFooter({
			text: "We all LOVE YOU! 💞",
			iconURL: "https://cdn.discordapp.com/avatars/1051643493577130004/5e3ac8379ae3ceb815c8d746b25db9f0.png",
		});

	const btn1 = new ActionRowBuilder().addComponents(
		new ButtonBuilder().setCustomId("notHugAgain").setLabel("YUP! I am fine!").setStyle(ButtonStyle.Success)
	);
	const btn2 = new ActionRowBuilder().addComponents(
		new ButtonBuilder().setCustomId("hugAgain").setLabel("I don't fell hugged").setStyle(ButtonStyle.Danger)
	);

	i.reply({ embeds: [embed, embed_question], components: [btn1, btn2] });
	setTimeout(() => {
		i.editReply({ embeds: [embed], components: [] });
	}, 25000);

	console.log(
		`${timeConverter(i.createdTimestamp)}
		${i.user.username}#${i.user.discriminator} hugged ${i.options.get("person").user.username}#${i.options.get("person").user.discriminator}`
	);

	c.on(Events.InteractionCreate, async (interaction) => {
		const embed_killAgain = new EmbedBuilder()
			.setColor(0x809696)
			.setTitle(`@${i.options.get("person").user.username}#${i.options.get("person").user.discriminator}, LOVE IS EVERYWHERE!`)
			.setTimestamp()
			.setDescription(`<@${i.options.get("person").user.id}>`)
			.setFooter({
				text: "Date? 😏",
				iconURL: "https://cdn.discordapp.com/avatars/1051643493577130004/5e3ac8379ae3ceb815c8d746b25db9f0.png",
			});

		const gif_killAgain = await (await fetch("https://g.tenor.com/v1/random?&q=hugging&key=LIVDSRZULELA&limit=20")).json();

		if (
			interaction.isButton() &&
			(interaction.customId == "notHugAgain" || interaction.customId == "hugAgain") &&
			interaction.user.id == i.options.get("person").user.id
		) {
			switch (interaction.customId) {
				case "notHugAgain":
					i.editReply({ embeds: [embed], components: [] });

					console.log(
						`${timeConverter(i.createdTimestamp)}
		${i.options.get("person").user.username}#${i.options.get("person").user.discriminator} feels well-hugged`
					);
					break;

				case "hugAgain":
					i.editReply({ embeds: [embed, embed_killAgain], components: [] });

					for (let result of gif_killAgain.results) interaction.user.send(result.url);

					setTimeout(() => {
						i.editReply({ embeds: [embed], components: [] });
					}, 10000);

					console.log(
						`${timeConverter(i.createdTimestamp)}
		${i.options.get("person").user.username}#${i.options.get("person").user.discriminator} doesn't feel well-hugged`
					);
					break;
			}
		}
	});
}
