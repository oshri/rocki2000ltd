import React from 'react';
import Layout from '../components/Layout';
import NextSeo from 'next-seo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';
import { fetchNavigation } from '../store';
import '../scss/style.scss';

class Page extends React.Component {


	static async getInitialProps({ query: { id } }) {

	}

	componentDidMount() {
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
	}

	titleTag(props) {
		if (this.props.data.length > 0) {
			return `${
				this.props.data[0].title.rendered
			} | Catechetical Institute at Franciscan University`;
		}
		return `News | Catechetical Institute at Franciscan University`;
	}

	descriptionTag(props) {
		if (this.props.data.length > 0) {
			return `${this.props.data[0].acf.seo_description}`;
		}
		return ` `;
	}

	render() {
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
	}
}

export default Page;
