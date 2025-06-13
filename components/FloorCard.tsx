import { Home, Users } from "lucide-react";
import type { Floor, Tower } from "types";

interface TowerCardProps {
  floor: Floor;
  tower: Tower;
  totalUnits: number;
  availableUnits: number;
  onFloorSelect: () => void;
}

export const FloorCard = ({
  floor,
  tower,
  totalUnits,
  availableUnits,
  onFloorSelect,
}: TowerCardProps) => {
  return (
    <div
      onClick={onFloorSelect}
      className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
    >
      <div
        className={`relative overflow-hidden bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200`}
      >
        {/* Floor Number */}
        <div
          className={`h-20 bg-gradient-to-br ${tower.color} flex items-center justify-center relative overflow-hidden`}
        >
          <div className="text-white text-2xl font-bold z-10">
            {floor.number}
          </div>
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
        </div>

        {/* Floor Info */}
        <div className="p-4">
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 mb-2">
              Floor {floor.number}
            </h3>

            <div className="flex items-center justify-center text-sm text-gray-600 mb-2">
              <Home className="w-4 h-4 mr-1" />
              <span>{totalUnits} Units</span>
            </div>

            <div className="flex items-center justify-center text-sm">
              <Users className="w-4 h-4 mr-1" />
              <span className={2 > 0 ? "text-green-600" : "text-red-500"}>
                {availableUnits} Available
              </span>
            </div>
          </div>
        </div>

        {/* Availability Bar */}
        <div className="px-4 pb-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(availableUnits / totalUnits) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
