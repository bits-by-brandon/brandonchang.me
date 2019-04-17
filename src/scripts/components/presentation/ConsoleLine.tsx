import * as React from 'react';
import 'Styles/components/repl.scss';
import {OutputType} from "../../types/Output";

class ConsoleLine extends React.Component<ConsoleLineProps> {
  constructor(props: ConsoleLineProps) {
    super(props);
  }

  render() {
    const {style, output, prompt} = this.props;
    const classes = ['line', ...style];
    return (
      <span className={classes.join(' ')}>
                {(style.includes(OutputType.INPUT)) ? prompt + ' ' : ''}
        <span dangerouslySetInnerHTML={{__html: output}}/>
            </span>
    )
  }
}

interface ConsoleLineProps {
  style: OutputType[],
  output: string,
  prompt: string
}

export default ConsoleLine;
