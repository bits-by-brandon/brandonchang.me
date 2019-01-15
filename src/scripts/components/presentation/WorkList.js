import PropTypes from 'prop-types';
import React, {Component} from 'react';
import WorkItem from './WorkItem';
import 'Styles/sections/work-list.scss';

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
    items: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string.isRequired,
            subheader: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            iconUrl: PropTypes.string.isRequired
        })
    )
};
workList.defaultProps = {};

export default workList;