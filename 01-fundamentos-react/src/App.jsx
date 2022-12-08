import { Post } from "./Post";

export function App() {
  return (
    <div>
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
    </div>
  );
}
