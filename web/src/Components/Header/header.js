import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

/* Styles */
import "./_header.scss";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className="header--link no-select">
          <i className="material-icons-round header--link-icon">restaurant</i>
          <div className="header--link-title" />
        </Link>
        <Link to="/input" className="header--link no-select">
          <i className="material-icons header--link-icon no-select">hot_tub</i>
          <div className="header--link-title" />
        </Link>
        <div className="header--icon" />
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
