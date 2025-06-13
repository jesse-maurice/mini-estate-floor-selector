import type { Apartment, Floor, Tower, ViewType } from "types";
import { create } from "zustand";

type AppState = {
  currentView: ViewType;
  selectedTower: Tower | null;
  selectedFloor: Floor | null;
  selectedApartment: Apartment | null;

  setCurrentView: (view: AppState["currentView"]) => void;
  selectTower: (tower: Tower | null) => void;
  selectFloor: (floor: Floor | null) => void;
  selectApartment: (apartment: Apartment | null) => void;

  setbackToApartment: () => void;
  setbackToFloors: () => void;
  setbackToTowers: () => void;
};

export const useTowerViewStore = create<AppState>((set) => ({
  currentView: "towers",
  selectedTower: null,
  selectedFloor: null,
  selectedApartment: null,

  setCurrentView: (view) => set({ currentView: view }),

  selectTower: (tower) =>
    set({
      currentView: "floors",
      selectedTower: tower,
      selectedFloor: null,
      selectedApartment: null,
    }),

  selectFloor: (floor) =>
    set({
      currentView: "apartments",
      selectedFloor: floor,
      selectedApartment: null,
    }),

  selectApartment: (apartment) =>
    set({
      currentView: "apartment-detail",
      selectedApartment: apartment,
    }),

  setbackToApartment: () =>
    set({ currentView: "apartments", selectedApartment: null }),
  setbackToFloors: () =>
    set({
      currentView: "floors",
      selectedFloor: null,
      selectedApartment: null,
    }),
  setbackToTowers: () =>
    set({
      currentView: "towers",
      selectedTower: null,
      selectedFloor: null,
      selectedApartment: null,
    }),
}));
