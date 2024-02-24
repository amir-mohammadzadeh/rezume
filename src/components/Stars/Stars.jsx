import { useEffect, useState } from 'react'
import { StarIcon } from '../../assets/Icons'

const Stars = ({ value = 1.5 }) => {

    const [starList, setStarList] = useState([])
    useEffect(() => {
        let v = []
        for (let i = 1; i <= 4; i++) {
            i <= value ? v.push('Fill') : v.push('Empty')
        }
        !Number.isInteger(value) && (v[Math.floor(value)] = 'Half');
        setStarList(v)
    }, [])

    return (
        <div className='flex gap-2 flex-row-reverse dark:text-slate-400 text-gray-500'>
            {starList.map((s, i) =>
                <StarIcon key={i} fill={s}
                    className={`w-7 h-7 xl:w-9 xl:h-9 sm:w-5 sm:h-5 ${s != 'Empty' && 'dark:text-yellow-400 text-orange-600'}`} />)
            }
        </div>
    )
}

export default Stars