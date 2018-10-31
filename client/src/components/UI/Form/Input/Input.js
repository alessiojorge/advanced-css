import React, { Component } from 'react';
import Aux from '../../../../hoc/Auxillary';

export class Input extends Component {
  state = {
    value: ''
  };

  changeHandler = event => {
    this.setState({
      value: event.target.value
    });
  };
  render() {
    return (
      <Aux>
        <input
          id={this.props.id}
          type={this.props.type}
          className="form__input"
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.changeHandler}
          required
        />

        <label htmlFor={this.props.id} className="form__label">
          {this.props.placeholder}
        </label>
      </Aux>
    );
  }
}

export default Input;
