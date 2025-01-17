import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './routes/home/HomePage'
import Stats from './routes/stats/Stats'
import WaitingRoom from './routes/waiting-room/WaitingRoom'
import { OpenWidgetsPage } from './routes/openWidgets/OpenWidgetsPage'
import { DetailsPage } from './routes/details/DetailsPage'
import { LiveStreamPage } from './routes/live/LiveStreamPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='new/' element={<WaitingRoom />} />
      {/* <Route path="new/:domainName" element={<WaitingRoom />} /> */}
      <Route path='home/' element={<OpenWidgetsPage />} />
      <Route path='stats/' element={<Stats />} />
      <Route path='details/' element={<DetailsPage />} />
      <Route path='live/' element={<LiveStreamPage />} />
      <Route path='*' element={<HomePage />} />
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  )
}

export default AppRoutes
