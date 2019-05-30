import React, { Component } from 'react';
import Layout from '../components/Layout';
import 'isomorphic-unfetch';

const isProduction = process.env.NODE_ENV === 'production';

let BASE_URL = isProduction ? 'https://ks-serverless-now.mattiaasti.now.sh' : 'http://localhost:3000'

class UsersPage extends Component {
  static async getInitialProps () {
    const res = await fetch(`${BASE_URL}/api/users`)
    const json = await res.json()
    return { users: json };
  }

  render() {
    const { users = [] } = this.props;
    return (
      <Layout>
        <div>
          <h2>Users:</h2>
          <pre>GET /api/users</pre>
          {users.map((user) => (
            <div style={{ border: '1px solid #ddd', padding: '12px 18px', marginBottom: 5 }}>
              <strong>{user.name}</strong>
              <br/><span>{user.email}</span>
            </div>
          ))}
        </div>
      </Layout>
    );
  }
}

export default UsersPage;
