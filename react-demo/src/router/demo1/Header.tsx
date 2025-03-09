import { FastBackwardOutlined, FastForwardOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { Component } from 'react'

const navigate = (num: number) => {
  window.history.go(num)
}

export class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
        </div>
        &nbsp;
        <FastBackwardOutlined type="primary" onClick={() => navigate(-1)}>后退</FastBackwardOutlined>
        &nbsp;
        &nbsp;
        <FastForwardOutlined type='primary' onClick={() => navigate(+1)}>前进</FastForwardOutlined>
      </div>
    )
  }
}

export default Header
