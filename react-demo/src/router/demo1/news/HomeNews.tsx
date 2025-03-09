import { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'
import NavigateButton from './NavigateButton'
import { Divider } from 'antd'

export class HomeNews extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to={`/home/news/detail?id=${1}&title=${"新闻1"}`}>新闻1</Link></li>
          <li><Link to={{ pathname: '/home/news/detail', search: '?id=2&title=新闻2' }}>新闻2</Link></li>
          <li><Link to="/home/news/details" state={{ id: 3, title: "新闻3" }} >新闻 state</Link></li>
        </ul>
        <hr />
        <Divider/>
        <Outlet />
        <NavigateButton />
      </div>
    )
  }
}

export default HomeNews
