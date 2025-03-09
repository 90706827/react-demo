import React, { Component } from 'react'
import './UpdateDemo.css'

interface UpdateDemoProps {
  name: string
}
interface UpdateDemoState {
  news: string[],
  isPaused: boolean
}

export class UpdateDemo extends Component<UpdateDemoProps, UpdateDemoState> {
  listRef = React.createRef<HTMLDivElement>()
  state = { news: [], isPaused: true }

  componentDidMount(): void {
    setInterval(() => {
      const news = "新闻" + (this.state.news.length + 1)
      if (this.state.isPaused) {
        this.setState({
          news: [news, ...this.state.news]
        })
      }
    }, 1000);
  }

  getSnapshotBeforeUpdate() {
    return this.listRef.current?.scrollHeight
  }
  componentDidUpdate(prevProps: Readonly<UpdateDemoProps>, prevState: Readonly<UpdateDemoState>, scrollHeight?: any): void {
    if (scrollHeight && this.listRef.current && this.listRef.current?.scrollTop) {
      const scrollTop = this.listRef.current?.scrollHeight - scrollHeight
      this.listRef.current.scrollTop += scrollTop
    }
  }

  render() {
    return (
      <div ref={this.listRef} className='list'>
        {
          this.state.news.map((item, index) => {
            return <div className='news' key={index}>{item}</div>
          })
        }
      </div>
    )
  }
}

export default UpdateDemo
