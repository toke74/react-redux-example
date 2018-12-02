import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import DetialPost from "./components/DetialPost";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/Posts" component={Posts} />
              <Route path="/createPost" component={PostForm} />
              <Route path="/:post_id" component={DetialPost} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
