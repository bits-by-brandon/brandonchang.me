export enum OutputType {
  ERROR = 'error',
  STANDARD = 'standard',
  EMPHASIS = 'emphasis',
  INPUT = 'input',
}

export type ConsoleOutput = {
  style: OutputType[],
  output: string
}