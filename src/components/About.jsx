import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Me</h1>
      </header>
      <section className="about-content">
        <div className="about-section">
        <h2>About Me</h2>
          <p>
            Hi, I'm <strong>Chizhinime</strong>, the author of this blog. With a passion for writing and sharing knowledge,
            I created this platform to connect with readers and share insights on various topics.
          </p>
        </div>
        <div className="about-section">
          <h2>Background</h2>
          <p>
            I have a background in <strong>Writing Essay</strong>, with years of experience in <strong>Typing</strong>.
            This blog is a reflection of my journey, experiences, and the lessons I've learned along the way.
          </p>
        </div>
        <div className="about-section">
          <h2>Mission</h2>
          <p>
            My mission is to provide valuable content that inspires, educates, and entertains. I aim to create a community
            where readers can find relatable stories, insightful articles, and practical advice.
          </p>
        </div>
        <div className="about-section">
          <h2>Contact</h2>
          <p>
            If you'd like to get in touch, feel free to reach out via email at <a href="chizhimchijioke@gmail.com">chizhimchijioke@gmail.com</a>
            or connect with me on social media.
          </p>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon twitter">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">LinkedIn</a>
            <a href="https://github.com/chizhinime" target="_blank" rel="noopener noreferrer" className="social-icon github">GitHub</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
