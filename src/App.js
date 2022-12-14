import { useState } from "react";
import "./App.css";
import CompleteTodos from "./components/CompleteTodos";
import IncompleteTodos from "./components/IncompleteTodos";
import InputTodo from "./components/InputTodo";

function App() {
    const [todoText, setTodoText] = useState("");
    const [incompleteTodos, setIncompleteTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);

    const onChangeTodoText = (e) => {
        setTodoText(e.target.value);
    };

    const onClickAdd = () => {
        if (todoText === "") return;
        const newTodos = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        setTodoText("");
    };

    const onClickDelete = (index) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1);
        setIncompleteTodos(newTodos);
    };

    const onClickComplete = (index) => {
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);
        setIncompleteTodos(newIncompleteTodos);

        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
        setCompleteTodos(newCompleteTodos);
    };

    const onClickBack = (index) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);
        setCompleteTodos(newCompleteTodos);

        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
        setIncompleteTodos(newIncompleteTodos);
    };

    return (
        <>
            <InputTodo
                todoText={todoText}
                onChange={onChangeTodoText}
                onClick={onClickAdd}
            />
            <IncompleteTodos
                incompleteTodos={incompleteTodos}
                onClickComplete={onClickComplete}
                onClickDelete={onClickDelete}
            />
            <CompleteTodos
                completeTodos={completeTodos}
                onClickBack={onClickBack}
            />
        </>
    );
}

export default App;
