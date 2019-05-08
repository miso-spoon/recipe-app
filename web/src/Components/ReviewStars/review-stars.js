import React, { Component } from "react";
import { connect } from "react-redux";

/* Components */
import Star from "../../star.svg"; // TODO: Material icons round star is broken

/* Styles */
import "./_review-stars.scss";

class ReviewStars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canUpdate: false,
      rating: this.props.rating || 0,
      ratings: 234
    };
  }

  /**
   * Hadle onMouseEnter. If updating is turned on let the user
   * leave a rating.
   *
   * @param Object - event object
   */
  onHover = e => {
    if (!this.state.canUpdate) return;
    this.setState({ rating: parseInt(e.target.id) + 1 });
  };

  /**
   * Handle onMouseDown. Toggle on/off rating actions
   *
   * @param Object - event object
   */
  onClick = e => {
    if (!this.state.canUpdate) {
      this.setState({ rating: parseInt(e.target.id) + 1 });
    }
    this.setState({ canUpdate: !this.state.canUpdate });
  };

  /**
   * Get the star icons based off of a rating
   *
   * @param Number - rating
   */
  getStars(rating) {
    let stars = [];
    let index = 0;

    // Add all full stars
    while (rating >= 1) {
      stars.push(
        <img // TODO: Update to <i> with fix to Material icon being broken
          key={index}
          id={index}
          src={Star}
          onMouseEnter={this.onHover}
          onMouseDown={this.onClick}
        />
      );
      rating--;
      index++;
    }

    // Add half star
    if (rating > 0) {
      stars.push(
        <i
          key={index}
          id={index}
          className="material-icons-round"
          onMouseEnter={this.onHover}
          onMouseDown={this.onClick}
        >
          star_half
        </i>
      );
      index++;
    }

    // Add empty stars
    while (index < 5) {
      stars.push(
        <i
          key={index}
          id={index}
          className="material-icons-round"
          onMouseEnter={this.onHover}
          onMouseDown={this.onClick}
        >
          star_border
        </i>
      );
      index++;
    }

    return stars;
  }

  render() {
    return (
      <div className="review-stars">
        {this.getStars(this.state.rating)}
        <span className="review-stars--number">{this.state.ratings}</span>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  null
)(ReviewStars);
