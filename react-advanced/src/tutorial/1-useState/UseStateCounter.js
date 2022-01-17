import React, { useState } from 'react'

const UseStateCounter = () => {
    const [value, setValue] = useState(0)
    const [complexValue, setComplexValue] = useState(0)

    const counter = (name) => {
        if (name === 'increase') {
            setValue(value + 1)
        } else if (name === 'decrease') {
            setValue(value > 0 ? value - 1 : 0)
        } else {
            setValue(0)
        }
    }

    const complexCounter = () => {
        setTimeout(() => {
            setComplexValue((prevState) => {
                return prevState + 1
            })
        }, 2000)
    }

    return (
        <>
            <section style={{ margin: '4rem 0' }}>
                <h2>Regular Counter</h2>
                <h1>{value}</h1>
                <button className="btn" onClick={() => counter('decrease')}>Decrease</button>
                <button className="btn" onClick={() => counter('reset')}>Reset</button>
                <button className="btn" onClick={() => counter('increase')}>Increase</button>
            </section>
            <section style={{ margin: '4rem 0' }}>
                <h2>More Complex Counter</h2>
                <h1>{complexValue}</h1>
                <button className="btn" onClick={complexCounter}>Increase Later</button>
            </section>
        </>
    )
}

export default UseStateCounter
