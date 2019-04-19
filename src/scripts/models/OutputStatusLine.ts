import {Output, OutputType} from "../types/Output";

class OutputStatusLine implements Output {

  public style: OutputType[];
  public text: string;
  private progress: number;

  /**
   * @param {string} text
   * @param {array} style
   * @param progress
   */
  constructor(text: string, style: OutputType[] = [OutputType.STANDARD], progress: number = 0) {
    this.text = text;
    this.style = style;
    this.progress = progress;
  }

  get output(): string {
    return OutputStatusLine.getBarString(this.progress) + ' ' + this.text;
  }

  getProgress(): number {
    return this.progress
  }

  setProgress(progress: number): void {
    this.progress = progress
  }

  static getBarString(progress: number) {
    if (progress < 0) {
      return '[ FAIL ]';
    } else if (progress === 0) {
      return '[ .... ]';
    } else if (progress < 100) {
      // Calculate the progress bar based on progress
      let bar = '';
      for (let i = 0; i < 6; i++) {
        bar += (i >= Math.floor(progress * 7 / 100)) ? ' ' : '=';
      }
      return '[' + bar + ']';
    } else {
      return '[  OK  ]';
    }
  }
}

export default OutputStatusLine;