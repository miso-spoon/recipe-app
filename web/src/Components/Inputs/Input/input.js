import React, { Component } from "react";

/* Styles */
import "./_input.scss";

export default class InputComponent extends Component {
  render() {
    const { header, type, placeholder, onChange, icon } = this.props;
    const className = this.props.className || "";

    return (
      <div className={"input " + className}>
        <div className="input__header">{header}</div>
        <input
          className="input__field"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
        <i className="material-icons input__icon">{icon}</i>
      </div>
    );
  }
}
