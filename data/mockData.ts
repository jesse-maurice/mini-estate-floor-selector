import type { Apartment, Floor, Tower } from "types";

export const towers: Tower[] = [
  {
    id: "tower-north",
    name: "North Tower",
    description: "Sleek high-rise homes with curated design and skyline presence",
    floors: 10,
    color: "from-gray-700 to-gray-900",
    image:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "tower-east",
    name: "East Tower",
    description: "Minimalist residences framing tranquil urban vistas",
    floors: 14,
    color: "from-neutral-600 to-neutral-800",
    image:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "tower-west",
    name: "West Tower",
    description: "Bright open-plan spaces with uninterrupted citylines",
    floors: 11,
    color: "from-slate-600 to-slate-800",
    image:
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const apartmentImages = [
  "https://images.pexels.com/photos/3965541/pexels-photo-3965541.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/6969862/pexels-photo-6969862.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1212053/pexels-photo-1212053.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const layoutImages = [
  "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4107280/pexels-photo-4107280.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
];

const generateApartments = (
  floorId: string,
  floorNumber: number
): Apartment[] => {
  const units = ["A", "B", "C", "D"];
  const types = ["Studio", "1BR", "2BR", "Loft"];

  const features = [
    ["Balcony", "Compact Kitchen", "City View"],
    ["Ensuite Bath", "Built-in Storage", "Natural Light"],
    ["Dual Aspect layout", "Integrated Appliances", "Neutral tones"],
    ["Open Mezzanine", "Skyline view", "Minimal detail"],
  ];

  return units.map((unit, idx) => ({
    id: `${floorId}-${unit}`,
    floorId,
    unit: `${floorNumber}${unit}`,
    type: types[idx],
    area: 420 + idx * 180 + Math.floor(Math.random() * 80),
    rooms: Math.max(1, idx), // 0→1 room minimum
    bathrooms: Math.floor(Math.random() * 2) + 1,
    price:
      400_000 +
      idx * 130_000 +
      floorNumber * 8_000 +
      Math.floor(Math.random() * 40_000),
    thumbnail: apartmentImages[idx],
    layoutImage: layoutImages[idx],
    features: features[idx],
    status:
      Math.random() > 0.6
        ? Math.random() > 0.5
          ? "sold"
          : "reserved"
        : "available",
  }));
};

export const dataFloors: Floor[] = towers.flatMap((tower) =>
  Array.from({ length: tower.floors }, (_, i) => {
    const floorNumber = i + 1;
    const floorId = `${tower.id}-floor-${floorNumber}`;

    return {
      id: floorId,
      number: floorNumber,
      towerId: tower.id,
      apartments: generateApartments(floorId, floorNumber),
    };
  })
);
