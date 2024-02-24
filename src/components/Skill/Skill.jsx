import Widget from '../Widget/Widget'
import Stars from '../Stars/Stars'
import useData from '../../Hooks/useData'

const Skill = () => {
    const SKillS = useData.getSkills()
    return (
        <Widget className="order-3 w-full row-span-3 xl:order-4 xl:row-auto xl:col-span-full md:col-auto">
            <h3 className='text-center text-2xl font-semibold'>
                مهارت ها
            </h3>
            <div className="py-4">
                <ul>
                    {SKillS.map(skill =>
                        <li key={skill.id} className="flex justify-between flex-row-reverse items-center text-xl my-4 leading-9 duration-300 hover:bg-gray-300 dark:hover:bg-slate-600">
                            <span>
                                {skill.skill}
                            </span>
                            
                            <Stars value={skill.value} />
                            
                        </li>
                    )}
                </ul>
            </div>
        </Widget>
    )
}

export default Skill