"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
// const logger = createLogger({
//     transports:[new transports.Console()],
//     format:format.combine(
//         format.colorize(),
//         format.timestamp(),
//         format.printf(({timestamp,level,message,service})=>{
//             return `[${timestamp}] ${service} ${level}: ${message}`
//         })
//     ),
//     defaultMeta:{
//         service:"WinstonExample"
//     }
// }
// )
// logger.info('hello world!')
// const logger = createLogger({
//     transports:[
//         new transports.File({
//             dirname:"logs",
//             filename:"winston_example.log"
//         })
//     ],
//     format:format.combine(
//         format.timestamp(),
//         format.printf(({timestamp,level,message,service})=>{
//             return `[${timestamp} ${service} ${level}: ${message}]`
//         })
//     ),
//     defaultMeta:{
//         service:"winstonexample",
//     }
// })
// logger.info("helloworld")
//http is used to ship logs to defined endpoint
// const logger = createLogger({
//     transports: [new transports.Http()],
//     format: format.combine(
//       format.timestamp(),
//       format.printf(({ timestamp, level, message, service }) => {
//         return `[${timestamp}] ${service} ${level}: ${message}`;
//       })
//     ),
//     defaultMeta: {
//       service: "WinstonExample",
//     },
//   });
// import { createLogger, transports, format } from "winston";
const fs_1 = require("fs");
const logger = (0, winston_1.createLogger)({
    transports: [
        new winston_1.transports.Stream({
            stream: (0, fs_1.createWriteStream)("hello.txt"),
        }),
    ],
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.printf(({ timestamp, level, message, service }) => {
        return `[${timestamp}] ${service} ${level}: ${message}`;
    })),
    defaultMeta: {
        service: "WinstonExample",
    },
});
