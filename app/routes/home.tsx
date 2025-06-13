import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mini Estate Floor Selector" },
    { name: "description", content: "Monochrome" },
  ];
}

export default function Home() {
  return <Welcome />;
}
