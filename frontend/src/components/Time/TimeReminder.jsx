import "./TimeReminder.css";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import propTypes from "prop-types";
import { toast } from "react-toastify";

const TimeReminder = ({ email }) => {
  const navigate = useNavigate();
  const [hour, Sethour] = useState(null);
  const [minutes, Setminutes] = useState(null);
  function HandleHours(e) {
    Sethour(e.target.value);
  }

  function data(e) {
    e.preventDefault();
    Axios.post("https://fitness-3.onrender.com/api/users/reminder", {
      hour,
      minutes,
      email,
    })
      .then((response) => {
        if (response.data.status) {
          navigate("/congratulations");
        }
      })
      .catch((error) => {
        if (error.response) {
          const newError = error.response.data.massage;
          toast.error(`${newError}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else if (error.code === "ERR_NETWORK") {
          toast.error(`Please connect your internet`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      });
  }

  return (
    <form onSubmit={data}>
      <div className="timeReminder">
        <div className="time">
          {
            // PROGRESS BAR AND CONTEXT
          }
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
                  fill="#AEFF01"
                />
              </svg>

              <p className="laterTextFitness">I’ll do this later</p>
            </div>
          </div>
          {
            // TIME INPUT FIELDS FORM
          }
          <div className="timeInput">
            <div className="timeTextArea">
              <p>Set a reminder</p>
              <p className="matricText2">
                To remind you every time when you need to workout
              </p>
            </div>
            <div className="timeForm">
              <div className="inputDiv">
                <input autoFocus placeholder="07" onChange={HandleHours} />
                <p className="dot">:</p>
                <input
                  className="minute"
                  placeholder="00"
                  onChange={(e) => Setminutes(e.target.value)}
                />
                <div className="amAndpm">
                  <p
                    className={hour >= 12 ? "sizeamAndpm pm" : "sizeamAndpm am"}
                  >
                    AM
                  </p>
                  <p
                    className={hour >= 12 ? "sizeamAndpm am" : "sizeamAndpm pm"}
                  >
                    PM
                  </p>
                </div>
              </div>
            </div>
            <div className="minAndHours">
              <p>Hour</p>
              <p>Minute</p>
            </div>
          </div>
        </div>
        {
          // SUBMIT BUTTON
        }
        <button type="submit" className="signUpBtn">
          Finish
        </button>
      </div>
    </form>
  );
};
TimeReminder.propTypes = {
  email: propTypes.string.isRequired,
};

export default TimeReminder;
