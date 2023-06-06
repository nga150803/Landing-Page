import classNames from 'classnames/bind'
import styles from './About.module.scss'
import { View } from '@/components/shared'

const cx = classNames.bind(styles)
const About = () => {
  return (
    <View className={cx('wrapper__about')} id='about' initial={{opacity:0, y: -50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.5}}
    >
        <View className={cx('wrapper__about__content')}>
            <h1>Giới thiệu</h1>
        <p>Chúng tôi cung cấp những dịch vụ website về lĩnh vực giải trí</p>
        </View>
    </View>
  )
}

export default About