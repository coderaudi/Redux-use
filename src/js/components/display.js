import React, { Component } from "react";
import { connect } from "react-redux";

class Display extends Component {
  render() {
    return (
      <div>
        <h1>Show redux store data</h1>
        {this.props.storeCounter}
        {this.props.storeArticles.map(article => {
          return <li>{article}</li>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    storeCounter: state.counter,
    storeArticles: state.articles
  };
};

export default connect(mapStateToProps)(Display);
