import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkComponent = ({ to, href, target = '_blank', disabled, children }) => {
  const baseStyle = 'text-sm font-medium text-primary-500 hover:underline';

  if (disabled) {
    return <span className="text-sm font-medium text-gray-500 select-none">{children}</span>;
  }

  if (href) {
    return (
      <a href={href} target={target} rel="noopener noreferrer" className={baseStyle}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={baseStyle}>
        {children}
      </Link>
    );
  }

  return null;
};

LinkComponent.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.oneOf(['_self', '_blank']),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default LinkComponent;