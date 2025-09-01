import { useState } from "react"
import { AppBar } from "../components/AppBar"
import { BACKEND_URL } from "../Config";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const navigate=useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

      <AppBar />

      <div className="flex justify-center mt-10 px-4">
        <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Publish Your Blog
          </h1>

          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-lg font-medium text-gray-700 dark:text-gray-300"
            >
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter your blog title..."
              onChange={(e)=>{
                setTitle(e.target.value)}
            }
              className="w-full px-4 py-3 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="content"
              className="block mb-2 text-lg font-medium text-gray-700 dark:text-gray-300"
            >
              Blog Content
            </label>
            <textarea
                onChange={(e)=>{
                    setDescription(e.target.value);
                }}
              id="content"
              rows={12}
              placeholder="Write your blog content here..."
              className="w-full p-4 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button onClick={async()=>{
                const response=await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                    title,
                    content:description
                },{
                    headers:{
                        Authorization:localStorage.getItem("jwt")
                    }
                });
                navigate(`/blog/${response.data.id}`)
            }}
              className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              🚀 Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
