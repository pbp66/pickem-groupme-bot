import Callback from "../lib/callback";

function createCallbackObject(obj) {
	const msg = JSON.parse(obj);
	return new Callback(
		msg.attachments,
		msg.avatar_url,
		msg.created_at,
		msg.group_id,
		msg.id,
		msg.name,
		msg.sender_id,
		msg.sender_type,
		msg.source_guid,
		msg.system,
		msg.text,
		msg.user_id
	);
}

function isValidMessage(message) {
	// TODO: Verify message is valid:
	/*
	 * sender_type is user
	 * first character is a "/"
	 * attachment types are valid: emoji, reply, and/or mention
	 */
}

function isValidCommand(command) {
	// TODO: Validate that the command is contained within the list of available commands
}

const callbackHandler = (req, res, next) => {
	const callbackMsg = createCallbackObject(req.body);
	if (!isValidMessage(callbackMsg)) {
		next();
	}

	const command = callbackMsg.text.match(/^\/[a-zA-Z]+/)[0];

	if (isValidCommand(command)) {
		// TODO: route to appropriate controller
	} else {
		// TODO: Either error handling or do nothing
		//? next();
	}

	// TODO: Add console log indicating redirected route/path of message/command
	next();
};

export default callbackHandler;
