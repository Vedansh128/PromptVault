import {
  Copy,
  Heart,
  Trash2,
} from "lucide-react";

import toast from "react-hot-toast";

import { motion } from "framer-motion";

import { usePrompt } from "../context/PromptContext";

const PromptCard = ({
  item,
  setSelectedPrompt,
}) => {

  const {
    toggleFavorite,
    isFavorite,
  } = usePrompt();

  const copyPrompt = () => {

    navigator.clipboard.writeText(
      item.prompt
    );

    toast.success("Prompt copied");
  };

  const deletePrompt = () => {

    const existingPrompts =
      JSON.parse(
        localStorage.getItem("customPrompts")
      ) || [];

    const updatedPrompts =
      existingPrompts.filter(
        (prompt) => prompt.id !== item.id
      );

    localStorage.setItem(
      "customPrompts",
      JSON.stringify(updatedPrompts)
    );

    toast.success("Prompt deleted");

    window.location.reload();
  };

  return (
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
        duration: 0.4,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        p-[1px]
      "
    >

      {/* Animated Border */}
      <div
        className="
          absolute
          inset-0

          rounded-3xl

          opacity-0
          group-hover:opacity-100

          transition-all
          duration-500

          animate-spin-slow

          bg-gradient-to-r
          from-violet-600
          via-fuchsia-500
          to-violet-600
        "
      ></div>

      {/* Glow */}
      <div
        className="
          absolute
          inset-0

          opacity-0
          group-hover:opacity-100

          transition-all
          duration-500

          bg-violet-500/20
          blur-3xl
        "
      ></div>

      {/* Card */}
      <div
        className="
          relative
          z-10
          cursor-pointer
          h-full

          rounded-3xl

          bg-white/80
          dark:bg-zinc-950/90

          backdrop-blur-xl

          border
          border-black/5
          dark:border-white/10

          shadow-xl
          shadow-black/5
          dark:shadow-black/20

          p-4 md:p-6
        "
      >

        {/* Category */}
        <span
          className="
            inline-block

            text-xs

            bg-violet-500/20
            text-violet-300

            px-3 py-1

            rounded-full
          "
        >
          {item.category}
        </span>

        {/* Title */}
        <h2
          className="
            text-lg md:text-2xl
            font-bold
            mt-5

            text-zinc-900
            dark:text-white

            group-hover:text-violet-400

            transition
          "
        >
          {item.title}
        </h2>

        {/* Description */}
        <p
          className="
            text-zinc-600
            dark:text-zinc-400

            mt-4

            text-xs md:text-sm
            leading-relaxed
          "
        >
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-5">

          {item.tags.map((tag, index) => (

            <span
              key={index}
              className="
                bg-black/5
                dark:bg-zinc-900

                text-zinc-700
                dark:text-zinc-300

                text-xs

                px-3 py-1

                rounded-lg
              "
            >
              #{tag}
            </span>

          ))}

        </div>

        {/* Buttons */}
        <div className="flex items-center cursor-pointer gap-2 md:gap-3 mt-6">

          {/* View */}
          <button
            onClick={() =>
              setSelectedPrompt(item)
            }
            className="
              flex-1

              bg-black/5
              dark:bg-zinc-900
               cursor-pointer
              hover:bg-violet-500/10

              border
              border-black/5
              dark:border-zinc-800

              py-3

              rounded-2xl

              font-medium

              transition-all
            "
          >
            View Prompt
          </button>

          {/* Copy */}
          <button
            onClick={copyPrompt}
            className="
              bg-gradient-to-r
              from-violet-600
              to-fuchsia-500
                cursor-pointer
              hover:scale-110

              transition-all

              p-2 md:p-3

              rounded-2xl

              text-white
            "
          >
            <Copy size={18} />
          </button>

          {/* Favorite */}
          <button
            onClick={() =>
              toggleFavorite(item)
            }
            className={`
              p-3
              rounded-2xl
                cursor-pointer
              border

              transition-all

              hover:scale-110

              ${
                isFavorite(item.id)
                  ? `
                    bg-red-500/20
                    border-red-500/40
                  `
                  : `
                    bg-black/5
                    dark:bg-zinc-900

                    border-black/5
                    dark:border-zinc-800
                  `
              }
            `}
          >

            <Heart
              size={18}
              fill={
                isFavorite(item.id)
                  ? "red"
                  : "transparent"
              }
              className={
                isFavorite(item.id)
                  ? "text-red-500"
                  : ""
              }
            />

          </button>

          {/* Delete */}
          {
            item.isCustom && (

              <button
                onClick={deletePrompt}
                className="
                  p-3

                  rounded-2xl
                    cursor-pointer
                  bg-red-500/20
                  hover:bg-red-500/30

                  border
                  border-red-500/30

                  hover:scale-110

                  transition-all
                "
              >

                <Trash2
                  size={18}
                  className="text-red-400"
                />

              </button>

            )
          }

        </div>

      </div>

    </motion.div>
  );
};

export default PromptCard;