import { useState } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { Icon } from '@iconify/react';

const InputComponent = ({ name, label, type='text', disabled, ...props }) => {
    const [field, meta, helpers] = useField(name);
    const { setValue } = helpers;
    const [togglePasswordVisibility, setTogglePasswordVisibility] = useState(false);


    const typeComputed = type === 'password' && togglePasswordVisibility ? 'text' : type;


    const handleToggleVisibility = () => {
        setTogglePasswordVisibility(!togglePasswordVisibility);
    };


    return (
        <div className="w-full">
            <TextTitle name={name} label={label} hasError={meta.touched && meta.error} />
            <div className="input__wrapper">
                <input
                {...field}
                {...props}
                type={typeComputed}
                disabled={disabled}
                className={`w-full ${meta.touched && meta.error ? 'p-invalid' : ''}`}
                onChange={(e) => setValue(e.target.value)}
                />
                {type === 'password' && (
                <button
                    type="button"
                    tabIndex="-1"
                    disabled={disabled}
                    aria-label="password-visibility-toggle"
                    className={`absolute top-0 right-0 p-1 m-2.5 rounded-full border border-transparent font-semibold bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all ${
                    disabled ? 'text-gray-400' : 'text-gray-500 hover:bg-gray-100'
                    }`}
                    onClick={handleToggleVisibility}
                >
                    {togglePasswordVisibility ? (
                    <Icon icon="mdi:eye" className="w-4 h-4" />
                    ) : (
                    <Icon icon="mdi:eye-off" className="w-4 h-4" />
                    )}
                </button>
                )}
            </div>
            <TextHelper errorMessage={meta.error && meta.touched ? meta.error : ''} />
        </div>
    );
};

InputComponent.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password']),
    disabled: PropTypes.bool,
};

const TextTitle = ({ name, label, hasError }) => (
    <label htmlFor={name} className={`block text-sm font-medium ${hasError ? 'text-red-600' : 'text-gray-700'}`}>
        {label}
    </label>
);

TextTitle.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    hasError: PropTypes.bool.isRequired,
};
const TextHelper = ({ errorMessage }) => (
    <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
);
TextHelper.propTypes = {
    errorMessage: PropTypes.string,
};
TextHelper.defaultProps = {
    errorMessage: '',
};

export default InputComponent;