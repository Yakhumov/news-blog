import React, { useEffect, useState } from "react";
import "./App.css";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { PostFilter } from "./components/PostFilter";
import MyModal from "./components/Ui/MyModal/MyModal";
import MyButton from "./components/Ui/Button/MyButton";
import { usePosts } from "./hooks/usePosts";
import postsService from "./API/PostService";
import { Loader } from "./components/Ui/Loader/Loader";
import { useFetching } from "./hooks/useFetching";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [fetchPosts, isLoading, error ]  = useFetching (async()=>{
    const posts = await postsService.getAll();      
    setPosts(posts);
  })

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);          

  useEffect(() => {
    fetchPosts();
  }, []);  

  const createPost = (newPost) => {
    setPosts([...posts, newPost])  
    setModal(false);
  };



  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));         
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px, 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {error &&
        <h1>Произошла обишка ${error}</h1>
      }
         {isLoading
             ?   <div  style={{display: 'flex', justifyContent: 'center', marginTop: 50}}> <Loader/></div>  
             :
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"Посты про JS "}
      />
         }
    </div>
  );
}

export default App;
