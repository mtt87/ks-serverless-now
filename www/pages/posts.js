import React, { Component } from 'react';
import Layout from '../components/Layout';
import 'isomorphic-unfetch';
import { format, parseISO } from 'date-fns';

const isProduction = process.env.NODE_ENV === 'production';

let BASE_URL = isProduction ? 'https://ks-serverless-now.mattiaasti.now.sh' : 'http://localhost:3000'

class PostsPage extends Component {
  static async getInitialProps ({ res }) {
    const resPosts = await fetch(`${BASE_URL}/api/posts`);
    const json = await resPosts.json();
    if (res) {
      res.setHeader("Cache-Control", "s-maxage=20, stale-while-revalidate");
    }
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
              <br /><small>{format(parseISO(post.createdAt), 'HH:mm:ss')}</small>
              <br/><span>{post.body}</span>
            </div>
          ))}
        </div>
      </Layout>
    );
  }
}

export default PostsPage;
