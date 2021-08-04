import { Component } from "react";
import { connect } from "react-redux";
import '../style-sheets/PrimaryOperators.css'


class PrimaryOperators extends Component {
    handleClick(e){
        this.props.enterPrim(e.sign, e.mathO);
    }
    render() {
        return ( 
            <div className="prim-continer">
                 {this.props.primary.map(e => <button className="button" key={e.id} id={e.id} onClick={() => this.handleClick(e)}>{`${e.sign}`}</button>)}
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        primary: state.primary
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {enterPrim: (sign, mathO) => dispatch( {type: 'enterPrim', sign: sign, mathO: mathO} )}
}
export default connect(mapStateToProps, mapDispatchToProps)(PrimaryOperators);