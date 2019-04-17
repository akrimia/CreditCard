import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const View = props => {
  return (
    <div className="CreditCard">
      <div className="Title">
        <h1>Credit Card</h1>
      </div>
      <div className="PuceCard">
        <img src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Ft4.ftcdn.net%2Fjpg%2F00%2F63%2F97%2F01%2F240_F_63970103_dXdz645GQ9DjenhJOti1eEvsFZY8gucA.jpg" />
      </div>
      <div className="Infos">
        <div className="InfosVisa">
          <span className="NumCard">{props.state.numcard.padEnd(19, "•")}</span>
          <div className="CodeCard">
            <div className="CodeCard1">
              <span>5422</span>
            </div>
            <div className="CodeCard2">
              <span className="Text">VALID THRU</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faCaretRight} className="style" />
            </div>
            <div className="CodeCard3">
              <div>
                <span className="Text">MONTH/YEAR</span>
              </div>
              <div>
                <span>{props.state.thru}</span>
              </div>
            </div>
          </div>
          <div>
            <span className="Cardholder">{props.state.name.toUpperCase()}</span>
          </div>
        </div>
        <div className="ImgVisa">
          <img src="https://www.terminaldepot.net/product_images/e/182/Visa_MC_Decal_LG__15288_zoom.jpg" />
        </div>
      </div>
    </div>
  );
};

export default View;
