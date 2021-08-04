import { Component } from "react";
import { connect } from "react-redux";
import DisplayScreen from "./components/DisplayScreen";
import NumbersButtons from "./components/NumbersButtons";
import PrimaryOperators from "./components/PrimaryOperators";
import SecondaryOperators from "./components/SecondaryOperators";
import "./style-sheets/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="calculator-continer">
          <DisplayScreen />
          <div className='button-continer'>
            <NumbersButtons />
            <div className="operations-continer">
              <PrimaryOperators />
              <SecondaryOperators />
            </div>
          </div>
        </div>
        <div className="linked">
          <p>Designed and Coded By</p>
          <a href="https://twitter.com/alialghanay">Ali M. Al-Ghanay</a>
        </div>
      </div>
    )
  }
}

export default connect(null)(App);