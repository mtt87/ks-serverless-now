import React from 'react';
import Link from 'next/link'

const Layout = (props) => (
  <div>
    <header style={{ padding: 20, backgroundColor: '#efcd5b' }}>
      <Link href="/demo/">
        <a href="/demo/"><h2>Knowledge Sharing: Zeit Now - Serverless platform</h2></a>
      </Link>
    </header>
    <div style={{ padding: 20 }}>
      {props.children}
    </div>
    <footer style={{ backgroundColor: '#eee', padding: 20 }}>
      Mattia Asti
    </footer>
  </div>
);

export default Layout;
