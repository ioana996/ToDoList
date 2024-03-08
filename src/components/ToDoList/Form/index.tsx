const Form = (props: { addTodo: (event: any) => void }) => {
  return (
    <form onSubmit={props.addTodo}>
      <label>
        ToDo:
        <input type="text" name="todo" />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
