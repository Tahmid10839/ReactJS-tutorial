import React, { useState, useContext } from 'react'
import { data } from '../../data'

const PersonContext = React.createContext()

const UseContext = () => {
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
            <PersonContext.Provider value={{ removePerson, people }}>
                <h2>Context API / useContext Example</h2>
                <List />
            </PersonContext.Provider>
        </>
    )
}

const List = () => {
    const mainData = useContext(PersonContext)
    return <>
        {mainData.people.map((person) => {
            return <SinglePerson key={person.id} {...person} />
        })}
    </>
}

const SinglePerson = ({ id, name }) => {
    const { removePerson } = useContext(PersonContext)
    return <div className='item'>
        <h4>{name}</h4>
        <button onClick={() => removePerson(id)}>Remove</button>
    </div>
}

export default UseContext
