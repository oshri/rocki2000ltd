
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


class Layout extends React.Component {
  PAGE_SEO;
  
  constructor(props) {
    super(props);
    debugger
	}

	static async getInitialProps({ store }) {
    debugger
		await store.dispatch(fetchLayout());
	}

	componentDidMount() {
		this.PAGE_SEO = {
			title: 'Rocki 2000 ltd | Page',
			description: 'page description',
			openGraph: {
			type: 'website',
			locale: 'en_US',
			url: 'https://www.rocki2000ltd.co.il/page',
			title: 'Rocki 2000 ltd | Page',
			description: 'page description Open Graph',
			image:'',
			site_name: 'rocki2000ltd.co.il',
			imageWidth: 1200,
			imageHeight: 1200
			}
		};
	}


	render() {
		return (
			<div className="Layout bg-dots-gray-large">
        <Header navigation={this.props.navigation}/>
        <div className="page-content">
          { this.props.children }
        </div>
        <Footer/>
      </div>
		);
	}
}

// Passing data to props from Store
function mapStateToProps(state) {
	return {
		navigation: state.data
	};
}

// Passing Dispatch function to props
function mapDispatchToProps(dispatch) {
	return {
		fetchLayout: bindActionCreators(fetchLayout, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Layout);
