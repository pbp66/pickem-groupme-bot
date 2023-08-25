import { Schema, model } from "mongoose";
import { DateTime } from "luxon";

const attachmentSchema = new Schema(
	{
		type: {
			// * images, videos, files, locations, emojis, replies, mentions
			type: String,
			required: true,
		},
		url: {
			type: String,
			trim: true,
		},
		preview_url: {
			type: String,
			trim: true,
		},
		file_id: {
			type: String,
			trim: true,
		},
		name: {
			type: String,
			trim: true,
		},
		lng: { type: Double },
		lat: { type: Double },
		placeholder: {
			type: String,
		},
		charmap: [[{ type: Integer }]],
		reply_id: {
			// ? Infinite recursion if this is linked back to the message schema?
			type: Integer,
		},
		base_reply_id: {
			// ? Infinite recursion if this is linked back to the message schema?
			type: Integer,
		},
		user_ids: [{ type: Schema.Types.ObjectId, ref: "User" }],
		loci: [[{ type: Integer }]],
	},
	{
		toJSON: {
			virtuals: true,
		},
		id: false,
	}
);

const messageSchema = new Schema(
	{
		attachments: [attachmentSchema],
		createdAt: {
			// * Saving date-time as a string for now... Controller will convert to proper ISO format
			type: String,
			trim: true,
		},
		groupId: {
			// * No existing group model. This bot is intended to work for only one group.
			type: Integer,
		},
		id: {
			type: Integer,
			required: true,
			unique: true,
			trim: true,
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		senderId: {
			type: String,
			required: true,
			trim: true,
		},
		text: {
			type: String,
			required: true,
		},
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
		id: false,
	}
);

// Query middleware to increase version number and set updatedAt with findOneAndUpdate
// https://stackoverflow.com/questions/35288488/easy-way-to-increment-mongoose-document-versions-for-any-update-queries
messageSchema.pre("findOneAndUpdate", function (next) {
	this.set({ updatedAt: DateTime.now().toISO() });
	this.update({}, { $inc: { __v: 1 } });
	next();
});

messageSchema.pre("updateOne", function (next) {
	this.set({ updatedAt: DateTime.now().toISO() });
	this.update({}, { $inc: { __v: 1 } });
	next();
});

const message = model("message", messageSchema);

export default message;
