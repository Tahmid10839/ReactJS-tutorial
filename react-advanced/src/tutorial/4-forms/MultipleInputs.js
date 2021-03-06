import React, { useState } from 'react'

const MultipleInputs = () => {
    // const [firstName, setFirstName] = useState('')
    // const [email, setEmail] = useState('')
    // const [age, setAge] = useState('')
    const [person, setPerson] = useState({
        firstName: '',
        email: '',
        age: ''
    })
    const [people, setPeople] = useState([])

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPerson({ ...person, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (person.firstName && person.email && person.age) {
            const newPerson = { ...person, id: new Date().getTime().toString() }
            setPeople([...people, newPerson])
            setPerson({ firstName: '', email: '', age: '' })
        } else {
            console.log("Form can not be empty");
        }
    }

    return (
        <>
            <h2>Multiple Inputs Example</h2>
            <article>
                <form className='form'>
                    <div className="form-control">
                        <label htmlFor="firstName">Name : </label>
                        <input type="text" id='firstName' name='firstName' value={person.firstName} onChange={handleChange} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email : </label>
                        <input type="text" id='email' name='email' value={person.email} onChange={handleChange} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="age">Age : </label>
                        <input type="text" id='age' name='age' value={person.age} onChange={handleChange} />
                    </div>
                    <button type='submit' onClick={handleSubmit}>Add Person</button>
                </form>
                {
                    people.map((person) => {
                        const { id, firstName, email, age } = person
                        return <div key={id} className='item'>
                            <h4>{firstName}</h4>
                            <p>{age}</p>
                            <p>{email}</p>
                        </div>
                    })

                }
            </article>
        </>
    )
}

export default MultipleInputs
