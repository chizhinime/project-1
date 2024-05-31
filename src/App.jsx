import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Portfolio from './components/Portfolio';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const App = () => {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'blog':
        return <Blog />;
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'signin':
        return <SignIn setUser={setUser} />;
      case 'signup':
        return <SignUp />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar setPage={setPage} user={user} setUser={setUser} />
      {renderPage()}
    </div>
  );
};

export default App;
