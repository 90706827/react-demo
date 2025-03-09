import { Link, Outlet, useNavigate } from 'react-router-dom'
import NavigateButton from './NavigateButton'
import { Button, Divider } from 'antd'
import { StepForwardOutlined } from '@ant-design/icons'

const HomeMessage = () => {
  const navigate = useNavigate()
  const replaceShow = (id: number, title: string) => {
    navigate('/home/message/details', { state: { id, title }, replace: true })
  }

  const pushShow = (id: number, title: string) => {
    navigate('/home/message/details', { state: { id, title } })
  }

  const pathShow = (id: number, title: string) => {
    navigate(`/home/message/detail/${id}/${title}`)
  }

  const dengShow = (id: number, title: string) => {
    navigate(`/home/news/detail?id=${id}&title=${title}`, {})
  }

  return (
    <div>
      <ul>
        <li>
          <Link to={`/home/message/detail/${1}/${"消息1"}`}>消息1</Link>
          <Button type='primary' onClick={() => pushShow(2, "消息2")}>push查看</Button>
          <Button type='primary' onClick={() => replaceShow(1, "消息1")}>replace查看</Button>
        </li>
        <li><Link to={`/home/message/detail/${2}/${"消息2"}`}>消息2</Link>
          <Button type='primary' onClick={() => pathShow(2, "消息2")}>查看消息</Button>
          <Button type='primary' onClick={() => dengShow(1, "新闻3")}>查看新闻</Button>
        </li>
      </ul>
      <hr />
      <Divider/>
      <Outlet />
      <NavigateButton />
    </div>
  )
}

export default HomeMessage
