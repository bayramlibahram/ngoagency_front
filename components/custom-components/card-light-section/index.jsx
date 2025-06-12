import { Card } from "@/components/ui/card";

export default function CardLightSection({ children }) {
   return <Card className="p-6 hover:shadow-lg transition-shadow group">{children}</Card>
}