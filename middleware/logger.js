const logger = (req, res, next) => {
	console.log(`\n${req.method} request hit path ${req.url}\n`);
	console.log(req.body);
	// TODO: Update logger to be more concise yet provide more info for incoming messages
	// TODO: create individual loggers for different paths? API, Callbacks, etc?
	next();
};

export default logger;
