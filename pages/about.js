import Layout from '../src/components/Layout';
import NextSeo from 'next-seo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLayout } from '../src/store/actions/layout.action';
import '../src/scss/style.scss';


const About = (props) => {
	

	const PAGE_SEO = {
		title: 'Rocki 2000 ltd | About',
		description: 'about rocki2000ltd page',
		openGraph: {
		  type: 'website',
		  locale: 'en_US',
		  url: 'https://www.rocki2000ltd.co.il/about',
		  title: 'Rocki 2000 ltd | Page',
		  description: 'about description Open Graph',
		  image:'',
		  site_name: 'rocki2000ltd.co.il',
		  imageWidth: 1200,
		  imageHeight: 1200
		}
	  };
	
	return (
		<Layout title="About page" navigation={props.navigation}>
			<NextSeo config={PAGE_SEO}/>
            
		</Layout>
	);
};

About.getInitialProps = async ({ store }) => {
	await store.dispatch(fetchLayout());
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
)(About);
