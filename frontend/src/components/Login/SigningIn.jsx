import { useState } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { toast } from "react-toastify";
import propTypes from "prop-types";
import LoadingEmoji from "../Register/LoadingEmoji";

const SigningIn = ({ setgetEmail }) => {
  const navigate = useNavigate();
  const [password, SetuserPassword] = useState("");
  const [email, SetuserEmail] = useState("");
  const [isLoading, SetisLoading] = useState(false);

  function data(e) {
    e.preventDefault();
    SetisLoading(true);
    Axios.post("https://fitness-3.onrender.com/api/users/login", {
      password,
      email,
    })
      .then((response) => {
        const newError = response.data.massage
        if (response.data.status) {
          SetisLoading(false);
          setgetEmail(email);
          navigate("/congratulations");
          toast.success(`${newError}`, {
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
      })
      .catch((error) => {
        console.log(error);

        if (error.response) {
          toast.error("Incorrect passward or email", {
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
      })
      .finally(()=>{
        SetisLoading(false)
      });
  }

  return (
    <form onSubmit={data} >
      <div className="signUpContainer">
        <div className="signUpMain">
          <p className="signUpText">Enter your email and password to login</p>
          <section className="signUpForm">
            <div className="inputContainer">
              <div className="inputUserName"></div>
              <label className="inputUserstyle">
                <input
                  onChange={(e) => SetuserEmail(e.target.value)}
                  className="userFill"
                  type="email"
                  placeholder="divine@gmail.com"
                />
              </label>
              <label className="inputUserstyle">
                <input
                  onChange={(e) => SetuserPassword(e.target.value)}
                  className="userFill"
                  type="password"
                  placeholder="password"
                />
              </label>
            </div>
            <label className="policy">
              <Link>
                <p className="policyText">Reset password</p>
              </Link>
            </label>
          </section>
        </div>
        <button 
        type="submit" className="signUpBtn">
           {isLoading ? <LoadingEmoji/> : "Next"}
          
        </button>
      </div>
    </form>
  );
};
SigningIn.propTypes = {
  setgetEmail: propTypes.func.isRequired,
};

export default SigningIn;
