import './ContactCard.css'
import Widget from '../Widget/Widget'

const ContactCard = ({icon , value}) => {
    return (
        <Widget className='box-content'>
            <div className='box-label'>
                {icon}
            </div>
            <div className='box-value'>
                {value}
            </div>
        </Widget>
    )
}

export default ContactCard