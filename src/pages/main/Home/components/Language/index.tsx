import { View } from '@/components/shared'

import classNames from 'classnames/bind'
import styles  from './Language.module.scss'
import ItemLanguage from '@/components/custom/itemLanguage'


const dataLanguage = [
    {
      id: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
      title: 'Typescript',
      description:
        'Ngôn ngữ lập trình được phát triển và duy trì bởi Microsoft. Nó là một tập hợp siêu cú pháp nghiêm ngặt của JavaScript và thêm tính năng kiểu tĩnh tùy chọn vào ngôn ngữ. '
    },
    {
      id: 2,
      image: 'https://images.viblo.asia/1d949589-afdd-4a1e-b77f-c53fdaf8af13.png',
      title: 'ReactJS',
      description:
        'Thư viện JavaScript front-end mã nguồn mở và miễn phí để xây dựng giao diện người dùng dựa trên các thành phần UI riêng lẻ. '
    },{
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_tAnxZwFB01DKELDfeb-lN9ZunGQviQUnhfAWK-8DqURjlHZTNn3R0IvIOgD0IaZ10E&usqp=CAU',
        title: 'Redux Toolkit',
        description:
          'giải quyết phần lớn những vấn đề kể trên, được phát triển bởi chính chủ reduxjs team, giúp chúng ta viết code redux nhanh gọn, hoàn chỉnh theo một quy chuẩn thống nhất.'
      },
      {
        id: 4,
        image: 'https://i.pinimg.com/564x/7b/df/1e/7bdf1e16c7bedec90f0662eb2f9ca764.jpg',
        title: 'Tailwind',
        description:
          'một khung CSS mã nguồn mở. Tính năng chính của thư viện này là, không giống như các khung CSS'
      }
   
  ]
const cx = classNames.bind(styles)
const Language = () => {
  return (
    <View className={cx('wrapper__language')}>
        <View className={cx('wrapper__language__inner')}>
            <View className={cx('wrapper__language__inner__title')}>
            
            </View>

            <View className={cx('wrapper__language__inner__content')}>
                {dataLanguage.map((item)=>(  <ItemLanguage key={item.id} {...item}/>)
          

                )}
           


            </View>
        </View>
        
    </View>
  )
}

export default Language