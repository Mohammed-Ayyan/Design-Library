export interface CliCommandResult {
    command: string;
    output: string;
    exitCode: number;
}
export declare function executeCliCommand(cmdLine: string): CliCommandResult;
