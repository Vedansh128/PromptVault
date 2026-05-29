import { useState } from "react";

import toast from "react-hot-toast";

const AddPrompt = () => {

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    prompt: "",
    tags: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const existingPrompts =
      JSON.parse(
        localStorage.getItem("customPrompts")
      ) || [];

    const newPrompt = {
  id: Date.now(),
  isCustom: true,
  ...formData,
  tags: formData.tags.split(","),
};

    localStorage.setItem(
      "customPrompts",
      JSON.stringify([
        ...existingPrompts,
        newPrompt,
      ])
    );

    toast.success("Prompt Added");

    setFormData({
      title: "",
      category: "",
      description: "",
      prompt: "",
      tags: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-violet-100 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-white px-4 md:px-6 py-16">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-black">
          Add Custom Prompt
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 mt-4">
          Create and save your own AI prompts.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 mt-10"
        >

          <input
            type="text"
            name="title"
            placeholder="Prompt Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-xl rounded-2xl p-4 outline-none"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="w-full bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-xl rounded-2xl p-4 outline-none"
          />

          <textarea
            rows={3}
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-xl rounded-2xl p-4 outline-none"
          />

          <textarea
            rows={8}
            name="prompt"
            placeholder="Write Prompt..."
            value={formData.prompt}
            onChange={handleChange}
            className="w-full bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-xl rounded-2xl p-4 outline-none"
          />

          <input
            type="text"
            name="tags"
            placeholder="react, coding, ai"
            value={formData.tags}
            onChange={handleChange}
            className="w-full bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-xl rounded-2xl p-4 outline-none"
          />

          <button
            className="
              bg-gradient-to-r
              from-violet-600
              to-fuchsia-500

              hover:scale-105
              transition

              px-8 py-4
              rounded-2xl

              text-white
              font-semibold

              shadow-lg
              shadow-violet-500/20
            "
          >
            Save Prompt
          </button>

        </form>

      </div>
    </div>
  );
};

export default AddPrompt;