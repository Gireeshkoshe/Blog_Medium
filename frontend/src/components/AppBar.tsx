import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const AppBar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-white dark:bg-gray-900 shadow-md">
      <Link
        to="/blogs"
        className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent cursor-pointer"
      >
        TechBlogs
      </Link>
      <div className="flex items-center space-x-6">
        <Link to="/publish">
          <button
            type="button"
            className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-800"
          >
            New
          </button>
        </Link>
        <Avatar name="Gireesh" size="large" />
      </div>
    </div>
  )
}
