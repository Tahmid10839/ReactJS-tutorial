import React from 'react'

const ErrorExample = () => {
    const title = "Random Title"
    const handleClick = () => {
        console.log('Button Clicked');
    }
    return (
        <>
            <h2>{title}</h2>
            <button type='button' className='btn' onClick={handleClick}>Change Title</button>
        </>
    )
}

export default ErrorExample
