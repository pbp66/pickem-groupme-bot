import Attachment from "./attachment";

class Location extends Attachment {
	constructor(name, lat, lng) {
		super("location");
		this.name = name;
		this.latitude = lat;
		this.longitude = lng;
	}
}

export default Location;
