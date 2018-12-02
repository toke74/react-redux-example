import React, { Component } from "react";
import { connect } from "react-redux";
import propTpyes from "prop-types";
import { Link } from "react-router-dom";

import { getSinglePost } from "../actions/postActions";

export class DetialPost extends Component {
  componentDidMount() {
    this.props.getSinglePost(this.props.match.params.post_id);
  }

  render() {
    const { post } = this.props;
    return (
      <div>
        <h1>Post Detial</h1>
        <h5 className="center">{post.title}</h5>
        <p>{post.body}</p>
        <Link to="/Posts"> Go to Posts</Link>
      </div>
    );
  }
}
DetialPost.propTpyes = {
  getSinglePost: propTpyes.func.isRequired,
  post: propTpyes.object.isRequired
};
const mapStateToProp = state => ({
  post: state.posts.post
});
export default connect(
  mapStateToProp,
  { getSinglePost }
)(DetialPost);
