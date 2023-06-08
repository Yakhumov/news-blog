import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import postsService from "../API/PostService";
import { Loader } from "./Ui/Loader/Loader";

const PostByIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoadings, postError] = useFetching(async (id) => {
    const response = await postsService.getById(id);  
    setPost(response.data);
  });

  const [fetchComm, isComLoadings] = useFetching(async (id) => {
    const response = await postsService.getComm(id); 
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComm(params.id);
  }, []);

  if (postError) {
    return <h3>{postError}</h3>;
  }

  return (
    <div>
      <h1>Вы открыли страницу поста с ID = {params.id}</h1>
      {isLoadings ? (
        <Loader />
      ) : (
        <div>
          {post.id},{post.title}
        </div>
      )}

      <h1>Комментарии</h1>
      {isComLoadings
         ? <Loader/>
         :   <div>
          {comments.map((comm)=>{
            return <div style={{marginTop: 15}} >   
            <h5 >    {comm.email}    </h5> 
             <div>  {comm.body} </div>
            </div>
          })}
         </div>
      }
    </div>
  );
};

export default PostByIdPage;
