export function createMessage(req, res) {
	console.log(req.body);
	return res.json("Message Received");
}
