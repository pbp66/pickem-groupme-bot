class Callback {
	constructor(
		attachments,
		avatarUrl,
		createdAt,
		groupId,
		id,
		name,
		senderId,
		senderType,
		sourceGuid,
		system,
		text,
		userId
	) {
		this.attachments = attachments;
		this.avatarUrl = avatarUrl;
		this.createdAt = createdAt;
		this.groupId = groupId;
		this.id = id;
		this.name = name;
		this.senderId = senderId;
		this.senderType = senderType;
		this.sourceGuid = sourceGuid;
		this.system = system;
		this.text = text;
		this.userId = userId;
	}
}

export default Callback;
