import { towers } from "data/mockData";
import { TowerCard } from "./TowerCard";
import { Building2 } from "lucide-react";
import { useTowerViewStore } from "hooks/useTowerViewStore";
import { motion } from "motion/react";

export const TowerOverview = () => {
  const state = useTowerViewStore();

  return (
    <main className="min-h-screen bg-gradient-to-br overflow-hidden from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Building2 className="w-12 h-12 text-blue-600 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Skyline Residences
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover premium living spaces in our award-winning towers. Each
            residence offers unparalleled luxury and breathtaking views.
          </p>
        </div>

        {/* Tower Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {towers.map((tower, i) => (
            <TowerCard
              key={i}
              tower={tower}
              onTowerSelect={() => state.selectTower(tower)}
            />
          ))}
        </motion.div>
      </div>
    </main>
  );
};
