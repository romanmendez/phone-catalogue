import React from "react";
import { Provider } from "react-redux";
import Main from "./pages/Main";
import store from "./redux/store";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <Main />
    </Provider>
  );
};

export default App;
