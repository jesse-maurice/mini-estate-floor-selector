import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mini E-state prototype" },
    { name: "description", content: "Skyline Residences" },
  ];
}

export default function Home() {
  return <Welcome />;
}
