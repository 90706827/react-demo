import React, { ChangeEvent, Component } from 'react'
import './css/Item.css'

export interface ItemProps {
  key:string
  id: string
  name: string
  done: boolean
  updateTask: (id: string, done: boolean) => void
  delTask: (id: string) => void
}
export interface ItemState {
  mouse: boolean
}


export class Item extends Component<ItemProps, ItemState> {
  state = {
    mouse: false
  }
  handleMouse = (mouse: boolean) => {
    return () => {
      this.setState({
        mouse
      })
    }
  }
  checkboxChange = (id: string) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      console.log(id, event.currentTarget.checked)
      this.props.updateTask(id,event.currentTarget.checked)
    }
  }

  delTask = (id:string) => {
      return () => {
          console.log(id)
          this.props.delTask(id)
      }
  }

  render() {
    return (
      <li onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)} style={{ backgroundColor: this.state.mouse ? '#add' : 'white' }}>
        <label>
          <input type="checkbox" checked={this.props.done} onChange={this.checkboxChange(this.props.id)} />
          <span>{this.props.name}</span>
        </label>
        <button onClick={this.delTask(this.props.id)} className='btn btn-danger' style={{ display: this.state.mouse ? "block" : 'none' }}>删除</button>
      </li >
    )
  }
}

export default Item
