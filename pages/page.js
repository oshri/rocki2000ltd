import React from 'react';
import Layout from '../components/Layout';
import NextSeo from 'next-seo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';
import * as FromPageRoot from '../src/store/actions/page.action';
import '../src/scss/style.scss';

class Page extends React.Component {
	PAGE_SEO;

	static async getInitialProps({ query: { id } }) {
		await store.dispatch(FromPageRoot.fetchPage());
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
			<Layout title="Home page" navigation={props.navigation}>
			<NextSeo config={this.PAGE_SEO}/>	
            	pppp
			</Layout>
		);
	}
}

// Passing data to props from Store
function mapStateToProps(state) {
	return {
		data: state.data
	};
}

// Passing Dispatch function to props
function mapDispatchToProps(dispatch) {
	return {
		fetchPage: bindActionCreators(FromPageRoot.fetchPage, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Page);
