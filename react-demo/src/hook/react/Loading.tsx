import React, { Component } from 'react'


interface LoadingProps {
  name: string
}
interface LoadingState {
  age: number
}

export class Loading extends Component<LoadingProps, LoadingState> {
  constructor(props: LoadingProps) {
    super(props)
    this.state = {
      age: 18
    }
    console.info('加载时-构造器')
  }

  /**
   * 使用场景极低
   * 若state的值在任何时候都取决于props的值，则需要使用getDerivedStateFromProps钩子函数
   * @param nextProps 
   * @param prevState 
   * @returns 
   */
  static getDerivedStateFromProps(nextProps: Readonly<LoadingProps>, prevState: Readonly<LoadingState>): Partial<LoadingState> | null | undefined {
    console.info('加载时-控制状态更新钩子1', JSON.stringify(nextProps), JSON.stringify(prevState))
    return prevState
  }

  componentDidMount(): void {
    console.info('加载时-挂载完成')
  }

  add = () => {
    this.setState({
      age: this.state.age + 1
    })
  }

  render() {
    console.info('加载时-render')
    return (
      <div>
        <h1> 加载时，姓名：{this.props.name},年龄：{this.state.age}</h1>
        <button onClick={this.add}>修改年龄</button>
      </div>
    )
  }
}

export default Loading
