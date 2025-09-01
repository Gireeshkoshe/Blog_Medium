import { AppBar } from "./AppBar";


export const FullBlogSkeleton= () => {
  return (
    <div>
      <AppBar />

      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-20 max-w-screen-xl animate-pulse">
          <div className="col-span-8 space-y-4">
            <div className="h-10 w-3/4 bg-gray-300 rounded"></div>
            <div className="h-4 w-32 bg-gray-300 rounded"></div>
            <div className="space-y-2 pt-4">
              <div className="h-4 w-full bg-gray-300 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
              <div className="h-4 w-4/5 bg-gray-300 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
            </div>
          </div>

          <div className="col-span-4 pl-10">
            <div className="h-5 w-20 bg-gray-300 rounded"></div>

            <div className="flex w-full mt-4 space-x-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>

              <div className="space-y-2">
                <div className="h-4 w-28 bg-gray-300 rounded"></div>
                <div className="h-3 w-40 bg-gray-300 rounded"></div>
                <div className="h-3 w-32 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
