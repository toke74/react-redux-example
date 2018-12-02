import { GET_POSTS, CREATE_POST, GET_POST } from "../actions/types";

const initialState = {
  posts: [],
  post: {}
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        post: action.playload
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.playload
      };
    case GET_POST:
      return {
        ...state,
        post: action.playload
      };
    default:
      return state;
  }
};
