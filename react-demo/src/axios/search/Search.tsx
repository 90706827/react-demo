import React, { Component } from 'react'
import './SearchDemo.css'
// import "./bootstrap.min.css"
import service from '../../utils/Axios'

interface SearchProps {
  searchState(state: object): void
}

export default class Search extends Component<SearchProps> {
  keyWordElement: HTMLInputElement | undefined

  search = () => {
    this.props.searchState({ isFirst: false, isLoading: true })
    if (this.keyWordElement) {
      console.log('search', this.keyWordElement.value)
    }
    service.get("/api/user").then(res => {
      this.props.searchState({ users: res.data, isLoading: false })
    }).catch(err => {
      this.props.searchState({ error: err.message, isLoading: false })
    })

  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索 Github 用户</h3>
        <div>
          <input ref={c => { if (c) this.keyWordElement = c }} type="text" placeholder="搜素输入" />
          &nbsp;<button onClick={this.search}>搜搜</button>
        </div>
      </section>
    )
  }
}
