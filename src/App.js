import React, { useMemo, useState } from "react";
import "./App.css";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { PostFilter } from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript2", body: "Description" },
    { id: 3, title: "JavaScript3", body: "Description" },
  ]);

  const [filter, setFilter] = useState({sort: '',  query: ''})    

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortedPosts = useMemo(() => {
    if (filter) {
      return [...posts].sort((a, b) =>
        a[filter].localeCompare(b[filter]) 
      );
    }
    return posts;
  }, [filter.sort, posts]);   

  
  const sortedSearchPosts = useMemo(()=>{
       return sortedPosts.filter((post)=> post.title.toLowerCase().includes(filter.toLowerCase()))
  },[filter.query, sortedPosts])   

 

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px, 0" }} />
        <PostFilter  filter={filter} setFilter={setFilter}/>   
      {sortedSearchPosts.length ? (       
        <PostList
          remove={removePost}
          posts={sortedSearchPosts}  
          title={"Посты про JS "}
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>          
      )}
    </div>
  );
}

export default App;
