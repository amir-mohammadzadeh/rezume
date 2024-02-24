import './Detailes.css'
import Widget from '../Widget/Widget'
import useData from '../../Hooks/useData'

const Detailes = () => {
    const Details = useData.getDetailes()
    return (
        <Widget className="order-2">
            <div className="text-center mb-8 lg:mb-4 flex items-center sm:flex-col sm:gap-4 sm:mb-6">
                <h1 className='basis-1/2 flex-grow text-4xl font-semibold 2xl:text-3xl '>
                    {Details.name}
                </h1>
                <span className='basis-1/2 flex-grow text-xl 2xl:text-xl '>
                    {Details.job}
                </span>
            </div>
            <div className="Detailes">
                <ul className='w-full pe-2 border-l-2 border-red-600 dark:border-yellow-400 '>
                    <li className="item">
                        <span>
                            سن:
                        </span>
                        <span>
                            {Details.age} سال
                        </span>
                    </li>
                    <li className="item">
                        <span>
                            محل سکونت:
                        </span>
                        <span>
                            {Details.address.ostan}
                        </span>
                    </li>
                    <li className="item">
                        <span>
                            وضعیت تأهل:
                        </span>
                        <span>
                            {Details.marride}
                        </span>
                    </li>
                </ul>
                <ul className='w-full'>
                    <li className="item">
                        <span>
                            شماره:
                        </span>
                        <span>
                            {Details.phoneNumber}
                        </span>
                    </li>
                    <li className="item">
                        <span>
                            ایمیل:
                        </span>
                        <span>
                            {Details.email}
                        </span>
                    </li>
                    <li className="item">
                        <span>
                            سربازی:
                        </span>
                        <span>
                            {Details.sarbazi}
                        </span>
                    </li>
                </ul>
            </div>
        </Widget>
    )
}

export default Detailes