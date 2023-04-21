
import ToDoHeader from "../components/ToDoHeader";
import "../styles/style.css";


export default function MyApp({ Component, pageProps }) {
	return (
		<>
		<ToDoHeader/>
			<Component {...pageProps} />
		</>
	);
}