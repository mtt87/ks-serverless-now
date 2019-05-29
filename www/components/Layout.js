import React from 'react';
import Link from 'next/link'

const Layout = (props) => (
  <div>
    <header style={{ padding: 20, backgroundColor: '#efcd5b' }}>
      <Link href="/">
        <a href="/"><h1>Zeit Now - serverless knowledge sharing</h1></a>
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
