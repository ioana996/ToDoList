import { useState } from "react";
import styles from "./CreateListForm.module.css";

interface CreateListProps {
  createList: (title: string) => void;
  // createList: (event: any) => void
}
const CreateListForm = ({ createList }: CreateListProps) => {
  const [title, setTitle] = useState<string>("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  return (
    <form onSubmit={() => createList(title)} className={styles["form"]}>
      <input
        type="text"
        name="createList"
        placeholder="Insert a list name"
        onChange={handleTitleChange}
        className={styles["input"]}
      />
      <button type="submit" className={styles["button"]}>
        Create new list
      </button>
    </form>
  );
};

export default CreateListForm;
