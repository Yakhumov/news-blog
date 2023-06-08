import React, { useEffect, useState } from "react";
import PostList from "../components/PostList";
import { PostForm } from "../components/PostForm";
import { PostFilter } from "../components/PostFilter";
import MyModal from "../components/Ui/MyModal/MyModal";
import MyButton from "../components/Ui/Button/MyButton";
import { usePosts } from "../hooks/usePosts";
import postsService from "../API/PostService";
import { Loader } from "../components/Ui/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import {  getPagesCount } from "../Utils/Pages";
import { Pagination } from "../components/Ui/Pagination/Pagination";   

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });      
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
 

  const [fetchPosts, isLoading, error] = useFetching(async (limit, page) => {
    const response = await postsService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];   
    setTotalPages(getPagesCount(totalCount, limit));
  });

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts(limit,page);
  }, []);  

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const changePage =(page)=>{
    setPage(page) 
    fetchPosts(limit,page)
  }

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
      {error && <h1>Произошла обишка ${error}</h1>}
      {isLoading ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          {" "}
          <Loader />
        </div>
      ) : (
        < PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}     
          title={"Посты про JS "}
        />  
      )}
           <Pagination    page={page} changePage={changePage} totalPages={totalPages}/>   
    </div>
  );
}

export default Posts;   
