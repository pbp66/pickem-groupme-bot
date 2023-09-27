const logger = (req, res, next) => {
	console.log(`\n${req.method} request hit path ${req.url}\n`);
	console.log(req.body);
	next();
};

export default logger;
