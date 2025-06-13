import { Layers, MapPin } from "lucide-react";
import type { Tower } from "types";

interface TowerCardProps {
  tower: Tower;
  onTowerSelect: (tower: Tower) => void;
}

export const TowerCard = ({ tower, onTowerSelect }: TowerCardProps) => {
  return (
    <div
      onClick={() => onTowerSelect(tower)}
      className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
    >
      <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={tower.image}
            alt={tower.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${tower.color} opacity-60 group-hover:opacity-50 transition-opacity duration-300`}
          />
          <div className="absolute top-4 right-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-800">
              {tower.floors} Floors
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              {tower.name}
            </h3>
            <Layers className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
          </div>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {tower.description}
          </p>

          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-1" />
            <span>Premium Location</span>
          </div>
        </div>
      </div>
    </div>
  );
};
