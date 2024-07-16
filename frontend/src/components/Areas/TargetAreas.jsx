import { useState } from "react";
import "./TargetAreas.css";
import { Link } from "react-router-dom";
import IsTricept from "./IsTricept";
import IsBicept from "./IsBicept";
import IsAbs from "./IsAbs";
import IsSecAbs from "./IsSecAbs";
import IsThirdAbs from "./IsThirdAbs";
import IsFouthAbs from "./IsFouthAbs";
import IsFithyAbs from "./IsFithyAbs";
import IsSixAbs from "./IsSixAbs";
import IsSevenAbs from "./IsSevenAbs";
import IsFirstChecst from "./IsFirstChecst";
import IsSecChest from "./IsSecChest";
import Diagram from "./Diagram";

// TARGER AREAS COMPONENT

const TargetAreas = () => {
  const [isAbs, SetIsAbs] = useState(false);
  const [isBicept, SetIsBicept] = useState(false);
  const [isTricept, SetIsTricept] = useState(false);
  const [isChest, SetIsChest] = useState(false);
  const [isLeg, SetIsLeg] = useState(false);
  const [isShoulder, SetisShoulder] = useState(false);
  const [isfrontBtn, SetfrontBtn] = useState(true);
  const [isbackBtn, SetisbackBtn] = useState(false);

  function HandleisAbs() {
    SetIsAbs((el) => !el);
  }
  function HandleisBicept() {
    SetIsBicept((el) => !el);
  }
  function HandleisTricept() {
    SetIsTricept((el) => !el);
  }
  function HandleisChest() {
    SetIsChest((el) => !el);
  }
  function HandleisLeg() {
    SetIsLeg((el) => !el);
  }
  function HandleisShoulder() {
    SetisShoulder((el) => !el);
  }
  function Handlefront() {
    SetisbackBtn(false);
    SetfrontBtn(true);
  }
  function Handleback() {
    SetisbackBtn(true);
    SetfrontBtn(false);
  }

  return (
    <div className="targetAreasConatiner">
      <div className="diagramContainer">
        <div className="targetText">
          <p className="text1">Target Areas</p>
          <p className="text2">
            Select areas in your body you’ll like to work on
          </p>
          <div className="frontAndBackBtn">
            <button
              onClick={Handlefront}
              className={isfrontBtn ? "frontBtn" : "backBtn"}
            >
              Front Side
            </button>
            <button
              onClick={Handleback}
              className={isbackBtn ? "frontBtn" : "backBtn"}
            >
              Back Side
            </button>
          </div>
        </div>
        {
          // DIAGRAM CONTAINER
          // HERE IS ALL THE DIAGRAM CATEGORIES BUTTONS AND PHOTO
        }
        <div className="targetDiagram">
          <section className="targetPhoto">
            <svg
              width="169"
              height="338"
              viewBox="0 0 169 338"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect
                opacity="0.5"
                width="169"
                height="338"
                fill="url(#pattern0_5_1170)"
                fillOpacity="0.5"
              />
              {isTricept && <IsTricept />}
              {isBicept && <IsBicept />}
              {isAbs && <IsAbs />}
              {isAbs && <IsSecAbs />}
              {isAbs && <IsThirdAbs />}
              {isAbs && <IsFouthAbs />}
              {isAbs && <IsFithyAbs />}
              {isAbs && <IsSixAbs />}
              {isAbs && <IsSevenAbs />}
              {isChest && <IsFirstChecst />}
              {isChest && <IsSecChest />}
              <defs>
                <pattern
                  id="pattern0_5_1170"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_5_1170"
                    transform="matrix(0.00163558 0 0 0.000817789 -0.153846 -0.000487039)"
                  />
                </pattern>
                {
                  // DIAGRAM PHOTO
                }
                <Diagram />
              </defs>
            </svg>
          </section>
          {
            // DIAGRAM BUTTONS
            // ALL THE BUTTONS ABS BICEPT TRICEPS CHEST LEGS AND SHOULDER
          }
          <section className="targetCategory">
            <button
              onClick={HandleisAbs}
              className={isAbs ? "diagramBtnChange" : "diagramBtn"}
            >
              Abs
            </button>
            <button
              onClick={HandleisBicept}
              className={isBicept ? "diagramBtnChange" : "diagramBtn"}
            >
              Bicept
            </button>
            <button
              onClick={HandleisTricept}
              className={isTricept ? "diagramBtnChange" : "diagramBtn"}
            >
              Tricept
            </button>
            <button
              onClick={HandleisChest}
              className={isChest ? "diagramBtnChange" : "diagramBtn"}
            >
              Chest
            </button>
            <button
              onClick={HandleisLeg}
              className={isLeg ? "diagramBtnChange" : "diagramBtn"}
            >
              Legs
            </button>
            <button
              onClick={HandleisShoulder}
              className={isShoulder ? "diagramBtnChange" : "diagramBtn"}
            >
              Shoulder
            </button>
          </section>
        </div>
      </div>
      <Link to="/fitness">
        <button className="signUpBtn">Finish</button>
      </Link>
    </div>
  );
};

export default TargetAreas;
