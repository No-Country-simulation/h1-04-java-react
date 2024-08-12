import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Alert = ({ type = 'default', message }) => {
    const [icon, setIcon] = useState('bi:info-circle-fill');
    const [styles, setStyles] = useState({
        alert: [''],
        icon: '',
        msg: '',
    });


    useEffect(() => {
        setAlertStyles(type);
    }, [type]);


    const setAlertStyles = (type) => {
        if (type === 'default') {
        setStyles({
            alert: ['bg-blue-50', 'border-blue-400'],
            icon: 'text-blue-500',
            msg: 'text-blue-600',
        });
        setIcon('bi:info-circle-fill');
        } else if (type === 'info') {
        setStyles({
            alert: ['bg-yellow-50', 'border-yellow-400'],
            icon: 'text-yellow-500',
            msg: 'text-yellow-600',
        });
        setIcon('mingcute:alert-fill');
        } else if (type === 'success') {
        setStyles({
            alert: ['bg-emerald-50', 'border-emerald-400'],
            icon: 'text-emerald-500',
            msg: 'text-emerald-600',
        });
        setIcon('material-symbols:check-circle');
        } else if (type === 'error') {
        setStyles({
            alert: ['bg-red-50', 'border-red-400'],
            icon: 'text-red-500',
            msg: 'text-red-600',
        });
        setIcon('mdi:close-circle');
        }
    };


    return (
        <div className={`p-4 border rounded-md transition duration-300 ${styles.alert.join(' ')}`} role="alert">
            <div className="flex items-center">
                <div className="flex-shrink-0 self-start">
                    <span data-icon={icon} className={`iconify w-5 h-5 mt-0.5 ${styles.icon}`} />
                </div>
                <div className="ml-3">
                <span className={`text-sm font-medium ${styles.msg}`}>
                    {message}
                </span>
                </div>
            </div>
        </div>
    );
};

Alert.propTypes = {
    type: PropTypes.oneOf(['default', 'info', 'success', 'error']),
    message: PropTypes.string.isRequired,
};

export default Alert;