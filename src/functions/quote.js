import { timeConverter } from "./timeConverter.js";
import { EmbedBuilder } from "discord.js";

export async function quote(i, c) {
	const channel = c.channels.cache.get("835087010115878933");

	const messages = await channel.messages.fetch({ limit: 100 });

	const quotes = [];

	messages.forEach((message) => quotes.push(message.content));

	const quote = quotes[Math.floor(Math.random() * quotes.length)];

	const embed = new EmbedBuilder()
		.setColor(0x809696)
		.setTitle("WOAH! What a quote!")
		.setDescription(`${quote}`)
		.setAuthor({ name: "YOU! 😁", iconURL: `https://cdn.discordapp.com/avatars/${i.user.id}/${i.user.avatar}.png` })
		.setTimestamp()
		.setFooter({
			text: "Memories... 🥹",
			iconURL: "https://cdn.discordapp.com/avatars/1051643493577130004/5e3ac8379ae3ceb815c8d746b25db9f0.png",
		});

	i.reply({ embeds: [embed] });
	console.log(
		`${timeConverter(i.createdTimestamp)}
		${i.user.username}#${i.user.discriminator} asked for random quote`
	);
}
