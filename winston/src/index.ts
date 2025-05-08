import { createLogger,transports,format } from "winston";

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

const logger = createLogger({
    transports:[
        new transports.File({
            dirname:"logs",
            filename:"winston_example.log"
        })
    ],
    format:format.combine(
        format.timestamp(),
        format.printf(({timestamp,level,message,service})=>{
            return `[${timestamp} ${service} ${level}: ${message}]`
        })
    ),
    defaultMeta:{
        service:"winstonexample",
    }
})
logger.info("helloworld")


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