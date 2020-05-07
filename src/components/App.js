import React, { Component } from "react";
import PostList from "./PostList";
import reducers from "../reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <div className="ui container">
          <PostList />
        </div>
      </Provider>
    );
  }
}
