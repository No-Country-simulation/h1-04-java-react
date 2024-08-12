import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../../Components/Login/login.css"

const ButtonComponent = ({ type = "button", to, href, loading = false, disabled = false, children }) => {
  const Element = () => {
    if (disabled || !(to || href)) {
      return "button";
    }
    if (to) {
      return Link;
    }
    // href existe
    return "a";
  };
  const ElementTag = Element();

  const elementAttrs = {};
  if (disabled || !(to || href)) {
    elementAttrs.type = type;
  } else {
    if (to) {
      elementAttrs.to = to;
    }
    if (href) {
      elementAttrs.href = href;
      elementAttrs.rel = "noopener noreferrer";
    }
  }

  return (
    <ElementTag
      {...elementAttrs}
      className="buttonLogin"
      disabled={disabled || loading}
    >
      {children}
      {loading && !disabled && (
        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center z-10'>
          <Icon
            icon='icomoon-free:spinner2'
            className='w-5 h-5 animate-spin'
          />
        </div>
      )}
    </ElementTag>
  );
};

ButtonComponent.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  theme: PropTypes.oneOf(["primary", "secondary"]),
  to: PropTypes.string,
  href: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default ButtonComponent;
