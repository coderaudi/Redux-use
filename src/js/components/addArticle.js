import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

class AddArticle extends Component {
  state = {
    title: ""
  };

  nameChangeHandler = event => {
    const enterdName = event.target.value;
    this.setState({ title: enterdName });
    this.props.addArticle(this.state.title);
  };

  render() {
    return (
      <div>
        <h1>Add new ele</h1>
        <form onSubmit={this.submitArticleHandler}>
          <input
            type="text"
            onChange={event => this.nameChangeHandler(event)}
          />
          <button type="submit">SUbmit</button>
        </form>
        {this.state.name}
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

const mapDispatchToProps = dispatch => {
  return {
    addArticle: articles => dispatch(addArticle(articles))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddArticle);
