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
            <div className="w-full max-w-4xl mx-auto py-6 border-b border-gray-200  transition-colors cursor-pointer">
                <div className="flex items-center text-sm text-gray-500">
                    <Avatar name={authorName} size="small"/>
                    <div className="pl-2 font-medium">{authorName}</div> 
                    <div className="px-2"><Circle/></div>
                    <div className="text-slate-500">{publishedDate}</div>
                </div>
                <div className="text-2xl font-bold pt-2"> 
                    {title} 
                </div>
                <div className="text-gray-700 text-base leading-relaxed">
                    {content.length>150? content.slice(0,150)+"...":content}
                </div>
                <div className="text-slate-500 text-sm pt-3">
                  {`${ Math.ceil(content.length/100)} minute(s) read`}
                </div>
            </div>
        </Link>
    )
}
function Circle(){
    return <div className="h-1 w-1 rounded-full bg-gray-400"></div>
}
export function Avatar({name,size='small'}:{name:string,size:"large"|'small'}){
       return ( 
       <div className={`relative inline-flex items-center justify-center ${size=='small'?'w-7 h-7':'w-10 h-10'} rounded-full bg-gradient-to-r from-indigo-500 to-purple-600`}>
        <span className={`${size=='small'?'text-xs':'text-md'} text-white font-semibold`}>{name[0]}</span>
    </div>)
}
