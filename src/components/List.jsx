import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { actionEdit, actionAdd, performEdit, performAdd, performDel, performView, actionSetSpec } from '../store/actions/actions';
import Dialog from './Dialog';

export class List extends Component {
  handleClose;

  constructor(props) {
    super(props);
    this.state = { show: false, keys: false }
  }

  componentDidMount() {
    this.props.performView();
  }

  handleDel(id) {
    this.props.performDel(id);
  }

  handleShowEdit(id, spec) {
    this.caption = 'Edit item';
    this.setState({ show: true });
    this.props.dispatchEdit(id, spec);
  }

  handleHide() {
    
    this.setState({ show: false, keys: false });
  }

  handleShowNew() {
    this.caption = 'New item';
    this.setState({ show: true });
    this.props.dispatchAdd();
  }

  handleSave() {
    this.setState({ show: false, keys: false });
    this.props.performEdit();
  }

  handleSaveNew() {
    this.setState({ show: false, keys: false });
    this.props.performAdd();
  }

  handleChange(spec) {
    this.props.dispatchEdit(this.props.id, spec);
  }

  handleShowKeys() {
    this.setState({ keys: true });
  }

  render() {
    let view = this.props.view;
    console.log(view);
    console.log(this.props.spec);
    let _resRender;
    let handleSave;
    if (this.props.id === 0) {
      handleSave = () => this.handleSaveNew();
    } else {
      handleSave = () => this.handleSave();
    }
    if (view.length > 0) {
      _resRender = (
        <React.Fragment>
          <Dialog show={this.state.show} caption={this.caption} id={this.state.id} spec={this.props.spec} handleHide={() => this.handleHide()}
            handleChange={(event) => this.handleChange(event.target.value)} handleSave={handleSave}
            showKeys={() => this.handleShowKeys()} keys={this.state.keys} />
          <Button variant="primary" onClick={() => this.handleShowNew()}>New...</Button>
          <Table hover borderless >
            <tbody>
              {view.map((item) =>
                <tr key={item.id} >
                  <td width="300px" >{item.spec}</td>
                  <td width="50px">
                   <Button variant="secondary" onClick={() => this.handleDel(item.id)}>Del</Button>
                  </td>
                   <td width="50px">
                     <Button  variant="secondary" onClick={() => this.handleShowEdit(item.id, item.spec)}>Edit...</Button> 
                   </td>
                  <td >
                  </td>  
                </tr>
              )}
            </tbody>
          </Table>
        </React.Fragment>
      )
    } else {
      _resRender = (
        <ListGroup>
        </ListGroup>
      )
    }
    return _resRender;
  }
}

const mapStateToProps = (state) => {
  return {
    view: state.list.view,
    spec: state.list.spec,
    id: state.list.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    performView: () => dispatch(performView()),
    dispatchEdit: (id, spec) => dispatch(actionEdit(id, spec)),
    performEdit: () => dispatch(performEdit()),
    performAdd: () => dispatch(performAdd()),
    performDel: (id) => dispatch(performDel(id)),
    dispatchSpec: (_spec) => dispatch(actionSetSpec(_spec)),
    dispatchAdd: () => dispatch(actionAdd())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);



