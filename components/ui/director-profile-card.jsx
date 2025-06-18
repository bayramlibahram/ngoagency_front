import * as React from "react";
import { cn } from "@/lib/utils";
import { Award, ExternalLink, Mail, Phone } from "lucide-react";

const DirectorProfileCard = (
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
          "bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group",
          className
        )}
        {...props}
      >
        {/* Image Section */}
        <div className="relative h-80 overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full animate-pulse" />
            </div>
          )}
          
          <img
            src={imageError ? "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" : image}
            alt={`${name} - ${position}`}
            className={cn(
              "w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            loading="lazy"
            onLoad={handleImageLoad}
            onError={handleImageError}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Experience badge */}
          {experienceYears && (
            <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full shadow-lg">
              <span className="text-xs font-bold">{experienceYears}+ years</span>
            </div>
          )}
          
          {/* Overlay Content */}
          <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white font-bold text-xl mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {name}
            </h3>
            <p className="text-gold-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
              {position}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="mb-4">
            <div className="inline-flex items-center px-3 py-1 bg-gold-100 text-gold-800 rounded-full text-xs font-semibold mb-3">
              <Award className="w-3 h-3 mr-1" />
              {position}
            </div>
            
            <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
              {name}
            </h3>
          </div>

          {/* Biography */}
          <div className="border-l-4 border-gold-500 pl-4 mb-6">
            <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
              {biography}
            </p>
          </div>

          {/* Achievements */}
          {achievements.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-navy-900 mb-3">Key Achievements</h4>
              <div className="space-y-2">
                {achievements.slice(0, 2).map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-600 text-xs font-medium line-clamp-2">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact */}
          {contact && (
            <div className="space-y-2 pt-4 border-t border-gray-100">
              {contact.email && (
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-navy-500" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-navy-700 hover:text-gold-600 transition-colors text-xs font-medium truncate"
                  >
                    {contact.email}
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
                    className="text-navy-700 hover:text-gold-600 transition-colors text-xs font-medium flex items-center gap-1"
                  >
                    LinkedIn Profile
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);

DirectorProfileCard.displayName = "DirectorProfileCard";

export { DirectorProfileCard };