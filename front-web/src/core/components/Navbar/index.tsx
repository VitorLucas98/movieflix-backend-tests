import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { logout, isAuthenticated as auth } from '../../utils/auth';
import './styles.css';

const Navbar = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsAuthenticated(auth());
    }, [location])

    const handleSair = () => {
        logout();
    }

    return (
        <nav className="main-nav">
            <a href="/" className='nav-title' onClick={handleSair}>
                MovieFlix
                </a>
            {isAuthenticated && (
                <button className='logout-btn' onClick={handleSair}>
                    <h5 className='logout-btn-title'>SAIR</h5>
                </button>
            )}
        </nav>
    );
}

export default Navbar;