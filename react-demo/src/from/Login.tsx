import { Component, ErrorInfo, FormEvent } from 'react'
import { createRoot } from 'react-dom/client'

export class Login extends Component {

  state = {
    opacity: 1,
    username: "",
    password: "",
    timer: 0,
  }

  setUsername = (e: FormEvent<HTMLInputElement>) => {
    this.state.username = e.currentTarget.value
  }
  setPassword = (e: FormEvent<HTMLInputElement>) => {
    this.state.password = e.currentTarget.value
  }

  setFromData(type: string) {
    return (event: FormEvent<HTMLInputElement>) => {
      this.setState({ [type]: event.currentTarget.value })
    }
  }
  updateFromData(type: string, event: FormEvent<HTMLInputElement>) {
    this.setState({ [type]: event.currentTarget.value })
  }


  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // e.preventDefault()
    console.log(`用户名：${this.state.username} 密码：${this.state.password}`)
  }

  exit = () => {
    const login = document.getElementById("login") as HTMLDivElement | null;
    clearInterval(this.state.timer);
    if (login) {
      const un = createRoot(login)
      un.unmount()
    }
  }

  /**
   * 组件挂载后的生命周期方法
   */
  componentDidMount(): void {
    const t = setInterval(() => {
      this.setState({ opacity: this.state.opacity - 0.1 })
      if (this.state.opacity <= 0) this.setState({ opacity: 1 })
    }, 200);
    this.setState({ timer: t })
    console.log("组件挂载后的生命周期方法");
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log("组件异常捕获" + error, errorInfo);
  }

  /**
   * 组件即将卸载
   */
  componentWillUnmount(): void {
    console.log("组件即将卸载!");
  }

  /**
   * 渲染登录页面组件
   * 
   * 此方法负责根据组件的状态和属性生成和返回相应的React元素树
   * 它包括设置页面布局、样式以及事件处理函数的绑定
   */
  render() {
    return (
      <div id="login">
        <h1 style={{ opacity: this.state.opacity }} >登录页面</h1><br />
        <form onSubmit={this.handleSubmit}>
          用户： <input id="username" onChange={this.setFromData("username")} type="text" /><br />
          密码：<input id="password" onChange={(event) => { this.updateFromData("password", event) }} type="password" /><br />
          <button>Login</button>  <button onClick={this.exit}>exit</button>
        </form>
      </div>
    )
  }
}

export default Login
