import React, {Component} from 'react';
import classnames from 'classnames';

// import Sidebar from "../presentation/Sidebar";
// import WorkList from "../presentation/WorkList";

import '../background/entry';
import 'Styles/components/canvas.scss';
import 'Styles/app.scss';
import Menu from "../container/Menu";
import Repl from "../container/Repl";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={classnames("main", this.props.consoleState)}>
                <div className={classnames("load-overlay", this.props.consoleState)} />
                <Repl />
                <Menu
                    menuItems={[
                        {label: 'work', slug: 'work'},
                        {label: 'about', slug: 'about'},
                        {label: 'skills', slug: 'skills'},
                        {label: 'contact', slug: 'contact'},
                    ]}
                />
                {/*<div className="home hero">*/}
                {/*<Sidebar listItems={['design', 'develop', 'hack']}/>*/}
                {/*</div>*/}
                {/*<WorkList/>*/}
            </div>
        )
    }
}

export default App;
