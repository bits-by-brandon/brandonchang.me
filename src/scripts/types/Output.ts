export enum OutputType {
  ERROR = 'error',
  STANDARD = 'standard',
  EMPHASIS = 'emphasis',
  INPUT = 'input',
}

export interface Output {
  style: OutputType[],
  output: string
}