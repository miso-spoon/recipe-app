import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { withCookies } from "react-cookie";

/* Components */
import RecipeListView from "./Components/RevipeListView/recipe-list-view";
import SideBar from "./Components/SideBar/side-bar";

/* Styles */
import "./App.scss";

class AppComponent extends Component {
  render() {
    return (
      <div className="app">
        <Route
          path="/"
          render={() => <SideBar cookies={this.props.cookies} />}
        />
        <Route
          excact
          path="/"
          render={() => <RecipeListView cookies={this.props.cookies} />}
        />
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

const App = connect(
  mapStateToProps,
  null
)(AppComponent);

export default withCookies(App);
