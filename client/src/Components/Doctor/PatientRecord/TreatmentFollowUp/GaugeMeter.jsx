/* eslint-disable react/prop-types */
const GaugeMeter = ({ value }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const percentage = (value / 5) * 100; // Asumiendo que el valor máximo es 5
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex items-center justify-center">
            <svg className="transform -rotate-90 w-24 h-24">
                <circle
                    className="text-gray-300"
                    strokeWidth="5"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="50%"
                    cy="50%"
                />
                <circle
                    className="text-blue-500"
                    strokeWidth="5"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="50%"
                    cy="50%"
                />
            </svg>
            <div className="absolute flex items-center justify-center w-24 h-24">
                <span className="text-2xl font-semibold">{value}</span>
            </div>
        </div>
    );
};

export default GaugeMeter;