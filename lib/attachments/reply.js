import Attachment from "./attachment";

class Reply extends Attachment {
	constructor(replyId, baseReplyId) {
		super("reply");
		this.replyId = replyId;
		this.baseReplyId = baseReplyId; //? Identical to replyId according to docs?
	}
}

export default Reply;
