import { Component } from "react";
import { connect } from "react-redux";
import '../style-sheets/SecondaryOperators.css'

class SecondaryOperators extends Component {
    handleClick(e){
        this.props.enterSec(e.label);
    }
    render() { 
        return ( 
            <div className="sec-continer">
                {this.props.secondary.map(e => <button className="button" key={e.label} id={e.id} onClick={() => this.handleClick(e)}>{`${e.label}`}</button>)}
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        secondary: state.secondary
    }
  }
const mapDispatchToProps = (dispatch) => {
    return { enterSec: (label) => dispatch( {type: 'enterSec', label: label} ) }
}
export default connect(mapStateToProps, mapDispatchToProps)(SecondaryOperators);