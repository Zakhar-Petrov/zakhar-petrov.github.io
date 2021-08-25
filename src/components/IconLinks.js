import './IconLinks.css';
import IconLink from './IconLink';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IconLinks extends Component {
    render() {
        const listItems = this.props.iconLinks.map(item => (
            <IconLink key={item.title} href={item.href} icon={item.icon}>
                {item.title}
            </IconLink>
        ));
        return <div className='icon-links'>{listItems}</div>;
    }
}

IconLinks.propTypes = {
    iconLinks: PropTypes.array.isRequired
};

export default IconLinks;
