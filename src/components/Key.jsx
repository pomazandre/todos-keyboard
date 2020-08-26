import React, { Component } from "react";
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { actionType } from '../store/actions/actions';

export class Key extends Component {

  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.sendSymbol(this.props.scanCode);
    console.log(this.props.scanCode);
  }

  render() {
    return <Button key={this.props.scanCode} variant="primary" block="true" size='sm' onClick={() => this.handleClick()}>{this.props.stick}</Button>;
  }

}

const mapDispatchToProps = dispatch => {
  return {
    sendSymbol: (code) => dispatch(actionType(code))
  }
}


export default connect( null , mapDispatchToProps)(Key);
