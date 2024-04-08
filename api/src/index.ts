import {startServer} from "./server/ServerHelper";

startServer()
    .then(() => {
        console.log('Server start up is complete');
    })
    .catch((error: Error) => {
        console.error(`Error starting server: ${error.message}`)
    })