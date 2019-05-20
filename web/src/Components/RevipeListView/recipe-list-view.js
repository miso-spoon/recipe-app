import React, { Component } from "react";
import { connect } from "react-redux";
import { updateRecipes } from "../../store/actions";

/* Components */
import RecipeCard from "../RecipeCard/recipe-card";

/* Services */
import RecipeService from "../../Services/RecipeService/recipe-service";

/* Styles */
import "./_recipe-list-view.scss";

class RecipeListView extends Component {
  componentDidMount() {
    this.getRecipes(this.props.options);
  }
  getRecipes = async options => {
    let recipes = await RecipeService.get(options);
    this.props.updateRecipes(recipes);
  };

  render() {
    let recipeCards = this.props.recipes.map(r => {
      return <RecipeCard key={r._id} recipe={r} />;
    });

    return <div className="recipe-list-view">{recipeCards}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    recipes: state.recipes,
    cookies: ownProps.cookies
  };
};

const mapDispatchToProps = dispatch => ({
  updateRecipes: recipes => dispatch(updateRecipes(recipes))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeListView);
