import Attachment from "./attachment";

class File extends Attachment {
	constructor(fileId) {
		super("file");
		this.fileId = fileId;
	}
}

export default File;
