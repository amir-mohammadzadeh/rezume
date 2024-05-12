import './PortfolioCard.css'
import { DiscriptionIcon, SourceCodeIcon } from '../../assets/Icons'
import React, { useState } from 'react'

const PortfolioCard = ({ title, languages, discription, linke, sorscode,image }) => {

    const [openDiscription, setOpenDiscription] = useState(false)
    return (
        <div className="Card_content">
            <div className="Portfolio_image">
                <img src={`/portfolios_image/${image}`} loading='ert' alt="" />
            </div>
            <div className="Portfolio-details">
                <h3>
                    {title}
                </h3>
                <span>
                    {languages.join(' / ')}
                </span>
            </div>
            <div className="Portfolio-Card_Buttons">
                <button className='pc-btn-1 ' onClick={() => setOpenDiscription(true)}>
                    <DiscriptionIcon size='25' className='text-gray-600 dark:text-slate-300' />
                    توضیحات
                </button>
                <a className='pc-btn-2 dark:text-green-400 sm:dark:text-white' href={linke} target='_blank'>
                    نمایش
                </a>
                <a className='pc-btn-3 dark:text-green-100' href={sorscode} target='_blank'>
                    <SourceCodeIcon size='28' />
                    <label> سورس کد </label>
                </a>
            </div>
            {openDiscription &&
                <div className="Dis_content">
                    <p className="Dis_textbox">
                        {discription}
                    </p>
                    <button className='Dis_close' onClick={() => setOpenDiscription(false)}>
                        بازگشت
                    </button>
                </div>
            }

        </div>
    )
}

export default PortfolioCard