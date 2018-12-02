import React, { Component } from "react";
import { connect } from "react-redux";
import propTpyes from "prop-types";
import { createPosts } from "../actions/postActions";
import { withRouter } from "react-router-dom";

export class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const postData = {
      title: this.state.title,
      body: this.state.body
    };
    // console.log(postData);
    this.props.createPosts(postData, this.props.history);
  }

  render() {
    // console.log(this.props.post);
    // console.log(this.state.body);
    return (
      <div>
        <h1>Post forms</h1>
        <form onSubmit={this.onSubmit}>
          Title <br />
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
          />{" "}
          <br />
          <br />
          Body <br />
          <textarea
            name="body"
            value={this.state.body}
            onChange={this.onChange}
          />{" "}
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
PostForm.propTpyes = {
  createPosts: propTpyes.func.isRequired
};

export default connect(
  null,
  { createPosts }
)(withRouter(PostForm));
