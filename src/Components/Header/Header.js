import React from 'react'
import './Header.css';
// import {Link} from 'react-router-dom'

export default class Header extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className='Header nav-container'>
                <nav>
                    <div className="logo-container">
                        <div className="logo">LOGO</div>
                    </div>
                    <h1 className="logo-title">Shelfie</h1>
                </nav>
            </div>
        )
    }
}