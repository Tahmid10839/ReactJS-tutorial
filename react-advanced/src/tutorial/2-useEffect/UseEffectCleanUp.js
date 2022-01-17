import React, { useEffect, useState } from 'react'

const UseEffectCleanUp = () => {

    const [size, setSize] = useState(window.innerWidth)

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        console.log("useEffect");
        window.addEventListener('resize', checkSize)
        return () => {
            console.log("CleanUp");
            window.removeEventListener('resize', checkSize)
        }
    })

    console.log("Render");

    return (
        <>
            <h1>useEffect CleanUp Example</h1>
            <h2>Window</h2>
            <h3>{size} px</h3>
        </>
    )
}

export default UseEffectCleanUp
