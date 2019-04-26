import React, { Component } from "react";
import { connect } from "react-redux";

/* Styles */
import "./_side-bar.scss";

class SideBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <div className="side-bar--secondary" />
        <div className="side-bar--primary" />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state,
    cookies: ownProps.cookies
  };
};

export default connect(
  mapStateToProps,
  null
)(SideBar);
