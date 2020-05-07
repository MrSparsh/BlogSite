import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from './../actions';
import UserDetail from "./UserDetail";

class PostList extends Component {
  renderList = () => {
    //console.log(posts);
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <UserDetail userId={post.userId} />
            </div>
          </div>
          
          
        </div>
      );
    });
  };

  componentDidMount() {
    //this.props.fetchPosts();
    this.props.fetchPostsAndUsers();
   
  }

  render() {
    console.log(this.props.users);
    return (
      <div className="ui divided relaxed list">
        {this.renderList()}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    posts: state.posts,
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
