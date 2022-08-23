import React from "react";
// Global Style
import GlobalStyle from "./Components/GlobalStyles";
// import Pages
import AboutUs from "./Pages/AboutUs";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
};

export default App;
