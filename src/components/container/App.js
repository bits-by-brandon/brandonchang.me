//React Component: App
//============================

import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Frame from './Frame';
import Sidebar from '../presentation/Sidebar';
import WorkList from './WorkList';

import 'Styles/app.scss';
import 'Styles/sections/hero.scss';

class app extends Component {

    render() {
        return (
            <Router>
                <div className="main">
                    <Frame/>
                    <div className="home hero">
                        <Sidebar textList={[ 'design', 'develop', 'hack' ]} />
                    </div>
                    <WorkList
                        items={[
                            {
                                header: 'Dota 2',
                                subheader: 'Interactive Map',
                                imageUrl: '/public/img/dota-2.jpg',
                                iconUrl: '/public/img/dota-2-icon.png'
                            }
                        ]}
                    />
                </div>
            </Router>
        );
    }
}

app.propTypes = {};
app.defaultProps = {};

export default app;