import { GithubIcon, InstagramIcon, LinkedinIcon } from '../../assets/Icons';
import useData from '../../Hooks/useData';

const Social = ({ iconSize }) => {
    const Accounts = useData.getDetailes()
    let li_class = 'text-center cursor-pointer duration-300 dark:text-slate-400 text-gray-600 hover:text-blue-600 hover:dark:text-yellow-300';

    return (
        <ul className='flex justify-center gap-8'>
            <li className={li_class}>
                <a href={Accounts.github} target='_blank'>
                    <GithubIcon size={iconSize} />
                </a>
            </li>
            <li className={li_class}>
                <a href={Accounts.linkedin} target='_blank'>
                    <LinkedinIcon size={iconSize} />
                </a>
            </li>
            <li className={li_class}>
                <a href="https://instagram.com/mr.code_98?utm_medium=copy_link" target='_blank'>
                    <InstagramIcon size={iconSize} />
                </a>
            </li>

        </ul>

    )
}

export default Social