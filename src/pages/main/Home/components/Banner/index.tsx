import React from 'react'
import classNames from 'classnames/bind'
import styles from './Banner.module.scss'
import { View } from '@/components/shared'
import Image from '@/assets'
import { motion } from 'framer-motion'


const cx = classNames.bind(styles)

const Banner = () => {
  return (
   <View className={cx('wrapper__banner')}>
   <View className={cx('wrapper__banner__inner')}>
        <View className={cx('wrapper__banner__inner__content')}>
            <View className={cx('wrapper__banner__inner__content__title')}>
            <h1 className={cx('wrapper__banner__inner__content__title__details1')}>Welcom to <span> Hanga</span></h1>
            <p className={cx('wrapper__banner__inner__content__title__details2')}>Web developer & Content Creator</p>

            <motion.button  whileTap={{scale:0.8}} className={cx('wrapper__banner__inner__content__title__button')}>Dịch vụ</motion.button>
            </View>
            <View className={cx('wrapper__banner__inner__content__image')}>
              <View className={cx('wrapper__banner__inner__content__image__frame')}>
                <img className={cx('wrapper__banner__inner__content__image__frame__img1')} src="https://i.pinimg.com/originals/92/01/4e/92014ee9d5b7a5da872631ebf72dc524.gif" alt="" />

                <img className={cx('wrapper__banner__inner__content__image__frame__img2')} src={Image.banner1} alt="" />
              </View>
             
            </View>
        </View>
   </View>

   </View>
  )
}

export default Banner