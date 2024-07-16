import Fitness from "../components/SetGoal/Fitness"
import "./FitnessGoal.css"
import propTypes from "prop-types"


const FitnessGoal = ({email}) => {
  return (
    <div className="fitnessGoal">
        <Fitness email={email}/>
    </div>
  )
}
FitnessGoal.propTypes = {
  email:propTypes.string.isRequired
}

export default FitnessGoal