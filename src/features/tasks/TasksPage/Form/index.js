import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, Button } from "./styled";
import { addTask } from "../../tasksSlice";
import Input from "../../Input";

const Form = () => {
	const [newTaskContent, setNewTaskContent] = useState("");
	const inputRef = useRef(null);

	const dispatch = useDispatch();
	
	const focusInput = () => {
		inputRef.current.focus();
	};

	const onFormSubmit = (event) => {
		event.preventDefault();

		const trimNewTaskContent = newTaskContent.trim();

		if (trimNewTaskContent !== "") {
			dispatch(
				addTask({
					content: newTaskContent.trim(),
					done: false,
					id: nanoid(),
				})
			);
		}
		setNewTaskContent("");
	};
	return (
		<StyledForm onSubmit={onFormSubmit}>
			<Input
				ref={inputRef}
				value={newTaskContent}
				placeholder="Co jest do zrobienia?"
				onChange={({ target }) => setNewTaskContent(target.value)}
			/>
			<Button onClick={focusInput}>Dodaj zadanie</Button>
		</StyledForm>
	);
};

export default Form;
