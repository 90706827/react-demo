import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './css/Header.css'
import { ListItemProps } from './List';

interface HeaderProps {
  addTask(item: ListItemProps): void
}

export class Header extends Component<HeaderProps> {

  handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key)
    if (event.key !== 'Enter') {
      return
    }
    const name = event.currentTarget.value.trim()
    if (!name) {
      alert("输入不能为空!")
      return
    }
    console.log(name)
    this.props.addTask({ id: uuidv4(), name, done: false })
  }
  // addTask(item: ListItemProps) {
  //   console.log(item)
  // }
  render() {
    return (
      <div className='todo-header'>
        <input onKeyUp={this.handleKeyUp} type="text" placeholder='Search here' />
      </div>
    )
  }
}

export default Header
