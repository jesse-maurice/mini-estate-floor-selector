import { useTowerViewStore } from "hooks/useTowerViewStore";
import { getStatusIcon } from "lib/helper";
import { Bath, Bed, Maximize } from "lucide-react";
import type { Apartment } from "types";

interface ApartmentCardProps {
  apartment: Apartment;
}

export const ApartmentCard = ({ apartment }: ApartmentCardProps) => {
  const selectApartment = useTowerViewStore().selectApartment;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "text-green-600 bg-green-50";
      case "sold":
        return "text-red-600 bg-red-50";
      case "reserved":
        return "text-amber-600 bg-amber-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div
      onClick={() => selectApartment(apartment)}
      className="group transform cursor-pointer transition-all duration-300 hover:scale-105 relative  
      "
    >
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={apartment.thumbnail}
            alt={`Unit ${apartment.unit}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Status Badge */}
          <div className="absolute top-3 right-3">
            <div
              className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(
                apartment.status
              )}`}
            >
              {getStatusIcon(apartment.status)}
              <span className="capitalize">{apartment.status}</span>
            </div>
          </div>

          {/* Unit Number */}
          <div className="absolute bottom-3 left-3">
            <div className="bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-lg font-bold">
              Unit {apartment.unit}
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900">
              {apartment.type}
            </h3>
            <div className="text-lg font-bold text-blue-600">
              ${apartment.price.toLocaleString()}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center">
                <Maximize className="w-4 h-4 mr-1" />
                <span>{apartment.area} sq ft</span>
              </div>
              {apartment.rooms > 0 && (
                <div className="flex items-center">
                  <Bed className="w-4 h-4 mr-1" />
                  <span>{apartment.rooms} bed</span>
                </div>
              )}
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <Bath className="w-4 h-4 mr-1" />
              <span>
                {apartment.bathrooms}{" "}
                {apartment.bathrooms === 1 ? "bathroom" : "bathrooms"}
              </span>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-1">
            {apartment.features.slice(0, 2).map((feature, index) => (
              <div
                key={index}
                className="text-xs text-gray-500 flex items-center"
              >
                <div className="w-1 h-1 bg-blue-400 rounded-full mr-2" />
                {feature}
              </div>
            ))}
          </div>

          {/* Price per sq ft */}
          <div className="mt-4 pt-3 border-t border-gray-100">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Price per sq ft</span>
              <span className="font-medium">
                ${Math.round(apartment.price / apartment.area)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
