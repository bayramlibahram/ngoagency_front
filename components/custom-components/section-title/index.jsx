import { MotionH1 } from "@/components/motion-components/motion-h1";
import { MotionDiv } from "@/components/motion-components/motion-div";

export default function SectionTitle({ title }) {
  return (
    <>
      <MotionH1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-4xl md:text-5xl text-center mb-8 text-gray-800 font-prata`}
      >
        {title}
      </MotionH1>

      <MotionDiv
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-16 h-1 bg-red-500 mx-auto mb-8"
      />
    </>
  );
}
