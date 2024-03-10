import { Item } from "../..";
import styles from "./ListItem.module.css";

const ListItem = ({
  item,
  index,
  removeTodo,
  toggleStatus,
}: {
  item: Item;
  index: number;
  removeTodo: (index: number) => void;
  toggleStatus: (index: number) => void;
}) => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  return (
    <li
      key={item.content + index}
      className={`${item.done ? styles["checked-item"] : ""} ${styles.item}`}
    >
      <input
        type="checkbox"
        name="checkbox"
        onChange={() => toggleStatus(index)}
        checked={item.done}
      />
      {item.content}
      <span>{item.date?.toLocaleDateString("en-us", dateOptions)}</span>
      <span onClick={() => removeTodo(index)}>X</span>
    </li>
  );
};

export default ListItem;
