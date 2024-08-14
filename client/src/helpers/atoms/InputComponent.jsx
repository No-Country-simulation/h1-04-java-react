import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { useState } from "react";

const InputComponent = ({ name, label, type = "text", disabled, value, onChange, hasFocus, onFocus, onBlur }) => {
  const [togglePasswordVisibility, setTogglePasswordVisibility] = useState(false);
  const typeComputed = type === "password" && togglePasswordVisibility ? "text" : type;

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
          className={`w-full border-2 border-secondary rounded-md py-2 px-3 transition-colors duration-200 ${hasFocus ? 'border-secondary ring-2 ring-secondary' : 'border-gray-300'}`}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          style={{borderRadius:"10px"}}
        />
        
        {type === "password" && (
          <button
            type='button'
            tabIndex='-1'
            disabled={disabled}
            aria-label='password-visibility-toggle'
            className={`absolute top-0 right-0 p-1 m-2.5 rounded-full  border-transparent font-semibold bg-white focus:outline-none transition-all ${
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
  hasFocus: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
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