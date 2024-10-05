import { useState } from "react";
import Form from "./Form";
import List from "./List";
import items from "../../assets/items.json";
import styles from "./ToDoList.module.css";

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
    tempItems.sort((s1, s2) =>
      s1.content.toLowerCase() > s2.content.toLowerCase() ? 1 : -1
    );
    setTodoList(tempItems);
  };
  const sortByDate = () => {
    const tempItems = [...todoList];
    tempItems.sort((s1, s2) => {
      if (!s1.date) return 1;
      if (!s2.date) return -1;
      return new Date(s1.date) > new Date(s2.date) ? 1 : -1;
    });

    setTodoList(tempItems);
  };

  return (
    <div className={styles["todolist"]}>
      <h3>Peter's List blah blah</h3>
      {todoList.length > 0 && (
        <>
          <span>
            {todoList.length} TODOs. {doneItems.length} DONE
          </span>
          <div className={styles["buttons"]}>
            <button onClick={sortAlphabetically}>Sort alphabetically</button>
            <button onClick={sortByDate}>Sort by date</button>
          </div>
          <List
            todoList={todoList}
            removeTodo={removeTodo}
            toggleStatus={toggleStatus}
          />
        </>
      )}
      <Form addTodo={addTodo} />
    </div>
  );
};

export default ToDoList;
