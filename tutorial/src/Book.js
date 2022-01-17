const Book = ({ img, title, author, children }) => {
    // const { img, title, author } = book

    const handleClick = (e) => {
        console.log(e);
        console.log(e.target);
        alert(`Hello World : ${title}`)
    }

    const complexExample = (author) => {
        console.log(author);
    }

    return <article className='book' onMouseOver={() => console.log(title)}>
        <img src={img} alt="" />
        <h1 onClick={() => console.log(title)}>{title}</h1>
        <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>{author?.toUpperCase()}</h4>
        {children}
        <button type='button' onClick={handleClick}>Reference Example</button>
        <button type='button' onClick={() => complexExample(author)}>More Complex Example</button>
    </article>
}

export default Book