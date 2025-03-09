import React from 'react'

interface PersonProps {
  name: string
  age: number
  sex: string
}

export class Person extends React.Component<PersonProps> {
  static defaultProps = {
    name: '张三',
    age: 0,
    sex: '男',
  }
  render(): React.ReactNode {

    const { name, age, sex } = this.props
    return (
      <div>
        <p>姓名：{name}</p>
        <p>年龄：{age}</p>
        <p>性别：{sex}</p>
      </div>
    )
  }
}

export default Person
