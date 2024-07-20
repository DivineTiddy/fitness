import { useState } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { toast } from "react-toastify";
import propTypes from "prop-types";

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
        if (response.data.status) {
          setgetEmail(email);
          SetisLoading(false);
          navigate("/congratulations");
          console.log(response);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          toast.error("wrong password", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });

    console.log(email);
    console.log(password);
  }

  return (
    <form onSubmit={data}>
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
                  placeholder="divine@gmail.com (optional)"
                />
              </label>
              <label className="inputUserstyle">
                <input
                  onChange={(e) => SetuserPassword(e.target.value)}
                  className="userFill"
                  type="password"
                  placeholder="password"
                  required
                />
              </label>
            </div>
            <label className="policy">
              <Link>
                <p className="policyText">Forget password</p>
              </Link>
            </label>
          </section>
        </div>
        <button type="submit" className="signUpBtn">
          {isLoading ? "Please wait...." : " Next"}
        </button>
      </div>
    </form>
  );
};
SigningIn.propTypes = {
  setgetEmail: propTypes.func.isRequired,
};

export default SigningIn;
