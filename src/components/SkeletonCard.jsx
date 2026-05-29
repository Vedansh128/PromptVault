const SkeletonCard = () => {

  return (
    <div className="animate-pulse rounded-3xl bg-zinc-900 border border-zinc-800 p-6">

      <div className="h-5 w-24 rounded bg-zinc-800"></div>

      <div className="h-8 w-2/3 rounded bg-zinc-800 mt-5"></div>

      <div className="space-y-3 mt-6">

        <div className="h-4 rounded bg-zinc-800"></div>

        <div className="h-4 rounded bg-zinc-800"></div>

        <div className="h-4 w-2/3 rounded bg-zinc-800"></div>

      </div>

      <div className="h-12 rounded-2xl bg-zinc-800 mt-8"></div>
    </div>
  );
};

export default SkeletonCard;