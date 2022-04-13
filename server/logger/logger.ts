enum LoggerChannel {
    SERVER_BANS = 'https://discord.com/api/webhooks/962194922163818516/zZZZSk8kBsZIu0Xj1-Nq77SsdjV3fGA8a63wC50jaY6loWqHK0GrRgKSjDUh2xAQZrN3'
}

enum LoggerType {
    SEVERE,
    WARNING,
    INFO,
    CONFIG,
    FINE,
    FINER,
    FINEST
}

export enum LoggerColor {
    DARK_BLUE = 1127128,
    ORANGE = 14177041,
    GREEN = 6277476,
    RED = 15221604,
    YELLOW = 14479499
}

export class LOGGER {
    public static debug() {

    }

    public static log(channel: LoggerChannel, type: LoggerType, title: string, message: string, color: LoggerColor) {
        
    }
}