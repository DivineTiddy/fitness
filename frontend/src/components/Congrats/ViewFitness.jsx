import { Link } from "react-router-dom";
import Emoji from "../Landing/Emoji";
import "./ViewFitness.css";
import { useEffect, useState } from "react";
import propTypes from "prop-types";

// CONGRACTULATION COMPONENT

const ViewFitness = ({ email }) => {
  //const [data, setData] = useState({});
  const [hour, sethour] = useState(Number);
  const [within, setwithin] = useState(Number);
  const [selectGoal, setselectGoal] = useState("");
  const [minutes, setminutesr] = useState(Number);
  const [metricsGoal, setmetricsGoal] = useState("");
  const [loss, setloss] = useState(Number);

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(
            `http://localhost:8000/api/v2/users/data?email=${email}`
          );
          const newResponse = await response.json();
          if (newResponse.status) {
            sethour(newResponse.result.data.hour);
            setwithin(newResponse.result.data.within);
            setselectGoal(newResponse.result.data.selectGoal);
            setminutesr(newResponse.result.data.minutes);
            setmetricsGoal(newResponse.result.data.metricsGoal);
            setloss(newResponse.result.data.loss);
          }
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    },
    [email]
  );

  return (
    <div className="viewFitness">
      <div className="showResult">
        <div className="emojiAndTexts">
          <Emoji />
          <div className="texts">
            <p className="matricText1">
              Congratulations! You’ve set a fitness goal!
            </p>
            <p className="matricText2">
              Great Job! Remember, you can add new goals and you can edit your
              current goal
            </p>
          </div>
        </div>
        {
          // RESULT TABLE
        }
        <div className="result">
          <div className="resultDiv">
            <p className="matricText2">Goal Type</p>
            <p>{selectGoal}</p>
          </div>
          <div className="resultDiv">
            <p className="matricText2">Goal Metric</p>
            <p>{metricsGoal}</p>
          </div>
          <div className="resultDiv">
            <p className="matricText2">Reminder</p>
            <p>
              {hour} : {minutes}  {hour > 11 ? "pm" : "am"}
            </p>
          </div>
          <div className="resultDiv">
            <p className="within">
              <span className="matricText2">I want to lose </span>
              {loss} KG <span className="matricText2">within</span>
              {within} Weeks
            </p>
          </div>
        </div>
      </div>
      <div className="showBtnContainer">
        <button className=" signUpBtn">Got It</button>
        <Link to="/fitness">
          <button className="getAndLoginBtn login">
            Add another fitness goal
          </button>
        </Link>
      </div>
    </div>
  );
};
ViewFitness.propTypes = {
  email: propTypes.string.isRequired,
};

export default ViewFitness;
