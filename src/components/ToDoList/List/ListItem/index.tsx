import { Item } from "../..";
import IconDeleteOutline from "../../../../assets/icons/Delete";
import IconCheckCircle from "../../../../assets/icons/Done";
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
      className={`${styles["item"]} ${item.done ? styles["checked-item"] : ""}`}
    >
      <div
        key={item.content + index}
        className={styles["item-content"]}
        // onClick={() => toggleStatus(index)}
      >
        {/* <input
          type="checkbox"
          name="checkbox"
          onChange={() => toggleStatus(index)}
          checked={item.done}
        /> */}
        {item.content}
        <span>{item.date?.toLocaleDateString("en-us", dateOptions)}</span>
      </div>
      <div className={styles.buttons}>
        <IconCheckCircle
          onClick={() => toggleStatus(index)}
          checked={item.done}
          className={`${item.done ? styles["checked-item"] : ""}`}
        />
        <IconDeleteOutline
          onClick={() => removeTodo(index)}
          className={styles.button}
        />
      </div>
    </li>
  );
};

export default ListItem;
