import React from 'react';
import 'tailwindcss/tailwind.css';

const MovingText = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-green-600 text-white py-4">
      <div className="animate-scroll text-center">
        <span className="mx-4">🎉 Innovative Learning Environment</span>
        <span className="mx-4">🎉 Well Equipped Laboratories</span>
        <span className="mx-4">🎉 Dedicated Faculty</span>
        <span className="mx-4">🎉 Holistic Development</span>
        <span className="mx-4">🎉 Modern Facilities</span>
        <span className="mx-4">🎉 Modern Labs</span>
        <span className="mx-4">🎉 Projector </span>

      </div>
    </div>
  );
};

export default MovingText;
