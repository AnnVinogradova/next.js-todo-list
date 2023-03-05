import React, { useState, useEffect } from 'react';

import Form from "../components/Form";
import ToDoList from "../components/ToDoList";


export default function ToDoPage() {

	const [inputText, setInputText] = useState("");
	const [toDos, setToDos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filteredToDos, setfilteredToDos] = useState([]);

	useEffect(() => {
		getLocalToDos();
	}, []);


	useEffect(() => {
		filterHandler();
		saveLocalToDos();
	}, [toDos, status]);

	const filterHandler = () => {
		switch (status) {
			case 'completed':
				setfilteredToDos(toDos.filter(toDo => toDo.completed === true));
				break;
			case 'uncompleted':
				setfilteredToDos(toDos.filter(toDo => toDo.completed === false));
				break;
			default:
				setfilteredToDos(toDos);
				break;
		}
	}

	const saveLocalToDos = () => {
		if (localStorage.getItem('toDos') === null) {
			localStorage.setItem('toDos', JSON.stringify([]));
		} else {
			localStorage.setItem('toDos', JSON.stringify(toDos));
		}
	};

	const getLocalToDos = () => {
		if (localStorage.getItem('toDos') === null) {
			localStorage.setItem('toDos', JSON.stringify([]));
		} else {
			let toDoLocal = JSON.parse(localStorage.getItem('toDos'));
			setToDos(toDoLocal);
		}
	};

	return (
		<>
			<Form
				inputText={inputText}
				toDos={toDos}
				setToDos={setToDos}
				setInputText={setInputText}
				setStatus={setStatus}
			/>
			<ToDoList filteredToDos={filteredToDos}
				setToDos={setToDos}
				toDos={toDos} />
		</>
	);
}