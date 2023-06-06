import classNames from 'classnames/bind'
import styles from './ItemService.module.scss'
import { View } from '@/components/shared'
import { IService } from '@/types/service'
const cx = classNames.bind(styles)

const ItemService = (data:IService) => {
  return (
    <View className={cx('wrapper__service__inner__item')}>
    <View className={cx('wrapper__service__inner__item__image')}>
        <img src={data.image} alt="" />
    </View>
    <View className={cx('wrapper__service__inner__item__content')}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <a href={data.link}>Link</a>
    </View>
</View>
  )
}

export default ItemService