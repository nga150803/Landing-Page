import { View } from '@/components/shared'
import React, {useEffect} from 'react'
import classNames from 'classnames/bind'
import styles from './Service.module.scss'
import axios from 'axios'
import { IService } from '@/types/service'
import ItemService from './itemService'


const cx = classNames.bind(styles)

const Service = () => {
    const [service, setService] = React.useState<IService[]>([])
    useEffect(()=>{
        axios.get(`https://647c4d15c0bae2880ad08b60.mockapi.io/Service`).then((res)=>{
        setService(res.data)
        console.log(res.data)
    })
        
    },[])
    
  return (
    <View className={cx('wrapper__service')} id='service'>
        <View className={cx('wrapper__service__inner')}>
          
            {service?.map((item:IService)=>(
                <ItemService  key={item.id} {...item}/>
            ))}

        </View>
    </View>
  )
}

export default Service