import React, { useState } from 'react'
import { data } from '../../data'

const UseStateArray = () => {
    const [people, setPeople] = useState(data)

    const removeItem = (id) => {
        setPeople(people.filter((person) => person.id !== id))
    }

    return (
        <>
            <h1>UseState Array Example</h1>

            {people.map((person) => {
                const { id, name } = person
                return <div key={id} className='item'>
                    <h4>
                        {name}
                    </h4>
                    <button onClick={() => removeItem(id)}>Remove</button>
                </div>
            })}
            <button className="btn" onClick={() => setPeople([])}>Clear Items</button>
        </>
    )
}

export default UseStateArray
