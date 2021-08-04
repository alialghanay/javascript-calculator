import IntiState from "./reducers/initState";
import operationReoder from "./reducers/operation-reoder";
import replaceAt from "./reducers/replaceAt";

function rootReducer(state = IntiState, action) {
    const previousValue = state.display.currentValue;
    const previousAns = state.display.Ans;
    switch(action.type){
        case 'enterNum':
            if((state.display.Ans === '0') || state.isEquls){
                if(action.label === '0'){
                    return {
                        ...state,
                        display:{
                        currentValue: (previousValue[previousValue.length - 1] === '0') ? state.display.currentValue : state.display.currentValue + '0',
                        Ans: '0'
                    },
                    isOperation: false,
                    isEquls: false,
                    }
                }
                return {
                    ...state,
                    display:{
                        currentValue: action.label,
                        Ans: action.label
                    },
                    isOperation: false,
                    isEquls: false,
                } 
            }else if(state.isOperation){
                return {
                    ...state,
                    display: {
                        currentValue: previousValue + action.label,
                        Ans: action.label
                    },
                    isOperation: false,
                    isEquls: false,
                }
            }
                return {
                    ...state,
                    display:{
                        currentValue: previousValue + action.label,
                        Ans: previousAns + action.label
                    },
                    isOperation:false,
                    isEquls: false,
                }         
        case 'enterPrim':
            if(state.isEquls){
                return {
                    ...state,
                    display:{
                        currentValue: state.display.Ans + action.sign,
                        Ans: action.sign
                    },
                    isOperation: true,
                    isEquls: false,
                    isDecimalPoint: false
                }
            }else if(state.isOperation && action.sign !== '-'){
                if(previousValue[previousValue.length - 1] === '-'){
                    return {
                        ...state,
                        display: {
                            currentValue: previousValue.replaceAt(previousValue.length - 2, 2, action.sign),
                            Ans: action.sign
                        }
                    }
                }
                return {
                    ...state,
                    display: {
                        currentValue: previousValue.replaceAt(previousValue.length - 1, 1, action.sign),
                        Ans: action.sign
                    }
                }
            }
                return {
                    ...state,
                    display:{
                        currentValue: previousValue + action.sign,
                        Ans: action.sign
                    },
                    isOperation: true,
                    isEquls: false,
                    isDecimalPoint: false
                }
        case 'enterSec':
            switch(action.label){
                case '=':
                    let answer = `${operationReoder(state.display.currentValue)}`;
                    return{
                        ...state,
                        display:{
                            currentValue: previousValue + '=' + answer,
                            Ans: answer
                        },
                        isOperation: false,
                        isEquls: true,
                        isDecimalPoint: false
                    }
                case '.':
                    if(state.isDecimalPoint){
                        return {
                            ...state
                        }
                    }else if(state.isOperation){
                        return {
                            ...state,
                            display: {
                                currentValue: previousValue + '0.',
                                Ans: '0.'
                            },
                            isOperation: false,
                            isDecimalPoint: true
                        }
                    }
                    return{
                        ...state,
                        display:{
                            currentValue:  (previousValue === '') ?  '0.' : previousValue + '.',
                            Ans: previousAns + '.'
                        },
                        isDecimalPoint: true
                    }
                case 'AC':
                    return{
                        ...IntiState
                    }
                default:
                return state;
            }
        default:
        return state;
    }
}

export default rootReducer;