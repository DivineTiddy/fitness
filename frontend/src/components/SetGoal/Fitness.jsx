import Cardio from "./Cardio";
import Dot from "./Dot";
import "./Fitness.css";
import Muscle from "./Muscle";
import Toning from "./Toning";
import WeightSvg from "./WeightSvg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import propTypes from "prop-types"
import { toast } from "react-toastify";




const Fitness = ({email}) => {
  const navigate = useNavigate()
  const[selectGoal , setgoal] = useState("Loss weight");  
  // GET SELECTED GOAL VALUE
  function HandleClick(e) {
    setgoal(e);
  }
  function HandleError() {
    toast.error(`Please select a goal`, {
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


  function data(e) {
    e.preventDefault();
    Axios.post("https://fitness-3.onrender.com/api/users/selectgoal",{
      selectGoal,
      email
    }).then((response) => {
      if (response.data.status) {
        navigate("/matric")
      }

    }).catch((error)=>{
      console.log(error);
    })

    
  }
  

  // HandleNext
 

  return (
    <form onSubmit={data}>
    <div className="fitnessContainer">
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
              fill="white"
              fillOpacity="0.4"
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
      {
        // DIAGRAM CONTAINER
      }
      <p>Select your goal type</p>
      <div className="diagramContainer">
        <div className="diagramField">
          <div className="lossWeightSvg">
            <WeightSvg />
            <div className="selectGoal">
              <div className="select">
                <span></span>
                <button className="popular">Popular</button>
              </div>
              <div className="select">
                <p>Weight Loss</p>
                <button
                  className="selectBtn"
                   onClick={()=>HandleClick("Loss weight")}
                >
                  Select Goal
                </button>
              </div>
            </div>
          </div>
          <div className="lossWeightSvg">
            <Muscle />
            <div className="selectGoal">
              <div className="select">
                <span></span>
                <button className="popular">Popular</button>
              </div>
              <div className="select">
                <p>Muscle Gain</p>
                <button
                  className="selectBtn"
                  onClick={()=>HandleClick("Muscle Gain")}
                  >
                  Select Goal
                </button>
              </div>
            </div>
          </div>
          <div className="lossWeightSvg">
            <Cardio />
            <div className="selectGoal">
              <div className="select">
                <span></span>
                <button className="popular">Popular</button>
              </div>
              <div className="select">
                <p>Cardio Endurance</p>
                <button
                  className="selectBtn"
                  onClick={()=>HandleClick("Cardio Endurance")}
                  >
                  Select Goal
                </button>
              </div>
            </div>
          </div>
          <div className="lossWeightSvg">
            <Toning />
            <div className="selectGoal">
              <div className="select">
                <span></span>
                <button className="popular">Popular</button>
              </div>
              <div className="select">
                <p>Total Body Toning</p>
                <button
                  className="selectBtn"
                  onClick={()=>HandleClick("Total Body Toning")}

                >
                  Select Goal
                </button>
              </div>
            </div>
          </div>

          <p className="findMore">
            <Dot /> Find more goals that suit your preferences
          </p>
        </div>
          <button  onClick={HandleError}   className="signUpBtn">Next</button>
      </div>
      {
        //BUTTON
      }
    </div>
    </form>
  );
};

Fitness.propTypes = {
  email:propTypes.string.isRequired
}

export default Fitness;
