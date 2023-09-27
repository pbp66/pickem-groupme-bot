import Attachment from "./attachment";

class Mention extends Attachment {
	constructor(userIds, loci) {
		super("mentions");
		this.userIds = userIds;
		this.loci = loci; //* An array of pairs specifying the user id and the position within the message they are specifically mentioned
	}

	// TODO: Generate methods to create @all and other mentions?
}

export default Mention;
