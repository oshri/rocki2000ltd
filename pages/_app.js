import React from 'react';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initializeStore } from '../src/store';
import { Provider } from 'react-redux';
import NextSeo from 'next-seo';

/**
 * Fontawsome
 */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

library.add([
	faPhone
]);

const DEFAULT_SEO = {
	title: 'Rocki 2000 ltd',
	description: 'rocki 2000 ',
	openGraph: {
	  type: 'website',
	  locale: 'en_US',
	  url: 'https://www.rocki2000ltd.co.il',
	  title: 'Rocki 2000 ltd graph',
	  description: 'rocki 2000 description graph',
	  image:'',
	  site_name: 'rocki2000ltd.co.il',
	  imageWidth: 1200,
	  imageHeight: 1200
	}
  };
  

class MyApp extends App {

	static async getInitialProps({ Component, ctx }) {	

		return {
			pageProps: Component.getInitialProps
				? await Component.getInitialProps(ctx)
				: {}
		};
	}

	componentDidCatch(error, errorInfo) {
		console.log('CUSTOM ERROR HANDLING', error);
		// This is needed to render errors correctly in development / production
		super.componentDidCatch(error, errorInfo);
	}

	render() {
		const { Component, pageProps, store } = this.props;

		return (
			<Container>
				<NextSeo config={DEFAULT_SEO} />
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</Container>
		);
	}
}

export default withRedux(initializeStore)(MyApp);
