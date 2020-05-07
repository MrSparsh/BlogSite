import React, { Component } from "react";
import { connect } from "react-redux";

class UserDetail extends Component {
  render() {
    let {user} = this.props;
    if (!user) return null;
    return <div className='header'>{user.name}</div>;
  }
}

let mapStateToProps = (state, ownProps) => {
  let user = state.users.find((user) => user.id === ownProps.userId);
  return {
    user: user,
  };
};
export default connect(mapStateToProps)(UserDetail);
