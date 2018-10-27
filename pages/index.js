import Layout from '../src/components/Layout';
import NextSeo from 'next-seo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';
import { fetchLayout } from '../src/store/actions/layout.action';
import '../src/scss/style.scss';
import Splash from '../src/components/Splash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = (props) => {
	
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
	
	return (
		<Layout title="Home page" navigation={props.navigation}>
			<NextSeo config={PAGE_SEO}/>
            <Splash />
			
			<Button outline color="primary" onClick={props.fetchLayout}>
				<FontAwesomeIcon icon="phone" />
				get Layout
			</Button>
		</Layout>
	);
};

Home.getInitialProps = async ({ store }) => {
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
)(Home);
