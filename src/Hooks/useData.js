import Data from '../../public/Data.json'

class useData {
  
    getDetailes(){
        return Data.detailes
    }
    getSkills(){
        return Data.skills
    }
    getPortfolio(){
        return Data.portfolios
    }
    getRecords(){
        return Data.records
    }
    getIntroduction(){
        return Data.aboutMe
    }
}

export default new useData()