"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sockets_1 = require("./services/sockets");
const server_1 = __importDefault(require("./services/server"));
const socket_io_1 = require("socket.io");
const io = new socket_io_1.Server(server_1.default);
const puerto = process.env.PORT || 8080;
sockets_1.init(io);
server_1.default.listen(puerto, () => console.log(`Server up puerto ${puerto}`));
