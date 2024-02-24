import './Navigation.css'
import { HomeIcon, EducationIcon, FilesInterfaceIcon, ContactMe, DownloadIcon } from '../../assets/Icons';
import { NavLink } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import ToggleContent from '../ToggleContent/ToggleContent';

const Navigation = () => {

  const activeLinkHandle = (link) => {
    return link.isActive ? 'navbar-icon link-active' : 'navbar-icon'
  }

  return (
    <nav className="navbar ">
      <div className="navbar-container">

        <div className="nav-1">
          <NavLink to='/' className={link => activeLinkHandle(link)} >
            <HomeIcon />
            <span className="link-label">
              صفحه اصلی
            </span>
          </NavLink>

          <NavLink to='/education' className={link => activeLinkHandle(link)}  >
            <EducationIcon />
            <div className="link-label">
              سوابق تحصیلی
            </div>
          </NavLink>

          <NavLink to='/portfolios' className={link => activeLinkHandle(link)}  >
            <FilesInterfaceIcon />
            <span className="link-label">
              نمونه کارها
            </span>
          </NavLink>

          <NavLink to='/contact-me' className={link => activeLinkHandle(link)}  >
            <ContactMe />
            <span className="link-label">
              تماس بامن
            </span>
          </NavLink>

          <div className="relative hidden md:block">
            <ToggleContent />
          </div>
        </div>

        <div className="nav-2">
          <a href='/amir.cv/AmirMohammadzadeh_cv.pdf' download='Amir-Mohammadzadeh_CV' className='navbar-icon'  >
            <DownloadIcon />
            <span className="link-label">
              دانلود رزومه
            </span>
          </a>
          <ThemeSwitcher className='navbar-icon' />
        </div>

      </div>
    </nav>
  )
}

export default Navigation