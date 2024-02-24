import './Home.css'
import Detailes from '../../components/Detailes/Detailes'
import Aboute from '../../components/Aboute/Aboute'
import Skill from '../../components/Skill/Skill'

const Home = () => {

    return (

        <div dir='rtl' className="Home_container">
            <div className="Image_content">
                <img src="/prof.jpg" alt="Profile Image" />
            </div>
            <Detailes />
            <Skill />
            <Aboute />
        </div>

    )
}

export default Home