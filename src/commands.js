import { SlashCommandBuilder } from "discord.js";

const ping = new SlashCommandBuilder().setName("ping").setDescription("Replies with Pong!");

const quote = new SlashCommandBuilder().setName("quote").setDescription("Replies with a random QUOTE!");

const meme = new SlashCommandBuilder().setName("meme").setDescription("Freund will make you HAPPY! ...with a not funny meme.");

const nsfw = new SlashCommandBuilder().setName("nsfw").setDescription("Freund will send you NSFW!");

const pictureofus = new SlashCommandBuilder()
	.setName("pictureofus")
	.setDescription("You know what IT does.")
	.addStringOption((option) =>
		option
			.setName("who")
			.setDescription("The person you want picture of")
			.addChoices(
				{ name: "Fip", value: "filip" },
				{ name: "Adm", value: "adam" },
				{ name: "Kcpr", value: "kacper" },
				{ name: "Brtek", value: "bartek" }
			)
	);

const dice = new SlashCommandBuilder()
	.setName("dice")
	.setDescription("Freund will do you a favor and ROLL a DICE for you!")
	.addNumberOption((option) => {
		return option.setName("d").setDescription("Dice size. 😑").setRequired(true);
	});

const image = new SlashCommandBuilder()
	.setName("image")
	.setDescription("Freund will find EXACTLY what you want!")
	.addStringOption((option) => {
		return option.setName("description").setDescription("What are you looking for? 😑").setRequired(true);
	});

const kill = new SlashCommandBuilder()
	.setName("kill")
	.setDescription("Freund will kill someone for you!")
	.addMentionableOption((option) => option.setName("person").setDescription("Who do you wanna kill???").setRequired(true));

const hug = new SlashCommandBuilder()
	.setName("hug")
	.setDescription("Freund will hug someone for you!")
	.addMentionableOption((option) => option.setName("person").setDescription("Who do you wanna hug???").setRequired(true));

const inspire = new SlashCommandBuilder().setName("inspire").setDescription("Freund will INSPIRE you with a DEEEP quote.");

const commands = [ping, meme, dice, kill, hug, inspire, nsfw, pictureofus, quote, image];
export default commands;
