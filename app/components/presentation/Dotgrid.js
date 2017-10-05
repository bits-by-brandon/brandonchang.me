//React Component: Dot Grid
//============================

import React, {Component} from 'react';
import gridLogic from '../../scripts/gridLogic';
import '../../styles/components/dotgrid.scss';

class dotGrid extends Component {

    componentDidMount(){
        gridLogic.init();
    }

    render() {
        return (
            <div className="dotgrid__wrapper">
                <canvas
                    id="dotgrid"
                ></canvas>
            </div>
        );
    }
}

export default dotGrid;