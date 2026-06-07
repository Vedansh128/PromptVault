import {
  Search,
  Heart,
  Sparkles,
  Moon,
  Sun,
  Plus,
} from "lucide-react";

import { Link } from "react-router-dom";

import { useTheme } from "../context/ThemeContext";

const Navbar = ({
  search,
  setSearch,
}) => {

  const {
    theme,
    toggleTheme,
  } = useTheme();

  return (
    <nav
      className="
        sticky top-0 z-50

        border-b

        border-black/5
        dark:border-white/10

        bg-white/60
        dark:bg-black/30

        backdrop-blur-xl
      "
    >

      <div className="max-w-7xl mx-auto px-3 md:px-6 py-3 md:py-4 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0"
        >

          <div className="bg-gradient-to-r from-violet-600 to-fuchsia-500 p-2.5 rounded-2xl shadow-lg shadow-violet-500/20">

            <Sparkles size={18} className="text-white" />

          </div>

          <div>

            <h1 className="text-lg md:text-2xl font-black tracking-tight">
              PromptVault
            </h1>

            <p className="hidden md:block text-xs text-zinc-500 dark:text-zinc-400">
              AI Prompt Library
            </p>

          </div>

        </Link>

        {/* Search */}
        <div
          className="
            hidden md:flex
            flex-1 max-w-md

            items-center

            bg-white/80
            dark:bg-zinc-900

            border
            border-black/5
            dark:border-zinc-800

            rounded-2xl

            px-4 py-3
          "
        >

          <Search
            size={18}
            className="text-zinc-500"
          />

          <input
            type="text"
            placeholder="Search prompts..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              bg-transparent
              outline-none
              px-3
              w-full
              text-sm

              text-zinc-900
              dark:text-white
            "
          />

        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-1 shrink-0">

          {/* Add Prompt */}
          <Link
            to="/add-prompt"
            className="
              flex
              items-center
              gap-2

              bg-gradient-to-r
              from-violet-600
              to-fuchsia-500

              hover:scale-105
              transition

              px-2 sm:px-3 md:px-5 py-2 md:py-3
              rounded-2xl

              text-white
              font-medium

              shadow-lg
              shadow-violet-500/20
            "
          >

            <Plus size={18} />
            <span className="hidden sm:inline">
            Add Prompt
            </span>

      

          </Link>

          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="
              bg-white/70
              dark:bg-zinc-900
                cursor-pointer
              hover:scale-105
              transition

              p-2 md:p-3
              rounded-2xl

              border
              border-black/5
              dark:border-zinc-800
            "
          >

            {
              theme === "dark"
                ? <Sun size={18} />
                : <Moon size={18} />
            }

          </button>

          {/* Favorites */}
          <Link
            to="/favorites"
            className="
              bg-white/70
              dark:bg-zinc-900

              hover:scale-105
              transition

              p-2 sm:p-3
              rounded-2xl

              border
              border-black/5
              dark:border-zinc-800
            "
          >

            <Heart size={18} />

          </Link>

        </div>

      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-4">

        <div
          className="
            flex items-center

            bg-white/80
            dark:bg-zinc-900

            border
            border-black/5
            dark:border-zinc-800

            rounded-2xl

            px-4 py-3
          "
        >

          <Search
            size={18}
            className="text-zinc-500"
          />

          <input
            type="text"
            placeholder="Search prompts..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              bg-transparent
              outline-none
              px-3
              w-full
              text-sm

              text-zinc-900
              dark:text-white
            "
          />

        </div>

      </div>
    </nav>
  );
};

export default Navbar;