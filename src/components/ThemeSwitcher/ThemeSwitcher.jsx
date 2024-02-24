import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '../../assets/Icons'

const ThemeSwitcher = ({className}) => {
    
    const isDark = document.documentElement.classList.contains('dark') ? true : false ;
    const [darkTheme, setDarkTheme ] = useState(isDark)

    useEffect(() => {
        darkTheme ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark')
    }, [darkTheme])

    return (
        <div onClick={() => setDarkTheme(p => !p)} className={className}  >
            {darkTheme ? <SunIcon /> : <MoonIcon />}
        </div>
    )
}

export default ThemeSwitcher