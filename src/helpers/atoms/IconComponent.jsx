import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const IconComponent = ({ name }) => {
    return <span data-icon={name} className="iconify"><Icon icon={name} /></span>;
};

IconComponent.propTypes = {
    name: PropTypes.string.isRequired,
};

export default IconComponent;