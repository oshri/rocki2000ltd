
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { fetchLayout } from '../../store/actions/layout.action';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import './Layout.scss';


const Layout = (props) => {

	return (
		<div className="Layout bg-dots-gray-large">
			<Header navigation={props.navigation}/>
			<div className="page-content">
			{ props.children }
			</div>
			<Footer/>
		  </div>
	);
}

export default Layout;