import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Widgets from "./components/Widgets/Widgets";
import Content from "./components/Content/Content";
import { BrowserRouter, Route } from "react-router-dom";
import ContentOfDay from "./components/Content/ContentOfDay/ContentOfDay";
import ContentOfWeek from "./components/Content/ContentOfWeek/ContentOfWeek";
import ContentOfMonth from "./components/Content/ContentOfMonth/ContentOfMonth";
import ContentOfYear from "./components/Content/ContentOfYear/ContentOfYear";
import ContentOfSchedule from "./components/Content/ContentOfShedule/ContentOfSchedule";
import ContentOfFourDay from "./components/Content/ContentOfFourDay/ContentOfFourDay";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Widgets />
        <div className="App-content">
          <Route path="/" component={Content} />
          <Route path="/day" component={ContentOfDay} />
          <Route path="/week" component={ContentOfWeek} />
          <Route path="/month" component={ContentOfMonth} />
          <Route path="/year" component={ContentOfYear} />
          <Route path="/schedule" component={ContentOfSchedule} />
          <Route path="/fourDay" component={ContentOfFourDay} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
