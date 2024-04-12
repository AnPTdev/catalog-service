"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServerHelper_1 = require("./server/ServerHelper");
(0, ServerHelper_1.startServer)()
    .then(() => {
    console.info('Server start up is complete');
})
    .catch((error) => {
    console.error(`Error starting server: ${error.message}`);
});
