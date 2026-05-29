const categories = [
  "All",
  "Programming",
  "Marketing",
  "Business",
  "Career",
  "Education",
  "Design",
  "Personal Branding",
  "Content Writing",
];

const CategoryFilter = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">

      {categories.map((category) => (

        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`
            whitespace-nowrap cursor-pointer px-5 py-2 rounded-xl border transition text-sm

            ${
              selectedCategory === category
                ? "bg-violet-600 border-violet-500 text-white"
                : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800"
            }
          `}
        >
          {category}
        </button>

      ))}
    </div>
  );
};

export default CategoryFilter;