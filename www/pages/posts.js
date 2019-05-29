import React, { Component } from 'react';
import Layout from '../components/Layout';
import 'isomorphic-unfetch';

class PostsPage extends Component {
  static async getInitialProps () {
    const res = await fetch('http://localhost:3000/api/posts')
    const json = await res.json()
    return { posts: json };
  }

  render() {
    const { posts = [] } = this.props;
    return (
      <Layout>
        <div>
          <h2>Posts:</h2>
          <pre>GET /api/posts</pre>
          {posts.map((post) => (
            <div style={{ border: '1px solid #ddd', padding: '12px 18px', marginBottom: 5 }}>
              <strong>{post.title}</strong>
              <br/><span>{post.body}</span>
            </div>
          ))}
        </div>
      </Layout>
    );
  }
}

export default PostsPage;
