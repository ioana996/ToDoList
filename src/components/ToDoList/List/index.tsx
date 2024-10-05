import { Item } from "..";
import ListItem from "./ListItem";
import styles from "./List.module.css";

const List = ({
  todoList,
  removeTodo,
  toggleStatus,
}: {
  todoList: Item[];
  removeTodo: (index: number) => void;
  toggleStatus: (index: number) => void;
}) => {
  return (
    <ul className={styles.list}>
      {todoList.map((todo, index) => {
        return (
          <ListItem
            key={todo.content + index}
            item={todo}
            index={index}
            removeTodo={removeTodo}
            toggleStatus={toggleStatus}
          />
        );
      })}
    </ul>
  );
};

export default List;
