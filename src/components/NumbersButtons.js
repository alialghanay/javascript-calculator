import { Component } from "react";
import { connect } from "react-redux";
import '../style-sheets/NumbersButtons.css';

class NumbersButtons extends Component {
    handleClick(e){
        this.props.enterNum(e.value, e.label)
    }
    render() {
        return ( 
            <div className="num-continer">
                {this.props.numbers.map(e => <button className="num-button" key={e.label} id={e.id} onClick={() => this.handleClick(e)}>{`${e.value}`}</button>)}
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
       numbers: state.numbers
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {enterNum: (value, label) => dispatch( {type: 'enterNum', value: value, label: label} )}
}
export default connect(mapStateToProps, mapDispatchToProps)(NumbersButtons);