import React, {Component} from 'react';
import Repl from '../container/Repl';
import Menu from './Menu';
import 'Styles/components/frame.scss';

class Frame extends Component {
    constructor(props) {
        super(props);
        this.frameRef = React.createRef();
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    scrollToBottom() {
        this.frameRef.current.scrollTop = this.frameRef.current.clientHeight;
    }

    render() {
        return (
            <div className="frame">
                <div
                    className={"frame__square" + (this.props.consoleVisible ? ' frame__square--active' : '')}
                    ref={this.frameRef}
                >
                    <Repl />
                    {/*<Repl*/}
                        {/*initialText="brandon_chang"*/}
                        {/*blinkRate={800}*/}
                        {/*handleEnter={this.scrollToBottom}*/}
                    {/*/>*/}
                </div>
                <Menu
                    menuItems={[
                        { label: 'work', slug: 'work' },
                        { label: 'about', slug: 'about' },
                        { label: 'skills', slug: 'skills' },
                        { label: 'contact', slug: 'contact' },
                    ]}
                />
            </div>
        );
    }
}

Frame.propTypes = {};
Frame.defaultProps = {};

export default Frame;
