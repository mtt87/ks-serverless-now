import React from 'react';
import Layout from '../components/Layout';

const PostsPage = () => (
  <Layout>
    <div>
      <div>
        <a href="/deck">Look at my slides</a>
      </div>
      <div>
        <a href="/users">User list</a>
      </div>
      <div>
        <a href="/posts">Post list</a>
      </div>
    </div>
  </Layout>
);

export default PostsPage;
