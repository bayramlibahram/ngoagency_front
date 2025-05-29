import React from "react";
import ScrollAnimationWrapper from "@/components/custom-components/scroll-animation";
import AnimationComponent from "@/components/custom-components/animation-component";
import BlogCard from "@/components/page-components/blog-card";

export default function BlogList({ lang, data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
      {data?.map((blog, index) => {
        return (
          <React.Fragment key={blog.id}>
            <ScrollAnimationWrapper>
              <AnimationComponent className="h-full" delay={index * 0.1}>
                <BlogCard blog={blog} lang={lang} />
              </AnimationComponent>
            </ScrollAnimationWrapper>
          </React.Fragment>
        );
      })}
    </div>
  );
}
