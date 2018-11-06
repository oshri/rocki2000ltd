import React from 'react';
import Layout from '../src/components/Layout';
import NextSeo from 'next-seo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLayout } from '../src/store/actions/layout.action';
import '../src/scss/style.scss';
import Link from 'next/link';


const Error = (props) => {
	

	const PAGE_SEO = {
		title: 'Rocki 2000 ltd | 404',
		description: 'about rocki2000ltd page',
	  };
	
	return (
		<div className="animated-404-bg">
			<Layout title="About page" navigation={props.navigation ? props.navigation : []}>
				<NextSeo config={PAGE_SEO}/>
				<div className="wrapper-404">
					<h1>404</h1>
					<h2>Oops, the page you're looking for does not exist.</h2>
					<p>
						You may want to head back to the homepage.
						<br/>
						If you think something is broken, report a problem.
						<br/>
					</p>
					<Link href="/">
						<a className="btn">RETURN HOME</a>
					</Link>
				</div>
			</Layout>
		</div>
	);
};

Error.getInitialProps = async ({ store, res, err }) => {
	await store.dispatch(fetchLayout());
	const statusCode = res ? res.statusCode : err ? err.statusCode : null;
	return { statusCode };
};

// Passing data to props from Store
function mapStateToProps(state) {
	return {
		navigation: state.layout.navigation
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
)(Error);