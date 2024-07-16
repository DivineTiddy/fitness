import SigningIn from "../components/Login/SigningIn"
import "./Open.css"
import propTypes from "prop-types"


const Open = ({setgetEmail}) => {
  return (
    <div className="opening">
      <SigningIn setgetEmail={setgetEmail}/>
    </div>
  )
}



Open.propTypes = {
  setgetEmail:propTypes.func.isRequired
}

export default Open