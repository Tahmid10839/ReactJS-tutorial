import React, { useEffect, useReducer, useState } from 'react'
import Modal from './Modal'
import { data } from '../../data'
import { reducer } from './reducer'

const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: ''
}

const Index = () => {
    const [name, setName] = useState('')
    const [state, dispatch] = useReducer(reducer, defaultState)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name) {
            const newItem = { id: new Date().getTime().toString(), name }
            dispatch({ type: 'ADD_PEOPLE', payload: newItem })
            setName('')
        } else {
            dispatch({ type: 'EMPTY' })
        }
    }

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' })
    }

    return (
        <>
            <h2>useReducer Example</h2>
            {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal} />}
            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <button type='submit'>Add</button>
            </form>
            {state.people.map((person) => {
                return <div key={person.id} className='item'>
                    <h4>{person.name}</h4>
                    <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: person.id })}>Remove</button>
                </div>
            })}
        </>
    )
}

export default Index
