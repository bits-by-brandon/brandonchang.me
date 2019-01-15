import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux'

import Frame from './Frame';
import Sidebar from './Sidebar';
import WorkList from './WorkList';

import 'Styles/app.scss';
import 'Styles/sections/hero.scss';

import '../../utility/dotGrid';
import 'Styles/components/dotgrid.scss';

const App = ({store}) => (
    <Provider store={store}>
        <div className="main">
            <Frame />
            <div className="home hero">
                <Sidebar listItems={['design', 'develop', 'hack']}/>
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
    </Provider>
);

App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App;