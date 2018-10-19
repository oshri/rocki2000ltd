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
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
					<meta name="description" content="Rocki 2000 ltd" />
					<meta name="theme-color" content="#000000" />

					<meta property="og:title" content="Rocki 2000 ltd" />
					<meta
						property="og:url"
						content="http://rocki2000ltd.co.il"
					/>
					<meta property="og:description" content="Rocki 2000 ltd" />
					<meta property="og:type" content="website" />
					<meta
						property="og:image"
						content="http://rocki2000ltd.co.il/social/share-facebook.png"
					/>

					<link rel="stylesheet" href="/static/alef.css" />
					<link rel="manifest" href="/static/manifest.json" />
					<link rel="shortcut icon" href="/static/favicon.ico" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>>
				</Head>
				<body>
					{/* <div className="heading">
                        [DEMO] NextJS {nextJSVersion} and React {reactVersion}
                    </div> */}
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
