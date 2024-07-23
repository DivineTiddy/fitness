import NotAvailable from "./NotAvailable";
import "./SignUp.css";
import UserAvailable from "./UserAvailable";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [name, SetuserName] = useState("");
  const [email, SetuserEmail] = useState("");
  const [password, SetuserPassword] = useState("");
  //const [isLoading, SetisLoading] = useState(false);
  const navigate = useNavigate();
 
  const user = "divine";
  function data(e) {
    e.preventDefault();
   // SetisLoading(true);
    Axios.post("https://fitness-3.onrender.com/api/users/register", {
      password,
      email,
      name,
    })
      .then((response) => {
        console.log(response)
        if (response.data.status ) {
       //   SetisLoading(false);
          toast.success('Created', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          

          navigate("/targer");
        }
      })
      .catch((error) => {
        console.log(error);

        if (error.code === 
          "ERR_BAD_REQUEST") {
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
        }else if (error.code === 'ERR_NETWORK') {
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
      <div className="signUpContainer">
        <div className="signUpMain">
          <p className="signUpText">
            Enter your email and password to create a FlexQuest account
          </p>
          <section className="signUpForm">
            <div className="inputContainer">
              <div className="inputUserName">
                <label className="inputUserstyle">
                  <input
                    onChange={(e) => SetuserName(e.target.value)}
                    className="userFill"
                    type="text"
                    placeholder="Divine"
                  />
                </label>

                {name === "" ? (
                  ""
                ) : name === user ? (
                  <NotAvailable />
                ) : (
                  <UserAvailable />
                )}
              </div>
              <label className="inputUserstyle">
                <input
                  className="userFill"
                  type="email"
                  placeholder="divine@gmail.com"
                  onChange={(e) => SetuserEmail(e.target.value)}
                />
              </label>
              <label className="inputUserstyle">
                <input
                  className="userFill"
                  type="password"
                  placeholder="*******"
                  onChange={(e) => SetuserPassword(e.target.value)}
                />
              </label>
            </div>
            <label className="policy">
              <input
                className="checkbox"
                type="checkbox"
              />
              <p className="policyText">
                By continuing, I agree to FlexQuest’s Privacy Policy and Terms
                of Use
              </p>
            </label>
          </section>
        </div>
        <button type="submit" className="signUpBtn">
          Login
        </button>
      </div>
    </form>
  );
};

export default SignUp;
