import { useTowerViewStore } from "hooks/useTowerViewStore";
import { getStatusIcon } from "lib/helper";
import {
  ArrowLeft,
  Bath,
  Bed,
  Home,
  MapPin,
  Maximize,
  Star,
} from "lucide-react";
import { motion } from "motion/react";

export const ApartmentDetail = () => {
  const {
    selectedApartment: apartment,
    selectedTower: tower,
    selectedFloor: floor,
    setbackToApartment,
  } = useTowerViewStore();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "text-green-600 bg-green-50 border-green-200";
      case "sold":
        return "text-red-600 bg-red-50 border-red-200";
      case "reserved":
        return "text-amber-600 bg-amber-50 border-amber-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  if (!apartment) return null;

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={setbackToApartment}
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200 mb-4 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Apartments
          </button>

          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div>
              <div className="flex items-center mb-2">
                <Home className="w-6 h-6 text-blue-600 mr-2" />
                <h1 className="text-3xl font-bold text-gray-900">
                  Unit {apartment?.unit}
                </h1>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-1" />
                <span>
                  {tower?.name} - Floor {floor?.number}
                </span>
              </div>
            </div>

            <div
              className={`px-4 py-2 rounded-xl border-2 flex items-center gap-2 ${getStatusColor(
                apartment.status
              )}`}
            >
              {getStatusIcon(apartment.status)}
              <span className="font-semibold capitalize">
                {apartment?.status}
              </span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Layout Image */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={apartment.layoutImage}
                alt={`Unit ${apartment.unit} Layout`}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-sm text-gray-600">Floor Plan</div>
                  <div className="font-bold text-gray-900">
                    {apartment.type}
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail */}
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={apartment.thumbnail}
                alt={`Unit ${apartment.unit}`}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            {/* Price */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                ${apartment.price.toLocaleString()}
              </div>
              <div className="text-gray-600">
                ${Math.round(apartment.price / apartment.area)} per sq ft
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Specifications
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Maximize className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {apartment.area}
                    </div>
                    <div className="text-sm text-gray-600">Square Feet</div>
                  </div>
                </div>

                {apartment.rooms > 0 && (
                  <div className="flex items-center">
                    <Bed className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {apartment?.rooms}
                      </div>
                      <div className="text-sm text-gray-600">Bedrooms</div>
                    </div>
                  </div>
                )}

                <div className="flex items-center">
                  <Bath className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {apartment?.bathrooms}
                    </div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Home className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {apartment?.type}
                    </div>
                    <div className="text-sm text-gray-600">Unit Type</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
              <div className="grid grid-cols-1 gap-3">
                {apartment.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="w-4 h-4 text-amber-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            {apartment?.status === "available" && (
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Schedule a Viewing
                </button>
                <div className="text-center text-sm text-gray-500 mt-3">
                  Contact our sales team to arrange a private tour
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
