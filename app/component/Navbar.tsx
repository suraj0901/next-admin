import Link from "next/link";

export default function Navbar() {
  return (
    <div className="shadow-sm">
      <div className="py-2 px-10 flex gap-16 items-center justify-between">
        <Link href="/" className="font-mono font-extrabold italic text-3xl">
          Blogi
        </Link>
        <div className="flex  gap-10">
          <Link href={"/createPost"}>
            <button className="lg:block hidden px-6 py-2 rounded bg-green-700 hover:bg-green-600 font-medium text-white">
              Crate Post
            </button>
          </Link>
          <button className="px-4 py-2 rounded-full">Dark</button>
          <button className="sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
