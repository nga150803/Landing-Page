import classNames from 'classnames/bind'
import styles from './ItemLanguage.module.scss'
import { View } from '@/components/shared'

export interface ItemLangugeProps{
  image:string;
  title:string;
  description:string;
}

const cx = classNames.bind(styles)
const ItemLanguage = (data:ItemLangugeProps) => {
  
  return (
    <View className={cx('wrapper__item--language')}>
        <View className={cx('wrapper__item--language__image')}>
            <img src={data.image} alt={data.title} />
            
        </View>
        <View className={cx('wrapper__item--language__content')}>

          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </View>
    </View>
  )
}

export default ItemLanguage