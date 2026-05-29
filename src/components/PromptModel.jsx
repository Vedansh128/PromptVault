import {
  X,
  Copy,
} from "lucide-react";

import toast from "react-hot-toast";

import { motion, AnimatePresence } from "framer-motion";

const PromptModel = ({
  selectedPrompt,
  setSelectedPrompt,
}) => {

  const copyPrompt = () => {

    navigator.clipboard.writeText(
      selectedPrompt.prompt
    );

    toast.success("Prompt copied");
  };

  return (

    <AnimatePresence>

      {
        selectedPrompt && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-50

              flex
              items-center
              justify-center

              bg-black/60

              backdrop-blur-md

              p-4
            "
          >

            {/* Modal */}
            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
                y: 20,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                relative

                w-full
                max-w-3xl

                overflow-hidden

                rounded-3xl

                border
                border-black/5
                dark:border-white/10

                bg-white/90
                dark:bg-zinc-950/95

                backdrop-blur-xl

                shadow-2xl

                p-8
              "
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-violet-500/10 blur-3xl opacity-50"></div>

              <div className="relative z-10">

                {/* Top */}
                <div className="flex items-start justify-between gap-4">

                  <div>

                    <span className="inline-block text-xs bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full">
                      {selectedPrompt.category}
                    </span>

                    <h2 className="text-3xl font-black mt-5 text-zinc-900 dark:text-white">
                      {selectedPrompt.title}
                    </h2>

                  </div>

                  {/* Close */}
                  <button
                    onClick={() =>
                      setSelectedPrompt(null)
                    }
                    className="
                      cursor-pointer

                      bg-black/5
                      dark:bg-zinc-900

                      hover:bg-black/10
                      dark:hover:bg-zinc-800

                      transition

                      p-3

                      rounded-2xl
                    "
                  >

                    <X size={20} />

                  </button>

                </div>

                {/* Description */}
                <p className="text-zinc-600 dark:text-zinc-400 mt-6 leading-relaxed">
                  {selectedPrompt.description}
                </p>

                {/* Prompt Box */}
                <div
                  className="
                    mt-8

                    rounded-3xl

                    bg-black/5
                    dark:bg-zinc-900

                    border
                    border-black/5
                    dark:border-zinc-800

                    p-6
                  "
                >

                  <pre
                    className="
                      whitespace-pre-wrap

                      text-sm
                      leading-relaxed

                      text-zinc-800
                      dark:text-zinc-200
                    "
                  >
                    {selectedPrompt.prompt}
                  </pre>

                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-8">

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">

                    {
                      selectedPrompt.tags.map(
                        (tag, index) => (

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

                        )
                      )
                    }

                  </div>

                  {/* Copy */}
                  <button
                    onClick={copyPrompt}
                    className="
                      cursor-pointer

                      flex
                      items-center
                      gap-2

                      bg-gradient-to-r
                      from-violet-600
                      to-fuchsia-500

                      hover:scale-105

                      transition

                      px-5 py-3

                      rounded-2xl

                      text-white
                      font-medium
                    "
                  >

                    <Copy size={18} />

                    Copy

                  </button>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )
      }

    </AnimatePresence>

  );
};

export default PromptModel;