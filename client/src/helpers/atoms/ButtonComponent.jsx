import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const ButtonComponent = ({
  type = "button",
  theme = "primary",
  to,
  href,
  loading = false,
  disabled = false,
  children,
}) => {
  const classTheme = () => {
    if (disabled) {
      return "bg-gray-200 text-gray-400";
    }
    if (theme === "primary") {
      const baseClass = "bg-primary-400 focus:ring-primary-500";
      return `${baseClass} ${
        loading ? "text-transparent" : "hover:bg-primary-500 text-white"
      }`;
    }
    // theme === 'secondary'
    const baseClass = "bg-gray-200 focus:ring-gray-400";
    return `${baseClass} ${
      loading ? "text-transparent" : "hover:bg-gray-300 text-gray-700"
    }`;
  };

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
      className={`px-4 py-2.5 inline-flex justify-center items-center gap-2 rounded border border-transparent text-sm font-semibold focus:ring-2 focus:outline-none focus:ring-offset-2 transition-all ${classTheme()}`}
      disabled={disabled || loading}
    >
      {children}
      {loading && !disabled && (
        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center z-10'>
          <Icon
            icon='icomoon-free:spinner2'
            className='w-5 h-5 animate-spin'
            style={{ color: theme === "primary" ? "white" : "gray" }}
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
