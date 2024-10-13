import { useState } from "react";

interface CreateListProps {
  createList: (title: string) => void;
  // createList: (event: any) => void
}
const CreateList = ({ createList }: CreateListProps) => {
  const [title, setTitle] = useState<string>("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  return (
    <form onSubmit={() => createList(title)}>
      <input
        type="text"
        name="createList"
        placeholder="Add a list name"
        onChange={handleTitleChange}
      />
      <button type="submit">Create new list</button>
    </form>
  );
};

export default CreateList;
