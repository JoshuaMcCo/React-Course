import React from 'react'
import { ThemeConsumer } from '../contexts/theme'
import { NavLink } from 'react-router-dom'

const activeStyle = {
    color: 'rgb(187, 46, 31)'
}

export default function Nav () {
    return (
        <ThemeConsumer>
            {({ theme, toggleTheme }) => (
                <nav className='row space-between'>
                    <ul className='row nav'>
                        <li>
                            <NavLink 
                            to='/'
                            exact 
                            activeStyle={activeStyle}
                            className='nav-link'>
                                Popular
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to='/battle'
                            activeStyle={activeStyle} 
                            className='nav-link'>
                                Battle
                            </NavLink>
                        </li>
                    </ul>
                    <button
                        style={{ fontSize: 30}}
                        className='btn-clear'
                        onClick={toggleTheme}
                    >
                        {theme === 'light' ? '🔦' : '💡'}
                    </button>
                </nav>
            )} 
        </ThemeConsumer>
    ) //this function will take in whatever we passed to theme providers value prop
}
// what this funcitonal component needs is, what the current theme is, and the abil
//to toggle the theme. and regardless of where we render this compoenent in the tree,
//we need it to always have those 2 peices of information