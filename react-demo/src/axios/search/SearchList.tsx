import React, { Component } from 'react'
import './SearchDemo.css'
// import "./bootstrap.min.css"

export interface User {
  login: string
  id: number
  avatar_url: string
  html_url: string
}


export interface SearchListProps {
  users: User[]
  isFirst: boolean
  isLoading: boolean
  error: string
}

export default class SearchList extends Component<SearchListProps> {

  render() {
    const { users, isFirst, isLoading, error } = this.props
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用！</h2> :
            isLoading ? <h2>正在加载中...</h2> :
              error ? <h2 style={{ color: 'red' }}>{error}</h2> :
                users.map(user => {
                  return (
                    <div key={user.id} className="card">
                      <a href={user.html_url} target="_blank">
                        <img src={user.avatar_url} style={{ width: '100px' }} />
                      </a>
                      <p className="card-text">{user.login}</p>
                    </div>
                  )
                })

        }
      </div>
    )
  }
}
