import Link from "next/link";

export const Navbar = () => {
  const navLinks = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Services",
      url: "/services",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];
  return (
    <div className="relative z-10 h-16  top-0 w-full py-3 text-white text-lg">
      <div className="box flex justify-between items-center">
        <div className="text-2xl font-bold font-quick">Smoothie</div>

        <div className="lg:flex space-x-4 hidden font-quick">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.title}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
