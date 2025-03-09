import React, { Component } from 'react'
import service from '../utils/Axios'
import axios from 'axios'


export class Student extends Component {
  getStudentData = () => {
    try {
      service.get("/api/students").then(res => {
        console.log("get", res.data)
      })

    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("cancel", error)
      } else {
        console.log("get", error)
      }
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData} >获取学生数据</button>
      </div>
    )
  }
}

export default Student
