import Link from "next/link";

interface Prop {
  href: string;
  children: React.ReactNode;
}

const A = ({ href, children }: Prop) => (
  <Link
    href={href}
    className="hover:bg-green-700 hover:text-white transition-all ease-linear hover:drop-shadow-2xl rounded-lg hover:rounded-lg px-8 py-4"
  >
    {children}
  </Link>
);

const SideBar = () => {
  return (
    <nav className="bg-zinc-100 lg:col-span-2 hidden min-h-screen  lg:flex flex-col gap-4 p-4 font-medium text-xl">
      <A href="/">Post</A>
      <A href="/createPost">Create</A>
    </nav>
  );
};

export default SideBar;
