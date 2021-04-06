import React, {Component} from 'react';
import Repl from '../container/Repl';

class Frame extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="frame">
                <Repl />
                {/*<Menu*/}
                    {/*menuItems={[*/}
                        {/*{label: 'work', slug: 'work'},*/}
                        {/*{label: 'about', slug: 'about'},*/}
                        {/*{label: 'skills', slug: 'skills'},*/}
                        {/*{label: 'contact', slug: 'contact'},*/}
                    {/*]}*/}
                {/*/>*/}
            </div>
        );
    }
}

export default Frame;
