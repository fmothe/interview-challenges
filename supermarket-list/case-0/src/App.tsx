import type {Item} from "./types";

import {useEffect, useState} from "react";

import styles from "./App.module.scss";
import api from "./api";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    api.list().then(setItems);
  }, []);

  const deleteItem = (id: number) => {
    setItems((item) => item.filter((item) => item.id !== id));
  };

  return (
    <main className={styles.main}>
      <h1>Supermarket list</h1>
      <form>
        <input name="text" type="text" autoFocus/>
        <button>Add</button>
      </form>
      <ul>
        {items?.map((item) => (
          <li key={item.id} className={item.completed ? styles.completed : ""}>
            {item.text} <button onClick={() => deleteItem(item.id)}>[X]</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
