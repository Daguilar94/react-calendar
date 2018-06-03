import React, { Fragment } from "react";

export default ({ weekDaysTitles }) => {
  return (
    <Fragment>
      {weekDaysTitles.map((day, index) => {
        return <span key={index}>{day}</span>;
      })}
    </Fragment>
  );
};
