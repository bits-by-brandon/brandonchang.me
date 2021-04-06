import React, {Component} from 'react';
import classnames from 'classnames';
import * as ga from 'react-ga';

import '../background/entry';
import Menu from "../container/Menu";
import Repl from "../container/Repl";
import Background from "@/components/background/entry";

ga.initialize('UA-62431523-1', {debug: process.env.NODE_ENV !== 'production', testMode: process.env.NODE_ENV !== 'production'});
ga.pageview('/boot');

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classnames("main", this.props.consoleState)}>
        <div className={classnames("load-overlay", this.props.consoleState)}/>
        <Background />
        <Repl/>
        <Menu
          menuItems={[
            {label: 'work', slug: 'work'},
            {label: 'about', slug: 'about'},
            {label: 'skills', slug: 'skills'},
            {label: 'contact', slug: 'contact'},
          ]}
        />
      </div>
    )
  }
}

export default App;
