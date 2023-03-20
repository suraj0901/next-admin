import Link from "next/link";

export default function Navbar() {
  return (
    <div className="shadow-sm">
      <div className="container mx-auto max-w-5xl">
        <div className="py-2 px-4 flex gap-16 items-center">
          <Link href="/" className="font-mono font-extrabold italic text-3xl">
            Blogi
          </Link>
          <nav className="flex gap-8 items-center font-medium text-sm">
            <Link href={"/"}>Posts</Link>
            <Link href={"/createPost"}>Create</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
