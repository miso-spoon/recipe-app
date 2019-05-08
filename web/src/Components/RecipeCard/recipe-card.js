import React, { Component } from "react";
import { connect } from "react-redux";

/* Components */

/* Styles */
import "./_recipe-card.scss";

class RecipeCard extends Component {
  render() {
    return (
      <div className="recipe-card">
        <div className="recipe-card--image-container" />
        <div className="recipe-card--detail-container">
          <div className="recipe-card--review-container">
            <i className="material-icons-round">star_border</i>
            <i className="material-icons-round">star_border</i>
            <i className="material-icons-round">star_border</i>
            <i className="material-icons-round">star_border</i>
            <i className="material-icons-round">star_border</i>
          </div>
          <div className="recipe-card--time-container">
            <i className="material-icons">access_time</i>
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
)(RecipeCard);
