import { GET_POSTS, CREATE_POST, GET_POST } from "./types";
import axios from "axios";

//es 6
export const getPosts = () => dispatch => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
    dispatch({
      type: GET_POSTS,
      playload: res.data
    });
  });
};

//get single post
export const getSinglePost = id => dispatch => {
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
    dispatch({
      type: GET_POST,
      playload: res.data
    });
  });
};
//es 6
export const createPosts = (postData, history) => dispatch => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", postData)
    .then(res => {
      dispatch({
        type: CREATE_POST,
        playload: res.data
      });
      history.push("/");
    });
};

export function deletePost(id, history) {
  return function(dispatch) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        history.push("Posts");
        console.log(res.status);
      });
  };
}

//or we can do this
// export function getPosts() {
//   return function(dispatch) {
//     axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
//       dispatch({
//         type: GET_POSTS,
//         playload: res.data
//       });
//     });
//   };
// }
