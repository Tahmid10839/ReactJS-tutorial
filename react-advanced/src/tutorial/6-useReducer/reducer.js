export const reducer = (state, action) => {
    if (action.type === 'ADD_PEOPLE') {
        const newPeople = [...state.people, action.payload]
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: 'People Added'
        }
    }
    else if (action.type === 'EMPTY') {
        return {
            ...state,
            isModalOpen: true,
            modalContent: 'Please enter value'
        }
    }
    else if (action.type === 'CLOSE_MODAL') {
        return {
            ...state,
            isModalOpen: false
        }
    }
    else if (action.type === 'REMOVE_ITEM') {
        const newPeople = state.people.filter((person) => person.id !== action.payload)
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: 'People Removed Successfully'
        }
    }
    throw new Error('no matching action type')
}