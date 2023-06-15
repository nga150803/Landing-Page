
import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { routes } from "./config"
import classNames from 'classnames/bind'
import styles from './App.module.scss'
import Loading from "./components/shared/Loading"
const cx = classNames.bind(styles)
function App() {

  return (
    <div className={cx('App')}>

      <React.Suspense fallback={<Loading/>}>

        <BrowserRouter>
        <Routes>

          {
            routes.map((route)=>{
              const Page = route.component
              const Layout = route.layout || React.Fragment
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              )
            })
          }
        </Routes>
        </BrowserRouter>
      </React.Suspense>
    </div>
  )
}

export default App
