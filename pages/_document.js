import Document, { Html, Head, Main, NextScript } from "next/document";
import React from 'react'
export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
				<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
                </Head>
				<body>
					
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
