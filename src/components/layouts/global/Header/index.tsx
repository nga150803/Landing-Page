import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { View } from '@/components/shared'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)
const menuVariants ={
  visiable:{x:0},
  mobile:{
    x:100
  },
  website:{
    x:0
  }
}
const Header = () => {



const [ isShowMenu, setIsShowMenu] = useState(true)
const [isMobileMotionActive, setIsMobileMotionActive] = React.useState(false)
// const [headerActive, setHeaderActive] = useState(false)



useEffect(() => {
  if(window.innerWidth < 768){
    setIsShowMenu(false);
    setIsMobileMotionActive(true);


  }

},[])

  return (
    <View className={cx('wrapper__header')}>
      <View className={cx('wrapper__header__inner')}>
        <View className={cx('wrapper__header__inner__logo')}>HaNga</View>
        <View className={cx('wrapper__header__inner__dropdow')}>
          <FontAwesomeIcon  className={cx('wrapper__header__inner__dropdow__icon')} icon={faBars}  onClick={()=> setIsShowMenu(!isShowMenu)}/>
        </View>
        
        {isShowMenu &&(
          <motion.nav className={cx('wrapper__header__inner__nav')}
          variants={menuVariants}
          initial={isMobileMotionActive ? 'mobile' : 'website'}
          animate='visiable'
          transition={{duration:0.5}}

          >
          <a className={cx('wrapper__header__inner__nav__link')} href='#about'>Giới thiệu</a>
          <a className={cx('wrapper__header__inner__nav__link')} href='#service'>Dịch vụ</a>
          <a className={cx('wrapper__header__inner__nav__link')} href='#blog'>Blog</a>
          <a className={cx('wrapper__header__inner__nav__link')} href="#technogory">Công nghệ</a>
          <a className={cx('wrapper__header__inner__nav__link')} href='#footer'>Liên kết</a>
        </motion.nav>
        )}
      </View>
    </View>
  )
}

export default Header
