import { Impressum } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Handwerk Ecke",
};

export default function ImpressumPage() {
  return <Impressum />;
}
