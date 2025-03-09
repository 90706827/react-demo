import { useState } from 'react';
import { list } from './Data';

export default function MyUseState() {
  const [index, setIndex] = useState<number>(0);
  function handleClick() {
    setIndex(index + 1);
    console.log(index);
  }

  const stu = list[index];
  return (
    <div>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{stu.name} </i>
        by {stu.age}
      </h2>
    </div>
  )
}