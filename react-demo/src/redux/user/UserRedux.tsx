import { Component } from 'react'
import "./bootstrap.min.css"
import ListUsers from './ListUsers'
import "./SearchDemo.css"
import UserSearch from './UserSearch'
import AddUser from './AddUser'


export class UserRedux extends Component {
  render() {
    return (
      <div className="container">
        <AddUser />
        <UserSearch />
        <ListUsers />
        <br />
      </div>
    )
  }
}

export default UserRedux
