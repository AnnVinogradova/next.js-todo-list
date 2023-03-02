import Header from "../components/Header";
import Form from "../components/Form";
import ToDo from "../components/ToDo";

import "../styles/style.css";

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			
		</>
	);
}