import React, { Component } from "react";
import { connect } from "react-redux";

/* Components */
import Header from "../Header/header";

/* Styles */
import "./_recipe-list-view.scss";

class RecipeListView extends Component {
  render() {
    return (
      <div className="recipe-list-view">
        <Header />
        <div className="recipe-list-view--container">
          <div className="recipe-list-view--placeholder">Hello World.</div>
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
)(RecipeListView);
