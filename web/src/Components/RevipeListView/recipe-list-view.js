import React, { Component } from "react";
import { connect } from "react-redux";

/* Components */
import Header from "../Header/header";
import RecipeCard from "../RecipeCard/recipe-card";

/* Styles */
import "./_recipe-list-view.scss";

class RecipeListView extends Component {
  render() {
    return (
      <div className="recipe-list-view">
        <Header />
        <div className="recipe-list-view--container">
          <RecipeCard title={"Smoked Salmon and Rice"}/>
          <RecipeCard title={"Macaroni and Cheese"}/>
          <RecipeCard title={"Peanut Butter and Jelly Sandwich"}/>
          <RecipeCard title={"Chicken Pot Pie"}/>
          <RecipeCard title={"Vegitable Stir Fry"}/>
          <RecipeCard title={"Beef Stew"}/>
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
