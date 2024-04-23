import React, { useState, useEffect, useRef } from 'react';
import {characterData as data} from "../data_dnd"

const maxHp = data.characterInfo.hitPointsMax

const HealthBar = ({ maxHealth = maxHp, initialHealth = 100 }) => {
  const [currentHealth, setCurrentHealth] = useState(maxHp);
  const barRef = useRef(null);
  const isDragging = useRef(false);

  // Event handler to start dragging
  const handleMouseDown = () => {
    isDragging.current = true;
  };

  // Event handler to stop dragging
  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Event handler to adjust health during dragging
  const handleMouseMove = (e) => {
    if (isDragging.current && barRef.current) {
      const rect = barRef.current.getBoundingClientRect();
      const relativePosition = e.clientX - rect.left;
      const newHealth = Math.max(
        0,
        Math.min(maxHealth, (relativePosition / rect.width) * maxHealth)
      );
      setCurrentHealth(newHealth);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []); // Ensure these listeners are removed when component unmounts

  return (
    <div
      className="flex w-full health-bar-container bg-stone-700 rounded-full p-1 cursor-pointer"
      onMouseDown={handleMouseDown}
      ref={barRef}
    >
      <div
        className="health-bar bg-stone-400 rounded-full p-2"
        style={{ width: `${(currentHealth / maxHealth) * 100}%` }}
      >
        {Math.round(currentHealth)}
      </div>
    </div>
  );
};

export default HealthBar;
