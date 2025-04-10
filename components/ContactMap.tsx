"use client";

import { useEffect, useState } from "react";

export default function ContactMap() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const query = "North+London+Business+Park+N11+1GN";
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}`;

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
      <iframe
        title="Vangard Translation Office Location"
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
