import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

/* Styles */
import "./_header.scss";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className="header__link no-select">
          <i className="material-icons-round header__link-icon">restaurant</i>
          <div className="header__link-title" />
        </Link>
        <Link to="/input" className="header__link no-select">
          <i className="material-icons header__link-icon no-select">hot_tub</i>
          <div className="header__link-title" />
        </Link>
        <div className="header__icon" />
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
