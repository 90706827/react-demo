import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.tsx'
import ReactLife from './hook/react/ReactLife.tsx'
import Loading from './hook/react/Loading.tsx'
import Updating from './hook/react/Updating.tsx'
import UpdateDemo from './hook/react/UpdateDemo.tsx'
import Paused from './hook/react/Paused.tsx'
import TodoList from './demos/todolist/TodoList.tsx'
import AxiosList from './axios/AxiosList.tsx'
import SearchDemo from './axios/search/SearchDemo.tsx'
import PubSubSearch from './pubsub/pubsubjs/search/PubSubSearch.tsx'
import Router1 from './router/demo1/Router1.tsx'
import { BrowserRouter,HashRouter } from 'react-router-dom'
import Count from './redux/calculator/Count.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ReactLife count={0} name={''} /> */}
    {/* <Loading name="张三"/> */}
    {/* <Updating name="李四"/> */}
    {/* <UpdateDemo/> */}
    {/* <Paused/> */}
    {/* <TodoList/> */}
    {/* <AxiosList/> */}
    {/* <SearchDemo /> */}
    {/* <PubSubSearch /> */}
    {/* <BrowserRouter> <Router1 /></BrowserRouter> */}
    {/* <HashRouter> <Router1 /></HashRouter> */}
    <Count/>
    {/* <App /> */}
  </StrictMode>,
)
