import { Outlet } from "react-router-dom";
import "./CreateAccount.css";
import propTypes from "prop-types";

const CreateAccount = () => {
 
  return (
    <div className="creatingContainer">
        <Outlet></Outlet>
    </div>
  );
};

CreateAccount.propTypes = {
  userName: propTypes.string,
  userEmail: propTypes.string,
  userPassword: propTypes.string,
};

export default CreateAccount;
