import service from '../../services/api.js';

export const actionView = (_view) => {
  console.log('>> action view');
  return {
    type: 'VIEW', view: _view
  }
};

export const actionEdit = (_id, _spec) => {
  console.log('>> action edit');
  return {
    type: 'EDIT', id: _id, spec: _spec
  }
};

export const actionAdd = () => {
  console.log('>> action add');
  return {
    type: 'ADD', spec: '', id: 0
  }
};

export const actionType = (code) => {
  return { type: 'TYPE', scanCode: code }
};

export const actionSetSpec = _spec => {
  return { type: 'SET_SPEC', spec: _spec }
};

export function performView() {
  return (dispatch, getState) => {
    console.log('>> thunk view');
    let Resp = service.view();
    dispatch(actionView(Resp));
  }
}

export function performDel(id) {
  return (dispatch, getState) => {
    console.log('>> thunk del');
    service.del(id);
    let Resp = service.view();
    dispatch(actionView(Resp));
  }
}

export function performEdit() {
  return (dispatch, getState) => {
    console.log('>> thunk edit');
    let _state = getState();
    service.edit(_state.list.id, _state.list.spec);
    let resp = service.view();
    dispatch(actionView(resp));
  }
}

export function performAdd(spec) {
  return (dispatch, getState) => {
    console.log('>> thunk add');
    let _state = getState();
    service.add(_state.list.spec);
    let resp = service.view();
    dispatch(actionView(resp));
  }
}









