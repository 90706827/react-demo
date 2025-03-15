import { Button, Input, InputRef } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootDispatch } from '../Store';
import { addUser } from './UserReducer';
import { User } from './User';

interface AddUserProps {
  dispatch: RootDispatch;
}
export class AddUser extends Component<AddUserProps> {
  login = React.createRef<InputRef>()
  url = React.createRef<InputRef>()

  userAdd = () => {
    console.log(this.login.current?.input?.value)
    const user: User = {
      id: Math.random(),
      login: this.login.current?.input?.value || '',
      avatar_url: this.url.current?.input?.value || ''
    }

    if (user) {
      this.props.dispatch(addUser(user))
    }
  }

  render() {
    return (
      <div>
        <h3 className="jumbotron-heading">添加用户</h3>
        <Input ref={this.login} type='primary' placeholder='请输入用户名' defaultValue={"吉米"} />
        <Input ref={this.url} type='primary' placeholder='头像URL' defaultValue={"https://avatars.githubusercontent.com/u/1024025?v=5"} />

        <Button type="primary" onClick={this.userAdd}>
          添加
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch: RootDispatch) => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)
