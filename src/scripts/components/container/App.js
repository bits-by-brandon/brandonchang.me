import React from 'react';

import Sidebar from "../presentation/Sidebar";
import WorkList from "../presentation/WorkList";
import Frame from "./Frame";

import '../../utility/dotGrid';
import 'Styles/components/dotgrid.scss';
import 'Styles/app.scss';

const App = () => (
    <div className="main">
        <Frame/>
        {/*<div className="home hero">*/}
            {/*<Sidebar listItems={['design', 'develop', 'hack']}/>*/}
        {/*</div>*/}
        {/*<WorkList/>*/}
    </div>
);

export default App;
