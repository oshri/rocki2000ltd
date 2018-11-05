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
import PageCard from '../src/components/PageCard';
import InstagramTagsFeed from '../src/components/InstagramTagsFeed';

const Subject = (props) => {
	
	const PAGE_SEO = {
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

	const renderInstagramTagsFeed = () => {
		if(props.data.tags.length > 0) {
		  return (
			<InstagramTagsFeed tags={props.data.tags}/>
		  )
		} else {
		  return null
		}
	};
	
	return (
		<Layout  navigation={props.navigation}>
			<NextSeo config={PAGE_SEO}/>
			<div className="inside-page-content">
				<PageHeader breadcrumbs={getField(props, 'link')} title={getField(props, 'name')}/>
				<p className="page-description">{getField(props, 'description')}</p>
			</div>
            <div className="home-pages-card">
				{ 	
					props.data.children.map((page, index) => {
						return (<PageCard page={page} key={index}/>);
					})
				}
			</div>
			{renderInstagramTagsFeed()}
		</Layout>
	);
};

Subject.getInitialProps = async ({store, query: { id } }) => {
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
)(Subject);
