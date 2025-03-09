import React, { Component, ChangeEvent } from 'react'



export class FromDemo extends Component {
  myRef = React.createRef()
  static propTypes = {

  }
  myBlur = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  showData = () => {
    console.log(this.myRef.current)
  }

  render() {
    return (
      <div>
        <input ref={this.myRef} type="text" placeholder='请输入内容' /><br />
        <input onBlur={this.myBlur} type="text" placeholder='失去焦点数据' /><br />
        <button onClick={this.showData} >提交</button>
      </div>
    )
  }
}

export default FromDemo
