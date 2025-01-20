import React, { useEffect } from "react";
function Timer({ dispatch, secondsRemaining }) {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return function () {
        clearInterval(id);
      };
    },
    [secondsRemaining, dispatch]
  );
  return (
    <div className="timer">
      {minutes < 10 && "0"}
      {minutes}:{seconds}
      {seconds < 10 && "0"}
    </div>
  );
}

export default Timer;
