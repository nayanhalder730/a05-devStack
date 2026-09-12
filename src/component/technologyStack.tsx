import type { ITechnology } from "../type/type";

interface TechnologyStackProps {
  selectedTechnologies: ITechnology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function TechnologyStack({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: TechnologyStackProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">


      <h2 className="text-base font-bold text-slate-900">
        Your Stack
      </h2>

      
      <p className="mt-1 text-xs text-slate-400">
        {selectedTechnologies.length} technologies selected.
      </p>


      {selectedTechnologies.length === 0 ? (
        <div className="mt-4 flex h-24 items-center justify-center rounded-xl border border-dashed border-slate-200">
          <p className="text-xs text-slate-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <>
    
          <div className="mt-4 space-y-2">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-5 w-5 object-contain"
                  />

                  <span className="text-xs font-medium text-slate-700">
                    {technology.name}
                  </span>
                </div>

                <button
                  onClick={() => onRemove(technology.id)}
                  className="text-lg text-slate-400 transition hover:text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

  
          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-lg border border-red-200 py-2.5 text-xs font-medium text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
}