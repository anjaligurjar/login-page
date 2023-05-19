import Header from './Header';
import React from 'react';
import Footer from './Footer';

export default function Layout() {
  return (
    <div>
      <Layout>
        <Footer />
        <Header />
      </Layout>
    </div>
  );
}
