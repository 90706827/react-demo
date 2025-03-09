import React, { Component } from 'react'
import Header from './Header'
import List from './List'
import Footer from './Footer'
import './css/TodoList.css'
import { ItemProps } from './Item'

export class TodoList extends Component {
  state = {
    tasks: [
      { id: "1", name: '吃饭', done: true },
      { id: "2", name: '睡觉', done: false },
      { id: "3", name: '打豆豆', done: false }
    ]
  }
  addTask = (item: ItemProps) => {
    console.info('搜索', item)
    const { tasks } = this.state
    this.setState({ tasks: [item, ...tasks] })
  }

  updateTask = (id: string, done: boolean) => {
    const { tasks } = this.state
    const taskList = tasks.map(item => {
      if (item.id === id) {
        return { ...item, done }
      } else {
        return item
      }
    })
    this.setState({ tasks: taskList })
  }

  delTask = (id: string) => {
    const { tasks } = this.state
    const taskList = tasks.filter(item => item.id !== id)
    this.setState({ tasks: taskList })
  }

  allSelect = (isSelect: boolean) => {
    const { tasks } = this.state
    const taskList = tasks.map(item => {
      return { ...item, done: isSelect }
    })
    this.setState({ tasks: taskList })
  }
  clearTask = ()=>{
    const { tasks } = this.state
    const taskList = tasks.filter(item => !item.done)
    this.setState({ tasks: taskList })
  }

  render() {
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTask={this.addTask} />
          <List delTask={this.delTask} updateTask={this.updateTask} tasks={this.state.tasks} />
          <Footer clearTask = {this.clearTask} allSelect={this.allSelect} count={this.state.tasks.length} sumSelect={this.state.tasks.filter(item => item.done).length} />
        </div>
      </div>
    )
  }
}

export default TodoList
