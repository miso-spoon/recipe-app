import React, { Component } from "react";

/* Styles */
import "./_input.scss";

export default class InputComponent extends Component {
  render() {
    const { header, type, placeholder, onChange } = this.props;

    return (
      <div className="input">
        <div className="input__header">{header}</div>
        <input
          className="input__field"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    );
  }
}
