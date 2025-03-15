import { Button, Input } from 'antd';
import { Component } from 'react';
import { connect } from 'react-redux';
import { RootDispatch } from '../Store';
import './SearchDemo.css';
import { findUsers } from './UserReducer';

interface UserSearchProps {
  dispatch: RootDispatch;
}

class UserSearch extends Component<UserSearchProps> {
  render() {
    return (
      <div>
        <h3 className="jumbotron-heading">搜索用户</h3>
        <div style={{ width: 400 }}>
          <Input style={{ width: 300 }} type="text" placeholder="搜素输入" />&nbsp;
          <Button type="primary" onClick={() => { this.props.dispatch(findUsers('zhangsan')) }}>
            搜搜
          </Button>

        </div>
        <br />
      </div>
    );
  }
}

export default connect()(UserSearch);