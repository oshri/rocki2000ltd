
import Link from 'next/link';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import './Layout.scss';

const Layout = ({ children, navigation }) => {
   
  return (
    <div className="Layout">
      <Header navigation={navigation}/>
      <div className="page-content">
        { children }
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
