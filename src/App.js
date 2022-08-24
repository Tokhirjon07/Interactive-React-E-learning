import React from "react";
// Global Style
import GlobalStyle from "./Components/GlobalStyles";
// import Pages
import AboutUs from "./Pages/AboutUs";
import Nav from "./Components/Nav";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
};

export default App;
