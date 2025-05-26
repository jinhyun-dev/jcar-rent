import React from 'react'
import Header from './common/header'
import { Outlet } from 'react-router-dom'
import Progress from './common/progressbar'
import Footer from './common/footer'

const UserFeature = () => {
  return (
    <div className={`main-wrapper`}>
        <Header />
        <Outlet />
        <Progress />
        <Footer />
        </div>
  )
}

export default UserFeature