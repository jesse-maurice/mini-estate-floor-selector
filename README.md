# 🏢 Interactive Property Explorer

A lightweight and responsive mock interface for navigating through a fictional real estate complex from picking a tower, browsing its floors, exploring apartment options, and inspecting detailed layouts.

---

## 🚀 Features

- **Tower Browsing** – Start by choosing from multiple high-rise towers.
- **Floor Selector** – View floor levels (1–15) and their available apartments.
- **Apartment Grid** – Browse 3–4 units per floor, showing layout thumbnails, room counts, and square footage.
- **Detailed Layout View** – Click into an apartment for expanded layout info and key metadata.
- **Motion Effects** – Smooth hover and tap animations powered by Framer Motion.
- **Mobile-Friendly** – Fully responsive and touch-optimized.

---

## 🛠️ Tech Stack

- **React** – Component-based UI
- **TypeScript** – Type safety throughout the app
- **Tailwind CSS** – Utility-based styling framework
- **Framer Motion** – UI animation library
- **Zustand** – Lightweight global state management

---

## 📸 UI Preview

1. **Start at the tower selection screen**
2. **Choose a floor**
3. **Browse apartment cards**
4. **View layout details**


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

## ⚠️ Things to Note

- 🔁 **No API / Backend** – All data is static and locally mocked.
- 🧭 **Routing is omitted** – Navigation handled via local component state and Zustand.
- 🗺️ **No map or live project integration** – This is a self-contained demo, not tied to actual real estate listings.
- 📱 **Touch Interactions** – While tap events are supported, hover animations may vary slightly on mobile devices.

---
