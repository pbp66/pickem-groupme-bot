import Attachment from "./attachment";

class Image extends Attachment {
	constructor(url) {
		super("image");
		this.url = new URL(url);
	}

	// TODO: create methods to utilize groupme image service
	// TODO: POST https://image.groupme.com/pictures
}

export default Image;
