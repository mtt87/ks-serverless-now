import React from 'react';
import Link from 'next/link'
import Layout from '../components/Layout';

const HomePage = () => (
  <Layout>
    <div>
      <div style={{ fontSize: 21, marginBottom: 10 }}>
        <Link href="/demo/users">
          <a href="/demo/users">Users</a>
        </Link>
      </div>
      <div style={{ fontSize: 21, marginBottom: 10 }}>
        <Link href="/demo/posts">
          <a href="/demo/posts">Posts</a>
        </Link>
      </div>
    </div>
  </Layout>
);

export default HomePage;
