"use client";
import React, { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Section } from "./types";

interface WorldMapGLProps {
  onNavigate: (section: Section) => void;
  currentDestination: [number, number];
}

interface Destination {
  label: string;
  coordinates: [number, number];
  zoom: number;
}

const WorldMapGL: React.FC<WorldMapGLProps> = ({
  onNavigate,
  currentDestination,
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [markers, setMarkers] = useState<maplibregl.Marker[]>([]);
  const [currentMarker, setCurrentMarker] = useState<maplibregl.Marker | null>(
    null
  );
  const [lng, setLng] = useState(-118.2437);
  const [lat, setLat] = useState(34.0522);
  const [zoom, setZoom] = useState(6);

  const destinations: Record<Section, Destination> = {
    about: { label: "About Me", coordinates: [-118.2437, 34.0522], zoom: 9 },
    projects: { label: "Projects", coordinates: [-93.0913, 44.9545], zoom: 5 },
    socials: { label: "Socials", coordinates: [-89.5745, 44.5178], zoom: 6 },
    contact: { label: "Contact", coordinates: [-123.133, 49.25], zoom: 7 },
  };

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current!,
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution: "© OpenStreetMap contributors",
          },
        },
        layers: [
          {
            id: "osm",
            type: "raster",
            source: "osm",
          },
        ],
      },
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("move", () => {
      setLng(parseFloat(map.current!.getCenter().lng.toFixed(4)));
      setLat(parseFloat(map.current!.getCenter().lat.toFixed(4)));
      setZoom(parseFloat(map.current!.getZoom().toFixed(2)));
    });

    const newMarkers = Object.entries(destinations).map(([section, data]) => {
      const sectionKey = section as Section;
      const el = document.createElement("div");
      el.className = "destination-marker";
      el.style.width = "20px";
      el.style.height = "20px";
      el.style.backgroundColor = "red";
      el.style.borderRadius = "50%";
      el.style.cursor = "pointer";

      const marker = new maplibregl.Marker(el)
        .setLngLat(data.coordinates)
        .addTo(map.current!);

      el.addEventListener("click", () => {
        const bounds = new maplibregl.LngLatBounds()
          .extend(map.current!.getCenter())
          .extend(data.coordinates);

        map.current!.fitBounds(bounds, {
          padding: 50,
          maxZoom: 15,
          duration: 1000,
        });

        setTimeout(() => onNavigate(sectionKey), 500);
      });

      return marker;
    });

    setMarkers(newMarkers);

    const currentEl = document.createElement("div");
    currentEl.className = "current-marker";
    currentEl.style.width = "20px";
    currentEl.style.height = "20px";
    currentEl.style.backgroundColor = "blue";
    currentEl.style.borderRadius = "10%";

    const marker = new maplibregl.Marker(currentEl)
      .setLngLat(currentDestination)
      .addTo(map.current!);

    setCurrentMarker(marker);

    return () => {
      markers.forEach((m) => m.remove());
      if (currentMarker) currentMarker.remove();
      if (map.current) map.current.remove();
    };
  }, []);

  useEffect(() => {
    if (map.current && currentMarker) {
      const bounds = new maplibregl.LngLatBounds()
        .extend(map.current.getCenter())
        .extend(currentDestination);

      map.current.fitBounds(bounds, {
        padding: 20,
        maxZoom: 15,
        minZoom: 1,
      });

      currentMarker.setLngLat(currentDestination);
    }
  }, [currentDestination]);

  return (
    <div
      ref={mapContainer}
      className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] mx-auto rounded-lg overflow-hidden shadow-md"
    />
  );
};

export default WorldMapGL;
