import React, { useEffect, useState } from 'react'

const ShowHide = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <h1>Show/Hide Example</h1>
            <button className='btn' onClick={() => setShow(!show)}>Show/Hide</button>
            {show && <Item />}
        </>
    )
}

const Item = () => {
    const [size, setSize] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setSize(window.innerWidth)
        })
        return () => {
            window.removeEventListener('resize', () => {
                setSize(window.innerWidth)
            })
        }
    }, [])

    return (
        <div style={{ marginTop: '2rem' }}>
            <h1>Window</h1>
            <h2>Size : {size} px</h2>
        </div>
    )
}

export default ShowHide
