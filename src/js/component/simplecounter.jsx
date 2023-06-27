import React from "react";
import PropTypes from "prop-types";

export const SimpleCounter = (props) => {
  let initialVariable = "0000";
  let seconds = props.seconds.toString();
  let icon = <i className="far fa-clock"></i>;
  let results = (
    initialVariable.split("").slice(seconds.length).join("") + seconds
  ).split("");
  results.unshift(icon);

  return (
    <div className="container">
      {results.map((e, i) => {
        return (
          <div className="mumbers" key={i}>
            {e}
          </div>
        );
      })}
    </div>
  );
};

SimpleCounter.PropTypes = {
  seconds: PropTypes.string,
};
