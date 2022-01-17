import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { books } from './books'
import Book from './Book'
import { greeting } from './testing/testing'

function BookList() {
    console.log(greeting);
    return <section className='bookList'>
        {books.map((book) => {
            return <Book key={book.id} {...book}>
                <p>
                    Sea accusam clita et diam sadipscing. Takimata dolore sadipscing rebum est et voluptua at sit magna. Erat dolores gubergren invidunt.
                </p>
            </Book>
        })}
    </section>
}

ReactDOM.render(
    <BookList />,
    document.getElementById('root')
)