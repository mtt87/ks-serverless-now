import React from 'react';
import Layout from '../components/Layout';

const HomePage = () => (
  <Layout>
    <div>
      <div>
        <a href="/users">User list</a>
      </div>
      <div>
        <a href="/posts">Post list</a>
      </div>
    </div>
  </Layout>
);

export default HomePage;
