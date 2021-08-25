import './IconLink.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IconLink extends Component {
    render() {
        return (
            <a className='link' href={this.props.href} target='_blank' rel='noopener noreferrer'>
                <img
                    src={process.env.PUBLIC_URL + '/' + this.props.icon + '.svg'}
                    className='link-icon'
                    alt={this.props.children}
                />
            </a>
        );
    }
}

IconLink.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default IconLink;
