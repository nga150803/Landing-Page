import React from 'react'
import classNames from 'classnames/bind'
import styles from './Company.module.scss'
import { View } from '@/components/shared'
import Image from '@/assets'
import IonIcon from '@reacticons/ionicons'

const cx = classNames.bind(styles)

const Company = () => {
  return (
    <View className={cx('wrapper__company')} id='blog'>
      <View className={cx('wrapper__company__inner')}>
        <View className={cx('wrapper__company__inner__image')}>
          <View className={cx('wrapper__company__inner__image__frame')}>
            
            <img src={Image.company} />
          </View>
        </View>

        <View className={cx('wrapper__company__inner__right')}>

            <View className={cx('wrapper__company__inner__right__title')}>
               <h1>MẠNG XÃ HỘI</h1> 
               <p>Kết nối với chúng tôi thông qua các nền tảng mạng xã hội để được nhận được những hỗ trợ tốt nhất</p>

            </View>
            <View className={cx('wrapper__company__inner__right__logo')}>

                < IonIcon className={cx('wrapper__company__inner__right__logo__ionicon')} name='logo-facebook' />
                < IonIcon className={cx('wrapper__company__inner__right__logo__ionicon')} name='logo-instagram' />
                < IonIcon className={cx('wrapper__company__inner__right__logo__ionicon')} name='logo-youtube' />
                < IonIcon className={cx('wrapper__company__inner__right__logo__ionicon')} name='logo-github' />

            </View>
        </View>
      </View>
    </View>
  )
}

export default Company
