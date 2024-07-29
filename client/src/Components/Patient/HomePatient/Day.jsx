import PropTypes from "prop-types"
import arrowRight from "../../../Assets/Imgs/arrowRight.png"

const Day = ({activity, time, href, backColor}) => {
    return (
        <div className="bg-stone-300 font-bold flex justify-between p-2 m-3">
            <p className="ml-2">{activity}</p>
            <div className="flex">
                <p>{time}</p>
                <a href={href}><img src={arrowRight} alt="arrow" className="w-6 h-6 ml-4" /></a>
            </div>
        </div>
    )
}

Day.propTypes = {
    activity: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

export default Day