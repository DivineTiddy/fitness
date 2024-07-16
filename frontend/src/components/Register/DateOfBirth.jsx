import "./DateOfBirth.css";

const DateOfBirth = () => {
  return (
    <div className="dateContainer">
      <div className="displayCalnder">
        <div className="dateText">
          <p className="yourDateText1">Your Date of Birth</p>
          <p className="yourDateText2">To help personalize FlexQuest for you</p>
        </div>
        <div className="displayDate"></div>
      </div>
      <div className="sexContainer">
        <span>
        <p
          className="yourDateText1"
        >
          Your Sex
        </p>
        <p className="yourDateText2">Male or Female?</p>
        </span>
        <select className="selectSex">
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
      <button className="sexBtn">Finish</button>
    </div>
  );
};

export default DateOfBirth;
