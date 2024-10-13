import { useState } from "react";
import Form from "./Form";
import List from "./List";
import styles from "./ToDoList.module.css";

export interface ToDoListProps {
  title?: string;
  items: Item[];
}

export interface Item {
  content: string;
  done: boolean;
  date?: Date;
}

const defaultItem: Item = { content: "", done: false, date: new Date() };

const ToDoList = (props: {
  todoList: ToDoListProps;
  removeTodoList: () => void;
  updateListItems: (items: Item[]) => void;
}) => {
  const [items, setItems] = useState<Item[]>(props.todoList.items);
  const doneItems = items.filter((e) => e.done === true);

  const addTodo = (event: any) => {
    event.preventDefault();
    const value = event.target[0].value;
    if (!value) return;
    setItems((prevList) => {
      const itemList = [
        ...prevList,
        { ...defaultItem, content: value, date: new Date() },
      ];
      props.updateListItems(itemList);
      return itemList;
    });
    event.target.reset();
  };
  const removeTodo = (index: number) => {
    setItems((prevList) => prevList.filter((_, i: number) => i !== index));
  };

  const toggleStatus = (index: number) => {
    const tempList = [...items];
    tempList[index].done = !tempList[index].done;

    setItems(tempList);
  };

  const sortAlphabetically = () => {
    const tempItems = [...items];
    tempItems.sort((s1, s2) =>
      s1.content.toLowerCase() > s2.content.toLowerCase() ? 1 : -1
    );
    setItems(tempItems);
  };
  const sortByDate = () => {
    const tempItems = [...items];
    tempItems.sort((s1, s2) => {
      if (!s1.date) return 1;
      if (!s2.date) return -1;
      return new Date(s1.date) > new Date(s2.date) ? 1 : -1;
    });

    setItems(tempItems);
  };

  return (
    <div className={styles["todolist"]}>
      {props.todoList.title && <h3>{props.todoList.title}</h3>}
      {items.length > 0 && (
        <>
          <span>
            {items.length} TODOs. {doneItems.length} DONE
          </span>
          <div className={styles["buttons"]}>
            <button onClick={sortAlphabetically}>Sort alphabetically</button>
            <button onClick={sortByDate}>Sort by date</button>
          </div>
          <List
            todoList={items}
            removeTodo={removeTodo}
            toggleStatus={toggleStatus}
          />
        </>
      )}
      <Form addTodo={addTodo} />
      <button onClick={props.removeTodoList}>Remove List</button>
    </div>
  );
};

export default ToDoList;
