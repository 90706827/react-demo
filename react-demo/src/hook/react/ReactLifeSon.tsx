import React, { Component } from 'react'

interface ReactLifeSonProps {
  name: string
}
interface ReactLifeSonState {
  age: number
}

export class ReactLifeSon extends Component<ReactLifeSonProps, ReactLifeSonState> {
  constructor(props: ReactLifeSonProps) {
    super(props)
    this.state = {
      age: 18
    }
    console.log('子组件-构造器')
  }

  /**
   * 
   * @param nextProps 
   * @param prevState 
   * @returns 
   */
  static getDerivedStateFromProps(nextProps: Readonly<ReactLifeSonProps>, prevState: Readonly<ReactLifeSonState>): Partial<ReactLifeSonState> | null | undefined {
    console.log('子组件-控制状态更新钩子1', JSON.stringify(nextProps), JSON.stringify(prevState))
    return null
  }

  shouldComponentUpdate(nextProps: Readonly<ReactLifeSonProps>, nextState: Readonly<ReactLifeSonState>): boolean {
      console.log('子组件-控制状态更新钩子2', JSON.stringify(nextProps), JSON.stringify(nextState))
      return true
  }

  getSnapshotBeforeUpdate(prevProps: Readonly<ReactLifeSonProps>, prevState: Readonly<ReactLifeSonState>) {
      console.log('子组件-更新前', JSON.stringify(prevProps), JSON.stringify(prevState))
      return null;
  }

  componentDidUpdate(prevProps: Readonly<ReactLifeSonProps>, prevState: Readonly<ReactLifeSonState>, snapshot?: any): void {
      console.log('子组件-更新后', JSON.stringify(prevProps), JSON.stringify(prevState))
  }

  

  render() {
    console.log('子组件-render')
    return (
      <div>
        <h1> 我是子组件，汽车名字{this.props.name}</h1>
      </div>
    )
  }
}

export default ReactLifeSon
