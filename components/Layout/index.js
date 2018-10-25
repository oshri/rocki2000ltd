
import Link from 'next/link';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import './Layout.scss';

const Layout = ({ children, title = 'Rocki 2000 ltd' }) => (
    <div className="Layout">
      <Header />
      <div className="page-content">
        { children }
      </div>
      <Footer/>
    </div>
);

export default Layout;
