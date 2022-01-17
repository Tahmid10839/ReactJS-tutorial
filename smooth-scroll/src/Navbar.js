import React from 'react'
import logo from './logo.svg'
import { links } from './data'

const Navbar = () => {
    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop
        console.log(target);
        console.log(location);
        window.scrollTo({
            left: 0,
            top: location - 64,
        })
    }
    return (
        <nav className='navbar sticky'>
            <div className='nav-center'>
                <img src={logo} alt="Smooth Scroll" />
                <div>
                    {links.map((link) => {
                        const { id, url, text } = link
                        return <a href={url} key={id} onClick={handleClick}>{text}</a>
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
