"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, X } from "lucide-react";


import { boardMembers } from "@/constants";
import { MotionDiv } from "@/components/motion-components/motion-div";
import PageHeader from "@/components/layout-components/page-header";

function GovernmentBoardDesign({ boardMembers, handleMemberClick }) {
  const featuredMember = boardMembers.find((member) => member.isFeatured);
  const otherMembers = boardMembers.filter((member) => !member.isFeatured);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Member Section */}
        {featuredMember && (
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="lg:w-2/5 relative">
                  <div className="aspect-[4/5] lg:h-full relative overflow-hidden">
                    <img
                      src={featuredMember.image}
                      alt={featuredMember.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target;
                        target.src =
                          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-8">
                    <div className="inline-flex items-center px-4 py-2 bg-gold-100 text-gold-800 rounded-full text-sm font-semibold mb-4">
                      <Award className="w-4 h-4 mr-2" />
                      Şura Sədri
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4 leading-tight">
                      {featuredMember.name}
                    </h2>

                    <p className="text-xl text-gold-600 font-semibold mb-6">
                      {featuredMember.position}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {featuredMember.biography.currentRole}
                    </p>

                    <motion.button
                      onClick={() => handleMemberClick(featuredMember.id)}
                      className="inline-flex items-center gap-3 bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Ətraflı bioqrafiya</span>
                      <svg
                        className="w-5 h-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        )}

        {/* Other Members Section */}
        <div>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            {/*<h3 className="text-3xl font-bold text-navy-900 mb-4">Şura Üzvü</h3>*/}
            <div className="w-16 h-1 bg-gold-500 mx-auto"></div>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherMembers.map((member, index) => (
              <MotionDiv
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gold-200 transform hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target;
                        target.src =
                          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Overlay Content */}
                    <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-white font-bold text-xl mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {member.name}
                      </h4>
                      <p className="text-gold-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        {member.position}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-gold-600 font-semibold text-sm">{member.position}</p>
                    </div>

                    <div className="border-l-4 border-gold-500 pl-4 mb-6">
                      <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                        {member.biography.currentRole}
                      </p>
                    </div>

                    <button
                      onClick={() => handleMemberClick(member.id)}
                      className="w-full bg-gray-50 hover:bg-navy-900 hover:text-white text-navy-900 py-3 px-4 rounded-xl font-semibold transition-all duration-300 text-sm group/btn"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Bioqrafiyasını oxu
                        <svg
                          className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Board = () => {
  const [expandedMember, setExpandedMember] = useState(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && expandedMember) {
        setExpandedMember(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [expandedMember]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (expandedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [expandedMember]);

  const handleMemberClick = (memberId) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
  };

  const handleCloseModal = () => {
    setExpandedMember(null);
  };

  const breadcrumbs = [
    { label: "Haqqımızda", href: "/about" },
    { label: "Rəhbərlik", href: "/about/management" },
    { label: "Müşahidə Şurası" },
  ];

  return (
    <>
      <PageHeader
        title="Müşahidə Şurası"
        subtitle="Agentliyin strateji istiqamətlərinin müəyyənləşdirilməsi və nəzarət funksiyalarının həyata keçirilməsi"
        breadcrumbs={breadcrumbs}
      />

      <div className="min-h-screen">
        <GovernmentBoardDesign boardMembers={boardMembers} handleMemberClick={handleMemberClick} />

        {/* Enhanced Bio Modal */}
        <AnimatePresence>
          {expandedMember && (
            <MotionDiv
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Backdrop */}
              <MotionDiv
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseModal}
              />

              {/* Modal Content */}
              <MotionDiv
                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                {(() => {
                  const member = boardMembers.find((m) => m.id === expandedMember);
                  if (!member) return null;

                  return (
                    <>
                      {/* Close Button */}
                      <button
                        onClick={handleCloseModal}
                        className="absolute top-6 right-6 z-10 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                        aria-label="Bağla"
                      >
                        <X className="h-6 w-6 text-gray-600" />
                      </button>

                      <div className="overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                        {/* Header */}
                        <div className="relative bg-gradient-to-r from-navy-900 to-navy-800 text-white p-8">
                          <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="relative">
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-24 h-24 rounded-full border-4 border-gold-400 shadow-lg"
                              />
                              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                                <Award className="w-4 h-4 text-white" />
                              </div>
                            </div>
                            <div className="text-center md:text-left">
                              <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
                              <p className="text-gold-300 text-lg font-semibold">
                                {member.position}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Biography Content */}
                        <div className="p-8 space-y-8">
                          {/* Current Role */}
                          <div>
                            <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-3">
                              <div className="w-8 h-8 bg-gold-100 rounded-lg flex items-center justify-center">
                                <Briefcase className="h-5 w-5 text-gold-600" />
                              </div>
                              Hazırkı Vəzifə və Məsuliyyətlər
                            </h3>
                            <div className="bg-gray-50 rounded-xl p-6">
                              <p className="text-gray-700 leading-relaxed text-lg">
                                {member.biography.currentRole}
                              </p>
                            </div>
                          </div>

                          {/* Education */}
                          <div>
                            <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-3">
                              <div className="w-8 h-8 bg-gold-100 rounded-lg flex items-center justify-center">
                                <GraduationCap className="h-5 w-5 text-gold-600" />
                              </div>
                              Təhsil Tarixi
                            </h3>
                            <div className="space-y-3">
                              {member.biography.education.map((edu, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-gold-200 transition-colors"
                                >
                                  <div className="w-3 h-3 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <p className="text-gray-700 font-medium">{edu}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Experience */}
                          <div>
                            <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-3">
                              <div className="w-8 h-8 bg-gold-100 rounded-lg flex items-center justify-center">
                                <Briefcase className="h-5 w-5 text-gold-600" />
                              </div>
                              Karyera Xronologiyası
                            </h3>
                            <div className="space-y-3">
                              {member.biography.experience.map((exp, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-gold-200 transition-colors"
                                >
                                  <div className="w-3 h-3 bg-navy-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <p className="text-gray-700 font-medium">{exp}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Achievements */}
                          <div>
                            <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-3">
                              <div className="w-8 h-8 bg-gold-100 rounded-lg flex items-center justify-center">
                                <Award className="h-5 w-5 text-gold-600" />
                              </div>
                              Əsas Nailiyyətlər
                            </h3>
                            <div className="space-y-3">
                              {member.biography.achievements.map((achievement, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-4 p-4 bg-gradient-to-r from-gold-50 to-gold-100 border border-gold-200 rounded-xl"
                                >
                                  <div className="w-3 h-3 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <p className="text-gray-700 font-medium">{achievement}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </MotionDiv>
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Board;
