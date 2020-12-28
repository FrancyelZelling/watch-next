import React from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";
//import { Counter } from "./features/counter/Counter";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Movies />
    </div>
  );
}

export default App;
