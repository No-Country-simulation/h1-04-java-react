/* eslint-disable react/prop-types */
const WeekComponent = ({ backgroundColor, borderColor, textColor }) => {
    let today = new Date().getDay();

    const days = [
        { id: 1, label: 'Lun' },
        { id: 2, label: 'Mar' },
        { id: 3, label: 'Mie' },
        { id: 4, label: 'Jue' },
        { id: 5, label: 'Vie' },
        { id: 6, label: 'Sab' },
        { id: 7, label: 'Dom' },
    ];

    return (
        <div className="flex justify-around p-4">
            {days.map(dayObj => (
                <button key={dayObj.id} className={`shadow-xl rounded-xl border inline-block w-20 text-center py-2 m-1 ${today === dayObj.id ? `${backgroundColor} text-white ${borderColor}` : `${borderColor} ${textColor}`}`}>
                    <p>{dayObj.label}</p>
                </button>
            ))}
        </div>
    );
}

export default WeekComponent;