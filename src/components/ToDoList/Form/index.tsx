import styles from "./Form.module.css";

const Form = (props: { addTodo: (event: any) => void }) => {
  return (
    <form onSubmit={props.addTodo} className={styles.form}>
      <input
        type="text"
        name="todo"
        placeholder="Insert TODO"
        className={`${styles.input} ${styles.placeholder}`}
      />
      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  );
};

export default Form;
