interface StackChannelConfig {
    driver: 'stack';
    channels: string[];
    ignore_exceptions: boolean;
}
interface SingleChannelConfig {
    driver: 'single';
    path: string;
    level: string;
}
interface DailyChannelConfig {
    driver: 'daily';
    path: string;
    date_pattern: string;
    level: string;
    days: number;
}
interface ConsoleChannelConfig {
    driver: 'console';
    level: string;
}
interface SyslogChannelConfig {
    driver: 'syslog';
    level: string;
}
type LogChannelConfig = StackChannelConfig | SingleChannelConfig | DailyChannelConfig | ConsoleChannelConfig | SyslogChannelConfig;
interface LoggingConfig {
    default: string;
    channels: Record<string, LogChannelConfig>;
}
declare const config: LoggingConfig;
export default config;
//# sourceMappingURL=logging.d.ts.map