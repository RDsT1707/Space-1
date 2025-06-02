import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'HOME', path: '/', number: '00' },
    { name: 'DESTINATION', path: '/destination', number: '01' },
    { name: 'CREW', path: '/crew', number: '02' },
    { name: 'TECHNOLOGY', path: '/technology', number: '03' },
  ];

  // Empêcher le scroll quand le menu est ouvert (tu gères ça très bien)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      document.body.classList.remove('menu-open');
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY) * -1);
      }
    }
    return () => {
      document.body.classList.remove('menu-open');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

  // Fermer le menu avec la touche Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleOverlayClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="primary-header">
        {/* Logo */}
        <img className="logo" src="/public/img/assets/shared/logo.svg" alt="Logo" />

        {/* Bouton hamburger */}
        <button
          className="mobile-nav-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          type="button"
        >
          <span className="hamburger"></span>
        </button>

        {/* Navigation */}
        <nav>
          <ul
            id="primary-navigation"
            className="primary-navigation underline-indicators"
            data-visible={isMenuOpen ? 'true' : 'false'}
          >
            {navigation.map(({ path, name, number }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={location.pathname === path ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)} // ferme le menu au clic
                >
                  <span>{number}</span>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Overlay pour fermer le menu */}
      {isMenuOpen && (
        <div
          className="nav-overlay active"
          onClick={handleOverlayClick}
          onTouchStart={handleOverlayClick}
        />
      )}
    </>
  );
};

export default Header;
