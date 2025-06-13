import type { Apartment, Floor, Tower } from "types";

export const towers: Tower[] = [
  {
    id: "tower-a",
    name: "Tower A",
    description: "Premium residential tower with panoramic city views",
    floors: 15,
    color: "from-blue-500 to-blue-600",
    image:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "tower-b",
    name: "Tower B",
    description: "Modern living spaces with state-of-the-art amenities",
    floors: 12,
    color: "from-emerald-500 to-emerald-600",
    image:
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "tower-c",
    name: "Tower C",
    description: "Luxury penthouse collection with exclusive features",
    floors: 13,
    color: "from-amber-500 to-amber-600",
    image:
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const apartmentImages = [
  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const layoutImages = [
  "https://images.pexels.com/photos/6283968/pexels-photo-6283968.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/6283961/pexels-photo-6283961.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/6283969/pexels-photo-6283969.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/6283965/pexels-photo-6283965.jpeg?auto=compress&cs=tinysrgb&w=800",
];

const generateApartments = (
  floorId: string,
  floorNumber: number
): Apartment[] => {
  const units = ["A", "B", "C", "D"];
  const types = ["Studio", "1BR", "2BR", "3BR"];

  const features = [
    ["Balcony", "City View", "Modern Kitchen"],
    ["Walk-in Closet", "Ensuite", "Hardwood Floors"],
    ["Floor-to-ceiling Windows", "Open Concept", "In-unit Laundry"],
    ["Private Terrace", "Premium Finishes", "Smart Home Features"],
  ];

  return units.map((unit, index) => ({
    id: `${floorId}-${unit}`,
    floorId,
    unit: `${floorNumber}${unit}`,
    type: types[index],
    area: 450 + index * 200 + Math.floor(Math.random() * 100),
    rooms: Math.floor(Math.random() * 3) + 1,
    bathrooms: Math.floor(Math.random() * 2) + 1,
    price:
      450000 +
      index * 150000 +
      floorNumber * 10000 +
      Math.floor(Math.random() * 50000),
    thumbnail: apartmentImages[index],
    layoutImage: layoutImages[index],
    features: features[index],
    status:
      Math.random() > 0.7
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
