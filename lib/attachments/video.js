import Attachment from "./attachment";

class Video extends Attachment {
	constructor(url, previewUrl) {
		super("video");
		this.url = new URL(url);
		this.previewUrl = new URL(previewUrl);
	}
}

export default Video;
