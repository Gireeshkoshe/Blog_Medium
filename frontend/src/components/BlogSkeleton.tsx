export const BlogSkeleton = () => {
  return (
    <div className="border-b pb-4 border-slate-200 w-full min-w-[32rem] max-w-xl p-4 animate-pulse">
      
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        <div className="h-3 w-24 bg-gray-300 rounded"></div>
        <div className="h-1 w-1 bg-slate-400 rounded-full"></div>
        <div className="h-3 w-16 bg-gray-300 rounded"></div>
      </div>


      <div className="mt-3 h-5 w-3/4 bg-gray-300 rounded"></div>


      <div className="mt-2 space-y-2">
        <div className="h-3 w-full bg-gray-300 rounded"></div>
        <div className="h-3 w-5/6 bg-gray-300 rounded"></div>
      </div>
      <div className="mt-4 h-3 w-20 bg-gray-300 rounded"></div>
    </div>
  );
};
