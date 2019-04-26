import React, { Component } from "react";
import { connect } from "react-redux";

/* Styles */
import "./_header.scss";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header--primary" />
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
)(Header);
