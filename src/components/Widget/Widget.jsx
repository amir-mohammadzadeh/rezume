
const Widget = ({className='' , children}) => {

    const styles = 'bg-gray-200 dark:bg-slate-700 dark:text-slate-50 rounded-2xl p-4 duration-200' ;
  return (
    <div className={[styles,className].join(' ') }>
        {children}
    </div>
  )
}

export default Widget