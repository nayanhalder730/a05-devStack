import { use, useState } from "react";
import { toast, Bounce } from "react-toastify";

import type { ITechnology } from "../type/type";
import TechnologyCart from "./technologyCart";
import TechnologyStack from "./technologyStack";

interface TechnologiesProps {
  technologies: Promise<ITechnology[]>;
}

export default function Technologies({
  technologies,
}: TechnologiesProps) {
  const technology = use(technologies);

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnology[]
  >([]);

  
  const handleAdd = (tech: ITechnology) => {
   
    const alreadySelected = selectedTechnologies.some(
      (item) => item.id === tech.id
    );

    if (alreadySelected) {
      toast.info(`${tech.name} is already in your stack!`, {
        position: "bottom-right",
        autoClose: 3000,
        theme: "light",
      });

      return;
    }

    setSelectedTechnologies((prev) => [...prev, tech]);

    toast.success(`🦄 ${tech.name} added to your stack!`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleRemove = (id: string) => {
    const removedTechnology = selectedTechnologies.find(
      (item) => item.id === id
    );

    setSelectedTechnologies((prev) =>
      prev.filter((item) => item.id !== id)
    );

    if (removedTechnology) {
      toast.success(
        `${removedTechnology.name} removed from your stack.`,
        {
          position: "bottom-right",
          autoClose: 3000,
          theme: "light",
        }
      );
    }
  };

  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);

    toast.success("All technologies removed from your stack.", {
      position: "bottom-right",
      autoClose: 3000,
      theme: "light",
    });
  };

  return (
    <section>
      <div className="container mx-auto ">

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900">
            Explore the <span className="text-[#cb4fb9]">Technologies</span>
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">

              {technology.map((item) => (
                <TechnologyCart
                  key={item.id}
                  technology={item}
                  onAdd={handleAdd}
                  isSelected={selectedTechnologies.some(
                    (tech) => tech.id === item.id
                  )}
                />
              ))}

            </div>
          </div>

          <div className="lg:col-span-1">
            <TechnologyStack
              selectedTechnologies={selectedTechnologies}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>

        </div>
      </div>
    </section>
  );
}