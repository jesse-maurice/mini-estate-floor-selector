# 🏢 Mini Real Estate Floor Selector

An interactive prototype that simulates navigating through a real estate project — from choosing a tower, selecting a floor, browsing apartment layouts, and viewing full layout details.

---

## 🚀 Features

- **Tower Selection**: Choose between Tower A, B, or C.
- **Floor Navigation**: View a list of floors (1–15) for each tower.
- **Apartment Layouts**: Explore 3–4 apartment units per floor with thumbnail, area, unit type, and room count.
- **Detailed View**: See a full-size layout with full metadata.
- **Smooth Animations**: Subtle scaling and background dimming on hover/tap using Framer Motion.
- **Responsive Design**: Works on both desktop and mobile.

---

## 🛠️ Tech Stack

- **React** – Core frontend framework
- **TypeScript** – Strongly typed language that compiles to JavaScript

- **Tailwind CSS** – Utility-first styling
- **Framer Motion** – For interactive hover/tap animations
- **React-Router** – For fast local development

---

## 📸 UI Preview

1. **Tower Overview →**
2. **Floor Selector →**
3. **Apartment Thumbnails →**
4. **Apartment Detail View**

## 📁 Project Structure (Simplified)

```text
mini-estate/
├── app/
│ ├── routes/
│ ├── Welcome/
│ ├── routes.tsx
│ ├── app.css

├── components/
│ ├── ApartmentCard.tsx
│ ├── ApartmentDetail.tsx
│ ├── ApartmentView.tsx
│ ├── FloorCard.tsx
│ ├── FloorView.tsx
│ ├── TowerCard.tsx
│ ├── TowerOverview.tsx

├── data/
│ └── mockData.ts
├── hooks/
│ └── useTowerViewStore.ts
├── lib/
│ └── helper.tsx
├── types/
│ └── index.ts



```

---

## ⚠️ Limitations & Tradeoffs

- 🔁 **No backend/data fetching**: All tower, floor, and layout data is hardcoded.
- 🧭 **No routing (`react-router`)**: Navigation is handled using component state managed by Zustand to simplify the prototype.
- 🗺️ **No real geolocation/context**: Not integrated with real maps, buildings, or project info.
- 📱 **Mobile animations**: Tap events simulate hover, but may behave differently on some touch devices.

---
