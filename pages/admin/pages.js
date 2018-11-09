import React from 'react';
import { connect } from 'react-redux';
import NextSeo from 'next-seo';
import { bindActionCreators } from 'redux';
import Layout from '../../src/components/Layout';
import ProtectedRoute from '../../src/HOC/ProtectedRoute';
import * as FromAuthRoot from '../../src/store/actions/auth.action';
import { fetchLayout } from '../../src/store/actions/layout.action';
import '../../src/scss/style.scss';


let Pages = (props) => {
	
	return (
		<Layout  navigation={props.navigation}>
			<div>
                Pages
            </div>
		</Layout>
	);
};


let Page = ProtectedRoute(Pages);

Page.getInitialProps = async ({store, query: { id } }) => {
    await store.dispatch(fetchLayout());
};

function mapStateToProps(state) {
    return {
        navigation: state.layout.navigation,
        auth: state.auth.isAuthenticated
    };
}

export default connect(
	mapStateToProps
)(Page);

