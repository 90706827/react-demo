import PropTypes from 'prop-types'
import { Component } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../Store'
import "./bootstrap.min.css"
import './SearchDemo.css'
import { User } from './User'
import { Avatar } from 'antd'
interface ListUsersProps {
  users: User[];
}
export class ListUsers extends Component<ListUsersProps> {
  static propTypes = {
    users: PropTypes.array.isRequired,
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

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers)
