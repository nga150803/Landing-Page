import React, { FunctionComponent, useEffect } from 'react'
import classNames from 'classnames/bind'

import style from './Global.module.scss'
import { View } from '@/components/shared'
import Footer from './Footer'
import Header from './Header'



const cx = classNames.bind(style)

type GlobalLayoutProps = {
  children: React.ReactNode
}

export const GlobalLayout: FunctionComponent<GlobalLayoutProps> = ({ children }) => {

  return (
    <View className={cx('wrapper__global')}>
      <header>
        <Header />
      </header>
      <main className={cx('wrapper__global__content')}>
  
        {children}
       
        </main>
        <footer>
          <Footer />
        </footer>


    </View>
  )
}