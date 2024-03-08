const ListItem = ({
  todo,
  index,
  removeTodo,
}: {
  todo: string;
  index: number;
  removeTodo: (index: number) => void;
}) => {
  return (
    <li key={todo + index}>
      {todo}
      <span onClick={() => removeTodo(index)}>X</span>
    </li>
  );
};

export default ListItem;
