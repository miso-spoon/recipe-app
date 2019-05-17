import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { withCookies } from "react-cookie";

/* Components */
import Header from "./Components/Header/header";
import Input from "./Components/Inputs/Input/input";
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
          render={() => <Header cookies={this.props.cookies} />}
        />
        <div className="content">
          <Route
            exact
            path="/"
            render={() => <SideBar cookies={this.props.cookies} />}
          />
          <Route
            exact
            path="/"
            render={() => <RecipeListView cookies={this.props.cookies} />}
          />
          <Route
            excact
            path="/input"
            render={() => {
              return (
                <div className="input-container">
                  <Input type="text" header="First Name" />
                  <Input type="text" header="Last Name" />
                  <Input type="text" header="email" />
                  <Input type="password" header="Password" />
                </div>
              );
            }}
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
