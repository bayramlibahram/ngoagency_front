import { cn } from "@/lib/utils";
import { MotionH1 } from "@/components/motion-components/motion-h1";
import { MotionDiv } from "@/components/motion-components/motion-div";

const options = [
  {
    size: {
      large: "text-3xl md:text-4xl",
      medium: "text-xl md:text-2xl",
      small: "text-base md:text-lg",
    },
    align: {
      left: "text-start",
      center: "text-center",
      right: "text-end",
    },
    color: {
      primary: "text-gray-900",
      secondary: "text-gold-500",
    },
    family: {
      inter: "font-[Inter, sans-serif]",
      roman: "font-['Times_New_Roman']",
    },
    weight: {
      normal: "font-normal",
      medium: "font-semibold",
      bold: "font-bold",
    }
  },
];

export default function SectionTitle({ title,twVariants = {}, variants, clsName }) {
  const config = options[0];

  
  const sizeClass = config.size[twVariants.size];
  const alignClass = config.align[twVariants.align];
  const colorClass = config.color[twVariants.color];
  const weightClass = config.weight[twVariants.weight];
  const familyClass = config.family[twVariants.family];

  const finalClassName = cn(
    "relative mb-6 tracking-wide font-bold", // static styles
    sizeClass,
    alignClass,
    colorClass,
    weightClass,
    familyClass,
    clsName
  );
  return (
    <>
      <MotionH1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={variants}
        className={finalClassName}
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
