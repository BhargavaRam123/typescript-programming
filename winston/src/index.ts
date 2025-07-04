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
import { createWriteStream } from "fs";

const logger = createLogger({
  transports: [
    new transports.Stream({
      stream: createWriteStream("hello.txt"),
    }),
  ],
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message, service }) => {
      return `[${timestamp}] ${service} ${level}: ${message}`;
    })
  ),
  defaultMeta: {
    service: "WinstonExample",
  },
});

logger.info("hello");

//colorize will apply color to the level so that error would appear red
//when shipping logs to server spplication json format is preferable 


//another interesting format is splat which enables string interpolation

//const userid = "123"
//logger.info("hello %s",userid)

//logger.info("hello world",{correlationdi:'234',userid:'3'})

//these will be collected within the metadata 
//format.printf({...,metadata})

