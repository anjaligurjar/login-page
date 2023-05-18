import Header from './Header';
import React from 'react';
export default function Layout() {
  return (
    <div>
      <Layout>
        <Header />
      </Layout>
    </div>
  );
}
