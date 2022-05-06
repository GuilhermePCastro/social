import React from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../auth';
import  NewPost  from '../components/post/newpost';

export default function Navbar(){
    const { currentUser } = React.useContext(UserContext)
    const [isNewPost, setIsNewPost] = React.useState(false);

    return (
        <nav className='navbar fixed-top navbar-light bg-light'>
            <div className="container">
                <Link to='/' className='navbar-brand'>Senacgram</Link>
                <ul className='navbar-nav me-auto'>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/explorer">Explorar</Link>
                    </li>
                </ul>
                { currentUser &&
                    <ul className='navbar-nav ms-auto flex-row'>    
                    <li className='nav-item '>
                        <Link className='nav-link' to="/perfil">{currentUser.name}</Link>
                    </li>

                </ul>
                }
                
            </div>
        </nav>);
}