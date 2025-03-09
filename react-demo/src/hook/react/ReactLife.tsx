import { Component } from 'react'
import { createRoot } from 'react-dom/client'
import ReactLifeSon from './ReactLifeSon'

interface IProps {
  count: number
}
interface IState {
  count: number
  name: string
}

export class ReactLife extends Component<IProps, IState> {

  constructor(props: IProps) {
    console.log('1、类构造器')
    super(props)
    this.state = {
      count: 0,
      name: "张三"
    }
    this.context = {
      tenantId: 123
    }
  }
  add = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  exit = () => {
    const login = document.getElementById("life") as HTMLDivElement | null;
    if (login) {
      const un = createRoot(login)
      un.unmount()
    }
  }
  /**
   * render渲染完成后在此处设置state将触发重新渲染
   * 常用场景：
   * 初始化时做的事情，开启定时器，发送网络请求，订阅消息
   * 
   */
  componentDidMount(): void {
    // this.setState({
    //   count: 1
    // })
    console.log('4、组件挂载完毕钩子')
  }
  /**
   * 控制 state和props的改变是否出发重新渲染
   * @param nextProps 
   * @param nextState 
   * @returns 
   */
  shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<object>): boolean {
    console.log('控制状态和参数是否更新', JSON.stringify(nextProps), JSON.stringify(nextState))
    return true
  }

  /**
   * 强制更新
   */
  force = () => {
    this.forceUpdate()
  }

  /**
   * 强制状态更新，刷新state到render，配合componentDidUpdate一起使用
   * @param prevProps 
   * @param prevState 
   * @returns 
   */
  getSnapshotBeforeUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>) {
    console.log('强制状态更新', JSON.stringify(prevProps), JSON.stringify(prevState))
    return null;
  }
  /**
   * state更新后立即调用，不需要镜像初始化渲染
   * @param prevProps 
   * @param prevState 
   * @param snapshot 
   */
  componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {
    console.log('控制状态更新钩子1', JSON.stringify(prevProps), JSON.stringify(prevState), JSON.stringify(snapshot))
  }

  /**
   * 组件被销毁之前立即调用，使用此方法执行任何必要的清理，
   * 例如取消网络请求，清除定时器，或者清除在componentDidMount中创建的DOM元素。
   * 常用场景：
   * 一般做一些收尾的事情，例如：清除定时器，取消订阅消息，
   */
  componentWillUnmount(): void {
    console.log('3、组件卸载钩子')
  }

  sonUpdae = () => {
    this.setState({
      name: "李四"
    })
  }
  render() {
    console.log('2、render')
    return (
      <div id="life">
        <h1>当前求和：{this.state.count}</h1>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.exit}>卸载</button>
        <button onClick={this.force}>强制更新</button>
        <button onClick={this.sonUpdae}>子组件更新</button>
        <ReactLifeSon name={this.state.name} />
      </div>
    )
  }
}

export default ReactLife
