import { SlashCommandBuilder } from "discord.js";

const ping = new SlashCommandBuilder().setName("ping").setDescription("Replies with Pong!");

const meme = new SlashCommandBuilder()
	.setName("meme")
	.setDescription("Freund will make you HAPPY! ...with not funny meme.");

const dice = new SlashCommandBuilder()
	.setName("dice")
	.setDescription("Freund will do you a favor and ROLL a DICE for you!")
	.addNumberOption((option) => {
		return option.setName("d").setDescription("Dice size. 😑").setRequired(true);
	});

const commands = [ping, meme, dice];
export default commands;
