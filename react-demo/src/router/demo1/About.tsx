import { Component } from 'react'
import { Outlet } from 'react-router-dom'
import MyNavLink from '../components/MyNavLink'
import './home.css'
import { Divider } from 'antd'

export default class About extends Component {

  render() {
    return (
      <div className="home_div">
        <ul className='home_ul'>
          <li className='home_li'><MyNavLink to="/about/a" children="AboutA" /></li>
          <li className='home_li'><MyNavLink to="/about/b" children="AboutB" /></li>
        </ul>
        <Divider/>
        <div>
          <Outlet />
        </div>
      </div>
    )
  }
}
