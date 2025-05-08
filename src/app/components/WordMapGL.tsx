"use client";
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";

interface WorldMapGLProps {
  onNavigate: (section: string) => void;
}

const WorldMapGL: React.FC<WorldMapGLProps> = ({ onNavigate }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-118.2437);
  const [lat, setLat] = useState(34.0522);
  const [zoom, setZoom] = useState(2);

  const destinations = {
    about: { label: "About Me", coordinates: [-122.4194, 37.774] }, //SF
    projects: { label: "Projects", coordinates: [-74.006, 40.7128] }, //MN
    socials: { label: "Socials", coordinates: [0.1278, 51.5074] }, // WI
    contact: { label: "Contact", coordinates: [2.3522, 48.8566] }, //Bali
  };

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("move", () => {
      setLng(parseFloat(map.current!.getCenter().lng.toFixed(4)));
      setLat(parseFloat(map.current!.getCenter().lat.toFixed(4)));
      setZoom(parseFloat(map.current!.getZoom().toFixed(2)));
    });

    // Add markers for each destination
    Object.entries(destinations).forEach(([section, data]) => {
      const markerEl = document.createElement("div");
      markerEl.className = "marker";
      markerEl.style.background = getColorForSection(section); // Function to get a color
      markerEl.style.width = "12px";
      markerEl.style.height = "12px";
      markerEl.style.borderRadius = "50%";
      markerEl.style.cursor = "pointer";

      new mapboxgl.Marker(markerEl)
        .setLngLat(data.coordinates as [number, number])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3>${data.label}</h3><p>Click to visit</p>`
          )
        )
        .addTo(map.current!)
        .getElement()
        .addEventListener("click", () => {
          map.current!.flyTo({
            center: data.coordinates,
            zoom: 6,
            essential: true,
          });
          setTimeout(() => onNavigate(section), 1500); // Delay navigation
        });
    });

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [onNavigate]);

  // Helper function to get a color for each section
  const getColorForSection = (section: string) => {
    switch (section) {
      case "about":
        return "#1e88e5"; // Blue
      case "projects":
        return "#43a047"; // Green
      case "socials":
        return "#fdd835"; // Yellow
      case "contact":
        return "#d32f2f"; // Red
      default:
        return "#000";
    }
  };

  return <div ref={mapContainer} style={{ height: "400px", width: "100%" }} />;
};

export default WorldMapGL;
