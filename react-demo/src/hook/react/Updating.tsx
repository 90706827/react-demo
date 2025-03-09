import React, { Component } from 'react'

interface UpdatingProps {
  name: string
}
interface UpdatingState {
  age: number
}

export class Updating extends Component<UpdatingProps, UpdatingState> {
  constructor(props: UpdatingProps) {
    super(props)
    this.state = {
      age: 18
    }
    console.info('更新时-构造器')
  }

  /**
   * 使用场景极低
   * 若state的值在任何时候都取决于props的值，则需要使用getDerivedStateFromProps钩子函数
   * @param nextProps 
   * @param prevState 
   * @returns 
   */
  // static getDerivedStateFromProps(nextProps: Readonly<UpdatingProps>, prevState: Readonly<UpdatingState>): Partial<UpdatingState> | null | undefined {
  //   console.info('加载时-控制状态更新钩子1', JSON.stringify(nextProps), JSON.stringify(prevState))
  //   return prevState
  // }

  getSnapshotBeforeUpdate(prevProps: Readonly<UpdatingProps>, prevState: Readonly<UpdatingState>) {
    console.info('更新时-更新前', JSON.stringify(prevProps), JSON.stringify(prevState), this.state)
    return this.state;
  }
  componentDidUpdate(prevProps: Readonly<UpdatingProps>, prevState: Readonly<UpdatingState>, snapshot?: any): void {
    console.info('更新时-更新后', JSON.stringify(prevProps), JSON.stringify(prevState), snapshot)
  }

  add = () => {
    this.setState({
      age: this.state.age + 1
    })
  }

  render() {
    console.info('更新时-render')
    return (
      <div>
        <h1> 更新时，姓名：{this.props.name},年龄：{this.state.age}</h1>
        <button onClick={this.add}>修改年龄</button>
      </div>
    )
  }
}

export default Updating
