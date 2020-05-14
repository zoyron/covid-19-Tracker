import React from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";

// following is a basic react class based component

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>This is COVID-19 Tracker project</h1>
      </div>
    );
  }
}

export default App;
