import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, ExternalLink, Mail, Phone } from "lucide-react";

const DirectorProfile = (
  ({
    className,
    name,
    position,
    image,
    biography,
    experienceYears,
    achievements = [],
    specializations = [],
    education = [],
    experience = [],
    contact,
    layout = "horizontal",
    imageSize = "medium",
    showContact = true,
    showAchievements = true,
    ...props
  }, ref) => {
    const [imageLoaded, setImageLoaded] = React.useState(false);
    const [imageError, setImageError] = React.useState(false);

    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    const handleImageError = () => {
      setImageError(true);
      setImageLoaded(true);
    };

    const getImageSizeClasses = () => {
      switch (imageSize) {
        case "small":
          return "w-full max-w-xs aspect-[3/4]";
        case "large":
          return "w-full max-w-2xl aspect-[3/4]";
        default:
          return "w-full max-w-lg aspect-[3/4]";
      }
    };

    const getLayoutClasses = () => {
      return layout === "vertical" 
        ? "flex flex-col items-center text-center" 
        : "grid lg:grid-cols-5 gap-8 lg:gap-12 items-start";
    };

    const getContentClasses = () => {
      return layout === "vertical" 
        ? "w-full max-w-4xl mt-8" 
        : "lg:col-span-3 space-y-6";
    };

    const getImageContainerClasses = () => {
      return layout === "vertical" 
        ? "flex justify-center" 
        : "lg:col-span-2";
    };

    return (
      <div
        ref={ref}
        className={cn(
          "bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden",
          className
        )}
        {...props}
      >
        <div className={cn("p-6 md:p-8 lg:p-12", getLayoutClasses())}>
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: layout === "horizontal" ? -50 : 0, y: layout === "vertical" ? -30 : 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8 }}
            className={getImageContainerClasses()}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <div className={cn("relative", getImageSizeClasses())}>
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                      <div className="w-16 h-16 bg-gray-300 rounded-full animate-pulse" />
                    </div>
                  )}
                  
                  <img
                    src={imageError ? "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" : image}
                    alt={`${name} - ${position}`}
                    className={cn(
                      "w-full h-full object-cover object-top transition-opacity duration-500",
                      imageLoaded ? "opacity-100" : "opacity-0"
                    )}
                    loading="lazy"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                  
                  {/* Subtle overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/10 to-transparent" />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gold-200 to-navy-200 rounded-2xl -z-10 opacity-20" />
              
              {/* Experience badge */}
              {experienceYears && (
                <div className="absolute -bottom-4 -right-4 bg-gold-500 text-white px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-bold">{experienceYears}+ years</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: layout === "horizontal" ? 50 : 0, y: layout === "vertical" ? 30 : 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={getContentClasses()}
          >
            {/* Header Information */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-gold-100 text-gold-800 rounded-full text-sm font-semibold">
                <Award className="w-4 h-4 mr-2" />
                {position}
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
                {name}
              </h1>
            </div>

            {/* Biography */}
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {biography}
              </p>
            </div>

            {/* Specializations */}
            {specializations.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-navy-900">Key Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {specializations.map((spec, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-navy-100 text-navy-800 rounded-full text-sm font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Education & Experience Grid */}
            {(education.length > 0 || experience.length > 0) && (
              <div className="grid md:grid-cols-2 gap-6">
                {/* Education */}
                {education.length > 0 && (
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-navy-900 mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gold-100 rounded-lg flex items-center justify-center">
                        <GraduationCap className="h-5 w-5 text-gold-600" />
                      </div>
                      Education
                    </h3>
                    <div className="space-y-3">
                      {education.map((edu, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-700 text-sm font-medium">{edu}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Experience */}
                {experience.length > 0 && (
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-navy-900 mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gold-100 rounded-lg flex items-center justify-center">
                        <Briefcase className="h-5 w-5 text-gold-600" />
                      </div>
                      Experience
                    </h3>
                    <div className="space-y-3">
                      {experience.map((exp, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-navy-500 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-700 text-sm font-medium">{exp}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Achievements */}
            {showAchievements && achievements.length > 0 && (
              <div className="bg-gradient-to-r from-gold-50 to-gold-100 rounded-xl p-6 border border-gold-200">
                <h3 className="text-lg font-semibold text-navy-900 mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold-200 rounded-lg flex items-center justify-center">
                    <Award className="h-5 w-5 text-gold-700" />
                  </div>
                  Key Achievements
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                      <div className="w-2 h-2 bg-gold-600 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700 text-sm font-medium">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Information */}
            {showContact && contact && (
              <div className="bg-navy-50 rounded-xl p-6 border border-navy-200">
                <h3 className="text-lg font-semibold text-navy-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  {contact.email && (
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-navy-500" />
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-navy-700 hover:text-gold-600 transition-colors font-medium"
                      >
                        {contact.email}
                      </a>
                    </div>
                  )}
                  
                  {contact.phone && (
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-navy-500" />
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-navy-700 hover:text-gold-600 transition-colors font-medium"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  )}
                  
                  {contact.linkedin && (
                    <div className="flex items-center gap-3">
                      <ExternalLink className="h-5 w-5 text-navy-500" />
                      <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy-700 hover:text-gold-600 transition-colors font-medium flex items-center gap-1"
                      >
                        LinkedIn Profile
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    );
  }
);

DirectorProfile.displayName = "DirectorProfile";

export { DirectorProfile };