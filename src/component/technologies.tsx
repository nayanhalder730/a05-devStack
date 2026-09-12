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

  // Add Technology
  const handleAdd = (tech: ITechnology) => {
    // Check already selected
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

    // Add technology
    setSelectedTechnologies((prev) => [...prev, tech]);

    // Success Toast
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

  // Remove One
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

  // Remove All
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
    <section className="bg-white py-12">
      <div className="container mx-auto px-5">

        {/* Section Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Explore the Technologies
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

          {/* Technology Cards */}
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

          {/* Your Stack */}
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