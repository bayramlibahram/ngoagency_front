import * as React from "react";
import { cn } from "@/lib/utils";
import { Award, ExternalLink, Mail, Phone } from "lucide-react";

const DirectorProfileSimple = (
  ({
    className,
    name,
    position,
    image,
    biography,
    experienceYears,
    achievements = [],
    contact,
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

    return (
      <div
        ref={ref}
        className={cn(
          "bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300",
          className
        )}
        {...props}
      >
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-2/5 relative">
            <div className="aspect-[4/5] md:h-full relative overflow-hidden">
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
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              
              {/* Experience badge */}
              {experienceYears && (
                <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full shadow-lg">
                  <span className="text-xs font-bold">{experienceYears}+ years</span>
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center px-3 py-1 bg-gold-100 text-gold-800 rounded-full text-xs font-semibold mb-3">
                <Award className="w-3 h-3 mr-1" />
                {position}
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-2 leading-tight">
                {name}
              </h2>
            </div>

            {/* Biography */}
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base line-clamp-4">
                {biography}
              </p>
            </div>

            {/* Achievements */}
            {achievements.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-navy-900 mb-3">Key Achievements</h3>
                <div className="space-y-2">
                  {achievements.slice(0, 3).map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-600 text-xs font-medium">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact */}
            {contact && (
              <div className="space-y-2">
                {contact.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-navy-500" />
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-navy-700 hover:text-gold-600 transition-colors text-sm font-medium"
                    >
                      {contact.email}
                    </a>
                  </div>
                )}
                
                {contact.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-navy-500" />
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-navy-700 hover:text-gold-600 transition-colors text-sm font-medium"
                    >
                      {contact.phone}
                    </a>
                  </div>
                )}
                
                {contact.linkedin && (
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4 text-navy-500" />
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy-700 hover:text-gold-600 transition-colors text-sm font-medium flex items-center gap-1"
                    >
                      LinkedIn
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

DirectorProfileSimple.displayName = "DirectorProfileSimple";

export { DirectorProfileSimple };