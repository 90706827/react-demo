import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


interface MyNavLinkProps {
  to: string
  children: string
}

export class MyNavLink extends Component<MyNavLinkProps> {

  render() {
    return (
      <NavLink className={({ isActive }) => isActive ? "list-group-item actived" : "list-group-item"} {...this.props}/>
    )
  }
}

export default MyNavLink
