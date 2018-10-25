
import Link from 'next/link';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import './Layout.scss';

const Layout = ({ children, title = 'Rocki 2000 ltd' }) => (
    <div className="Layout">
      <Head>
        <title>{ title }</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      
      <Header />
      <div className="page-content">
        { children }
      </div>
      <Footer/>
    </div>
);

export default Layout;
