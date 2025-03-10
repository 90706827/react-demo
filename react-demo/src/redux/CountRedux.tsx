import { Button, Select } from 'antd'
import { increment, decrement } from './CountReducer'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './Store'
import { useState } from 'react'


export const Count: React.FC = () => {
  const selector = useSelector((state: RootState) => state.count)
  const dispath = useDispatch()
  const [selectedValue, setSelectedValue] = useState<number>(1)

  return (
    <div>
      <h1>当前求和为:{selector.count}</h1>
      <Select
        defaultValue={1}
        onChange={(value) => {
          console.log(value)
          setSelectedValue(value)
        }}
        style={{ width: 100 }}
        options={[
          { value: 1, label: '1' },
          { value: 2, label: '2' },
          { value: 3, label: '3' },
          { value: 4, label: '4', disabled: true },
        ]}
      />
      <Button onClick={() => dispath(increment(selectedValue))}>+</Button>
      <Button onClick={() => dispath(decrement(selectedValue))}>-</Button>
      {/* <Button onClick={() => incrementIfAdd}>求和奇数再加</Button>
      <Button onClick={() => incrementAsync}>异步加</Button> */}
    </div>
  )
}

export default Count
