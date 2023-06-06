import React from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import { View } from '@/components/shared'
import Banner from './components/Banner'
import About from './components/About'
import Service from './components/Service'
import Technogory from './components/Technolory'
import Company from './components/Company'
import Language from './components/Language'



const cx = classNames.bind(styles)
const Home = () => {
  return (
    <View className={cx('wrapper__home')}>
      <Banner />
      <About />
      <Service />
      <Technogory />
      <Language />
      <Company />

    </View>

    
  )
}

export default Home
