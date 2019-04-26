import React, { Component } from "react";
import { connect } from "react-redux";

/* Styles */
import "./_side-bar.scss";

class SideBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <div className="side-bar--secondary">
          <div className="side-bar--secondary-settings">
            <i className="material-icons">settings</i>
          </div>
        </div>
        <div className="side-bar--primary">
          <div className="side-bar--primary-header">
            {/* PLACEHOLDER SEARCH */}
            <div className="side-bar--primary-search">
              <input type="text" className="side-bar--primary-search-input" />
              <i className="material-icons">search</i>
            </div>
          </div>
          <div className="side-bar--primary-content">
            {/* FIND RECIPES*/}
            <span className="side-bar--primary-menu-item">
              <i className="material-icons-round">dashboard</i> Find Recipes
            </span>
            {/* MY RECIPES*/}
            <span className="side-bar--primary-menu-item">
              <i className="material-icons">style</i> My Recipes
            </span>
            {/* FAVORITES*/}
            <span className="side-bar--primary-menu-item">
              <i className="material-icons">favorite</i> Favorites
            </span>
          </div>
        </div>
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
