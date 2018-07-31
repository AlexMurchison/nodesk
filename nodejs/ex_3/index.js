const Logger = require('logplease');
const logger = Logger.create('utils');
logger.debug(`Hello Node.js`);
logger.info(`Node.js is great!~`);
logger.warn(`Warning, warning, I think we have a warning!`);
logger.error(`Mayday mayday! We have an error!`);

