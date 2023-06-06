import { View } from '@/components/shared'
import React from 'react'
import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceAngry } from '@fortawesome/free-solid-svg-icons'

const cx= classNames.bind(styles)
const Footer = () => {
  return (
    <div>
      <View className={cx('wrapper__footer')} id='footer'>
      

          <View className={cx('wrapper__footer__inner')}>
             <View className={cx('wrapper__footer__inner__title')}>
             <h2>Theo dõi chúng tôi</h2>
              <hr />

             </View>
             <View className={cx('wrapper__footer__inner__content')}>
                  <View className={cx('wrapper__footer__inner__content__item')}>
                      <h3>Giới thiệu</h3>
                      <p>Công ty</p>
                      <p>Trần Thị Nga</p>
                      <p>Phong cách thiết kế</p>
                      <p>Blog</p>
                  </View>
                  <View className={cx('wrapper__footer__inner__content__item')}>
                  <h3>Dịch vụ</h3>
                      <p>Thiết kế website</p>
                      <p>Thiết kế giao diện người dùng</p>
                      <p>Lập trình website</p>
                  </View>
                  <View className={cx('wrapper__footer__inner__content__item')}>
                  <h3>Cửa hàng</h3>
                    <p>Hanga Web developer & Content Creator</p>
                      
                  </View>
                  <View className={cx('wrapper__footer__inner__content__item')}>
                  <h3>Liên hệ</h3>
                  <p>Email: Ttnga1508@gmail.com</p>

                      <p>Trần Xuân Soạn, Quận 7, TP.HCM</p>
                     
                  </View>

             </View>
    



          </View>
      </View>
      
    </div>
  )
}

export default Footer
