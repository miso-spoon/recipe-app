import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { withCookies } from "react-cookie";

/* Components */
import Header from "./Components/Header/header";
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
        <div className="content">
          <Route
            path="/"
            render={() => <Header cookies={this.props.cookies} />}
          />
          <Route
            excact
            path="/recipes"
            render={() => <RecipeListView cookies={this.props.cookies} />}
          />
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

const App = connect(
  mapStateToProps,
  null
)(AppComponent);

export default withCookies(App);
