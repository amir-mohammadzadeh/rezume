
const Degree = ({ degree, field, uniName, years }) => {
    return (
        <>
            <h5 className='text-2xl font-semibold dark:text-sky-200 md:text-xl'>
                {degree}
            </h5>
            <div className='text-rose-900 font-medium dark:text-yellow-300 my-2'>
                {field}
            </div>
            <section className='flex sm:flex-col sm:gap-2'>
                {uniName}
                <span className='ms-4 ps-4 border-r-2 border-red-600 dark:border-yellow-600 sm:m-0 sm:p-0 sm:border-r-0'>
                    {years}
                </span>
            </section>
        </>
    )
}

export default Degree