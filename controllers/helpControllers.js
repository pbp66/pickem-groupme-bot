export function getHelp(req, res) {
	const helpMessage =
		"This is a test message for the Pickem Secretary Bot. As features are created and updated, this message will be updated to reflect their use. Thank You and have a nice Day";

	res.json(helpMessage);
}
