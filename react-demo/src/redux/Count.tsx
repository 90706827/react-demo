import { Button, Select } from 'antd'
import React, { Component } from 'react'

export class Count extends Component {
  state = {
    count: 0,
    num: 0
  }

  increment = () => {
    const { count, num } = this.state
    console.log(count, num)
    this.setState({
      count: count + num
    })
  }
  decrement = () => {
    const { count, num } = this.state
    console.log(count, num)
    this.setState({
      count: count - num
    })
  }
  incrementIfAdd = () => {
    const { count, num } = this.state
    console.log(count, num)
    if (count % 2) {
      this.setState({
        count: count + num
      })
    }
  }
  incrementAsync = () => {
    const { count, num } = this.state
    console.log(count, num)
    setTimeout(() => {
      this.setState({
        count: count + num
      })
    }, 500)
  }
  render() {
    return (
      <div>
        <h1>当前求和为:{this.state.count}</h1>
        <Select
          defaultValue={1}
          onChange={(value) => {
            this.setState({
              num: value
            })
          }}
          style={{ width: 100 }}
          options={[
            { value: 1, label: '1' },
            { value: 2, label: '2' },
            { value: 3, label: '3' },
            { value: 4, label: '4', disabled: true },
          ]}
        />
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementIfAdd}>求和奇数再加</Button>
        <Button onClick={this.incrementAsync}>异步加</Button>
      </div>
    )
  }
}

export default Count
