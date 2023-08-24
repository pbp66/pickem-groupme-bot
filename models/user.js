import { Schema, model } from "mongoose";
import { DateTime } from "luxon";

const roleSchema = new Schema({
	role: {
		type: String,
		required: true,
		unique: false,
		trim: true,
	},
});

const userSchema = new Schema(
	{
		user_id: {
			type: Integer,
			required: true,
			unique: true,
			trim: true,
		},
		nickname: {
			type: String,
			required: true,
			unique: false,
			trim: true,
		},
		id: {
			type: Integer,
			required: true,
			unique: true,
			trim: true,
		},
		name: {
			type: String,
			required: true,
			unique: false,
			trim: true,
		},
		roles: [roleSchema],
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
userSchema.pre("findOneAndUpdate", function (next) {
	this.set({ updatedAt: DateTime.now().toISO() });
	this.update({}, { $inc: { __v: 1 } });
	next();
});

userSchema.pre("updateOne", function (next) {
	this.set({ updatedAt: DateTime.now().toISO() });
	this.update({}, { $inc: { __v: 1 } });
	next();
});

const user = model("user", userSchema);

export default user;
