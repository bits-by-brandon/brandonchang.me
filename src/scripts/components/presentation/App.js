import React, {Component} from 'react';
import classnames from 'classnames';

// import Sidebar from "../presentation/Sidebar";
// import WorkList from "../presentation/WorkList";
import Frame from "../container/Frame";

import '../../utility/dotGrid';
import 'Styles/components/dotgrid.scss';
import 'Styles/app.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
        this.props.boot();
    }

    render() {
        return (
            <div className={classnames("main", this.props.consoleState)}>
                <Frame/>
                {/*<div className="home hero">*/}
                {/*<Sidebar listItems={['design', 'develop', 'hack']}/>*/}
                {/*</div>*/}
                {/*<WorkList/>*/}
            </div>
        )
    }
}

export default App;
