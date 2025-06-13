import { useTowerViewStore } from "hooks/useTowerViewStore";
import { ArrowLeft, Home } from "lucide-react";
import { ApartmentCard } from "./ApartmentCard";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const ApartmentView = () => {
  const { selectedFloor, selectedTower, setbackToFloors } = useTowerViewStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={setbackToFloors}
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200 mb-4 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Floors
          </button>

          <div className="flex items-center flex-wrap gap-3 mb-4">
            <div className="flex items-center">
              <Home className="w-6 h-6 text-blue-600 mr-2" />
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {selectedTower?.name} - Floor {selectedFloor?.number}
              </h1>
            </div>
          </div>
          <p className="text-gray-600">
            Choose from our available units on this floor
          </p>
        </div>

        {/* Apartments Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {selectedFloor?.apartments.map((apt, i) => {
            return (
              <motion.div
                key={i}
                variants={childVariants}
                transition={{ type: "spring", bounce: 0 }}
              >
                <ApartmentCard apartment={apt} />{" "}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
