import React, { Fragment } from "react";

export default ({ weekDaysTitles, weekendDaysTitles }) => {
  return (
    <Fragment>
      {weekDaysTitles.map((day, index) => {
        return <span key={index}>{day}</span>;
      })}
      {weekendDaysTitles.map((day, index) => {
        return <span key={index}>{day}</span>;
      })}
    </Fragment>
  );
};
