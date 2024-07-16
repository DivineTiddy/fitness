import ViewFitness from "../components/Congrats/ViewFitness"
import propTypes from "prop-types";


const Display = ({email}) => {
  return (
    <div className="container">
      <ViewFitness email={email}/>
      
    </div>
  )
}
Display.propTypes = {
  email: propTypes.string.isRequired,
};
export default Display

