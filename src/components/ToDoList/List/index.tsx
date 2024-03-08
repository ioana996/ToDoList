import ListItem from "./ListItem";

const List = ({
  todoList,
  removeTodo,
}: {
  todoList: string[];
  removeTodo: (index: number) => void;
}) => {
  return (
    <ul>
      {todoList.map((todo, index) => {
        return <ListItem todo={todo} index={index} removeTodo={removeTodo} />;
      })}
    </ul>
  );
};

export default List;
