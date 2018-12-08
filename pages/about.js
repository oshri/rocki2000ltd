import Layout from '../src/components/Layout';
import NextSeo from 'next-seo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLayout } from '../src/store/actions/layout.action';
import '../src/scss/style.scss';
import PageHeader from '../src/components/PageHeader';


const About = (props) => {
	

	const PAGE_SEO = {
		title: `Rocki 2000 ltd | אודות, רוקי,רוקי תעשיות 2000 בע"מ,רוקי רחובות,רפד רכב,מרפדיה,מרפדית רכב,כסאות הידראולים,כסאות אורטופדים,כסעות נוסעים,כסאות למוניות,ברזנטים,ברזט לג'יפ,ג'יפים`,
		description: 'about rocki2000ltd page',
		openGraph: {
		  type: 'website',
		  locale: 'en_US',
		  url: 'https://www.rocki2000ltd.co.il/about',
		  title: 'Rocki 2000 ltd | אודות',
		  description: `י.רוקי תעשיות 2000 בע"מ, הינה חברה יצרנית מורשה מטעם משרד התחבורה,
		  אנו מתמחים בייצור כסאות לרכב, התקנת כיסאות, תיקונים לרכב, התקנת חגורות בטיחות, שינוי מרכבים ברכב, ברז'נטים לג'יפים, כסאות הידראולים,כסאות לבעיות גב,תיקון גג לרכב, גגות קבריולט, ציוד מישקי לקופ"ח ובעיקר במתן פיתרונות יעודיים ועוד'`,
		  image:'',
		  site_name: 'rocki2000ltd.co.il',
		  imageWidth: 1200,
		  imageHeight: 1200
		}
	  };

	  
	
	return (
		<Layout navigation={props.navigation}>
			<NextSeo config={PAGE_SEO}/>
            <div className="inside-page-content">
				<PageHeader title={'אודות'}/>
				<p className="page-description">
				י.רוקי תעשיות 2000 בע"מ, הינה חברה יצרנית מורשה מטעם משרד התחבורה,
אנו מתמחים בייצור כסאות לרכב, התקנת כיסאות, תיקונים לרכב, התקנת חגורות בטיחות, שינוי מרכבים ברכב, ברז'נטים לג'יפים, כסאות הידראולים,כסאות לבעיות גב,תיקון גג לרכב, גגות קבריולט, ציוד מישקי לקופ"ח ובעיקר במתן פיתרונות יעודיים ועוד'
				</p>
			</div>
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
