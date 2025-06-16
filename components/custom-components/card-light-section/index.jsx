import { Card } from "@/components/ui/card";


export default function CardLightSection({ children,card }) {
   return <Card className={`p-6 transition-shadow group ${card === "card" ? "hover:shadow-lg": ""}`}>{children}</Card>
}