import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
const Posts = ({ search }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5000/api/posts" + search);
      setPost(res.data);
    };
    fetchData();
  }, []);
  return (
    <div className="container mx-auto grid grid-cols-4 gap-10 p-4">
      {post.map((data) => {
        return (
          <div className="col-span-4 md:col-span-2 lg:col-span-1">
            <Post data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
