import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";
import {FullBlogSkeleton} from '../components/FullBlogSkeleton'
export const Blog=()=>{
     const { id } = useParams<{ id: string }>();
    const {loading,blog}=useBlog({
        id: id || ""
    });
    if(loading){
        return (
        <div>
            <FullBlogSkeleton/>
        </div>)
    }
    if(!blog)return <div>No blog Found</div>
    return <div> 
        <FullBlog blog={blog}/>
    </div>
}