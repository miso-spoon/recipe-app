import React, { Component } from "react";
import { connect } from "react-redux";

/* Components */
import ReviewStars from "../ReviewStars/review-stars";

/* Styles */
import "./_recipe-card.scss";

class RecipeCard extends Component {
  render() {
    const { recipe } = this.props;

    return (
      <div className="recipe-card">
        <div className="recipe-card--image-container">
          <i className="material-icons recipe-card--image-placeholder">
            image_outline
          </i>
        </div>
        <div className="recipe-card--detail-container">
          <div className="recipe-card--title">{recipe.title}</div>
          <div className="recipe-card--review-container">
            <ReviewStars rating={4.5} ratings={234} />
          </div>
          <div className="recipe-card--info-container">
            <div className="recipe-card--item-container">
              <i className="material-icons recipe-card--icon">access_time</i>
              {recipe.cook_time}
            </div>
            <div className="recipe-card--item-container">
              <i className="material-icons recipe-card--icon">scatter_plot</i>
              {recipe.calories}
            </div>
            <div className="recipe-card--item-container">
              <i className="material-icons-round recipe-card--icon">
                donut_small
              </i>
              {recipe.servings}
            </div>
            <div className="recipe-card--item-container">
              <i className="material-icons-round recipe-card--icon">
                attach_money
              </i>
              {recipe.cost}
            </div>
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
