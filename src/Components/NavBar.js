import {useState,memo} from 'react'
import './SCSSs/navbar.scss'
import {Link} from 'react-router-dom'
import home from './staticfiles/home.png'
import unselectedhome from './staticfiles/unselectedhome.png'
import inbox from './staticfiles/inbox.png'
import unselectedinbox from './staticfiles/unselectedinbox.png'
import post from './staticfiles/post.png'
import compass from './staticfiles/compass.png'
import unselectedcompass from './staticfiles/unselectedcompass.png'
import fav from './staticfiles/fav.png'
import unselectedfav from './staticfiles/unselectedfav.png'
import instalogo from './staticfiles/instalogo.png'
function NavBar() {
    const [active, setActive] =useState('home')
    console.log('rerender nav')
    return (
        <div className="navbar">
            <Link to="/newfeed">
                <img id="instalogo" src={instalogo} alt="alt"/>
            </Link>
            
            <input/>
            <div >
            <Link to="/newfeed">
            <img  
            onClick={e=>setActive('home')}
            src={active === 'home' ? unselectedhome : home  } />
            </Link>
            <Link to="/inbox">
            <img  
            onClick={e=>setActive('inbox')}
            src={active === 'inbox' ? unselectedinbox : inbox } />
            </Link>
            <Link to="/newfeed/post">
            <img  
            onClick={e=>setActive('post')}
            src={active === 'post' ? post : post } />
            </Link>
            <Link to="/compass">
            <img  
            onClick={e=>setActive('compass')}
            src={active === 'compass' ? unselectedcompass :compass  } />
            </Link> 
            <Link to="/fav">            
            <img  
            onClick={e=>setActive('fav')}
            src={active === 'fav' ? unselectedfav : fav } />
            </Link>
            </div>
            
        </div>
    )
}

export default memo(NavBar)
