import React, { useState } from 'react'
import { data } from '../../data'

const PropDrilling = () => {
    const [people, setPeople] = useState(data)
    const removePerson = (id) => {
        setPeople((people) => {
            return (people.filter((person) => person.id !== id))
        })
    }
    if (people.length === 0) {
        return <h2>No Items</h2>
    }
    return (
        <>

            <h2>Prop Drilling Example</h2>

            <section>
                <List people={people} removePerson={removePerson} />
            </section>
        </>
    )
}

const List = ({ people, removePerson }) => {
    return <>
        {people.map((person) => {
            return <SinglePerson key={person.id} {...person} removePerson={removePerson} />
        })}
    </>
}

const SinglePerson = ({ id, name, removePerson }) => {
    return <div className='item'>
        <h4>{name}</h4>
        <button onClick={() => removePerson(id)}>Remove</button>
    </div>
}

export default PropDrilling
