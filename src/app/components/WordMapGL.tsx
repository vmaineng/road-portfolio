"use client";
import React, { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Section } from "./types";

interface WorldMapGLProps {
  onNavigate: (section: Section) => void;
  currentDestination: [number, number];
}

const WorldMapGL: React.FC<WorldMapGLProps> = ({
  onNavigate,
  currentDestination,
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const marker = useRef<maplibregl.Marker | null>(null);
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

    map.current = new maplibregl.Map({
      container: mapContainer.current!,
      style: "https://demotiles.maplibre.org/style.json",
      center: [lng, lat],
      zoom: zoom,
      projection: "globe",
    });

    map.current.on("move", () => {
      setLng(parseFloat(map.current!.getCenter().lng.toFixed(4)));
      setLat(parseFloat(map.current!.getCenter().lat.toFixed(4)));
      setZoom(parseFloat(map.current!.getZoom().toFixed(2)));
    });

    // const markerEl = document.createElement("div");
    // markerEl.className = "safety-pin-marker";
    // markerEl.style.cursor = "pointer";
    // marker.current = new maplibregl.Marker(markerEl)
    //   .setLngLat(currentDestination)
    //   .addTo(map.current);

    Object.entries(destinations).forEach(([section, data]) => {
      const sectionKey = section as Section;
      const el = document.createElement("div");
      el.className = "destination-marker";
      el.style.width = "20px";
      el.style.height = "20px";
      el.style.backgroundColor = "red";
      el.style.borderRadius = "50%";
      el.style.cursor = "pointer";
      marker.current = new maplibregl.Marker(el).setLngLat(currentDestination);

      new maplibregl.Marker(el)
        .setLngLat(data.coordinates as [number, number])
        .addTo(map.current!)
        .getElement()
        .addEventListener("click", () => {
          const bounds = new maplibregl.LngLatBounds()
            .extend(map.current!.getCenter())
            .extend(data.coordinates as [number, number]);

          map.current!.fitBounds(bounds, {
            padding: 10,
            maxZoom: 100,
          });

          setTimeout(() => onNavigate(sectionKey), 500);
        });
    });

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (map.current && marker.current) {
      const bounds = new maplibregl.LngLatBounds()
        .extend(map.current.getCenter())
        .extend(currentDestination);

      map.current.fitBounds(bounds, {
        padding: 50,
        maxZoom: 6,
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
