import React from 'react';
import { connect } from 'react-redux';
import NextSeo from 'next-seo';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';
import * as FromAuthRoot from '../../src/store/actions/auth.action';
import { fetchLayout } from '../../src/store/actions/layout.action';
import Layout from '../../src/components/Layout';
import LoginForm from '../../src/components/LoginForm';
import '../../src/scss/style.scss';


let Login = (props) => {

	const submit = (data) => {
		props.loading();

		setTimeout(() => {
			props.handleSubmit(data);
		}, 10000);
	};

	const getSeo = {
        title: 'Rocki 2000 ltd | Login',
		description: '',
    };
	
	return (
		<Layout  navigation={props.navigation}>
			<NextSeo config={getSeo}/>
			<LoginForm onSubmit={submit} loading={props.auth.isLoading}/>
		</Layout>
	);
};

Login.getInitialProps = async ({store, query: { id } }) => {
	await store.dispatch(fetchLayout());
};

// Passing data to props from Store
function mapStateToProps(state) {
	return {
		navigation: state.layout.navigation,
		auth: state.auth
	};
}

// Passing Dispatch function to props
function mapDispatchToProps(dispatch) {
	return {
		handleSubmit: bindActionCreators(FromAuthRoot.postLogin, dispatch),
		loading: bindActionCreators(FromAuthRoot.login, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
