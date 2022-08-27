import React from "react";
// Global Style
import GlobalStyle from "./Components/GlobalStyles";
// React Routering
import { Switch, Route } from "react-router-dom";
// import Pages
import AboutUs from "./Pages/AboutUs";
import Nav from "./Components/Nav";
import Courses from "./Pages/Courses";
import ContactUs from "./Pages/ContactUs";
import CourseDetails from "./Pages/CourseDetails";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/courses" exact>
          <Courses />
        </Route>
        <Route path="/courses/:id">
          <CourseDetails />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
