enum LoggerChannel {
    SERVER_BANS = ''
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