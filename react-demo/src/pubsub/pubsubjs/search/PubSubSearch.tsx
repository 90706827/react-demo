import React, { Component } from 'react'
import "./SearchDemo.css"
import "./bootstrap.min.css"
import Search from './Search'
import SearchList from './SearchList'


export class PubSubSearch extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <SearchList />
        <br />
      </div>
    )
  }
}

export default PubSubSearch
