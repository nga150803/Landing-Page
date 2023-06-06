import React from 'react'

import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import classNames from 'classnames/bind'
import styles from './Technogory.module.scss'
import { View } from '@/components/shared'

const cx = classNames.bind(styles)
const spanStyle = {
  padding: '20px',
  background: 'pink',
  color: '#000000',
  borderRadius: '1rem'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '300px',
  borderRadius: '1rem'
}
const slideImages = [
  {
    url: 'https://i.pinimg.com/564x/6f/a9/c3/6fa9c33211ce7c08f2cc4fcef6144b7d.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://i.pinimg.com/564x/b7/9b/87/b79b8778b287d072388f7ac3e2734075.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://i.pinimg.com/originals/b8/4d/71/b84d7101bdeafc175cebb6a282cb6775.gif',
    caption: 'Slide 3'
  }
]
const Technogory = () => {
  return (
    <View
      className={cx('wrapper__technogory')}
      id='technogory'
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* <View className={cx('wrapper__technogory__title')}>
            <h1>Công nghệ sử dụng</h1>
            <p>Chúng tôi cung cấp những dịch vụ website về lĩnh vực giải trí</p>
        </View>
        <View className={cx('wrapper__technogory__content')}>
          <Slide>
          {slideImages.map((slideImage, index)=> (
              <View key={index} className={cx('wrapper__technogory__content__image')}>
                  <img src={slideImage.url} alt="" />
              </View>
            ))} 
          </Slide>
        </View> */}

      <View className={cx('wrapper__technogory__container')}>
          <View className={cx('wrapper__technogory__title')}>
            <h1>Công nghệ sử dụng</h1>
            <p>Chúng tôi cung cấp những dịch vụ website về lĩnh vực giải trí</p>
          </View>
          <View className={cx('wrapper__technogory__content')}>
            <Slide>
              {slideImages.map((slideImage, index) => (
                <View key={index} className={cx('wrapper__technogory__content__image')}>
                  <img src={slideImage.url} alt='' />
                </View>
              ))}
            </Slide>
          </View>
      </View>
    </View>
  )
}

export default Technogory
