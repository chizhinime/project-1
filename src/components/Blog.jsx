import React, { useState, useEffect, useRef } from 'react';
import { VariableSizeList as List } from 'react-window';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const listRef = useRef(null);

  useEffect(() => {
    // Fetch the posts from JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const getItemSize = index => {
    // Calculate height based on content length
    const contentLength = posts[index]?.body.length || 0;
    return 100 + Math.min(contentLength, 200);
  };

  const renderRow = ({ index, style }) => {
    const post = posts[index];
    return (
      <div style={{ ...style, ...styles.blogPost }} key={post.id}>
        <h2 style={styles.blogPostTitle}>{post.title}</h2>
        <p style={styles.blogPostContent}>{post.body}</p>
      </div>
    );
  };

  return (
    <div style={styles.blogContainer}>
      <div style={styles.blogHeader}>
        <h1 style={styles.blogHeaderTitle}>Blog</h1>
        <p style={styles.blogHeaderSubtitle}>Welcome to our blog!</p>
      </div>
      <List
        ref={listRef}
        height={500} // Adjust height as needed
        itemCount={posts.length}
        itemSize={getItemSize}
        width={'100%'}
      >
        {renderRow}
      </List>
    </div>
  );
};

// Styles for Blog component
const styles = {
  blogContainer: {
    padding: '2em',
    backgroundColor: '#f9f9f9',
    fontFamily: "'Arial', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  blogHeader: {
    backgroundColor: '#26424b',
    color: 'white',
    padding: '1.5em',
    borderRadius: '8px',
    marginBottom: '2em',
    textAlign: 'center',
    width: '100%',
  },
  blogHeaderTitle: {
    margin: 0,
    fontSize: '2.5em',
    fontWeight: 'bold',
  },
  blogHeaderSubtitle: {
    marginTop: '0.5em',
    fontSize: '1.2em',
    color: '#ddd',
  },
  blogContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  blogPost: {
    backgroundColor: 'white',
    padding: '2em',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '2em',
    width: '80%',
    maxWidth: '800px',
    textAlign: 'left',
    transition: 'transform 0.3s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  blogPostTitle: {
    marginTop: 0,
    fontSize: '1.8em',
    color: '#333',
  },
  blogPostContent: {
    fontSize: '1.1em',
    margin: '1em 0',
    lineHeight: '1.6',
  },
  blogLink: {
    display: 'inline-block',
    padding: '0.5em 1em',
    backgroundColor: '#0073e6',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  },
  blogLinkHover: {
    backgroundColor: '#005bb5',
  },
};

export default Blog;
