import React from 'react';
import Layout from '../src/components/Layout';
import NextSeo from 'next-seo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLayout } from '../src/store/actions/layout.action';
import '../src/scss/style.scss';


const Error = (props) => {
	

	const PAGE_SEO = {
		title: 'Rocki 2000 ltd | 404',
		description: 'about rocki2000ltd page',
	  };
	
	return (
		<Layout title="About page" navigation={props.navigation}>
			<NextSeo config={PAGE_SEO}/>
            <div>
				<p>
					{props.statusCode
						? `An error ${this.props.statusCode} occurred on server`
						: 'An error occurred on client'}
				</p>
			</div>
		</Layout>
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
