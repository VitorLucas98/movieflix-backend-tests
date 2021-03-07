import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { logout, isAuthenticated as auth } from '../../utils/auth';
import './styles.css';

const Navbar = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const location = useLocation();

    useEffect(() =>{
        setIsAuthenticated(auth());
    }, [location])

    const handleSair = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    return (
        <nav className="main-nav">
            <a href="/" className='nav-title'>
                MovieFlix
                </a>
            {isAuthenticated && (
                <a href="/" onClick={handleSair}>
                    <div className='logout-btn'>
                        SAIR
                    </div>
                </a>
            )}
        </nav>
    );
}

export default Navbar;