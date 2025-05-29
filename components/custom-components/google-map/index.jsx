"use client";

import React from "react";

const GoogleMap = ({ lat = 40.38078, lng = 49.82314, height = "400px" }) => {
  const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <div className="w-full mt-6 ">
      <div className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        <iframe
          src={mapUrl}
          width="100%"
          height={height}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Google Map location"
          title="Google Map"
          className="rounded-3xl"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
