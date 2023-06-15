
import classNames from "classnames/bind"
import style from './Loading.module.scss'
const cx = classNames.bind(style)
const Loading = () => {
  return (
    <div className={cx('wrapper__loading')}>
        <h1>Loading...</h1>
    </div>
  )
}

export default Loading