
const navLinks = [
  { label: "home", href: "#home" },
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "contacts", href: "#contacts" },
];

export default function Navbar() {
  return (
    <header
      className="top-navigation flex w-full items-center justify-between pb-12"
      data-purpose="top-navigation"
    >
      <a
        href="#home"
        className="font-mono text-sm font-medium tracking-wide text-slate-300 transition-colors hover:text-white"
      >
        {"< Near >"}
      </a>

      <nav
        aria-label="Main navigation"
        className="primary-navigation flex items-center gap-6 text-xs sm:gap-8"
      >
        {navLinks.map((link) => (
          <a key={link.href} className="nav-link" href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
