import React, { Component } from 'react'
import Item from './Item'
import './css/List.css'

export interface ListItemProps {
  id: string
  name: string
  done: boolean
}

interface ListpPops {
  tasks: ListItemProps[]
  updateTask: (id: string, done: boolean) => void
  delTask: (id: string) => void
}


export class List extends Component<ListpPops> {
  render() {
    return (
      <ul className='todo-main'>
        {
          this.props.tasks.map(task => {
            return (
              <Item delTask={this.props.delTask} updateTask={this.props.updateTask} key={task.id} {...task} />
            )
          })
        }
      </ul>
    )
  }
}

export default List
