import { useState } from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const InputComponent = ({
  name,
  label,
  type = "text",
  disabled,
  value,
  onChange,
}) => {
  const [togglePasswordVisibility, setTogglePasswordVisibility] =
    useState(false);

  const typeComputed =
    type === "password" && togglePasswordVisibility ? "text" : type;

  const handleToggleVisibility = () => {
    setTogglePasswordVisibility(!togglePasswordVisibility);
  };

  return (
    <div className='w-full'>
      <TextTitle name={name} label={label} />
      <div className='input__wrapper relative'>
        <input
          type={typeComputed}
          disabled={disabled}
          className='w-full border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500'
          value={value}
          onChange={onChange}
        />

        {type === "password" && (
          <button
            type='button'
            tabIndex='-1'
            disabled={disabled}
            aria-label='password-visibility-toggle'
            className={`absolute top-0 right-0 p-1 m-2.5 rounded-full border border-transparent font-semibold bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all ${
              disabled ? "text-gray-400" : "text-gray-500 hover:bg-gray-100"
            }`}
            onClick={handleToggleVisibility}
          >
            {togglePasswordVisibility ? (
              <Icon icon='mdi:eye' className='w-4 h-4' />
            ) : (
              <Icon icon='mdi:eye-off' className='w-4 h-4' />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

InputComponent.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const TextTitle = ({ name, label }) => (
  <label htmlFor={name} className='block text-sm font-medium'>
    {label}
  </label>
);

TextTitle.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default InputComponent;
