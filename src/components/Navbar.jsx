import React from 'react';

const Navbar = ({ setPage, user, setUser }) => {
  const handleSignOut = () => {
    setUser(null);
    setPage('home');
  };

  return (
    <nav>
      <ul>
        <li onClick={() => setPage('home')}>Home</li>
        <li onClick={() => setPage('blog')}>Blog</li>
        <li onClick={() => setPage('about')}>About</li>
        <li onClick={() => setPage('portfolio')}>Portfolio</li>
        {user ? (
          <li onClick={handleSignOut}>Sign Out</li>
        ) : (
          <>
            <li onClick={() => setPage('signin')}>Sign In</li>
            <li onClick={() => setPage('signup')}>Sign Up</li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
