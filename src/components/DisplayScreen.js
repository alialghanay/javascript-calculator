import { Component } from "react";
import { connect } from "react-redux";
import '../style-sheets/DisplayScreen.css';

class DisplayScreen extends Component {
  render() {
    return (
      <div id="display-screen">
        <div className="operation-screen">
          <p>{this.props.currentValue}</p>
        </div>
        <div id="display">
          <h3>{this.props.result}</h3>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    currentValue: state.display.currentValue,
    result: state.display.Ans
  }
}
export default connect(mapStateToProps)(DisplayScreen);