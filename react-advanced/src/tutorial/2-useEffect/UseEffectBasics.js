import React, { useState, useEffect } from 'react'

const UseEffectBasics = () => {

    const [value, setValue] = useState(0)

    useEffect(() => {
        console.log("Call useEffect");
        if (value > 0) {
            document.title = `New Message (${value})`
        }
    }, [value])

    useEffect(() => {
        console.log("Hello World");
    }, [])

    console.log("Render Component");

    return (
        <>
            <h2>useEffect Basics Example</h2>
            <h1>{value}</h1>
            <button className="btn" onClick={() => setValue(value + 1)}>Click Me</button>
        </>
    )
}

export default UseEffectBasics
