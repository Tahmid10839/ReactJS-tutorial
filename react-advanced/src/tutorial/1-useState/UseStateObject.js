import React, { useState } from 'react'

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'Peter',
        age: 24,
        message: 'Random Message'
    })

    const changeMessage = () => {
        setPerson({ ...person, message: "Hello World" })
    }

    return (
        <>
            <h1>
                UseState Object Example
            </h1>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button className='btn' onClick={changeMessage}>Change Message</button>
        </>
    )
}

export default UseStateObject
