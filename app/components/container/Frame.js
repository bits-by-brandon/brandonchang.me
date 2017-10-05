//React Component: Frame
//============================

import React, {Component} from 'react';
import Repl from '../presentation/Repl';
import Menu from './Menu';
import '../../styles/components/frame.scss';

class frame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            consoleOn: false
        };
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    scrollToBottom() {
        this.frameSquare.scrollTop = this.frameSquare.clientHeight;
    }

    render() {
        return (
            <div className="frame">
                <div
                    className={"frame__square" + (this.state.consoleOn ? ' on' : '')}
                    ref={(frameSquareDom) => {
                        this.frameSquare = frameSquareDom
                    }}
                >
                    <Repl
                        initialText="brandon<br />chang"
                        blinkRate={1000}
                        handleEnter={(isEmpty) => {
                            this.setState({
                                consoleOn: isEmpty
                            });
                            this.scrollToBottom()
                        }}
                    />
                </div>
                <Menu
                    menuItems={[
                        {
                            label: 'work',
                            slug: 'work'
                        },
                        {
                            label: 'about',
                            slug: 'about'
                        },
                        {
                            label: 'contact',
                            slug: 'contact'
                        },
                    ]}
                />
            </div>
        );
    }
}

frame.propTypes = {};
frame.defaultProps = {};

export default frame;
