import React, { useMemo, useState } from "react";
import "./App.css";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { MySelect } from "./components/Ui/Select/MySelect";
import MyInput from "./components/Ui/Input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript2", body: "Description" },
    { id: 3, title: "JavaScript3", body: "Description" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]); 

  
  const sortedSearchPosts = useMemo(()=>{
       return sortedPosts.filter((post)=> post.title.toLowerCase().includes(searchValue.toLowerCase()))
  },[searchValue, sortedPosts])   

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px, 0" }} />
      <div className="select">
        <MyInput
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Поиск..."
        ></MyInput>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: "title", name: "По названию " },
            { value: "body", name: "По описанию " },
          ]}
        ></MySelect>
      </div>
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
