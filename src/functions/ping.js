import { timeConverter } from "./timeConverter.js";

export function ping(i) {
	i.reply("Pong!");

	console.log(
		`${timeConverter(i.createdTimestamp)}
		${i.user.username}#${i.user.discriminator} pinged`
	);
}
