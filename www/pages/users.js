import React, { Component } from 'react';
import Layout from '../components/Layout';
import 'isomorphic-unfetch';

class UsersPage extends Component {
  static async getInitialProps () {
    const res = await fetch('http://localhost:3000/api/users')
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
