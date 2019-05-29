import React, { Component } from 'react';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch'

class UsersPage extends Component {
  static async getInitialProps () {
    const res = await fetch('/api/users')
    const json = await res.json()
    return { users: json };
  }

  render() {
    const { users = [] } = this.props;
    return (
      <Layout>
        <div>
          {users.map((user) => (
            <div style={{ border: '1px solid #ddd', padding: '12px 18px' }}>
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
