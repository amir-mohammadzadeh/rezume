import './ToggleContent.css'
import { useState } from 'react'
import { DownloadIcon } from '../../assets/Icons'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import ToggelButton from '../ToggleButton/ToggleButton'

const ToggleContent = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <ToggelButton onClick={() => setOpen(!open)} />
            {open &&
                <div className='toggle_container'>

                    <a href='/amir.cv/AmirMohammadzadeh_cv.pdf' download='Amir-Mohammadzadeh_CV' className='toggle-icon'>
                        <DownloadIcon />
                    </a>

                    <ThemeSwitcher className='toggle-icon' />

                </div>
            }
        </>
    )
}

export default ToggleContent