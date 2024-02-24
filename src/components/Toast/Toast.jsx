import { useState } from 'react';
import style from './Toast.module.css'

const Toast = ({ type }) => {

    let toast_class, icon, text;
    const [animation, setAnimation] = useState('toast-show')

    type == "success" ? (
        toast_class = [style["toast"], style['success-colors'], style[animation]],
        text = 'Message was sent',
        icon = <span className={style["toast-icon"]}>&#10004;</span>
    ) : (
        toast_class = [style["toast"], style['error-colors'], style[animation]],
        text = 'Sorry, an error occurred :(',
        icon = <span className={style["toast-icon"]}>&#10008;</span>
    )

    setTimeout(() => setAnimation('toast-hide'), 5400)

    return (
        <div className={toast_class.join(' ')} >
            {icon}
            <span className={style["toast-text"]}>
                {text}
            </span>
        </div>
    )
}

export default Toast