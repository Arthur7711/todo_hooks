import React, { useState } from "react";
import Adding from "../addingArea/Adding";
import styles from "./Todo.module.css";

const Todo = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  console.log(value);
  return (
    <div>
      <div className={styles.todo}>
        <input
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() => {
            setData([...data, value]);
            setValue("");
          }}
        >
          add todo
        </button>
      </div>
      <Adding data={data} />
    </div>
  );
};

export default Todo;
