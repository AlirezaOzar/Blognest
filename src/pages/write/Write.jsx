import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axios.post("http://localhost:5000/api/posts/", newPost);
      console.log(res.data);
      window.location.replace(`/post/${res.data._id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto flex justify-center ">
      {file && (
        <img className="" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="mt-20 w-[500px] p-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-10">
          <label htmlFor="fileInput">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            placeholder="Title"
            type="text"
            className="border-2 border-neutral-300 py-3 px-4 w-full rounded-lg "
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mt-10">
          <textarea
             className="border-2 border-neutral-300 py-3 px-4 w-full rounded-lg "
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button className="w-full mt-10 bg-black hover:bg-gray-900 transition text-white rounded-lg py-4 px-5" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
