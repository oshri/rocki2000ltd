import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';
import { fetchNavigation } from '../store';
import '../scss/style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Page = props => {
	
	return (
		<Layout title="Page page">
			<h1>
                Page
            </h1>
			<Button outline color="primary">
				<FontAwesomeIcon icon="phone" />
				primary
			</Button>
		</Layout>
	);
};

Home.getInitialProps = async ({ store }) => {
	// await store.dispatch(fetchNavigation());
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
)(Page);
