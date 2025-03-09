import React, { ChangeEvent, Component } from 'react'
import './css/Footer.css'

interface FooterProps {
  sumSelect: number
  count: number
  allSelect(isSelect: boolean): void
  clearTask():void
}

interface FooterState {
  sumSelect: number
  count: number

}

export class Footer extends Component<FooterProps, FooterState> {

  allSelect = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.checked)
    this.props.allSelect(event.currentTarget.checked)
  }
  clearTask = ()=>{
    this.props.clearTask()
  }

  render() {
    return (
      <div className='todo-footer'>
        <label>
          <input onChange={this.allSelect} type="checkbox" checked={this.props.sumSelect === this.props.count && this.props.count!==0} />
        </label>
        <span>
          <span>已完成{this.props.sumSelect}</span>/全部{this.props.count}
        </span>
        <button onClick={this.clearTask} className='btn btn-danger'>清除已完成任务</button>
      </div>
    )
  }
}

export default Footer
