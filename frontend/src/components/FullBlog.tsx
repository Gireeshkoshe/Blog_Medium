import type { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"


export const FullBlog=({blog}:{blog:Blog})=>{
     return (
        <div>
            <AppBar/>
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 w-full pt-20 max-w-screen-xl">
                    <div className=" col-span-8">
                        <div className="text-5xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="text-gray-400 pt-2">
                           Posted on 29 Aug 2025
                        </div>
                        <div className="pt-4">
                            {blog.content}
                        </div>
                    </div>
                    <div className=" col-span-4">
                        <div className="text-slate-600 text-lg ">Author </div>
                        <div className="flex w-full">
                            <div className="flex flex-col justify-center pr-4">
                                <Avatar name={blog.author.name||"Anonymous"} size="large"/>
                            </div>
                            <div>
                                <div className="text-xl font-bold">
                                    {blog.author.name||"Anonymous"}
                                </div>
                                
                                <div className="pt-2 text-slate-400 ">
                                    A random talks about the author bla bal bla bla
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
     )
}