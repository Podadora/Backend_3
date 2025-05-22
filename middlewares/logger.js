import winston from "winston";

// Definimos los niveles personalizados
const customLevels = {
    levels: {
        error: 0,
        http: 1
    },
    colors: {
        error: "red",
        http: "blue"
    }
};

winston.addColors(customLevels.colors);

// Transportes por entorno
const devLogger = winston.createLogger({
    levels: customLevels.levels,
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    ),
    transports: [
        new winston.transports.Console({ level: "http" })
    ]
});

const prodLogger = winston.createLogger({
    levels: customLevels.levels,
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: "errors.log", level: "error" }),
        new winston.transports.Console({ level: "http" })
    ]
});

// Middleware que agrega el logger al req
export const logger = (req, res, next) => {
    if (process.env.NODE_ENV === "production") {
        req.logger = prodLogger;
    } else {
        req.logger = devLogger;
    }

    req.logger.http(`[${req.method}] ${req.url}`);
    next();
};