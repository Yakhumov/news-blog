import React from "react";
import { useState } from "react";
import MyInput from "./Ui/Input/MyInput";
import MyButton from "./Ui/Button/MyButton";   

export const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addPost = (e) => {
    e.preventDefault();
    setPost({ title: "", body: "" });
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost); 
  };


  return (
    <form>
      <MyInput
        value={post.title}
        type="text"
        placeholder="Название поста"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      ></MyInput>
      <MyInput
        type="text"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder="Описание поста"
      ></MyInput>
      <MyButton onClick={addPost}>Создать</MyButton>
    </form>
  );
};
