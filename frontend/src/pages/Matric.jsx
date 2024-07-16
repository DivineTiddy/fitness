import SetMatricComp from "../components/GoalMatric/SetMatricComp"
import "./Matric.css"
import propTypes from "prop-types"


const Matric = ({email}) => {
  return (
    <div className="matric">
      <SetMatricComp email={email}/>
    </div>
  )
}


Matric.propTypes = {
  email:propTypes.string.isRequired
}

export default Matric