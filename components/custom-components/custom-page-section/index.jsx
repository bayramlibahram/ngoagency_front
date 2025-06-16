import SectionWrapper from "../section-wrapper";
import ScrollAnimationWrapper from "../scroll-animation";

export default function CustomPageSection({ children }) {
   return (
      <SectionWrapper>
         <ScrollAnimationWrapper>
            {children}
         </ScrollAnimationWrapper>
      </SectionWrapper>
   )
}