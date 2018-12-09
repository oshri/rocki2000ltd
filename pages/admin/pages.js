import React from 'react';
import { connect } from 'react-redux';
import NextSeo from 'next-seo';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';
import * as FromAuthRoot from '../../src/store/actions/auth.action';
import { fetchLayout } from '../../src/store/actions/layout.action';
import Layout from '../../src/components/Layout';
import PageHeader from '../../src/components/PageHeader';

import * as FromPagesActions from '../../src/store/actions/admin/pages.action';
import '../../src/scss/style.scss';

import AdminPageCard from '../../src/components/AdminComponents/AdminPageCard';
import ProtectedRoute from '../../src/HOC/ProtectedRoute';

import Loading from '../../src/components/Loading';

let Pages = (props) => {


	const getSeo = {
        title: 'Rocki 2000 ltd | Login',
		description: '',
	};

	const updatePage = (data) => {
		// TODO: Need to build global Loading state & component that block UI
		// props.loading();
		props.update({id: data._id, data: data});
	};
	
	const pages = (
		props.pages.data.map((page, index) => {
			return (<AdminPageCard update={updatePage} key={index} {...page}/>)
		})
	);
	
	return (
		<Layout  navigation={props.navigation}>
			<NextSeo config={getSeo}/>
			<div className="inside-page-content">
				<PageHeader title={'ניהול דפים'}/>
				{
					props.pages.isLoading ? <Loading/> : (
						<div className="AdminPages">
							<div className="pages">
								{
									props.pages.data ? (
										pages
									) : null
								}
							</div>
						</div>
					)
				}
				
			</div>
		</Layout>
	);
};

Pages = ProtectedRoute(Pages);

Pages.getInitialProps = async ({store, query: { id } }) => {
	await store.dispatch(fetchLayout());
	await store.dispatch(FromPagesActions.fetchPages());
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
		loading: bindActionCreators(FromPagesActions.loadingStart, dispatch),
		update: bindActionCreators(FromPagesActions.updatePage, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Pages);
