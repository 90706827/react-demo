import { Component } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import '../../css/bootstrap.css'
import MyNavLink from '../components/MyNavLink'
import About from './About'
import AboutA from './about/AboutA'
import AboutB from './about/AboutB'
import Header from './Header'
import Home from './Home'
import HomeMessage from './news/HomeMessage'
import HomeNews from './news/HomeNews'
import MessageDetail from './news/MessageDetail'
import NewDetail from './news/NewDetail'
import './router.css'
import NewDetails from './news/NewDetails'
import MessageDetails from './news/MessageDetails'

export default class Router1 extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavLink to="home" children="Home" />
              <MyNavLink to="/about" children="About" />
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body" style={{ height: '600px', overflow: 'auto' }}>
                <Routes>
                  <Route path='/' element={<Navigate to="/home" />} />
                  <Route path='/home' element={<Home />} >
                    <Route path='/home/' element={<Navigate to="/home/news" />} />
                    <Route path='/home/news' element={<HomeNews />} >
                      <Route path='/home/news/detail' element={<NewDetail />} />
                      <Route path='/home/news/details' element={<NewDetails />} />
                    </Route>
                    <Route path='/home/message' element={<HomeMessage />} >
                      <Route path='/home/message/detail/:id/:title' element={<MessageDetail />} />
                      <Route path='/home/message/details' element={<MessageDetails />} />
                    </Route>
                  </Route>
                  <Route path='/about' element={<About />} >
                    <Route path='/about/' element={<Navigate to="/about/b" />} />
                    <Route path='/about/a' element={<AboutA />} />
                    <Route path='/about/b' element={<AboutB />} />
                  </Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
