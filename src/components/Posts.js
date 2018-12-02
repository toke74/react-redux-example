import React, { Component } from "react";
import { connect } from "react-redux";
import propTpyes from "prop-types";
import { getPosts } from "../actions/postActions";
import { deletePost } from "../actions/postActions";

import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

export class Posts extends Component {
  handleClick = id => {
    //delete action method goes here
    this.props.deletePost(id, this.props.history);
  };
  componentDidMount() {
    this.props.getPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const { posts } = this.props;
    const ListPosts = posts.slice(0, 3);
    return (
      <div>
        <h1>Posts</h1>
        {ListPosts.map(post => (
          <div key={post.id}>
            <div className="card  grey lighten-3">
              <div className="card-content black-text">
                <Link to={"/" + post.id}>
                  <span className="card-title ">{post.title}</span>
                </Link>

                <p>{post.body}</p>
                <div className="right-align">
                  <button
                    className="btn grey "
                    onClick={this.handleClick.bind(this, post.id)}
                  >
                    Delete Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
Posts.propTpyes = {
  posts: propTpyes.array.isRequired,
  getPosts: propTpyes.func.isRequired,
  deletePost: propTpyes.func.isRequired
};

const mapStateToPorp = state => ({
  posts: state.posts.posts,
  newPost: state.posts.post
});

export default connect(
  mapStateToPorp,
  { getPosts, deletePost }
)(withRouter(Posts));
