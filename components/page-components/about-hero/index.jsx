import SectionTitle from "@/components/custom-components/section-title";
import { MotionDiv } from "@/components/motion-components/motion-div";

export default function AboutHero() {
  return (
    <section className="bg-[#f8f9fa] rounded-lg overflow-hidden mb-16">
      <div className="flex flex-col lg:flex-row">
        <MotionDiv
          className="lg:w-[40%]"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
            alt="Agency workspace"
            className="w-full h-full object-cover"
          />
        </MotionDiv>
        <MotionDiv
          className="lg:w-[60%] p-8 lg:p-12"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionTitle 
            title={"Qeyri-Hökumət Təşkilatlarına Dövlət Dəstəyi Agentliyi"}
            twVariants={{
              size: "large",
              color: "primary",
            }}
          />
          <div className="space-y-6 text-gray-700">
            <p>
              Agentlik vətəndaş cəmiyyəti təşəbbüslərinə və QHT-lərə dəstək göstərən dövlət
              qurumudur. Biz QHT-lərin fəaliyyətinin təkmilləşdirilməsi, onların potensialının
              gücləndirilməsi və inkişafının dəstəklənməsi istiqamətində çalışırıq.
            </p>
            <p>
              Agentliyin əsas məqsədi vətəndaş cəmiyyətinin inkişafına töhfə vermək, QHT-lərin
              fəaliyyətini dəstəkləmək və bu sahədə şəffaflığı artırmaqdır. Biz QHT-lərlə sıx
              əməkdaşlıq edərək, onların layihələrini maliyyələşdirir və texniki dəstək göstəririk.
            </p>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
