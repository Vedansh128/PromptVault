import { useState } from "react";

import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import PromptCard from "../components/PromptCard";
import CategoryFilter from "../components/CategoryFilter";
import PromptModel from "../components/PromptModel";

import { prompts } from "../data/prompts";

const Home = () => {

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [selectedPrompt, setSelectedPrompt] =
    useState(null);

  const customPrompts =
    JSON.parse(
      localStorage.getItem("customPrompts")
    ) || [];

  const allPrompts = [
    ...prompts,
    ...customPrompts,
  ];

  const filteredPrompts = allPrompts.filter(
    (item) => {

      const matchesSearch =
        item.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        item.category === selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    }
  );

  return (
    <div
      className="
        relative
        overflow-hidden
        min-h-screen

        bg-gradient-to-br
        from-slate-100
        via-white
        to-violet-100

        dark:from-zinc-950
        dark:via-zinc-950
        dark:to-zinc-900

        text-zinc-900
        dark:text-white
      "
    >

      {/* Glow 1 */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/20 blur-[120px] rounded-full"></div>

      {/* Glow 2 */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/20 blur-[120px] rounded-full"></div>

      {/* Navbar */}
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      {/* Main */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16">

        {/* Hero */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="max-w-4xl"
        >

          <h1 className="text-4xl md:text-6xl font-black leading-tight">

            Discover Powerful

            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              {" "}AI Prompts
            </span>

          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mt-6 max-w-2xl">

            Explore 50+ modern AI prompts for
            programming, business, marketing,
            branding, education, productivity, fitness
            and content creation.

          </p>

        </motion.div>

        {/* Filters */}
        <div className="mt-12">

          <CategoryFilter
            selectedCategory={
              selectedCategory
            }
            setSelectedCategory={
              setSelectedCategory
            }
          />

        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12">

          {
            filteredPrompts.length > 0
              ? (
                filteredPrompts.map(
                  (item) => (

                    <PromptCard
                      key={item.id}
                      item={item}
                      setSelectedPrompt={
                        setSelectedPrompt
                      }
                    />

                  )
                )
              )
              : (
                <div className="col-span-full text-center py-24">

                  <h2 className="text-4xl font-bold">
                    No prompts found
                  </h2>

                  <p className="text-zinc-600 dark:text-zinc-400 mt-4">
                    Try another keyword
                    or category.
                  </p>

                </div>
              )
          }

        </div>

      </section>

      {/* Modal */}
      <PromptModel
        selectedPrompt={selectedPrompt}
        setSelectedPrompt={
          setSelectedPrompt
        }
      />

    </div>
  );
};

export default Home;