import create from "zustand";

type Store = {
  users: {
    id: number;
    username: string;
    avatar: string;
  }[];
  fetchUsers: () => void;
};

export const useStore = create<Store>((set, get) => ({
  users: [],

  fetchUsers: () => {
    fetch("http://localhost:4000/users")
      .then((resp) => resp.json())
      .then((data) => set((state) => ({ users: data })));
  },
}));

// const [users, setUsers] = useState<User[]>([]);
// const [posts, setPosts] = useState<Post[]>([]);

// useEffect(() => {
//   fetch("http://localhost:4000/users")
//     .then((resp) => resp.json())
//     .then(setUsers);
// }, []);

// useEffect(() => {
//   fetch("http://localhost:4000/posts")
//     .then((resp) => resp.json())
//     // .then(console.log);
//     .then(setPosts);
// }, []);

// function postToServer(newPost) {
//   fetch("http://localhost:4000/posts", {
//     method: "Post",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(newPost),
//   });
// }
