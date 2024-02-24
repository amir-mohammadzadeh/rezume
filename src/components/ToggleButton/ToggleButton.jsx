import React from 'react'
import './ToggleButton.css'

const ToggleButton = ({onClick}) => {
    const onChangeHandler = (event) => {
        onClick()
    }
    return (
        <>
            <input type="checkbox" id="Toggle-Button" onChange={onChangeHandler} />
            <label htmlFor='Toggle-Button' className="Toggle-Label">
                <span className="line l1"></span>
                <span className="line l2"></span>
                <span className="line l3"></span>
            </label>
        </>
    )
}

export default ToggleButton