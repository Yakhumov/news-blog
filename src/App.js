import React, { useMemo, useState } from "react";
import "./App.css";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { PostFilter } from "./components/PostFilter";
import MyModal from "./components/Ui/MyModal/MyModal";
import MyButton from "./components/Ui/Button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript2", body: "Description" },
    { id: 3, title: "JavaScript3", body: "Description" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });  
  const [modal, setModal] = useState(false)  

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)  
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedSearchPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={()=> setModal(true)}>   
        Создать пользователя 
      </MyButton>
      <MyModal visible={modal} setVisible={setModal} >  
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px, 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />     
      <PostList
        remove={removePost}
        posts={sortedSearchPosts}
        title={"Посты про JS "}
      />
    </div>
  );
}

export default App;
