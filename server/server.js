const app = require('./app/app'); //app init
const stoppable = require('stoppable');
const gracefulShutdown = require('./app/utils/gracefulShutdown');
const config = require("./config/config");
const logger = require('./config/logger');
const { errorHandler } = require("./app/middlewares");
const mongoose = require('mongoose');
const PORT = config.port || 3001;
let server;

/// Start the server
const mongooseDbOptions = {
    autoIndex: true, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose
.connect(`${config.mongoose.url}/${config.mongoose.name}`, mongooseDbOptions)
.then(()=> {
    logger.info('Connected to MongoDB');
    server = app.listen(config.port, () => {
        console.log(`Listening on port ${config.port}`);
    });
})
.catch((err)=> logger.error("Failed to connect to DB", err));

/// Catch All Uncaught Exceptions
process.on('uncaughtException', error => {
    errorHandler.logError(error)
   
    if (!errorHandler.isOperationalError(error)) {
        process.exit(1)
    }
});


process.on('uncaughtException', err => {
    console.log(err.name, err.message);
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');

    process.exit(1);

});

process.on('unhandledRejection', err => {
    console.log(err.name, err.message);
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    process.exit(1);
});

// quit on ctrl+c when running in terminal
process.on('SIGINT', async () => {
    logger.info('Got SIGINT (Press ctrl+c in Terminal). Graceful shutdown', new Date().toISOString());
    await gracefulShutdown(stoppable(server));
});
  
// quit properly on docker stop
process.on('SIGTERM', async () => {
    logger.info('Got SIGTERM (Terminal Stop). Graceful shutdown', new Date().toISOString());
    await gracefulShutdown(stoppable(server));
});
  