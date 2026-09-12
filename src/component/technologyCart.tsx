import type { ITechnology } from "../type/type";

interface TechnologyCartProps {
  technology: ITechnology;
  onAdd: (technology: ITechnology) => void;
  isSelected: boolean;
}

export default function TechnologyCart({
  technology,
  onAdd,
  isSelected,
}: TechnologyCartProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

      <div className="mb-6 flex items-center justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-9 w-9 object-contain"
        />

        <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-500">
          {technology.badge}
        </span>
      </div>


      <h2 className="mb-2 text-xl font-bold text-slate-900">
        {technology.name}
      </h2>

   
      <p className="mb-6 h-[60px] overflow-hidden text-sm leading-5 text-slate-500">
        {technology.description}
      </p>

  
      <div className="mb-5 flex items-center justify-between gap-2 text-xs">

        <span className="rounded-md bg-slate-100 px-2.5 py-1.5 text-slate-600">
          {technology.category}
        </span>

        <span className="text-slate-500">
          {technology.difficulty}
        </span>

        <span className="flex items-center gap-1 font-medium text-slate-700">
          <span className="text-amber-400">★</span>
          {technology.rating}
        </span>

      </div>


      <button
        onClick={() => onAdd(technology)}
        disabled={isSelected}
        className={`w-full rounded-lg py-3 text-sm font-medium text-white transition ${
          isSelected
            ? "cursor-not-allowed bg-slate-400"
            : "bg-[#080d1c] hover:bg-slate-800"
        }`}
      >
        {isSelected ? "Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
}