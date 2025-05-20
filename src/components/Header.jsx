import { NAV_LINKS } from "../constants";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black/90 shadow-md">
      <nav className="flex items-center justify-between px-6 sm:px-12 py-4">
        <h1 className="text-xl font-bold text-primary">GreenBrain</h1>
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {NAV_LINKS.map(link => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
