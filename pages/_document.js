import Document, { Head, Main, NextScript } from 'next/document';
import PropTypes from 'prop-types';
import { dependencies } from '../package.json';

const { next: nextJSVersion, react: reactVersion } = dependencies;

export default class LayoutDocument extends Document {
	render() {
		const { pageContext } = this.props;

		return (
			<html>
				<Head>
					<link rel="stylesheet" href="/static/alef.css" />
					<link rel="manifest" href="/static/manifest.json" />
					<link rel="shortcut icon" href="/static/favicon.ico" />
					<meta name="viewport" content="width=device-width,initial-scale=1"/>
					<meta name="theme-color" content="#000000"/>
				</Head>
				<body className="rtl" dir="rtl">
					{/* <div className="heading">
                        [DEMO] NextJS {nextJSVersion} and React {reactVersion}
                    </div> */}
					<Main />
					<NextScript />
					<script async defer="defer" src="//platform.instagram.com/en_US/embeds.js"></script>
				</body>
			</html>
		);
	}
}
