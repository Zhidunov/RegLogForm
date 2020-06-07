import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./checkedstyle.scss";

export const Checked = (props) => {
  let [timer, setTimer] = useState(false);

  setTimeout(() => {
    setTimer(true);
  }, 2000);

  if (!timer) {
    return (
      <div className="base-container">
        <figure>
          <svg
            width="185"
            height="185"
            viewBox="0 0 185 185"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="round"
              d="M92.5 185C143.586 185 185 143.586 185 92.5C185 41.4137 143.586 0 92.5 0C41.4137 0 0 41.4137 0 92.5C0 143.586 41.4137 185 92.5 185Z"
              fill="black"
            />
            <path
              id="check"
              stroke-width="5"
              stroke="#fff"
              d="M142.546 55.2213L89.1274 129.286C88.38 130.329 87.3962 131.178 86.2556 131.763C85.1157 132.349 83.8522 132.655 82.5703 132.655C81.2884 132.655 80.0249 132.349 78.8846 131.763C77.7444 131.178 76.7601 130.329 76.0136 129.286L44.3837 85.4556C43.4198 84.1118 44.3837 82.2349 46.0324 82.2349H57.9284C60.5156 82.2349 62.976 83.4777 64.4979 85.6087L82.5577 110.668L122.431 55.3735C123.953 53.2683 126.388 52 129 52H140.897C142.546 52 143.509 53.8771 142.546 55.2213Z"
              fill="#fff"
            />
          </svg>
        </figure>
        <p className="checked-page">{props.text}</p>
      </div>
    );
  }
  
  return <Redirect to={props.path} />;
};
