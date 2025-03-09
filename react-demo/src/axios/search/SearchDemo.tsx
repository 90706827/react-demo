import React, { Component } from 'react'
import "./SearchDemo.css"
import "./bootstrap.min.css"
import Search from './Search'
import SearchList from './SearchList'


export class SearchDemo extends Component {

  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    error: ''
  }

  searchState = (state: object) => {
    this.setState(state)
  }

  render() {
    return (
      <div className="container">
        <Search searchState={this.searchState} />
        <SearchList {...this.state} />
        <br />
      </div>
    )
  }
}

export default SearchDemo
