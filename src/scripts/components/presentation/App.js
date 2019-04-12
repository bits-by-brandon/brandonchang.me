import React, {Component} from 'react';
import classnames from 'classnames';
import ga from 'react-ga';

import '../background/entry';
import 'Styles/components/canvas.scss';
import 'Styles/app.scss';
import Menu from "../container/Menu";
import Repl from "../container/Repl";

ga.initialize('UA-62431523-1', {debug: process.env.NODE_ENV !== 'production'});
ga.pageview(window.location.pathname);

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classnames("main", this.props.consoleState)}>
        <div className={classnames("load-overlay", this.props.consoleState)}/>
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
