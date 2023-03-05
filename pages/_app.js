import React from 'react';
import "../styles/style.css";
import Header from "../components/Header";

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	);
}