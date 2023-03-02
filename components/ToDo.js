import React from "react";

export default function ToDo() {
	const [ToDos, setToDos] = React.useState([]);

	function toggleCheckById(id) {
		setToDos((old) => {
			const index = old.findIndex((item) => id === item.id);
			old[index].checked = !old[index].checked;
			return [...old];
		});
	}

	function delItembyID(id) {
		setToDos((old) => {
			const index = old.findIndex((item) => id === item.id);
			old.splice(index, 1);
			return [...old];
		});
	}

	function Up(id) {
		setToDos((old) => {
			const index = old.findIndex((item) => id === item.id);
			if (index === 0) {
				return old;
			} else {
				const item = old[index];
				old.splice(index, 1);
				old.splice(index - 1, 0, item);
				return [...old];
			}
		});
	}

	function Down(id) {
		setToDos((old) => {
			const index = old.findIndex((item) => id === item.id);
			if (index === old.length - 1) {
				return old;
			} else {
				const item = old[index];
				old.splice(index, 1);
				old.splice(index + 1, 0, item);
				return [...old];
			}
		});
	}


	return (
		<>
			<div>
				<ol
					onClick={(evt) => {
						const greenx = evt.target.closest(".navy-x");
						if (greenx?.dataset?.id) delItembyID(+greenx.dataset.id);
						const checkbox = evt.target.closest("input[type=checkbox]");
						if (checkbox?.dataset?.id) toggleCheckById(+checkbox?.dataset?.id);
					}}
				>
					{ToDos.map((el) => (
						<li>
							<label className="label">
								<input type="checkbox" checked={el.checked} data-id={el.id} />
								{el.str}
								<span className="checkmark">{el.text}</span>
							</label>

							<span data-id={el.id} className="navy-x">
								✠
							</span>
							<span className="mnemonic" onClick={() => Up(el.id)}>
								{" "}
								⤒{" "}
							</span>
							<span className="mnemonic" onClick={() => Down(el.id)}>
								{" "}
								⤓{" "}
							</span>
						</li>
					))}
				</ol>
			</div >
		</>
	)
}

