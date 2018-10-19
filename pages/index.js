import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNavigation } from '../store';
import '../scss/style.scss';
import Instafeed from 'instafeed.js';
import Splash from '../components/Splash';

// const feed = new Instafeed({
//     get: 'tagged',
//     tagName: 'rockiBestTop',
//     clientId: 'd3a2f6b39ac248d696c1d4b6ddc987bc',
//     accessToken: '8717561512.d3a2f6b.058e8f8c4bd5466db03f03e19b5d24b6'
// });

const Home = props => {
	// feed.run();

	let links = props.navigation.map((link, i) => {
		return <li key={i}>{link}</li>;
	});

	return (
		<Layout title="Home mage">
			{/* <section>
				<div>
					<div id="instafeed" />
					<h1>Home page</h1>
					<ul>{links}</ul>
					<button onClick={props.fetchNav}>Fetch Nav</button>
				</div>
            </section> */}
            <Splash />
		</Layout>
	);
};

Home.getInitialProps = async ({ store }) => {
	await store.dispatch(fetchNavigation());
};

// Passing data to props from Store
function mapStateToProps(state) {
	return {
		navigation: state.navigation
	};
}

// Passing Dispatch function to props
function mapDispatchToProps(dispatch) {
	return {
		fetchNav: bindActionCreators(fetchNavigation, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
