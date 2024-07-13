import daysWeek from "../../../Assets/Imgs/daysWeek.png";
import day from "../../../Assets/Imgs/urgency.png";

const Week = () => {
    let today = new Date().getDay();

    const days = [
        { id: 1, label: 'LUN' },
        { id: 2, label: 'MAR' },
        { id: 3, label: 'MIER' },
        { id: 4, label: 'JUE' },
        { id: 5, label: 'VIER' },
        { id: 6, label: 'SAB' },
        { id: 7, label: 'DOM' },
    ];

    return (
        <div className="flex justify-around p-4">
            {days.map(dayObj => (
                <div key={dayObj.id} className="text-center">
                    <img src={today === dayObj.id ? day : daysWeek} alt={dayObj.label} className="w-6 h-6 ml-1" />
                    <p>{dayObj.label}</p>
                </div>
            ))}
        </div>
    );
}

export default Week;