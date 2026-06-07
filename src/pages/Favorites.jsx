import { useState } from "react";

import PromptCard from "../components/PromptCard";

import PromptModel from "../components/PromptModel";

import { usePrompt } from "../context/PromptContext";

const Favorites = () => {

  const { favorites } = usePrompt();

  const [selectedPrompt, setSelectedPrompt] =
    useState(null);

  return (
    <div
      className="
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

        px-4
        md:px-6

        py-16
      "
    >

      {/* Glow */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-violet-500/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div>

          <h1 className="text-5xl font-black">
            Favorite Prompts
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 mt-4">
            Your saved AI prompts collection.
          </p>

        </div>

        {/* Cards */}
        {
          favorites.length > 0 ? (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

              {
                favorites.map((item) => (

                  <PromptCard
                    key={item.id}
                    item={item}
                    setSelectedPrompt={
                      setSelectedPrompt
                    }
                  />

                ))
              }

            </div>

          ) : (

            <div className="text-center py-32">

              <h2 className="text-4xl font-bold">
                No favorite prompts yet
              </h2>

              <p className="text-zinc-600 dark:text-zinc-400 mt-4">
                Save prompts by clicking the
                heart icon.
              </p>

            </div>

          )
        }

      </div>

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

export default Favorites;
