import { useTowerViewStore } from "hooks/useTowerViewStore";
import { ArrowLeft, Building2 } from "lucide-react";
import { FloorCard } from "./FloorCard";
import { dataFloors } from "data/mockData";
import type { Tower } from "types";
import { motion } from "motion/react";

export const FloorView = () => {
  const { selectedTower, selectFloor, setbackToTowers } = useTowerViewStore();

  const floors = dataFloors.filter(
    (floor) => floor.towerId === selectedTower?.id
  );

  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={setbackToTowers}
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200 mb-4 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Towers
          </button>

          <div className="flex items-center mb-4">
            <Building2 className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {selectedTower?.name}
            </h1>
          </div>
          <p className="text-gray-600 text-lg">{selectedTower?.description}</p>
        </div>

        {/* Floors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-4">
          {floors.map((floor, i) => {
            const availableUnits = floor.apartments.filter(
              (apt) => apt.status === "available"
            );
            const totalUnits = floor.apartments.length;

            return (
              <FloorCard
                key={i}
                onFloorSelect={() => selectFloor(floor)}
                availableUnits={availableUnits.length}
                totalUnits={totalUnits}
                floor={floor}
                tower={selectedTower as Tower}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
