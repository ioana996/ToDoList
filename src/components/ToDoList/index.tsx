import { useState } from "react";
import Form from "./Form";
import List from "./List";
import items from "../../assets/items.json";

export interface Item {
  content: string;
  done: boolean;
  date?: Date;
}

const defaultItem: Item = { content: "", done: false, date: new Date() };

const ToDoList = () => {
  const [todoList, setTodoList] = useState<Item[]>(items);
  const doneItems = todoList.filter((e) => e.done === true);

  const addTodo = (event: any) => {
    const value = event.target[0].value;
    if (!value) return;
    event.preventDefault();
    setTodoList((prevList) => [
      ...prevList,
      { ...defaultItem, content: value, date: new Date() },
    ]);
    event.target.reset();
  };
  const removeTodo = (index: number) => {
    setTodoList((prevList) => prevList.filter((_, i: number) => i !== index));
  };

  const toggleStatus = (index: number) => {
    const tempList = [...todoList];
    tempList[index].done = !tempList[index].done;

    setTodoList(tempList);
  };

  const sortAlphabetically = () => {
    const tempItems = [...todoList];
    tempItems.sort((s1, s2) => (s1.content > s2.content ? 1 : -1));
    setTodoList(tempItems);
  };

  return (
    <>
      <h3>Peter's List blah blah</h3>
      <span>The list contains {todoList.length} items.</span>
      <span>There are {doneItems.length} done</span>
      <List
        todoList={todoList}
        removeTodo={removeTodo}
        toggleStatus={toggleStatus}
      />
      <button onClick={sortAlphabetically}>Sort</button>
      <Form addTodo={addTodo} />
    </>
  );
};

export default ToDoList;
