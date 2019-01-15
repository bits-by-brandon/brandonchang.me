import PropTypes from 'prop-types';
import React, {Component} from 'react';
import 'Styles/components/work-item.scss';

class workItem extends Component {

    render() {
        return (
            <div className="work-item" >
                <div className="work-item__background-image__wrapper">
                    <div
                        className="work-item__background-image"
                        data-clip
                        style={{
                            backgroundImage: 'url(' + this.props.imageUrl + ')'
                        }}
                    />
                </div>
                <div className="work-item__info">
                    <div className="work-item__text-wrapper">
                        <h2 className="work-item__header">{this.props.header}</h2>
                        <h5 className="work-item__subheader">{this.props.subheader}</h5>
                    </div>
                    <img src={this.props.iconUrl} />
                </div>
            </div>
        );
    }
}

workItem.propTypes = {
    header: PropTypes.string.isRequired,
    subheader: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    iconUrl: PropTypes.string.isRequired
};
workItem.defaultProps = {
    header: 'Header',
    subheader: 'Sub-Header',
    imageUrl: '/yo',
    iconUrl: '/yo'
};

export default workItem;