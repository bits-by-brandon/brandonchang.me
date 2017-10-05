//React Component: Work List
//============================

import React, {Component} from 'react';
import WorkItem from '../presentation/WorkItem';
import '../../styles/sections/work-list.scss';

class workList extends Component {
    render() {
        return (
            <ul className="work-list">
                {
                    this.props.items.map((item, index)=>{
                        return (
                            <WorkItem
                                {...item}
                                key={index}
                            />
                        )
                    })
                }
            </ul>
        );
    }
}

workList.propTypes = {
    items: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            header: React.PropTypes.string.isRequired,
            subheader: React.PropTypes.string.isRequired,
            imageUrl: React.PropTypes.string.isRequired,
            iconUrl: React.PropTypes.string.isRequired
        })
    )
};
workList.defaultProps = {};

export default workList;