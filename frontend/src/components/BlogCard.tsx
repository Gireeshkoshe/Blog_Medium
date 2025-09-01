import { Link } from "react-router-dom"

interface BlogCardprops{
    authorName:string,
    title:string,
    content:string,
    publishedDate:string
    id:number
}
export const BlogCard=({
    authorName,
    title,
    content,
    publishedDate,
    id,
}:BlogCardprops)=>{
    return (
        <Link to={`/blog/${id}`}>
            <div className="border-b pb-4 border-slate-200 w-full min-w-[32rem] max-w-xl  p-4 cursor-pointer">
                <div className="flex">
                    <Avatar name={authorName} size="small"/>
                    <div className="font-extralight text-sm pl-2 flex flex-col justify-center">
                        {authorName}
                    </div> 
                    <div className="flex flex-col justify-center pl-2"><Circle/></div>
                    <div className="pl-2 text-sm font-thin text-slate-500 flex flex-col justify-center">{publishedDate}</div>
                </div>
                <div className="text-xl font-semibold pt-2"> 
                    {title} 
                </div>
                <div className="text-md font-thin">
                    {content.length>100? content.slice(0,100)+"....":content}
                </div>
                <div className="text-slate-500 text-sm font-thin pt-4">
                {`${ Math.ceil(content.length/100)}minute(s) read`}
                </div>
                
            </div>
        </Link>
    )
}
function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-500"></div>
}
export function Avatar({name,size='small'}:{name:string,size:"large"|'small'}){
       return ( <div className={`relative inline-flex items-center justify-center ${size=='small'?'w-6 h-6':'w-10 h-10'} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span className={`${size=='small'?'text-xs':'text-md'} text-gray-600 dark:text-gray-300`}>{name[0]}</span>
    </div>)
}