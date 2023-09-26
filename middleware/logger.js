/* Credit to Josh Naylor for this simple logger function from class*/
import chalk from "chalk";

const logger = (req, res, next) => {
	console.log(
		chalk.black.bgBlue.bold(`\n${req.method} request hit path ${req.url}\n`)
	);
	console.log(req.body);

	next();
};

export default logger;
