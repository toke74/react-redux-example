import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to posts</h1>
        <Link to="/Posts"> Go to Posts</Link>
      </div>
    );
  }
}

export default Landing;
