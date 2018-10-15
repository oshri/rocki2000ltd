import React from 'react';
import App, { Container } from 'next/app';
// import { MuiThemeProvider } from '@material-ui/core/styles';

// import getPageContext from '../src/getPageContext';

class MyApp extends App {
	constructor(props) {
		super(props);
		// this.pageContext = getPageContext();
	}

	componentDidMount() {}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<Container>				
				<Component {...pageProps} />
			</Container>
		);
	}
}

export default MyApp;
