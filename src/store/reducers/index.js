import { combineReducers } from 'redux';
import Immutable from 'seamless-immutable';
import { EventEmitter } from 'events';
const iniState = Immutable({ view: [], id: 0, spec: '', shift : false });

export function list(state = iniState, action = {}) {
  let newState;
  let flag;
  switch (action.type) {
    case 'VIEW': console.log('>> reducer view');
      newState = state.merge({ view: action.view });
      break;
    case 'DEL': console.log('>> reducer del');
      newState = state.merge({ id: action.id });
      break;
    case 'ADD': console.log('>> reducer add');
      newState = state.merge({ spec: action.spec });
      break;
    case 'EDIT': console.log('>> reducer edit');
      newState = state.merge({ id: action.id, spec: action.spec });
      break;
    case 'SET_SPEC': console.log('>> reducer set spec');
      newState = state.merge({ spec: action.spec });
      break;
    case 'TYPE': console.log('>> reducer type');
        switch (action.scanCode) {
          case 'sh': 
            flag = !state.shift;
            newState = state.merge({ shift: flag });
            break; 
            case 'dl': 
            newState = state.merge({ spec: state.spec.substring(0, state.spec.length - 1) });
            break; 
          default: 
            newState = state.merge({ spec: state.spec + action.scanCode });
            break;
        }
      break;
    default:
      newState = iniState;
  }
  return newState;
};

export default combineReducers({ list });

