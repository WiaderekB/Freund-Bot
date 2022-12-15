import { timeConverter } from "./timeConverter.js";
import { EmbedBuilder } from "discord.js";

const pictures = [
	{ url: "https://cdn.discordapp.com/attachments/675756674308505631/1052921304988262512/IMG_1092.jpg", who: "bartek" },
	{ url: "https://cdn.discordapp.com/attachments/675756674308505631/1052921305374130226/IMG_1090.jpg", who: "bartek" },
	{ url: "https://cdn.discordapp.com/attachments/675756674308505631/1052921305680330873/IMG_1003.jpg", who: "bartek" },
	{ url: "https://cdn.discordapp.com/attachments/675756674308505631/1052921345572356146/IMG_0616.jpg", who: "bartek" },
	{ url: "https://cdn.discordapp.com/attachments/675756674308505631/1052921410307231777/IMG_0403.jpg", who: "bartek" },
	{ url: "https://cdn.discordapp.com/attachments/675756674308505631/1052922225201782824/image0.jpg", who: "bartek" },
	{ url: "https://cdn.discordapp.com/attachments/675756674308505631/1052922210999861258/IMG_1358.png", who: "kacper" },
	{ url: "https://cdn.discordapp.com/attachments/675756674308505631/1052921857269043220/image0.jpg", who: "adam" },
	{ url: "https://cdn.discordapp.com/attachments/675756674308505631/1052921372390723636/IMG_0572.jpg", who: "filip" },
	{ url: "https://cdn.discordapp.com/attachments/675756674308505631/1052921471107874866/IMG_0209.jpg", who: "filip" },
	{ url: "https://media.discordapp.net/attachments/675756674308505631/933087675278299206/IMG_0945.jpg", who: "filip" },
	{ url: "https://cdn.discordapp.com/attachments/675756674308505631/1052922720477790268/IMG_1359.png", who: "filip" },
	{ url: "https://cdn.discordapp.com/attachments/675756674308505631/1052922729969483786/IMG_1360.png", who: "filip" },
	{ url: "https://cdn.discordapp.com/attachments/675756674308505631/1052923227426537581/IMG_0409.jpg", who: "filip" },
];

export function pictureofus(i) {
	let pic = "";

	if (i.options.get("who")) {
		const filtered_pictures = pictures.filter((picture) => {
			return picture.who == i.options.get("who").value;
		});

		pic = filtered_pictures[Math.floor(Math.random() * filtered_pictures.length)].url;
	} else {
		pic = pictures[Math.floor(Math.random() * pictures.length)].url;
	}

	const embed = new EmbedBuilder()
		.setColor(0x809696)
		.setTitle("Make fun of this guy!!!")
		.setAuthor({ name: "YOU! 😁", iconURL: `https://cdn.discordapp.com/avatars/${i.user.id}/${i.user.avatar}.png` })
		.setTimestamp()
		.setImage(pic)
		.setFooter({
			text: "HAHHAHHA! 🤪",
			iconURL: "https://cdn.discordapp.com/avatars/1051643493577130004/5e3ac8379ae3ceb815c8d746b25db9f0.png",
		});

	i.reply({ embeds: [embed] });
	console.log(
		`${timeConverter(i.createdTimestamp)}
		${i.user.username}#${i.user.discriminator} requested pictureOfUs`
	);
}
