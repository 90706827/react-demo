import axios from 'axios'
import React, { Component } from 'react'

export class ReqDemo extends Component {


  get = (id: number) => {
    return () => {
      axios.get('http://localhost:3000/students/' + id)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  post = () => {
    return () => {
      axios.request({
        method: 'post',
        url: 'http://localhost:3000/students',
        data: {
          id: 1,
          name: 'Tom',
          age: 18
        }
      })
      // axios.post('http://localhost:3000/students', {
      //   id: 1,
      //   name: 'Tom',
      //   age: 18
      // })
      //   .then(res => {
      //     console.log(res.data)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
    }
  }
  put = () => {
    return () => {
      axios.put('http://localhost:3000/students/1', {
        id: 1,
        name: 'Tom',
        age: 18
      })
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  delete = (id: number) => {
    return () => {
      axios.delete('http://localhost:3000/students/' + id)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.get(1)}>GET</button>
        <button onClick={this.post()}>POST</button>
        <button onClick={this.put()}>PUT</button>
        <button onClick={this.delete(1)}>DELETE</button>
      </div>
    )
  }
}

export default ReqDemo
