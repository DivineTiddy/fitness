import TimeReminder from "../components/Time/TimeReminder";
import "./Reminder.css";
import propTypes from "prop-types";

const Reminder = ({ email }) => {
  return (
    <div className="reminder">
      <TimeReminder email={email} />
    </div>
  );
};
Reminder.propTypes = {
  email: propTypes.string.isRequired,
};
export default Reminder;
