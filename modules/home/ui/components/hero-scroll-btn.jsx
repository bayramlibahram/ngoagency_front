import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export const HeroScrollBtn = ({emblaApi,clsName}) => {
  return (
    <>
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className={cn(
         "absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-none text-white md:p-6 rounded-full z-10",
         clsName
        )}
      >
        <ChevronRight className="w-6 h-6 rotate-180" />
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        className={cn(
         "absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-none text-white md:p-6 rounded-full z-10",
         clsName
        )}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </>
  );
};
