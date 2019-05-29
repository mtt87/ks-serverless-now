import React from 'react';
import Link from 'next/link'
import Layout from '../components/Layout';

const HomePage = () => (
  <Layout>
    <div>
      <div style={{ fontSize: 21, marginBottom: 10 }}>
        <Link href="/users">
          <a href="/users">Users</a>
        </Link>
      </div>
      <div style={{ fontSize: 21, marginBottom: 10 }}>
        <Link href="/posts">
          <a href="/posts">Posts</a>
        </Link>
      </div>
    </div>
  </Layout>
);

export default HomePage;
