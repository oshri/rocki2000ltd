
import Link from 'next/link';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import withMui from '../../shared/MUI/withMUI';

const Layout = ({ children, title = 'Rocki 2000 ltd' }) => (
    <div>
      <Head>
        <title>{ title }</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      
      <Header />
  
      { children }
  
      <Footer/>
    </div>
);

export default withMui(Layout);
