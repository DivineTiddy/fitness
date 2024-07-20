import { useState } from "react";
import "./SetMatricComp.css";
import UpArrow from "./UpArrow";
import DownArrow from "./DownArrow";
import ColorList from "./ColorList";
import NoColor from "./NoColor";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import propTypes from "prop-types";

const SetMatricComp = ({ email }) => {
  const [isOpen1, SetIsopen1] = useState(true);
  const [isOpen2, SetIsopen2] = useState(false);
  const [isOpen3, SetIsopen3] = useState(false);
  const [loss, Setloss] = useState(10);
  const [within, Setwithin] = useState(10);
  const [metricsGoal, SetmetricsGoal] = useState("Target Weight Loss");
  const navigate = useNavigate();

  function HandlemetricsGoal(e) {
    SetmetricsGoal(e);
  }

  function HandleIsopen1() {
    SetIsopen1((el) => !el);
    SetIsopen2(false);
    SetIsopen3(false);
  }
  function HandleIsopen2() {
    SetIsopen2((el) => !el);
    SetIsopen1(false);
    SetIsopen3(false);
  }
  function HandleIsopen3() {
    SetIsopen3((el) => !el);
    SetIsopen1(false);
    SetIsopen2(false);
  }
  function data(e) {
    e.preventDefault();
    Axios.post("https://fitness-3.onrender.com/api/users/metricsgoal", {
      loss,
      within,
      metricsGoal,
      email,
      // _id,
    })
      .then((response) => {
        if (response.data.status) {
          navigate("/remeinder");
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <form onSubmit={data}>
      <div className="matricContainer">
        <div className="matricTextAndInput">
          <div className="matricText">
            <div className="matricTextPara">
              <p className="matricText1">Set a fitness goal</p>
              <p className="matricText2">
                Setting a goal is the first step towards a healthier you. What
                achievement would you like to reach?
              </p>
            </div>
            <div className="goalProgressBarFitness">
              <svg
                width="110"
                height="6"
                viewBox="0 0 110 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="30" height="5" rx="2.5" fill="#AEFF01" />
                <rect
                  x="40"
                  y="0.5"
                  width="30"
                  height="5"
                  rx="2.5"
                  fill="#AEFF01"
                />
                <rect
                  x="80"
                  y="0.5"
                  width="30"
                  height="5"
                  rx="2.5"
                  fill="white"
                  fillOpacity="0.4"
                />
              </svg>

              <p className="laterTextFitness">I’ll do this later</p>
            </div>
          </div>
          <div className="matricInput">
            <p>Goal Metrics</p>
            <div className="matricForm">
              <div
                className="matricAccod"
                onClick={() => HandlemetricsGoal("Target Weight Loss")}
              >
                <div className="matricAccodList" onClick={HandleIsopen1}>
                  <div>
                    {isOpen1 ? <ColorList /> : <NoColor />}

                    <p className="matricText3">Target Weight Loss</p>
                  </div>
                  {isOpen1 ? <UpArrow /> : <DownArrow />}
                </div>
                {isOpen1 && (
                  <>
                    <div className="matricLabel">
                      <p className="matricText3">I want to lose </p>
                      <select onChange={(e) => Setloss(e.target.value)}>
                        <option value={Number(10)}>10 KG</option>
                        <option value={Number(20)}>20 KG</option>
                        <option value={Number(30)}>30 KG</option>
                        <option value={Number(40)}>40 KG</option>
                      </select>
                    </div>
                    <div className="matricLabel2">
                      <p className="matricText3">within </p>
                      <select onChange={(e) => Setwithin(e.target.value)}>
                        <option value={Number(1)}>1 week</option>
                        <option value={Number(2)}>2 week</option>
                        <option value={Number(3)}>3 week</option>
                        <option value={Number(4)}>4 week</option>
                      </select>
                    </div>
                  </>
                )}
              </div>

              <div
                className="matricAccod"
                onClick={() => HandlemetricsGoal("Workout Intensity")}
              >
                <div className="matricAccodList" onClick={HandleIsopen2}>
                  <div>
                    {isOpen2 ? <ColorList /> : <NoColor />}
                    <p className="matricText3">Workout Intensity</p>
                  </div>
                  {isOpen2 ? <UpArrow /> : <DownArrow />}
                </div>
                {isOpen2 && (
                  <>
                    <div className="matricLabel">
                      <p className="matricText3">I want to lose </p>
                      <select onChange={(e) => Setloss(e.target.value)}>
                        <option value={Number(10)}>10 KG</option>
                        <option value={Number(20)}>20 KG</option>
                        <option value={Number(30)}>30 KG</option>
                        <option value={Number(40)}>40 KG</option>
                      </select>
                    </div>
                    <div className="matricLabel2">
                      <p className="matricText3">within </p>
                      <select onChange={(e) => Setwithin(e.target.value)}>
                        <option value={Number(1)}>1 week</option>
                        <option value={Number(2)}>2 week</option>
                        <option value={Number(3)}>3 week</option>
                        <option value={Number(4)}>4 week</option>
                      </select>
                    </div>
                  </>
                )}
              </div>

              <div
                className="matricAccod"
                onClick={() => HandlemetricsGoal("Hydration")}
              >
                <div className="matricAccodList" onClick={HandleIsopen3}>
                  <div>
                    {isOpen3 ? <ColorList /> : <NoColor />}
                    <p className="matricText3">Hydration</p>
                  </div>
                  {isOpen3 ? <UpArrow /> : <DownArrow />}
                </div>
                {isOpen3 && (
                  <>
                    <div className="matricLabel">
                      <p className="matricText3">I want to lose </p>
                      <select onChange={(e) => Setloss(e.target.value)}>
                        <option value={Number(10)}>10 KG</option>
                        <option value={Number(20)}>20 KG</option>
                        <option value={Number(30)}>30 KG</option>
                        <option value={Number(40)}>40 KG</option>
                      </select>
                    </div>
                    <div className="matricLabel2">
                      <p className="matricText3">within </p>
                      <select onChange={(e) => Setwithin(e.target.value)}>
                        <option value={Number(1)}>1 week</option>
                        <option value={Number(2)}>2 week</option>
                        <option value={Number(3)}>3 week</option>
                        <option value={Number(4)}>4 week</option>
                      </select>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <button className="signUpBtn">Next</button>
      </div>
    </form>
  );
};
SetMatricComp.propTypes = {
  email: propTypes.string.isRequired,
};

export default SetMatricComp;
