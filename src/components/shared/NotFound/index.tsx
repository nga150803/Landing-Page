import classNames from "classnames/bind"
import styles from './NotFound.module.scss'
import { View } from ".."
import Image from "@/assets"


const cx = classNames.bind(styles)
const NotFound = () => {
  return (
    <View className={cx('wrapper__notfound')}>
      <View className={cx('wrapper__notfound__content')}>
        <View className={cx('wrapper__notfound__content__img')}>
          <img src={Image.error} alt="lỗi" />

        </View>
      <h1>404</h1>
      </View>
      
    </View>
  )
}

export default NotFound
