import Header from "../components/Header";

import "../styles/style.css";

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			
		</>
	);
}