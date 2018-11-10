import React from 'react';
import { connect } from 'react-redux';
import NextSeo from 'next-seo';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';
import * as FromAuthRoot from '../../src/store/actions/auth.action';
import { fetchLayout } from '../../src/store/actions/layout.action';
import Layout from '../../src/components/Layout';

import * as pagesActions from '../../src/store/actions/admin/pages.action';
import '../../src/scss/style.scss';


let Pages = (props) => {


	const getSeo = {
        title: 'Rocki 2000 ltd | Login',
		description: '',
    };
	
	return (
		<Layout  navigation={props.navigation}>
			<NextSeo config={getSeo}/>
			<div className="AdminPages">
                
            </div>
		</Layout>
	);
};

Pages.getInitialProps = async ({store, query: { id } }) => {
	await store.dispatch(fetchLayout());
	// await store.dispatch(pagesActions.fetchPages());
};

// Passing data to props from Store
function mapStateToProps(state) {
	return {
		navigation: state.layout.navigation,
		auth: state.auth,
		pages: state.admin.pages
	};
}

// Passing Dispatch function to props
function mapDispatchToProps(dispatch) {
	return {
		
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Pages);
