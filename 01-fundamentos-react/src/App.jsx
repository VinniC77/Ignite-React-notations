import { Post } from "./Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Vinicius Clunc"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus alias molestiae consequatur provident ipsam nostrum, modi animi!"
          />
          <Post
            author="Jordan Peterson"
            content="Lorem ipsum dolor, adipisicing elit. Necessitatibus alias molestiae sit amet consectetur adipisicing elit. Necessitatibus alias molestiae consequatur provident ipsam nostrum, modi animi!"
          />
          <Post
            author="Margaret Tatcher"
            content="Lorem ipsum dolor, adipisicing elit. Necessitatibus alias molestiae sit amet consectetur adipisicing dolor, adipisicing elit. Necessitatibus alias molestiae sit amet elit. Necessitatibus alias molestiae consequatur provident ipsam nostrum, modi animi!"
          />
        </main>
      </div>
    </div>
  );
}
