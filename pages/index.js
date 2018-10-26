import Layout from '../src/components/Layout';
import NextSeo from 'next-seo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';
import { fetchNavigation } from '../src/store';
import '../src/scss/style.scss';
// import Instafeed from 'instafeed.js';
import Splash from '../src/components/Splash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



// const feed = new Instafeed({
//     get: 'tagged',
//     tagName: 'rockiBestTop',
//     clientId: 'd3a2f6b39ac248d696c1d4b6ddc987bc'
// });

const Home = props => {
	// feed.run();

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

	// let links = props.navigation.map((link, i) => {
	// 	return <li key={i}>{link}</li>;
	// });

	return (
		<Layout title="Home page" navigation={props.navigation}>
			<NextSeo config={PAGE_SEO}/>
		
			{/* <section>
				<div>
					<div id="instafeed" />
					<h1>Home page</h1>
					<ul>{links}</ul>
					<button onClick={props.fetchNav}>Fetch Nav</button>
				</div>
			</section> */}
			
			

            <Splash />
			
			{/* <Button outline color="primary">
				<FontAwesomeIcon icon="phone" />
				primary
			</Button> */}
		</Layout>
	);
};

// Home.getInitialProps = async ({ store }) => {
// 	await store.dispatch(fetchNavigation());
// };

// // Passing data to props from Store
// function mapStateToProps(state) {
// 	return {
// 		navigation: state.navigation
// 	};
// }

// // Passing Dispatch function to props
// function mapDispatchToProps(dispatch) {
// 	return {
// 		fetchNav: bindActionCreators(fetchNavigation, dispatch)
// 	};
// }

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(Home);

export default Home;
