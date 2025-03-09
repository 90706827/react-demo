import React, { PureComponent } from 'react'
import Student from './Student'
import ReqDemo from './ReqDemo'

export class AxiosList extends PureComponent {

  render() {
    return (
      <div>
        <ReqDemo/>
        <Student/>
      </div>
    )
  }
}

export default AxiosList
