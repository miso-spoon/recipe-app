import React, { Component } from "react";

/* Components */

/* Styles */
import "./_check-box.scss";

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || false
    };
  }

  handleOnClick = () => {
    let value = !this.state.value;
    if (this.props.onChange) {
      this.props.onChange({
        name: this.props.filter,
        value: value
      });
    }
    this.setState({ value: value });
  };

  getCheckBox() {
    let box = this.state.value ? "check_box" : "check_box_outline_blank";

    return <i className="check-box--box material-icons-round">{box}</i>;
  }

  render() {
    return (
      <div className="check-box no-select" onMouseDown={this.handleOnClick}>
        {this.getCheckBox()}
        <span className="check-box--filter">{this.props.filter}</span>
      </div>
    );
  }
}

export default CheckBox;
