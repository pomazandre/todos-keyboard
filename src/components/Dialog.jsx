import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import Keys from './Keys';
import { performEdit } from '../store/actions/actions';
import { connect } from 'react-redux';

export class Dialog extends Component {

  constructor(props) {
    super(props);
    this.state = { spec: this.props.spec };
  }

  render() {
    return (
      <>
        <Modal size="lg" show={this.props.show} onHide={this.props.handleHide} >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.caption}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Spec</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder=""
                aria-label=""
                aria-describedby="basic-addon1"
                value={this.props.spec}
                onChange={this.props.handleChange}
                onFocus={this.props.showKeys}
              />
            </InputGroup>
            {this.props.keys ?
              <Keys /> : <p></p>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleHide}>
              Close
        </Button>
            <Button variant="primary" onClick={this.props.handleSave}>
              Save
        </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    save: (id, spec) => dispatch(performEdit(id, spec)),
  }
}

export default connect(undefined, mapDispatchToProps)(Dialog);







