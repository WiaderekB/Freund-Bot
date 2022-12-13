import { SlashCommandBuilder } from "discord.js";

const ping = new SlashCommandBuilder().setName("ping").setDescription("Replies with Pong!");

const meme = new SlashCommandBuilder().setName("meme").setDescription("Freund will make you HAPPY! ...with not funny meme.");

const dice = new SlashCommandBuilder()
	.setName("dice")
	.setDescription("Freund will do you a favor and ROLL a DICE for you!")
	.addNumberOption((option) => {
		return option.setName("d").setDescription("Dice size. 😑").setRequired(true);
	});

const kill = new SlashCommandBuilder()
	.setName("kill")
	.setDescription("Freund will kill someone for you!")
	.addMentionableOption((option) => option.setName("person").setDescription("Who do you wanna kill???").setRequired(true));

const inspire = new SlashCommandBuilder().setName("inspire").setDescription("Freund will INSPIRE you with a DEEEP quote.");

const commands = [ping, meme, dice, kill, inspire];
export default commands;
