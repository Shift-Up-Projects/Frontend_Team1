import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const navigationLinks = [
  { label: "Home", to: "/" },
  { label: "Activities", to: "/activities" },
  { label: "Profile", to: "/profile" },
];

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedTheme = window.localStorage.getItem("theme");

    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
      return;
    }

    const prefersDark = window.matchMedia
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false;

    setDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="relative overflow-hidden border-b border-gray-300 dark:border-gray-800">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-4 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <span className=" font-sans flex h-10 w-10 items-center justify-center rounded-2xl bg-white/60 font-semibold text-indigo-600 shadow-md ring-2 ring-white/50 transition-transform duration-300 group-hover:scale-105 dark:bg-gray-900/70 dark:text-indigo-300">
            AM
          </span>
          <span className="flex flex-col">
            <span className="text-xl font-bold leading-none text-slate-900 transition-colors duration-300 group-hover:text-indigo-600 dark:text-gray-50">
              Activity Manager
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-700 dark:text-gray-400/80">
              Plan • Track • Enjoy
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `group relative transition ${
                  isActive
                    ? "text-indigo-700 dark:text-indigo-300"
                    : "text-slate-800 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-300"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.label}</span>
                  {/* الخط يلي تحت الروابط بالهيدر */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left transform rounded-full bg-indigo-500 transition-transform duration-300 dark:bg-indigo-400 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/add-activity"
            className="hidden rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-lg shadow-indigo-500/30 transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-200 dark:bg-indigo-500/20 dark:text-indigo-200 dark:hover:bg-indigo-500/30 sm:inline-flex"
          >
            Create Activity
          </Link>
          <Link
            to="/login"
            className="hidden text-sm font-semibold text-slate-800 transition hover:text-indigo-700 dark:text-slate-200 dark:hover:text-indigo-300 lg:inline-flex"
          >
            Log in
          </Link>

          <button
            type="button"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle color theme"
            className="flex items-center gap-2 rounded-full border border-white/50 bg-gray-50/70 px-3 py-1.5 text-xs font-semibold  tracking-[0.25em] text-slate-800 shadow-sm transition hover:border-indigo-500/60 hover:text-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-gray-700/80 dark:bg-gray-900/70 dark:text-gray-200 dark:hover:border-indigo-400/60 dark:hover:text-indigo-300"
          >
            <span>{darkMode ? "DarkMode" : "LightMode"}</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white shadow-md transition-colors dark:bg-indigo-400">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
