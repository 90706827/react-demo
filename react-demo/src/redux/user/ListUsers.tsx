import PropTypes from 'prop-types'
import { Component } from 'react'
import { connect } from 'react-redux'
import { RootDispatch, RootState } from '../Store'
import "./bootstrap.min.css"
import './SearchDemo.css'
import { User } from './User'
import { Avatar } from 'antd'
import { findUsers } from './UserReducer'
interface ListUsersProps {
  dispatch: RootDispatch,
  users: User[];
}
export class ListUsers extends Component<ListUsersProps> {
  static propTypes = {
    users: PropTypes.array.isRequired,
  }


  componentDidMount(): void {
    this.props.dispatch(findUsers(""))
  }
  render() {

    return (
      <div className="row">
        {
          this.props.users.map((user: User) => {
            return (
              <div key={user.id} className="card">
                <Avatar src={user.avatar_url} size={64} alt={user.login} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  users: state.users.users
})

const mapDispatchToProps = (dispatch: RootDispatch) => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers)

