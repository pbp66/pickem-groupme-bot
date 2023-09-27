import mongoose from "mongoose";

const connectionString =
	process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/cfbpickemDB";

mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

export default mongoose.connection;
