import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main";
import store from "./redux/store";
import NavBar from "./components/NavBar";
import { GlobalStyle, Reset } from "./styles/GlobalStyles";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Reset />
      <Router>
        <NavBar />
        <Main />
      </Router>
    </Provider>
  );
};

export default App;
