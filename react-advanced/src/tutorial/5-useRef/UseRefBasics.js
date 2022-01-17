import React, { useEffect, useRef } from 'react'

const UseRefBasics = () => {

    const refContainer = useRef(null)
    const divContainer = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(refContainer.current.value);
        console.log(divContainer.current);
    }

    useEffect(() => {
        console.log(refContainer.current.value);
        refContainer.current.focus()
    })

    return (
        <>
            <h2>useRef Basic Example</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={refContainer} />
                    <button type='submit'>Submit</button>
                </div>
            </form>
            <div ref={divContainer}>Hello World</div>
        </>
    )
}

export default UseRefBasics
