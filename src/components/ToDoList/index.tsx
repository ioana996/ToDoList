import { useState } from "react";
import Form from "./Form";
import List from "./List";

const ToDoList = () => {
  const [todoList, setTodoList] = useState<string[]>([
    "Element 1",
    "Element 2",
    "Element 3",
  ]);

  const addTodo = (event: any) => {
    const value = event.target[0].value;
    if (!value) return;
    event.preventDefault();
    setTodoList((prevList) => [...prevList, value]);
    event.target.reset();
  };
  const removeTodo = (index: number) => {
    setTodoList((prevList) => prevList.filter((_, i: number) => i !== index));
  };

  return (
    <>
      <h3>Peter's List blah blah</h3>
      <List todoList={todoList} removeTodo={removeTodo} />
      <Form addTodo={addTodo} />
    </>
  );
};

export default ToDoList;
