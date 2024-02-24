import './Input.css'

const Input = ({ label, id }) => {
    return (
        <div className='input-content'>
            <input
                dir='auto'
                name={id}
                id={id + '-input'}
                type="text"
                className='input placeholder:text-right'
                placeholder={label}
                required
            />
            <label htmlFor={id + '-input'} className='label'>{label}</label>
        </div>
    )
}

const TextArea = ({ label, id }) => {
    return (
        <div className='input-content ta-h'>
            <textarea
                dir='auto'
                name={id}
                id={id + '-input'}
                type="text"
                className='textarea placeholder:text-right h-full overflow-y-auto'
                placeholder={label}
                required
            />
            <label htmlFor={id + '-input'} className='label'>{label}</label>

        </div>
    )
}

export { Input, TextArea }