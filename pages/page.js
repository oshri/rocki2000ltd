import React from 'react';
import Layout from '../src/components/Layout';
import NextSeo from 'next-seo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';
import * as FromPageRoot from '../src/store/actions/page.action';
import { fetchLayout } from '../src/store/actions/layout.action';
import '../src/scss/style.scss';
import PageHeader from '../src/components/PageHeader';
import InstaTagsFeed from '../src/components/Instagram/InstaTagsFeed';


const Page = (props) => {

	const getSeo = (props) => {
		if(props.data) {
			return props.data.seo;
		} else {
			return {
				title: 'Rocki 2000 ltd',
				description: '',
				openGraph: {
					type: 'website',
					locale: 'en_US',
					url: 'https://www.rocki2000ltd.co.il',
					title: 'Rocki 2000 ltd',
					description: '',
					image:'',
					site_name: 'rocki2000ltd.co.il',
					imageWidth: 1200,
					imageHeight: 1200
				}
			};
		}
	};

	const renderInstaTagsFeed = (props) => {
		if(props.data) {
			if(props.data.tags.length > 0) {
				return (
				  <InstaTagsFeed tags={props.data.tags}/>
				)
			  }
		} else {
			return null
		}
		
	};

	const getField = (props, fieldName) => {
		if(props.data) {
			if (props.data[fieldName]!= undefined) {
				return `${props.data[fieldName]}`
			}
			return ` `
		} else {
			return ` `
		}
	};
	
	return (
		<Layout  navigation={props.navigation}>
			<NextSeo config={getSeo(props)}/>
			<div className="inside-page-content">
				<PageHeader breadcrumbs={getField(props, 'link')} title={getField(props, 'name')}/>
				<p className="page-description">{getField(props, 'description')}</p>
			</div>
			{renderInstaTagsFeed(props)}
		</Layout>
	);
};

Page.getInitialProps = async ({store, query: { id } }) => {
	await store.dispatch(fetchLayout());
	await store.dispatch(FromPageRoot.fetchPage(id));
};

// Passing data to props from Store
function mapStateToProps(state) {
	return {
		data: state.page.data,
		navigation: state.layout.navigation
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
