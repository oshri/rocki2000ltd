import Layout from '../src/components/Layout';
import NextSeo from 'next-seo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';
import { fetchLayout } from '../src/store/actions/layout.action';
import { fetchHome } from '../src/store/actions/home.action';
import '../src/scss/style.scss';
import Splash from '../src/components/Splash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SubjectCard from '../src/components/SubjectCard';
import PageCard from '../src/components/PageCard';
import MasonryGrid from '../src/components/MasonaryGrid';


const Home = (props) => {
	
	const PAGE_SEO = {
		title: 'Rocki 2000 ltd | Welcome',
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
		<Layout navigation={props.navigation}>
			<NextSeo config={PAGE_SEO}/>
			{/* <Splash /> */}
			<div className="home-subjects-card">

				{ 	
					props.parents.map((page, index) => {
						return (
							<div>
								<SubjectCard page={page} key={index}/>
							</div>
						);
					})
				}
			</div>
			<div className="home-pages-card">

				{ 	
					props.pages.map((page, index) => {
						return (<PageCard page={page} key={index}/>);
					})
				}
			</div>
		</Layout>
	);
};

Home.getInitialProps = async ({ store }) => {
	await store.dispatch(fetchLayout());
	await store.dispatch(fetchHome());
};

// Passing data to props from Store
function mapStateToProps(state) {
	return {
		navigation: state.layout.navigation,
		parents: state.home.parents,
		pages: state.home.pages
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
