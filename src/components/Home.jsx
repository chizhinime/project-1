import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to My Blog</h1>
        <p>Your go-to place for insightful articles and updates.</p>
      </header>
      <section className="home-content">
        <div className="home-section">
          <h2>Latest Posts</h2>
          <p>Stay updated with our latest blog posts, filled with interesting reads and valuable information.</p>
          <button className="home-button">Read More</button>
        </div>
        <div className="home-section">
          <h2>About Me</h2>
          <p>Learn more about the author of this blog and the inspiration behind the posts.</p>
          <button className="home-button">Find Out More</button>
        </div>
        <div className="home-section">
          <h2>Portfolio</h2>
          <p>Check out some of the projects and work samples that showcase my skills and expertise.</p>
          <button className="home-button">View Portfolio</button>
        </div>
      </section>
    </div>
  );
};

export default Home;