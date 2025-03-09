import React, { Component } from 'react'
import PubSub from "pubsub-js"
import './SearchDemo.css'
// import "./bootstrap.min.css"

export interface User {
  login: string
  id: number
  avatar_url: string
  html_url: string
}

interface SearchListState {
  users: User[]
  isFirst: boolean
  isLoading: boolean
  error: string
}

export default class SearchList extends Component<object, SearchListState> {
  token: string = ''
  state = {
    users: [] as User[],
    isFirst: true,
    isLoading: false,
    error: ''
  }

  /**
   * 初始化 初始化订阅
   */
  componentDidMount(): void {
    console.log('初始化订阅')
    this.token = PubSub.subscribe('search', (_, data) => {
      this.setState(data)
    })
  }

  /**
   * 组件销毁 取消订阅
   */
  componentWillUnmount(): void {
    console.log('取消订阅')
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { users, isFirst, isLoading, error } = this.state
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
