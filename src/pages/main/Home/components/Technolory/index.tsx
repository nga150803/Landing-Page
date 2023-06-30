
import 'react-slideshow-image/dist/styles.css'
import classNames from 'classnames/bind'
import styles from './Technogory.module.scss'
import { View } from '@/components/shared'
import { Example } from '@/motion/Example'
const cx = classNames.bind(styles)



const Technogory = () => {

  
  return (
    <View
      className={cx('wrapper__technogory')}
      id='technogory'
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
    

      <View className={cx('wrapper__technogory__container')}>
          <View className={cx('wrapper__technogory__container__title')}>
            <h1>Công nghệ sử dụng</h1>
            <p>Chúng tôi cung cấp những dịch vụ website về lĩnh vực giải trí</p>
          </View>
         
          <View className={cx('wrapper__technogory__container__context')}>
              <View className={cx('wrapper__technogory__container__context__img')}>
                <Example/>
              </View>
          </View>
      </View>
    </View>
  )
}

export default Technogory
