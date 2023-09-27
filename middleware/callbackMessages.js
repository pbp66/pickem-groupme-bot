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

const callbackHandler = (req, res, next) => {
	const callbackMsg = createCallbackObject(req.body);

	next();
};

export default callbackHandler;
