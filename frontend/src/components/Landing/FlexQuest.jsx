import { useEffect } from "react";
import Emoji from "./Emoji";
import "./flexQuest.css";
import { useNavigate } from "react-router-dom";

const FlexQuest = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/started");
    }, 8000);
  });
  return (
    <div className="emoji_container">
      <Emoji />

      <h2>FlexQuest</h2>
      <p>Staying fit ain’t hard, it’s fun!</p>
    </div>
  );
};

export default FlexQuest;
