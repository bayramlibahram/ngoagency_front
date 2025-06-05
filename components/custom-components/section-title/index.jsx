import { MotionH1 } from "@/components/motion-components/motion-h1";
import { MotionDiv } from "@/components/motion-components/motion-div";
import { cn } from "@/lib/utils";

export default function SectionTitle({ title,variants,clsName }) {
  return (
    <>
      <MotionH1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={variants}
        className={cn(
          "relative text-center text-3xl md:text-4xl font-bold text-gold-500 mb-6 font-['Times_New_Roman'] tracking-wide",
          clsName
        )}
      >
        {title}
      </MotionH1>

      {/* <MotionDiv
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-16 h-1 bg-red-500 mx-auto mb-8"
      /> */}
    </>
  );
}
