import Attachment from "./attachment";

class Emoji extends Attachment {
	constructor(placeholder, charMap) {
		super("emoji");
		this.placeholder = placeholder;
		this.charMap = charMap;
	}
}

export default Emoji;
