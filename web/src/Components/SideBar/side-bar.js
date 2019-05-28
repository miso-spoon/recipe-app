import React, { Component } from "react";
import { connect } from "react-redux";

/* Components */
import CheckBox from "../Inputs/CheckBox/check-box";
import Input from "../Inputs/Input/input";
import ReviewStars from "../ReviewStars/review-stars";

/* Styles */
import "./_side-bar.scss";

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: [
        {
          type: "Category",
          filters: ["pasta", "sanwiches", "soups", "rice"]
        },
        {
          type: "Restriction",
          filters: ["vegetarian", "vegan", "gluten free"]
        }
      ]
    };
  }

  /**
   * Handles changes in filters
   *
   * @param {Object} event - event object
   */
  onFilterChange(event) {}

  /**
   * Returns the list of filters
   */
  getFilters = () => {
    let filters = this.state.filters.map(filter => {
      let boxes = filter.filters.map(f => {
        return <CheckBox key={f} onChange={this.onFilterChange} filter={f} />;
      });
      return (
        <div
          key={filter.type + "-container"}
          className="side-bar__filter-group"
        >
          <div
            key={filter.type + "-header"}
            className="side-bar__filter-group-header"
          >
            {filter.type}
          </div>
          {boxes}
        </div>
      );
    });

    return filters;
  };

  render() {
    return (
      <div className="side-bar">
        {/* PLACEHOLDER SEARCH */}
        <Input
          className="side-bar__search"
          type="text"
          placeholder="Search..."
          icon="search"
        />
        <div className="side-bar-content">
          <div className="side-bar__filter-group">{this.getFilters()}</div>
          <div className="side-bar__filter-group">
            <div className="side-bar__filter-group-header">Rating</div>
            <ReviewStars rating={0} />
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
