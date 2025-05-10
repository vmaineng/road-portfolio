"use client";
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";

interface WorldMapGLProps {
  onNavigate: (section: string) => void;
  currentDestination: [number, number];
}

const WorldMapGL: React.FC<WorldMapGLProps> = ({
  onNavigate,
  currentDestination,
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const [lng, setLng] = useState(-118.2437);
  const [lat, setLat] = useState(34.0522);
  const [zoom, setZoom] = useState(2);

  const destinations = {
    about: { label: "About Me", coordinates: [-118.2437, 34.0522] },
    projects: { label: "Projects", coordinates: [-93.0913, 44.9545] },
    socials: { label: "Socials", coordinates: [-89.5745, 44.5178] },
    contact: { label: "Contact", coordinates: [-123.133, 49.25] },
  };

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [0, 0],
      zoom: zoom,
      projection: "globe",
    });

    map.current.on("move", () => {
      setLng(parseFloat(map.current!.getCenter().lng.toFixed(4)));
      setLat(parseFloat(map.current!.getCenter().lat.toFixed(4)));
      setZoom(parseFloat(map.current!.getZoom().toFixed(2)));
    });

    const markerEl = document.createElement("div");
    markerEl.className = "safety-pin-marker";
    markerEl.style.cursor = "pointer";
    marker.current = new mapboxgl.Marker(markerEl)
      .setLngLat(currentDestination)
      .addTo(map.current!);

    marker.current.setLngLat(currentDestination);

    Object.entries(destinations).forEach(([section, data]) => {
      const el = document.createElement("div");
      el.style.position = "absolute";
      el.style.width = "20px";
      el.style.height = "20px";
      el.style.backgroundColor = "transparent";
      el.style.borderRadius = "50%";
      el.style.transform = "translate(-50%, -50%)";
      el.style.cursor = "pointer";
      const [lon, lat] = data.coordinates;
      const pixel = map.current!.project([lon, lat]);
      el.style.left = `${pixel.x}px`;
      el.style.top = `${pixel.y}px`;

      el.addEventListener("click", () => {
        map.current!.flyTo({
          center: data.coordinates as [number, number],
          zoom: 6,
          essential: true,
        });
        setTimeout(() => onNavigate(section), 1500);
      });
      mapContainer.current!.appendChild(el);
    });

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (map.current && marker.current) {
      map.current.flyTo({
        center: currentDestination,
        zoom: 6,
        essential: true,
      });
      marker.current.setLngLat(currentDestination);
    }
  }, [currentDestination]);

  return (
    <div
      ref={mapContainer}
      style={{ height: "400px", width: "100%", position: "relative" }}
    />
  );
};

export default WorldMapGL;
