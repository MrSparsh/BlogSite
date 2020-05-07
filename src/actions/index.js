import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";
export let fetchPosts = () => async (dispatch) => {
  let response = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data,
  });
};

export let fetchUser = (userId) => async (dispatch) => {
  let response = await jsonPlaceholder.get(`/users/${userId}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
};

export let fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  let userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach((userId) => dispatch(fetchUser(userId)));
};
