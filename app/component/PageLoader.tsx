import Spinner from "@/component/Spinner";

const PageLoader = () => {
  return (
    <div
      className={`transition-all duration-300 ease-in-out absolute flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-black/25 `}
    >
      <div className="w-10 h-10">
        <Spinner size={10} color="text-gray-50" />
      </div>
    </div>
  );
};

export default PageLoader;
