import { useState, useEffect } from "react";
import "./App.css";
import ToDoList, { Item, ToDoListProps } from "./components/ToDoList";
import CreateList from "./components/CreateList";

const LOCAL_STORAGE_LIST_KEY = "todoList";
function App() {
  // const [listExists, setListExists] = useState(false);
  const [todoList, setTodoList] = useState<ToDoListProps>({
    title: "",
    items: [],
  });

  // const createList = (event: FormEvent) => {
  //   event.preventDefault();
  //   const input = (event.target as HTMLFormElement)[0] as HTMLInputElement;
  // };

  const createList = (newTitle: string) => {
    setTodoList((prevTodoList) => {
      const newList = {
        ...prevTodoList,
        title: newTitle,
      };
      if (!localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) {
        localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(newList));
      }
      return newList;
    });
  };

  const updateListItems = (newItems: Item[]) => {
    setTodoList((prevTodoList) => {
      const newList: ToDoListProps = {
        ...prevTodoList,
        items: newItems,
      };
      localStorage.setItem(
        LOCAL_STORAGE_LIST_KEY,
        JSON.stringify({
          ...newList,
          items: newItems.map((item) => {
            return { ...item, date: item.date?.getTime() };
          }),
        })
      );

      return newList;
    });
  };

  const removeTodoList = () => {
    localStorage.removeItem(LOCAL_STORAGE_LIST_KEY);
    setTodoList({ title: "", items: [] });
  };

  useEffect(() => {
    const storedList = localStorage.getItem(LOCAL_STORAGE_LIST_KEY);
    if (storedList) {
      const newList = JSON.parse(storedList);
      setTodoList({
        ...newList,
        items: newList.items.map((item: any) => {
          return { ...item, date: new Date(item.date) };
        }),
      });
    }
  }, []);

  return todoList.title ? (
    <ToDoList
      todoList={todoList}
      removeTodoList={removeTodoList}
      updateListItems={updateListItems}
    />
  ) : (
    <CreateList createList={createList} />
  );
}

export default App;
