import React, { Component } from "react";

/* Styles */
import "./_input.scss";

export default class InputComponent extends Component {
  render() {
    const { header, type, placeholder, onChange } = this.props;

    return (
      <div className="input">
        <div className="input--header">{header}</div>
        <input
          className="input--field"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    );
  }
}
