import React from 'react';
import { motion } from 'framer-motion';
import './WorldMap.css';

// Approximate coordinates for cities (percentage-based positioning on the SVG)
const cityCoordinates = {
  'New York': { x: 22, y: 35 },
  'San Francisco': { x: 12, y: 38 },
  'Sydney': { x: 85, y: 75 },
  'Singapore': { x: 72, y: 58 },
};

const WorldMap = ({ locations }) => {
  return (
    <div className="world-map-container">
      <div className="map-wrapper">
        <img src="/world.svg" alt="World Map" className="world-map-svg" />

        {/* Location markers */}
        <div className="map-markers">
          {locations.map((location, index) => {
            const coords = cityCoordinates[location.city];
            if (!coords) return null;

            return (
              <motion.div
                key={location.city}
                className="map-marker"
                style={{
                  left: `${coords.x}%`,
                  top: `${coords.y}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="marker-dot"></div>
                <div className="marker-pulse"></div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Location list */}
      <div className="location-list">
        {locations.map((location, index) => (
          <motion.div
            key={location.city}
            className="location-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <span className="location-city">{location.city}</span>
            <span className="location-value">{location.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorldMap;

