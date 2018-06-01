import React, { Component } from "react";
import colombiaHolydays from "colombia-holidays";
import DayTitles from "./components/DayTitles";
import Weeks from "./components/Weeks";
import moment from "moment";
import "./App.css";

class App extends Component {
  render() {
    const weekDaysTitles = ["Lun", "Mar", "Mie", "Jue", "Vie"]
    const weekendDaysTitles = ["Sab", "Dom"]
    console.log(moment().daysInMonth())
    console.log(colombiaHolydays.getColombiaHolidaysByYear(2018));
    return (
      <div className="App">
        <div className="calendar-wrapper">
          <DayTitles weekDaysTitles={weekDaysTitles} weekendDaysTitles={weekendDaysTitles} />
          <Weeks />
        </div>
      </div>
    );
  }
}

export default App;
